import {connect} from 'react-redux';
import LayoutComponent from '../components/Layout';
import {addFigure} from '../actions';

const mapStateToProps = (state) => {
    return {
        layout: state.layout
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddFigure: (figureType, coordinates) => dispatch(addFigure(figureType, coordinates))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutComponent);