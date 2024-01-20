import { ElementMapModel } from './';

export type StylingStageModel = {
  display_window: {[key: string]: boolean};
  selected_elements: ElementMapModel;
}