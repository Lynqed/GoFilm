import _ from 'lodash';

export const debouncer = (timeout: number) =>
    _.debounce((f) => f(), timeout, { leading: false });