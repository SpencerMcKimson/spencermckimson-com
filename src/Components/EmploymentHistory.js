import React from 'react';
import EmploymentHistoryCard from './EmploymentHistoryCard'

const EmploymentHistory = () => {
    return (
        <div>
            <EmploymentHistoryCard employer='Emergency Reporting' jobTitle='Software Engineer II, Lead Software Engineer' duration='July 2015 to Present'>
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
            </EmploymentHistoryCard>
            <EmploymentHistoryCard employer='Faithlife' jobTitle='Software Tester' duration='August 2013 to July 2015'>
                <ul>
                    <li>Created and implemented various test cases and scripts ​to uncover, identify and document various problems with the software</li>
                    <li>Provide coverage on all parts of the code base​ by performing regression testing, acceptance testing, black and white box testing methodologies, and system testing</li>
                    <li>Regularly interact with customers​ to identify potential issues with the software as well as to provide customer support; mostly done through online forums and email</li>
                    <li>Provided product design reviews​ for media sold within the software for the graphic designers</li>
                    <li>Developed C#​ code for certain parts of the software; this included working with existing APIs and web calls to gather data and improve the software</li>
                    <li>Led instruction seminars​ on how to use the software with various departments in the company, including Customer Service and Tech Support</li>
                    <li>Use various tools​ such as Fiddler to track down web calls that are failing and to identify internal service failures</li>
                    <li>Examine program logs, system logs, and stack traces​ to track down various issues</li>
                </ul>
            </EmploymentHistoryCard>
        </div>
    );
}

export default EmploymentHistory;