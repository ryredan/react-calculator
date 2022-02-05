import React from "react";
import Screen from './Screen';
import Keypad from "./Keypad";
class Calculator extends React.Component {
    render() {
        return (
        <div className="frame">
            <Screen />
            <Keypad />
        </div>
        );
    }
}

export default Calculator;