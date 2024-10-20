import {
  Group,
  MeshNormalMaterial,
  PlaneGeometry,
  Mesh,
  BoxGeometry,
  ShaderMaterial,
} from "three";

import { DomNode } from "./domNode.js";

import Material from "./mat/plane";

export class Plane extends DomNode {
  constructor(item) {
    super(item);

    this.item = item;
    this.item.style.border = "0px solid transparent";
  }

  initGui() {
    // console.log(this.item.dataset);

    this.folder = gui.addFolder("Plane");
    this.control = {};

    for (const key in this.item.dataset) {
      if (key.substring(0, 3) === "gui") {
        // console.log("gui", key, this.item.dataset[key]);

        this.control[key] = +this.item.dataset[key];
        this.folder.add(this.control, key, 0, 1, 0.01);
      }
    }

    console.log("plane", this.control);
    this.mesh.material.uniforms.u_speed = { value: 0.1 };
    this.mesh.material.uniforms.u_color1 = { value: 0.1 };
    this.mesh.material.uniforms.u_color2 = { value: 0.1 };
  }

  create() {
    this.mesh = new Mesh(new PlaneGeometry(1, 1), new Material());

    this.initGui();
    this.add(this.mesh);
  }

  matchDom({ width, height, top, left, ww, wh }) {
    this.scale.set(width, height, width);
    this.position.set(left - ww / 2 + width / 2, -top + wh / 2 - height / 2, 0);
  }

  render(t) {
    // this.rotation.y = t;
    // this.rotation.x = t;
    // this.rotation.z = t;
    // console.log(t);

    this.mesh.material.uniforms.u_speed.value = this.control.guiSpeed;
    this.mesh.material.uniforms.u_color1.value = this.control.guiColor1;
    this.mesh.material.uniforms.u_color2.value = this.control.guiColor2;
  }
}
