export const FIGURE_DROP_ADD = 'FIGURE_DROP_ADD';
export const FIGURE_SAVE_POSITION = 'FIGURE_SAVE_POSITION';

export function addFigure(figureType, coordinates, boardId) {
    return {
        type: FIGURE_DROP_ADD,
        figureType,
        x: coordinates.x,
        y: coordinates.y,
        boardId
    };
}

export function saveFigurePosition(figureId, x, y) {
    return {
        type: FIGURE_SAVE_POSITION,
        figureId,
        x,
        y
    };
}