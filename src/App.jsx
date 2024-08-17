import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero,Navbar, Tech,Works, StarsCanvas, FloatingFollowButton, Resume} from "./components"
import ReactGA from 'react-ga';


const App = () => {
  ReactGA.initialize('G-V0G1JKRXC8');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      
      <About />
      <Resume />
      <Experience />
      <Tech />
      

      <Works />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <FloatingFollowButton />
        <StarsCanvas />
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App
