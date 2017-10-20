import React, { Component } from 'react';
import { Avatar } from 'material-ui';
import ExternalLinkBar from './ExternalLinkBar';

const Header = ({source_url, name, subHeaderText, children}) => {
    return (
        <div className="Header">
            <Avatar src={source_url} size={200} />
            <h1>{name}</h1>
            <h2>{subHeaderText}</h2>
            <ExternalLinkBar githubUsername="SpencerMcKimson" linkedIn="spencer-mckimson-79bb55a8"/>
        </div>
    )
}

export default Header;