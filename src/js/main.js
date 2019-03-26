import mobHeader from "./header/mobile-header";
import smallHeader from "./header/small-header";
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

const slider = tns({
  container: ".partners__list",
  items: 1,
  slideBy: "page",
  autoplay: true,
  mouseDrag: true,
  controls: false,
  responsive: {
    700: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});
