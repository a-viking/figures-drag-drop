import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Test from '../components/Test';
import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';

const AppRouter = () => {
    return (
        <Router>
            <>
                <Route component={Header} />
                <Route component={LeftPanel} />
                <Route exact path='/' render={() => <Redirect to='/board/1' />}/>
                <Route path='/board/:boardId' component={Test} />
            </>
        </Router>
    );
}

export default AppRouter;