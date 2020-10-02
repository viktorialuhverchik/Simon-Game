import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import App from './App';
import { rootReducer } from './redux/reducers/rootReducer';

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

test('should renders App component', () => {
    const wrapper = renderWithRedux(<App />);
    expect(wrapper).toBeTruthy();
});

export { renderWithRedux };