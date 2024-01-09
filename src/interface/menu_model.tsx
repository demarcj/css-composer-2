import { ElementModel } from '.';

export type MenuModel = {
  elements: ElementModel[];
  open_about_dialog: () => void;
  show_window: (display: string) => void;
  display_window: {[key: string]: boolean};
}