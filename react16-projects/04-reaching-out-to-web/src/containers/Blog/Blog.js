import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

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
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit', // just an example, doesn't do anything right now
                                search: '?quick-submit=true'  // just an example, doesn't do anything right now
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home Page</h1>} />
                <Route path='/' render={() => <h1>Home Page 2</h1>} /> */}
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' component={NewPost} />
            </div>
        );
    }
}

export default Blog;