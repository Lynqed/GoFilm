export interface ICommonProps {
    end: boolean
    start: boolean
}

export enum TypeGroup {
    main = 'main',
    project = 'project'
}

export interface IHistoryItem {
    sliderId: number;
    group: TypeGroup
    key: number;
}

export interface ISliderItem {
    id: number,
    group: TypeGroup
    component: React.MemoExoticComponent<React.ComponentType<ICommonProps>>
}
