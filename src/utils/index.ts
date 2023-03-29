import _ from 'lodash';

import SlideFive from '../page/SlideFive';
import SlideFour from '../page/SlideFour';
import VariantA from '../page/SlideOne';
import SlideSix from '../page/SlideSix';
import SlideThree, { latestProjectsId } from '../page/SlideThree';
import SlideTwo from '../page/SlideTwo';


import ProjectSliderOne from '../page/Project/SlideOne';
import ProjectSliderTwo, { imagesSliderList } from '../page/Project/SlideTwo';
import ProjectSliderThree from '../page/Project/SlideThree';

import { ISliderItem, TypeGroup } from '../types';

export const debouncer = (timeout: number) =>
    _.debounce((f) => f(), timeout, { leading: false });

export const getSliderById = (id: number) => {
    const chechGroup = (sliders: ISliderItem[]) => {
        const index = sliders.findIndex((v) => v.id === id)
        if (index !== -1) {
            return {
                index: index,
                item: sliders[index],
                last: sliders.length - 1 === index,
                first: index === 0,
                data: sliders
            }
        }
    }
    const item = [chechGroup(mainSliders), chechGroup(projectSliders)].find(v => v)
    return item
}

export const mainSliders: ISliderItem[] = [{
    id: 0,
    component: VariantA,
    group: TypeGroup.main,
}, {
    id: 1,
    component: SlideTwo,
    group: TypeGroup.main

}, {
    id: 2,
    component: SlideThree,
    group: TypeGroup.main,
    scrollElementId: latestProjectsId

}, {
    id: 3,
    component: SlideFour,
    group: TypeGroup.main

}, {
    id: 4,
    component: SlideFive,
    group: TypeGroup.main

}, {
    id: 5,
    component: SlideSix,
    group: TypeGroup.main
}]

export const projectSliders: ISliderItem[] = [{
    id: 6,
    component: ProjectSliderOne,
    group: TypeGroup.project
}, {
    id: 7,
    component: ProjectSliderTwo,
    group: TypeGroup.project,
    scrollElementId: imagesSliderList
}, {
    id: 8,
    component: ProjectSliderThree,
    group: TypeGroup.project
}]