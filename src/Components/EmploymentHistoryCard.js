import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class EmploymentHistoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }
    
    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
    };

    handleExpand = () => {
        this.setState({expanded: true});
    };

    handleReduce = () => {
        this.setState({expanded: false});
    };

    render() {
        return (
            <Card className="Section" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                  title={this.props.employer}
                  actAsExpander={true}
                  showExpandableButton={true}
                />
                <CardTitle title={this.props.jobTitle} subtitle={this.props.duration} expandable={true} />
                <CardText expandable={true}>
                    {this.props.children}
                </CardText>
                <CardActions>
                  <RaisedButton label="Expand" onClick={this.handleExpand} />
                  <RaisedButton label="Reduce" onClick={this.handleReduce} />
                </CardActions>
            </Card>
        );
    }
}

export default EmploymentHistoryCard;