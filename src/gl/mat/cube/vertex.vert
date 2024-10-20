#define MPI 3.1415926535897932384626433832795

uniform float u_time;
varying vec2 v_uv;

uniform float u_color;
uniform float u_speed;
uniform float u_size;

varying vec3 v_view;
varying vec3 v_normal;


void main() {
  vec3 pos = position;

  pos.xyz *= u_size;

  vec4 transformed = modelViewMatrix * vec4(position, 1.0);
  v_view = normalize(- transformed.xyz);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv;
  v_normal = normalize(normalMatrix * normal);
  // v_normal = normal;
}
