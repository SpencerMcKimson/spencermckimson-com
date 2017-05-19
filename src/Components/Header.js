import React, { Component } from 'react';
import { Avatar } from 'material-ui';

const Header = ({source_url, name, subHeaderText, children}) => {
    return (
        <div className="Header">
            <Avatar src={source_url} size={200} />
            <h1>{name}</h1>
            <h2>{subHeaderText}</h2>
        </div>
    )
}

export default Header;