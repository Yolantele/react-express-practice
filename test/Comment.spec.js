import React from 'react';
import Comment from '../src/components/Comment';


describe('Comment item', () => {
  const wrapper = shallow(<Comment />);

  it('is of type <li>', () => {
    expect(wrapper.type()).to.eql('li');
  });
});
