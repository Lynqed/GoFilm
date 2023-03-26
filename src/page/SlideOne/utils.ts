export const moveBlockId = 'move-block-id';

export const step = 2;
export const max = 100 + step;

export const interpolation = (
    current: number,
    start: number,
    end: number,
    max: number,
    min: number
) => {
    const interpolation = ((current - start) * (min - max)) / (end - start) + max;
    return interpolation;
};

export const elementWidth = 100;

export const screenWidth = () => {
    return window.innerWidth;
};

export const defaultPosition = () => {
    return screenWidth() - elementWidth;
};

export const animationSpeed = 10;
export const animationStep = 20;