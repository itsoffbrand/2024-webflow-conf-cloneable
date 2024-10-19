import {
  Group,
  MeshNormalMaterial,
  PlaneGeometry,
  Mesh,
  BoxGeometry,
} from "three";

import { DomNode } from "./domNode.js";
import Material from "./mat/cube";

export class DomCube extends DomNode {
  constructor(item) {
    super(item);

    this.item = item;
  }

  create() {
    console.log();
    this.mesh = new Mesh(
      app.gl.scene.assets.cube.children[0].geometry,
      new Material()
    );

    this.mesh.scale.set(0.2, 0.2, 0.2);

    this.initGui();
    this.add(this.mesh);
  }

  initGui() {
    this.folder = gui.addFolder("Cube");
    this.control = {};

    for (const key in this.item.dataset) {
      if (key.substring(0, 3) === "gui") {
        // console.log("gui", key, this.item.dataset[key]);
        this.control[key] = +this.item.dataset[key];
        this.folder.add(this.control, key, 0, 1, 0.01);
      }
    }

    console.log("cube", this.control);
    // this.mesh.material.uniforms.u_speed = { value: this.control.guiSpeed };
    this.mesh.material.uniforms.u_color = { value: this.control.guiColor };
    this.mesh.material.uniforms.u_size = { value: this.control.guiSize };
  }

  matchDom({ width, height, top, left, ww, wh }) {
    this.position.set(left - ww / 2 + width / 2, -top + wh / 2 - height / 2, 1);
  }

  render(t) {
    this.rotation.y = t;
    this.rotation.x = t;
    this.rotation.z = t;

    // this.mesh.material.uniforms.u_speed.value = this.control.guiSpeed;
    this.mesh.material.uniforms.u_color.value = this.control.guiColor;
    this.mesh.material.uniforms.u_size.value = this.control.guiSize;
  }
}
