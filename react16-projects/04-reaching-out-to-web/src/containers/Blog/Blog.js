import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
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
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/' component={Posts} />
                    {/* <Route path='/:id' exact component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;