export interface ICommonProps {
  end: boolean;
  start: boolean;
  goTo: (id: number) => any;
  value?: IHistoryItem;
}
export enum VideoLinks {
  A1Beton = "https://firebasestorage.googleapis.com/v0/b/gofilm-website.appspot.com/o/LongVideo%2FBetonVideo.mp4?alt=media&token=93d0f005-a928-4c40-a134-5860dd391df6",
  WeetterSkip = "https://firebasestorage.googleapis.com/v0/b/gofilm-website.appspot.com/o/LongVideo%2FWettSkip.mp4?alt=media&token=a0e9aeef-0e5c-4b3b-9cb0-06bed07e26e6",
  Luna = "https://firebasestorage.googleapis.com/v0/b/gofilm-website.appspot.com/o/LongVideo%2FLuna.mp4?alt=media&token=949826bc-f418-42b3-bf3d-7eb6905ec24c",
  Lee = "https://firebasestorage.googleapis.com/v0/b/gofilm-website.appspot.com/o/LongVideo%2FLee.mp4?alt=media&token=65734b98-7735-4cf1-bef8-a717c43a0f5a",
  Henry = "https://firebasestorage.googleapis.com/v0/b/gofilm-website.appspot.com/o/LongVideo%2FHenry.mp4?alt=media&token=ce3486a2-abd8-4aa5-907b-81d117ee8b44",
}
export enum ShortVideoLinks {
  A1 = "https://firebasestorage.googleapis.com/v0/b/gofilm-website.appspot.com/o/ShortVideo%2FA1%20(1).mp4?alt=media&token=e7e2189b-3be9-42ed-a94c-c80789c997be",
  WeetterSkip = "https://firebasestorage.googleapis.com/v0/b/gofilm-website.appspot.com/o/ShortVideo%2FWetterskip.mp4?alt=media&token=b8ed6407-c717-480a-ae4a-721ec0bb53dd",
  Luna = "https://firebasestorage.googleapis.com/v0/b/gofilm-website.appspot.com/o/ShortVideo%2FYoungla.mp4?alt=media&token=7255f887-b055-41ba-b413-fcde22fa42aa",
  Lee = "https://firebasestorage.googleapis.com/v0/b/gofilm-website.appspot.com/o/ShortVideo%2FLeeu.mp4?alt=media&token=b94d4047-e07e-4a39-a96a-df9cef1fe15c",
  Henry = "https://firebasestorage.googleapis.com/v0/b/gofilm-website.appspot.com/o/ShortVideo%2FHenry%20(1).mp4?alt=media&token=32c42728-d4f2-4fca-b1e0-f25c4a779cb5",
}

export interface IProjectSlide {
  id: string;
  projectName: string;
  video: string;
  title: string;
  aboutProject: string;
  photo: string[];
  aboutVideo: string;
  poster?: string;
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
