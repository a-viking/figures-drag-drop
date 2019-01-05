import React from 'react';

const Layout = ({match}) => {
    console.log(match.params.boardId);
    function handleDragover(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
    }

    return (
        <div className="layout" onDrop={handleDrop} onDragOver={handleDragover}>
            
        </div>
    );
}

export default Layout;