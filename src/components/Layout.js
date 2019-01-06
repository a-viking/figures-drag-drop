import React from 'react';
import Figure from './Figure';
import PropTypes from 'prop-types';

const Layout = (props) => {
    const {boardId} = props.match.params;

    function handleDragover(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        const figureType = e.dataTransfer.getData('text');
        props.handleAddFigure(figureType, {x: e.clientX, y: e.clientY}, boardId);
        e.dataTransfer.clearData();
    }

    const figures = props.layout.filter(fig => fig.boardId === boardId).map(figure => {
        return <Figure key={'fig_' + figure.id} {...figure} savePosition={props.saveFigurePosition}/>;
    });

    return (
        <div className="layout" onDrop={handleDrop} onDragOver={handleDragover}>
            {figures}
        </div>
    );
}

Layout.propTypes = {
    match: PropTypes.any,
    handleAddFigure: PropTypes.func,
    saveFigurePosition: PropTypes.func,
    layout: PropTypes.array,
};

export default Layout;