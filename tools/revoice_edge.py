"""Re-voice every narration in audio/ with a free Microsoft Indian-English neural voice (no account or key).
Rewrites audio/<id>.mp3 and the sentence timings in audio/narration.json from the voice's own sentence
boundaries, so the captions stay exactly in sync.

    py tools/revoice_edge.py                          Prabhat (en-IN, male)
    py tools/revoice_edge.py --voice en-IN-NeerjaNeural
    py tools/revoice_edge.py --rate +5%              a little faster
Requires: py -m pip install --user edge-tts
"""
import asyncio, json, sys
from pathlib import Path
import edge_tts

AUDIO = Path(__file__).resolve().parent.parent / "audio"
args = sys.argv[1:]
def arg(name, default):
    return args[args.index(name) + 1] if name in args else default
VOICE = arg("--voice", "en-IN-PrabhatNeural")
RATE = arg("--rate", "+0%")


async def voice_one(sentences):
    comm = edge_tts.Communicate(" ".join(sentences), VOICE, rate=RATE, boundary="SentenceBoundary")
    audio, starts, end = bytearray(), [], 0.0
    async for chunk in comm.stream():
        if chunk["type"] == "audio":
            audio += chunk["data"]
        elif chunk["type"] in ("SentenceBoundary", "WordBoundary"):
            s = chunk["offset"] / 1e7
            starts.append(s)
            end = max(end, s + chunk["duration"] / 1e7)
    return bytes(audio), starts, end


async def main():
    manifest_path = AUDIO / "narration.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    for nid, item in manifest.items():
        sentences = [c["text"] for c in item["cues"]]
        print(f"{nid}...", end=" ", flush=True)
        audio, starts, end = await voice_one(sentences)
        (AUDIO / f"{nid}.mp3").write_bytes(audio)
        if len(starts) != len(sentences):  # the voice split sentences differently: spread by length instead
            total = sum(len(s) for s in sentences)
            at, starts = 0.1, []
            for s in sentences:
                starts.append(at)
                at += len(s) / total * max(end - 0.3, 1)
        item["cues"] = [{"t": round(t, 2), "text": s} for t, s in zip(starts, sentences)]
        item["duration"] = round(end + 0.3, 2)
        print(f"{item['duration']}s")
    manifest_path.write_text(json.dumps(manifest, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Done with {VOICE}.")

asyncio.run(main())
