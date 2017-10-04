import React, { Component } from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {FontIcon} from 'material-ui';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const maleIcon = <FontIcon className="fa fa-male" />;
const codeIcon = <FontIcon className="fa fa-code" />;
const capIcon = <FontIcon className="fa fa-graduation-cap" />;
const idIcon = <FontIcon className="fa <fa-building></fa-building>" />
const nearbyIcon = <IconLocationOn />;

class Footer extends Component {
    state = {
        selectedIndex: 0
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                    label="About Me"
                    icon={maleIcon}
                    onClick={() => this.select(0)}
                />
                <BottomNavigationItem
                    label="Technical Experience"
                    icon={codeIcon}
                    onClick={() => this.select(1)}
                />
                <BottomNavigationItem
                    label="Employment History"
                    icon={idIcon}
                    onClick={() => this.select(2)}
                />
                <BottomNavigationItem
                    label="Education"
                    icon={capIcon}
                    onClick={() => this.select(3)}
                />      
            </BottomNavigation>
        );
    }
}

export default Footer;