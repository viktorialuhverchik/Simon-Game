import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

Enzyme.configure({ adapter: new Adapter() });

React.useLayoutEffect = React.useEffect;
