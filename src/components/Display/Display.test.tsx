import React from 'react';
import { renderWithRedux } from '../../index.test';
import Display from './Display';

describe('Display component',() => {
    it('renders Display component', () => {
        const wrapper = renderWithRedux(<Display />);
        expect(wrapper).toMatchSnapshot();
    });
});