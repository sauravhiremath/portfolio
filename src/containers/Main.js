import './Main.css';
import React, { Suspense, Component } from 'react';
import { StyleProvider } from '../contexts/StyleContext';
import Loading from '../containers/loading/Loading';

const Header = React.lazy(() => import('../components/header/Header'));
const Greeting = React.lazy(() => import('./greeting/Greeting'));
const Skills = React.lazy(() => import('./skills/Skills'));
const WorkExperience = React.lazy(() => import('./workExperience/WorkExperience'));
const Projects = React.lazy(() => import('./projects/Projects'));
const Achievement = React.lazy(() => import('./achievement/Achievement'));
const Blogs = React.lazy(() => import('./blogs/Blogs'));
const Contact = React.lazy(() => import('./contact/Contact'));
const Footer = React.lazy(() => import('../components/footer/Footer'));
const Talks = React.lazy(() => import('./talks/Talks'));
const Top = React.lazy(() => import('./topbutton/Top'));
const Twitter = React.lazy(() => import('./twitter-embed/twitter'));

export default class Main extends Component {
  state = {
    isDark: false
  };

  componentDidMount() {
    const darkPref = window.matchMedia('(prefers-color-scheme: dark)');
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState(prevState => {
      return { isDark: !prevState.isDark };
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? 'dark-mode' : null}>
        <StyleProvider value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}>
          <Suspense fallback={<Loading />}>
            <Header />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Greeting />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Skills />
            <Projects />
            <WorkExperience />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Contact />
            <Suspense fallback={<Loading />}>
              <Footer />
            </Suspense>
            <Top />
          </Suspense>
        </StyleProvider>
      </div>
    );
  }
}
