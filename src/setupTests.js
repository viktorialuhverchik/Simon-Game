import React from 'react';
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

React.useLayoutEffect = React.useEffect;
