import {connect} from 'react-redux';
import LayoutComponent from '../components/Layout';
import {addFigure, saveFigurePosition} from '../actions';

const mapStateToProps = (state) => {
    return {
        layout: state.layout
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddFigure: (figureType, coordinates, boardId) => 
                                dispatch(addFigure(figureType, coordinates, boardId)),
        saveFigurePosition: (figureId, x, y) => dispatch(saveFigurePosition(figureId, x, y))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutComponent);