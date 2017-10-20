import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class EmploymentHistory extends Component {
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
                  title="Emergency Reporting"
                  actAsExpander={true}
                  showExpandableButton={true}
                />
                <CardTitle title="Software Engineer II, Lead Software Engineer" subtitle="July 2015 to Present" expandable={true} />
                <CardText expandable={true}>
                    <ul>
                        <li>Provide full stack development ​for the web applications; includes creating and maintaining database schemas, building RESTful APIs and backend solutions, and building front end common controls and UI for the customer interaction</li>
                        <li>Work with SQL to architect and implement relational database schemas</li>
                        <li>Architect and implement backend public and private APIs using both Swagger and PHP for third parties as well as our own services to consume</li>
                        <li>Design and implement services to use our public APIs using Node.js to act as a sample for our third party partners to use in implementing their own solutions</li>
                        <li>Design and implement sleek and easy to use UI with both Javascript and React.js</li>
                        <li>Use Test Driven Development to implement clean and maintainable code</li>
                        <li>Continuously push the company to use modern technologies and frameworks through proof of concepts (React.js, Swagger for API code generation, caching data via Redis, etc.)</li>
                        <li>Perform Team Lead duties ensuring efficient production of software for which I am responsible</li>
                        <li>Encourage development of individual and team goals of my teammates</li>
                        <li>Lead sprint review meetings to summarize bi-weekly sprint work for senior leadership</li>
                        <li>Utilize agile methodologies​ to facilitate fast, responsive, efficient software solutions </li>
                        <li>Assist colleagues with code reviews using Github/Stash</li>
                        <li>Interview​ potential future software engineer candidates</li>
                        <li>Lead biweekly development and engineering trainings on various new technologies</li>
                    </ul>
                </CardText>
                <CardActions>
                  <RaisedButton label="Expand" onClick={this.handleExpand} />
                  <RaisedButton label="Reduce" onClick={this.handleReduce} />
                </CardActions>
            </Card>
        );
    }
}

export default EmploymentHistory;