import React from 'react';
import { mount } from 'enzyme';
// shallow renders an instance of the app component without its children
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});