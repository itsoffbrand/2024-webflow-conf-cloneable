import { Scene } from "three";
import { Quad } from "./_quad.js";
import { DomNode } from "./domNode.js";

import { DomCube } from "./cube.js";
import { Plane } from "./plane.js";

import { loadAssets } from "./util/loader.js";

export default class extends Scene {
  constructor(vp, {} = {}) {
    super();
    this.vp = vp;

    queueMicrotask(() => this.create());
  }

  async create() {
    await this.load();
    const items = [...document.querySelectorAll("[data-item]")];

    // console.log(items[1]);
    this.cube = new DomCube(items[1]);

    this.plane = new Plane(items[0]);

    // this.items = items.map((item) => new DomNode(item));
    // this.add(...this.items);

    this.add(this.cube, this.plane);
  }

  async load() {
    this.assets = await loadAssets();
    console.log(this.assets);
  }

  render(t) {
    // if (this.quad) this.quad.render(t);

    this.children.forEach((child) => {
      if (child.render) child.render(t);
    });
  }

  resize(vp) {
    this.vp = vp;
  }
}
