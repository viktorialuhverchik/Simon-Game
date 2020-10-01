import React from 'react';
import App from './App';
import { renderWithRedux } from './index.test';

describe('App component',() => {
    it('should render App component', () => {
        const wrapper = renderWithRedux(<App/>);
        expect(wrapper).toMatchSnapshot();
    });
});
