import React, { Component, ReactElement } from 'react';

type PropType = {};

type StateType = {};

export default class App extends Component<PropType, StateType> {
    public render(): ReactElement<any> {
        return (
            <div className="App">
                Hello, world!
            </div>
        );
    }
}
