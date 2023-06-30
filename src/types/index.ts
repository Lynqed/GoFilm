export interface ICommonProps {
  end: boolean;
  start: boolean;
  goTo: (id: number) => any;
  value?: IHistoryItem;
}
export enum VideoLinks {
  A1Beton = "https://firebasestorage.googleapis.com/v0/b/gofilm-ad430.appspot.com/o/BetonVideo.mp4?alt=media&token=5001f0ea-d495-485b-9929-24f61ca1d915",
  Wette = "https://firebasestorage.googleapis.com/v0/b/gofilm-bf134.appspot.com/o/WettSkip.mp4?alt=media&token=9aa252e8-fa99-45a9-b25f-0c6b6a21c7e9",
  Luna = "https://firebasestorage.googleapis.com/v0/b/gofilm-bf134.appspot.com/o/Luna.mp4?alt=media&token=61004802-2b72-4936-ab42-0e4d6e5f8bb4",
  Lee = "https://firebasestorage.googleapis.com/v0/b/gofilm-bf134.appspot.com/o/Lee.mp4?alt=media&token=9fa51d37-8bc7-4da5-87ef-31fd96ef8e81",
  Henry = "https://firebasestorage.googleapis.com/v0/b/gofilm-bf134.appspot.com/o/Henry.mp4?alt=media&token=ceefc16a-db5a-469d-a176-e5549c539d75",
}
export enum ShortVideoLinks {
  A1 = "https://firebasestorage.googleapis.com/v0/b/gofilm-bf134.appspot.com/o/ShortVideo%2FA1.mp4?alt=media&token=65fe00f4-68a6-4435-94c5-b925eb1f6473",
  WeetterSkip = "https://firebasestorage.googleapis.com/v0/b/gofilm-bf134.appspot.com/o/ShortVideo%2FWetterskip.mp4?alt=media&token=44f56732-6aee-4291-be4a-cf83346b29e4",
  Luna = "https://firebasestorage.googleapis.com/v0/b/gofilm-bf134.appspot.com/o/ShortVideo%2FLuna.mp4?alt=media&token=8d4fb152-816a-4c5e-b7da-9d39278ee86e",
  Lee = "https://firebasestorage.googleapis.com/v0/b/gofilm-bf134.appspot.com/o/ShortVideo%2FLee.mp4?alt=media&token=de78ec36-c976-409d-bf9a-dca78e0cc622",
  Henry = "https://firebasestorage.googleapis.com/v0/b/gofilm-bf134.appspot.com/o/ShortVideo%2FHenry.mp4?alt=media&token=0c245670-6a5d-46d9-974b-187c775453b9",
}

export interface IProjectSlide {
  id: number;
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
