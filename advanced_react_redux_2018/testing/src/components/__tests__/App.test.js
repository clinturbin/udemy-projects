import React from 'react';
import { shallow } from 'enzyme';
// shallow renders an instance of the app component without its children
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('shows a comment box', () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find(CommentList).length).toEqual(1);
});