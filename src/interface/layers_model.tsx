import { ElementMapModel, ElementModel } from "./";

export type LayersModel = {
  elements: ElementMapModel;
  display_window: {[key: string]: boolean};
  select_elements: (elements: ElementModel) => void;
}