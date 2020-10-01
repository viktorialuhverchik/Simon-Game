import React from 'react';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';

export const makeTestStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const origDispatch = store.dispatch;
    store.dispatch = jest.fn(origDispatch);
    return store;
};

const renderWithRedux = (
    component: any,
    {
        store = makeTestStore()
    } = {}
) => {
    const Wrapper = ({ children }: any) => {
        return (
            <Provider store={store}>
                { children }
            </Provider>
        );
      };
    return render(component, { wrapper: Wrapper })
};

describe('App component',() => {
    it('renders App component', () => {
        const wrapper = renderWithRedux(<App />);
        expect(wrapper).toBeTruthy();
    });
});

export { renderWithRedux };