let ctx: AudioContext | null = null;

function ac(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  return ctx;
}

function blip(freq: number, dur: number, type: OscillatorType, gain: number) {
  const audio = ac();
  if (!audio) return;
  if (audio.state === "suspended") void audio.resume();
  const t = audio.currentTime;
  const osc = audio.createOscillator();
  const g = audio.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g);
  g.connect(audio.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

export function playHover(on: boolean) {
  if (!on) return;
  blip(880, 0.04, "triangle", 0.03);
}

export function playSelect(on: boolean) {
  if (!on) return;
  blip(220, 0.12, "sine", 0.05);
}
