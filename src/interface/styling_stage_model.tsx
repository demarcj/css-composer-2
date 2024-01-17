import { ElementModel } from './';

export type StylingStageModel = {
  display_window: {[key: string]: boolean};
  selected_element: ElementModel;
}