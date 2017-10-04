import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Components/Header';
import ExternalLinkBar from './Components/ExternalLinkBar';
import Footer from './Components/Footer';
import Section from './Components/Section';
import TechnicalSkills from './Components/TechnicalSkills';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header source_url="https://github.com/SpencerMcKimson.png?size=200" name="Spencer McKimson" subHeaderText="FullStack Sofware Developer & Software Development Lead at Emergency Reporting"/>
          <ExternalLinkBar githubUsername="SpencerMcKimson" linkedIn="spencer-mckimson-79bb55a8"/>
          <Section>
            Here is my about me
          </Section>
          <TechnicalSkills />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
