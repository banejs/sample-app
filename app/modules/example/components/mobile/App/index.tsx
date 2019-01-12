import React, { Component, ReactNode } from 'react';

import About from 'app/modules/example/components/common/About';

interface AppPropTypes {}

interface AppStateTypes {}

export default class App extends Component<AppPropTypes, AppStateTypes> {
    public render(): ReactNode {
        return (
            <div className="App">
                <h1 className="App__title">
                    This is mobile component
                </h1>

                <About/>
            </div>
        );
    }
}
