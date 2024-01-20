export type ElementMapModel = {
  [key: string]: ElementModel;
}

export type ElementModel = {
  order: number;
  id: string;
  class: string;
  style: any[];
  text: string;
}