import React from 'react';
import { mount } from 'vitest-utils';
import Input from '../Input';

describe('Input component', () => {
  const name = 'inputValue';

  it('renders without crashing', () => {
    mount(<Input name={name} />);
  });

  it('saves input value to local storage', () => {
    const wrapper = mount(<Input name={name} />);
    const input = wrapper.find('input');

    const event = { target: { value: 'test' } };
    input.simulate('change', event);

    const savedValue = localStorage.getItem(name);
    expect(savedValue).toEqual('test');
  });

  it('loads input value from local storage', () => {
    localStorage.setItem(name, 'test');

    const wrapper = mount(<Input name={name} />);
    const input = wrapper.find('input');

    expect(input.prop('value')).toEqual('test');
  });
});
