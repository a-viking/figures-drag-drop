export const FIGURE_DROP_ADD = 'FIGURE_DROP_ADD';

export function addFigure(figureType, coordinates) {
    return {
        type: FIGURE_DROP_ADD,
        figureType,
        coordinates
    };
}