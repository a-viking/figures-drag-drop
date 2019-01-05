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
        
        default:
            return state;
    }
}

export default layout;