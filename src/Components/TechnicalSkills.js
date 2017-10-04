import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 20,
  margin: 5,
  flex: 1,
  textAlign: 'center',
  display: 'inline-block',
};

const skills = [
    'PHP',
    'PHPUnit',
    'Using Swagger to Auto Generate RESTful APIs',
    'Microsoft SQL Server',
    'Agile/SCRUM methodologies',
    'Javascript/JQuery',
    'PHPStorm ',
    'React.js ',
    'Karma/QUnit ',
    'HTML ',
    'CSS ',
    'Building RESTful APIs interacting via AJAX ',
    'SQL Server Management Studio and RedGate Tools',
    'Git/SmartGit ',
    'Grunt Build Automation and Build Tasks ',
    'Windows, OS X',
    'Unix/Linux/Ubuntu',
    'ElasticSearch',
    'LogStash',
    'Kibana ',
    'Visual Studio',
    'XML',
];

const skillsOnPaper = () => {
    return (
        skills.map((skill) => {
            return <Paper style={style} zDepth={2}>
                <div>{skill}</div>
                </Paper>;
        })
    );
}

const TechnicalSkills = ({children}) => {
    return (
        <div className="Section">
            {skillsOnPaper()}
        </div>
    );
}

export default TechnicalSkills;