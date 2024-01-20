import {ElementMapModel, ElementModel } from './';

export type MainModel = {
  elements: ElementMapModel;
  selected_elements: ElementMapModel;
  select_elements: (elements: ElementModel) => void;
}