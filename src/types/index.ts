export interface ICommonProps {
  end: boolean;
  start: boolean;
  goTo: (id: number) => any;
  value?: IHistoryItem;
}
export enum VideoLinks {
  A1Beton = "https://firebasestorage.googleapis.com/v0/b/gofilm-dev.appspot.com/o/GoFilm%2FLongVideo%2FBetonVideo.mp4?alt=media&token=f24e9343-8fd6-4743-b856-85e3e8ecef10",
  WeetterSkip = "https://firebasestorage.googleapis.com/v0/b/gofilm-dev.appspot.com/o/GoFilm%2FLongVideo%2FWettSkip.mp4?alt=media&token=a784b289-4c03-4eb8-8beb-d5a1434b534f",
  Luna = "https://firebasestorage.googleapis.com/v0/b/gofilm-dev.appspot.com/o/GoFilm%2FLongVideo%2FLuna.mp4?alt=media&token=2ad43799-a269-4ff4-806a-9af6c0f3baf2",
  Lee = "https://firebasestorage.googleapis.com/v0/b/gofilm-dev.appspot.com/o/GoFilm%2FLongVideo%2FLee.mp4?alt=media&token=ac8246f9-e1ce-4776-a421-6347cfd09871",
  Henry = "https://firebasestorage.googleapis.com/v0/b/gofilm-dev.appspot.com/o/GoFilm%2FLongVideo%2FHenry.mp4?alt=media&token=38107101-dffa-4d87-9ada-3c3cc8f4a06e",
}
export enum ShortVideoLinks {
  A1 = "https://firebasestorage.googleapis.com/v0/b/gofilm-dev.appspot.com/o/GoFilm%2FShortVideo%2FA1.mp4?alt=media&token=2f3b5178-088d-486d-9d2d-f9ed7697bb16",
  WeetterSkip = "https://firebasestorage.googleapis.com/v0/b/gofilm-dev.appspot.com/o/GoFilm%2FShortVideo%2FWetterskip.mp4?alt=media&token=384d6b44-8a90-4c12-9868-381e15d2e316",
  Luna = "https://firebasestorage.googleapis.com/v0/b/gofilm-dev.appspot.com/o/GoFilm%2FShortVideo%2FYoungla.mp4?alt=media&token=cbe4ba35-b923-4867-992c-9b68e000ca8f",
  Lee = "https://firebasestorage.googleapis.com/v0/b/gofilm-dev.appspot.com/o/GoFilm%2FShortVideo%2FLeeu.mp4?alt=media&token=7f6680d1-e52e-4bd9-aefb-d356a3a9e089",
  Henry = "https://firebasestorage.googleapis.com/v0/b/gofilm-dev.appspot.com/o/GoFilm%2FShortVideo%2FHenry.mp4?alt=media&token=729fba86-96c5-43cd-be3e-84547b3b8fee",
}

export interface IProjectSlide {
  id: string;
  projectName: string;
  video: string;
  title: string;
  aboutProject: string;
  photo: string[];
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
  value?: IProjectSlide;
}

export interface ISliderItem {
  id: number;
  group: TypeGroup;
  scrollElementId?: string;

  component: React.MemoExoticComponent<React.ComponentType<ICommonProps>>;
}
