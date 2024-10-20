uniform float u_time;
// uniform sampler2D u_t1; vec4 img = texture2D(u_t1, v_uv);

varying vec2 v_uv;
varying vec3 v_view;
varying vec3 v_normal;

uniform sampler2D u_mtc1; 
uniform sampler2D u_mtc2; 

uniform float u_color;

void main() {

  vec3 x = normalize( vec3(v_view.z, 0., -v_view.x));
  vec3 y = cross(v_view, x);
  vec2 fakeUv = vec2( dot(x, v_normal), dot(y, v_normal)) * .495 + .5;

  vec3 img1 = texture2D(u_mtc1, fakeUv).rgb;
  vec3 img2 = texture2D(u_mtc2, fakeUv).rgb;

  vec3 color = mix(img2, img1, u_color);


  gl_FragColor.rgb = vec3(color);
  gl_FragColor.a = 1.;
  // gl_FragColor = vec4(1., 0., 0., 1.);
}
