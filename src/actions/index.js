export const FIGURE_DROP_ADD = 'FIGURE_DROP_ADD';

export function addFigure(figureType, coordinates, boardId) {
    return {
        type: FIGURE_DROP_ADD,
        figureType,
        x: coordinates.x,
        y: coordinates.y,
        boardId
    };
}