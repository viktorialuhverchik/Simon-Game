import React from 'react';
import { renderWithRedux } from '../../index.test';
import Display from './Display';

describe('Settings component',() => {
    it('renders Game component', () => {
        const wrapper = renderWithRedux(<Display />);
        expect(wrapper).toMatchSnapshot();
    });
});