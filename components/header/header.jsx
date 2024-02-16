import React from 'react';
import './Header.css';

/**
 * Define Header, a React component of Project 4, Problem 3.
 */
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container Header"><div className="header">Group 5 Web App</div>
                <div className="gradient"></div>
        <div className="button">
            <button type="button"><a href="getting-started.html">getting-started.html</a></button>
            <button type="button"><a href="p2.html">p2.html</a></button>
            <button type="button"><a href="p4.html">p4.html</a></button>
            <button type="button"><a href="p5.html">p5.html</a></button>
        </div></div>
        );
    }
}

export default Header;