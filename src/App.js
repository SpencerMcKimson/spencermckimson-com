import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Section from './Components/Section';
import TechnicalSkills from './Components/TechnicalSkills';
import EmploymentHistory from './Components/EmploymentHistory';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header source_url="https://github.com/SpencerMcKimson.png?size=200" name="Spencer McKimson" subHeaderText="FullStack Software Engineer & Lead Software Engineer"/>
          <Section>
            Here is my about me
          </Section>
          <TechnicalSkills />
          <EmploymentHistory />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
