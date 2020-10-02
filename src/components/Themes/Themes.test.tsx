import React from 'react';
import { renderWithRedux } from '../../index.test';
import { fireEvent } from '@testing-library/react';
import Themes from './Themes';

describe('Themes component',() => {
    it('renders Themes component', () => {
        const wrapper = renderWithRedux(<Themes />);
        expect(wrapper).toMatchSnapshot();
    });

    it('click on themes button', () => {
        const { getByTestId } = renderWithRedux(<Themes/>);
        fireEvent.click(getByTestId("themes"));
        expect(getByTestId("themes")).toBeTruthy();
    });
});