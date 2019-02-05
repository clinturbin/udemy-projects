import React from 'react';
import { mount } from 'enzyme';
// shallow renders an instance of the app component without its children
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the textarea', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment'}
        });
        wrapped.update();
    })
    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    
    it('when form is submitted, textarea gets emptied', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});