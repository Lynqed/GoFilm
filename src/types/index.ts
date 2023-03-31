export interface ICommonProps {
  end: boolean;
  start: boolean;
  goTo: (id: number) => any;
}

export enum TypeGroup {
  main = "main",
  project = "project",
  about = "about",
}

export interface IHistoryItem {
  sliderId: number;
  group: TypeGroup;
  key: number;
}

export interface ISliderItem {
  id: number;
  group: TypeGroup;
  scrollElementId?: string;
  component: React.MemoExoticComponent<React.ComponentType<ICommonProps>>;
}
