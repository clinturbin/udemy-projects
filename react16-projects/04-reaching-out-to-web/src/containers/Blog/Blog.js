import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');  // Dynamic Import syntax - only imported when this function is executed
})

class Blog extends Component {
    state = {
        auth: true // should default to false until authenitcated, setting it to true for lazy loading lecture
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to='/posts/' 
                                exact
                                activeClassName='my-active'
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* Switch tells react to only load one of the routes */}
                {/* The first route that matches a given path will be loaded, it won't render any other route */}
                <Switch>
                    {/* {this.state.auth ? <Route path='/new-post' component={NewPost} /> : null} */}
                    {this.state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null}
                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1>Not Found</h1>}/>  {/* This route will catch any routes that aren't handled prior */}
                    {/* <Redirect from="/" to="/posts"/> 
                        This is also a catch all so it won't work with the above Not Found Route
                    */}
                </Switch>
            </div>
        );
    }
}

export default Blog;