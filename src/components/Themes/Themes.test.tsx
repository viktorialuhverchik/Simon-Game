import React from 'react';
import { renderWithRedux } from '../../index.test';
import Themes from './Themes';
import { fireEvent } from '@testing-library/react';

describe('Themes component',() => {
    it('renders Themes component', () => {
        const wrapper = renderWithRedux(<Themes />);
        expect(wrapper).toMatchSnapshot();
    });

    it('click on themes', () => {
        const { getByTestId } = renderWithRedux(<Themes/>);
        fireEvent.click(getByTestId("themes"));
        expect(getByTestId("themes")).toBeTruthy();
    });
});