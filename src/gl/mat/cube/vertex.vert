#define MPI 3.1415926535897932384626433832795

uniform float u_time;
varying vec2 v_uv;

uniform float u_color;
uniform float u_speed;
uniform float u_size;


void main() {
  vec3 pos = position;

  pos.xyz *= u_size;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv;
}
