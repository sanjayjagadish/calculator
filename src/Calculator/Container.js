import React, { useState } from 'react';
import Result from './Result';
import Keypad from './Keypad';

function Calculator() {

    return (
        <div className="App">
            <div className="top">
                <h1>basic calculator</h1>
                <Result />
                <Keypad />
            </div>
        </div>
    );

}

export default Calculator;
