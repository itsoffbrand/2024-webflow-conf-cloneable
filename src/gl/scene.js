import { Scene } from "three";
import { Quad } from "./_quad.js";
import { DomNode } from "./domNode.js";

export default class extends Scene {
  constructor(vp, {} = {}) {
    super();
    this.vp = vp;

    queueMicrotask(() => this.create());
  }

  create() {
    const items = [...document.querySelectorAll("[data-item]")];

    this.items = items.map((item) => new DomNode(item));
    this.add(...this.items);

    // this.quad = new Quad();
    // this.add(this.quad);
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
