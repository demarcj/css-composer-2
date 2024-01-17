import { ElementModel } from './';

export type MainModel = {
  elements: ElementModel[];
  select_element: (element: ElementModel) => void;
}