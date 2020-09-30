import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './redux/reducers/rootReducer';
import { render } from 'enzyme';
import thunk from 'redux-thunk';

export const makeTestStore = () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
    const origDispatch = store.dispatch;
    store.dispatch = jest.fn(origDispatch);
    return store;
};

const renderWithRedux = (
    component: any,
    {
        store = makeTestStore(),
        ...renderOptions
    } = {}
) => {
    const Wrapper = ({ children }: any) => {
        return (
            <Provider store={store}>
                { children }
            </Provider>
        );
      };
    return render(component, { wrapper: Wrapper, ...renderOptions })
};

const store = makeTestStore();

test('renders learn react link', () => {
    const wrapper = renderWithRedux(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(wrapper).toBeTruthy();
});

export { renderWithRedux };