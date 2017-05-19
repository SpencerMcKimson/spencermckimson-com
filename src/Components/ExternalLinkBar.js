import React, { Component } from 'react';
import { IconButton, FontIcon } from 'material-ui';

const ExternalLinkBar = ({githubUsername, linkedIn}) => {
    return (
        <div className="external-link-bar">
            <IconButton href={"https://github.com/" + githubUsername}>
                <FontIcon className="fa fa-github icon" />
            </IconButton>
            <IconButton href={"https://www.linkedin.com/in/" + linkedIn}>
                <FontIcon className="fa fa-linkedin-square icon" />
            </IconButton>
        </div>
    )
}

export default ExternalLinkBar;