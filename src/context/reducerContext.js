import React from 'react';

const ReducerContext = React.createContext({
    state: {},
    dispatch: () => {},
});

ReducerContext.displayName = 'ReducerContext'; ////dot. debuggowania

export default ReducerContext;