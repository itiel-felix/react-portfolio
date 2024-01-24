import React from "react";
import './custom.css';

const Toolbar = () => {
    return (
        <div className="toolbar-container centered-container">
            <div className="toolbar-links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Toolbar;