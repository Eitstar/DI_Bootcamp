// import logo from './logo.svg';
// import './App.css';


import React from 'react';
import { BuggyComponent } from './BuggyComponent';
import { ErrorBoundary } from './ErrorBoundary';

function App() {
    return ( < div >

        <
        ErrorBoundary >
        <
        p > These components are inside the same error boundary.If one crashes, the error boundary will replace both of them. < /p> <
        BuggyComponent / >
        <
        BuggyComponent / >
        <
        /ErrorBoundary> <
        hr / >
        <
        p > These two counters are each inside of their own error boundary.So
        if one crashes, the other is not affected. < /p> <
        ErrorBoundary > < BuggyComponent / > < /ErrorBoundary> <
        ErrorBoundary > < BuggyComponent / > < /ErrorBoundary> < /
        div >
    );
}
export default App;