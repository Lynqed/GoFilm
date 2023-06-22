export interface ICommonProps {
  end: boolean;
  start: boolean;
  goTo: (id: number) => any;
}

export interface OneSlideValue {
  projectName: string;
  video: string;
}
export interface TwoSlideValue {
  title: string;
  aboutProject: string;
  photo: string[];
}
export interface ThreeSlideValue {
  aboutVideo: string;
}

export enum TypeGroup {
  main = "main",
  project = "project",
  about = "about",
}

export interface IHistoryItem {
  sliderId: number;
  group: TypeGroup;
  key: number | string;
  value?: OneSlideValue | TwoSlideValue | ThreeSlideValue;
}

export interface ISliderItem {
  id: number;
  group: TypeGroup;
  scrollElementId?: string;

  component: React.MemoExoticComponent<React.ComponentType<ICommonProps>>;
}
