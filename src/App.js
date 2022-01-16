import GlobalStyle from "./globalStyles"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Theme"
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import WorkPage from './components/WorkPage'
import MySkillsPage from './components/MySkillPage'
import Projects from './components/Projects'
import "./App.css"
import 'animate.css';
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import SoundBar from "./subComponents/SoundBar"

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence initial={true}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/work" component={WorkPage} />
            <Route exact path="/skills" component={MySkillsPage} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/" component={Main} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default App

