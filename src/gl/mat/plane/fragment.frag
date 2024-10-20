uniform float u_time;
// uniform sampler2D u_t1; vec4 img = texture2D(u_t1, v_uv);

varying vec2 v_uv;
// varying vec3 vPosition;

uniform float u_speed;
uniform float u_color1;
uniform float u_color2;



const vec3 col_red = vec3(1, 0.21176470588235294, 0.2235294117647059);
const vec3 col_yellow = vec3(0.7254901960784313, 1, 0.21176470588235294);
const vec3 col_blue = vec3(0.2784313725490196, 0.26666666666666666, 0.49019607843137253);
const vec3 col_brown = vec3(0.6274509803921569, 0.17254901960784313, 0.3803921568627451);



void main() {



  float vert_grad = smoothstep(0.0, 1., v_uv.y);

  vec3 col1 = mix(col_red, col_blue, u_color1);
  vec3 col2 = mix(col_yellow, col_brown, u_color2);

  vec3 color = mix(col1, col2, 1. - vert_grad);

  gl_FragColor.rgb = vec3(color);
  gl_FragColor.a = 1.;
  // gl_FragColor = vec4(1., 0., 0., 1.);
}
