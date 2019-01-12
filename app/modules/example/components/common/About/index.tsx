import React, { Component, ReactNode } from 'react';

interface AboutPropTypes {}

interface AboutStateTypes {}

export default class About extends Component<AboutPropTypes, AboutStateTypes> {
    public render(): ReactNode {
        return (
            <div className="About">
                Author: Anton Drobot
            </div>
        );
    }
}
