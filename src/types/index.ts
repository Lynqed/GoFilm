export interface ICommonProps {
  end: boolean;
  start: boolean;
  goTo: (id: number) => any;
  value?: IHistoryItem;
}
export enum VideoLinks {
  A1Beton = "https://firebasestorage.googleapis.com/v0/b/go-film-c2535.appspot.com/o/BetonVideo.mp4?alt=media&token=05f0ec66-aafc-44cf-ae70-40c5a34e1515",
  Wette = "https://firebasestorage.googleapis.com/v0/b/go-film-c2535.appspot.com/o/WettSkip.mp4?alt=media&token=ed553c60-4f9f-44f3-9499-02ef8da30db2",
  Luna = "https://firebasestorage.googleapis.com/v0/b/go-film-c2535.appspot.com/o/Luna.mp4?alt=media&token=08914346-c614-4e3f-b779-6583b973be01",
  Lee = "https://firebasestorage.googleapis.com/v0/b/go-film-c2535.appspot.com/o/Lee.mp4?alt=media&token=227f8682-468d-417f-87da-e1ff62caeb8e",
  Henry = "https://firebasestorage.googleapis.com/v0/b/go-film-c2535.appspot.com/o/Henry.mp4?alt=media&token=731eb8d7-20db-4256-9009-bc2434bbf8f4",
}
export enum ShortVideoLinks {
  A1 = "https://firebasestorage.googleapis.com/v0/b/go-film-c2535.appspot.com/o/ShortVideo%2FA1.mp4?alt=media&token=5315a6e6-0de4-42b7-b5a3-d264452e9d0f",
  WeetterSkip = "https://firebasestorage.googleapis.com/v0/b/go-film-c2535.appspot.com/o/ShortVideo%2FWetterskip.mp4?alt=media&token=9f3783ed-57ab-4e30-ae67-70bf5d6426bd",
  Luna = "https://firebasestorage.googleapis.com/v0/b/go-film-c2535.appspot.com/o/ShortVideo%2FYoungla.mp4?alt=media&token=117b3d88-8eb1-43bf-bc61-cf103098a7a1",
  Lee = "https://firebasestorage.googleapis.com/v0/b/go-film-c2535.appspot.com/o/ShortVideo%2FLeeu.mp4?alt=media&token=c3b63801-e9a9-405c-8e10-dc34902b46e9",
  Henry = "https://firebasestorage.googleapis.com/v0/b/go-film-c2535.appspot.com/o/ShortVideo%2FHenry.mp4?alt=media&token=361e5e0d-16ea-4c85-8df2-ff974ebcdcb1",
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
