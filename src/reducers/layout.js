const layout = (state = [], action) => {
    switch(action.type) {
        case 'FIGURE_DROP_ADD':
            return [
                ...state,
                {
                    type: action.figureType,
                    boardId: action.boardId,
                    x: action.x,
                    y: action.y,
                    id: state.length + 1,
                }
            ];
        
        case 'FIGURE_SAVE_POSITION':
            return state.map(figure => {
                return figure.id === action.figureId ? {...figure, x: action.x, y: action.y} : figure;
            });
        
        default:
            return state;
    }
}

export default layout;