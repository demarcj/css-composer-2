import { ElementModel } from "./";

export type LayersModel = {
  elements: ElementModel[];
  display_window: {[key: string]: boolean};
}