import React, { Component } from 'react';
// class component
export default class FirstComponent extends Component {
    render() {
        return (
            <div className="firstComponent">
                First Component
            </div>
        );
    }
}

export class SecondComponent extends Component {
    render() {
        return (
            <div className="secondComponent">
                Second Component
            </div>
        );
    }
}