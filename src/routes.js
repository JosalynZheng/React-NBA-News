import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import NewsArticles from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index';
import NewsMain from './components/Articles/News/Main/index';
import VideosMain from './components/Articles/Videos/Main/index';
import SignIn from './components/signin/signin';
import Dashboard from './components/Dashboard/dashboard.js';

const Routes = (props) => {
        return(
            <Layout user={props.user}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/news" exact component={NewsMain}/>
                    <Route path="/articles/:id" exact component={NewsArticles}/>
                    <Route path="/videos/:id" exact component={VideoArticle}/>
                    <Route path="/videos" exact component={VideosMain}/>
                    <Route path="/sign-in" exact component={SignIn}/>
                    <Route path="/dashboard" exact component={Dashboard}/>
                </Switch>
            </Layout>
            
        )
}

export default Routes;