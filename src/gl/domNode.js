import {
  Group,
  MeshNormalMaterial,
  PlaneGeometry,
  Mesh,
  BoxGeometry,
} from "three";
import { clientRectGl } from "../util/clientRect.js";

export class DomNode extends Group {
  constructor(item) {
    super();
    // console.log({ item });
    this.item = item;

    this.create();
    this.#matchDom();
  }

  create() {
    this.mesh = new Mesh(new PlaneGeometry(1, 1), new MeshNormalMaterial());
    this.add(this.mesh);
  }

  #matchDom() {
    const bounds = clientRectGl(this.item);
    this.matchDom(bounds);
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
  }
}
