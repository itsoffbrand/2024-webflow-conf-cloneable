import "./style/main.css";

import { Dom } from "./modules/dom";
import { Viewport } from "./modules/viewport";
import { Scroll } from "./modules/scroll";
import Gl from "./gl/gl";
import gsap from "./gsap";

class App {
  constructor() {
    this.body = document.querySelector("body");
    this.viewport = new Viewport();

    this.time = 0;

    this.init();
  }

  init() {
    this.scroll = new Scroll();
    this.dom = new Dom();
    this.gl = Gl;

    this.initEvents();

    gsap.ticker.add((t) => this.render(t));
    this.render();
  }

  initEvents() {
    // prettier-ignore
    new ResizeObserver((entry) => this.resize(entry[0])).observe(this.body);
  }

  resize({ contentRect }) {
    this.viewport?.resize();
    this.dom?.resize();
  }

  render(t) {
    this.scroll?.render(t * 1000); // if gsap * 1000
    this.dom?.render();
    this.gl?.render();
    // this.gl?.render(this.scroll.y);
  }

  /* Events */
}

window.app = new App();
