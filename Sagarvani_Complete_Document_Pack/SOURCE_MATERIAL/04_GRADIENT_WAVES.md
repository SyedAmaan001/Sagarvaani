# GRADIENT WAVES — SHADER SECTION SPEC

## Role

A second WebGL visual section based on a raymarched/plasma-like rolling wave field.

## Technology

- React + TypeScript.
- `ogl`.
- WebGL2.
- GLSL 300 ES.

Install:

```bash
npm i ogl
```

## API

```ts
type GradientWavesDetail = "low" | "medium" | "high";

interface GradientWavesProps {
  horizonColor?: string;
  waveColor?: string;
  crestColor?: string;
  speed?: number;
  amplitude?: number;
  waveScale?: number;
  waveRatio?: number;
  swell?: number;
  turbulence?: number;
  tilt?: number;
  zoom?: number;
  height?: number;
  fogDepth?: number;
  detail?: GradientWavesDetail;
  brightness?: number;
  opacity?: number;
  mouseInteraction?: boolean;
  parallaxStrength?: number;
  grain?: boolean;
  grainIntensity?: number;
  className?: string;
}
```

## Reference defaults

```text
horizonColor    #5227FF
waveColor       #FF9FFC
crestColor      #FFFFFF

speed           0.4
amplitude       2.5
waveScale       0.6
waveRatio       0.9
swell           35
turbulence      20

tilt            1.11
zoom            1.0
height          5.5
fogDepth        15

detail          medium
brightness      1.0
opacity         1.0

mouseInteraction true
parallaxStrength 0.5

grain           true
grainIntensity  0.05
```

## Detail quality

Map raymarch steps:

```text
low    40
medium 70
high   110
```

## Shader architecture

Use a fullscreen triangle from OGL:

```ts
const geometry = new Triangle(gl);
```

Renderer:

```ts
new Renderer({
  webgl: 2,
  alpha: true,
  premultipliedAlpha: true,
  antialias: false,
  dpr: Math.min(window.devicePixelRatio || 1, 2)
});
```

## Uniforms

Required uniforms:

```text
iTime
iResolution

uSpeed
uAmplitude
uWaveScale
uWaveRatio
uSwell
uTurbulence
uTilt
uZoom
uHeight
uFogDepth
uSteps

uBrightness
uOpacity

uGrain
uGrainIntensity

uMouse
uParallax
uEnableMouse

uHorizonColor
uWaveColor
uCrestColor
```

## Core plasma equation

Frequency:

```glsl
vec2 freq = vec2(
  uWaveScale / 7.0,
  (uWaveScale * uWaveRatio) / 3.0
);
```

Time controls:

```glsl
float T = iTime * uSpeed;

vec4 tc = vec4(
  T / 0.130,
  T / 0.810,
  T / 0.200,
  T / 0.710
);
```

The plasma field uses:

```glsl
mx = r.x + tc.x;
mx += uSwell * sin((r.y + mx) / 20.0 + tc.y);

my = r.y - tc.z;
my += uTurbulence * cos(r.x / 23.0 + tc.w);

surface = r.z
  - (
      sin(mx * freq.x) * uAmplitude
      + sin(my * freq.y) * uAmplitude
      + uHeight
    );
```

## Raymarch

Reference loop:

- up to 128 iterations,
- stop once `i >= uSteps`,
- stop when absolute scene distance < 0.1,
- advance by `0.9 * sceneDistance`,
- return a very large distance after exceeding `MAX_DIST = 20000`.

## Camera

Reference camera:

```text
cam = (0, 0, 30)
```

Build the ray from normalized screen coordinates.

Apply:

1. FOV / radial pitch.
2. azimuthal rotation.
3. `uTilt`.
4. optional mouse yaw/pitch parallax.

Mouse parallax:

```glsl
float yaw = (uMouse.x - 0.5) * uParallax * 0.4;
float pitch = (uMouse.y - 0.5) * uParallax * 0.4;
```

## Coloring

After raymarch hit:

```glsl
float t = clamp(uFogDepth / max(dist, 0.001), 0.0, 1.0);

vec3 body = mix(
  uWaveColor,
  uCrestColor,
  clamp(pos.z * 0.08 + 0.5, 0.0, 1.0)
);

vec3 col = mix(uHorizonColor, body, t);

col *= uBrightness;
col = clamp(col, 0.0, 1.0);
```

Alpha:

```glsl
float alpha = clamp(t, 0.0, 1.0) * uOpacity;
```

Optional grain modifies alpha subtly.

## Mouse behavior

Pointer coordinates are normalized to `[0,1]`.

On pointer leave, target returns to center:

```text
0.5, 0.5
```

Smooth current mouse toward target using ~0.05 interpolation factor per frame.

## Performance behavior

This reference contains important visibility optimizations.

Use:

- `IntersectionObserver` to animate only while the component is intersecting.
- `document.visibilitychange` to pause when the browser tab is hidden.
- `ResizeObserver` for size changes.
- DPR cap at 2.
- WebGL context cleanup with `WEBGL_lose_context` where supported.

## Acceptance criteria

- Looks like a distant rolling digital ocean/wave horizon.
- Foreground crests brighten relative to distant haze.
- Pointer creates only subtle camera drift.
- Animation stops when the section is offscreen or the page is hidden.
- Different detail settings materially alter quality/performance.
