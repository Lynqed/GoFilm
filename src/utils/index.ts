import _ from 'lodash';

import SlideFive from '../page/SlideFive';
import SlideFour from '../page/SlideFour';
import VariantA from '../page/SlideOne';
import SlideSix from '../page/SlideSix';
import SlideThree from '../page/SlideThree';
import SlideTwo from '../page/SlideTwo';
import { ICommonProps, ISliderItem, TypeGroup } from '../types';

export const debouncer = (timeout: number) =>
    _.debounce((f) => f(), timeout, { leading: false });

export const getSliderById = (id: number) => {
    const mainIndex = mainSliders.findIndex((v) => v.id === id)
    if (mainIndex !== -1) {
        return {
            index: mainIndex,
            item: mainSliders[mainIndex],
            last: mainSliders.length + 1 === mainIndex,
            first: mainSliders[0].id === mainIndex,
            data: mainSliders
        }
    }
    const projectIndex = projectSliders.findIndex((v) => v.id === id)
    if (projectIndex !== -1) {
        return {
            index: projectIndex,
            item: projectSliders[projectIndex],
            last: projectSliders.length + 1 === projectIndex,
            first: projectSliders[0].id === projectIndex,
            data:projectSliders
        }
    }
    return null
}

export const mainSliders: ISliderItem[] = [{
    id: 0,
    component: VariantA,
    group: TypeGroup.main
}, {
    id: 1,
    component: SlideTwo,
    group: TypeGroup.main

}, {
    id: 2,
    component: SlideThree,
    group: TypeGroup.main

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

export const projectSliders: ISliderItem[] = []