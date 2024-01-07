import { ElementModel } from '.';

export type MenuModel = {
  elements: ElementModel[];
  show_window: (display: string) => void;
  display_window: {[key: string]: boolean};
}