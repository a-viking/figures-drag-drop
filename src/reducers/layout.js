const initialState = [
    {
        type: 'circle',
        x: 1,
        y: 2,
        id: 1
    }
];

const layout = (state = initialState, action) => {
    switch(action.type) {
        case 'FIGURE_DROP_ADD':
            console.log(action.figureType);
            console.log(action.coordinates);
            return [
                ...state,
                {
                    type: action.figureType,
                    x: action.coordinates.x,
                    y: action.coordinates.y,
                    id: state.length + 1
                }
            ];
        
        default:
            return state;
    }
}

export default layout;