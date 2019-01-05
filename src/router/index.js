import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Layout from '../components/Layout';
import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';

const AppRouter = () => {
    return (
        <Router>
            <Header>
                <Route component={LeftPanel} />
                <Route exact path='/' render={() => <Redirect to='/board/1' />}/>
                <Route path='/board/:boardId' component={Layout} />
            </Header>
        </Router>
    );
}

export default AppRouter;