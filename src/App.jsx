import { library } from '@fortawesome/fontawesome-svg-core'
import './index.css';

import StickyNavbar from './components/StickyNavbar'
import { Projects }  from './components/Projects';
import ScrollToBtn from './components/ScrollTopBtn'
import Skills from './components/Skills'
import Hero from './components/Hero';

// import your icons
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/Footer';


function App() {
  return (
    <div className='bg-black ' >
      <StickyNavbar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
      <ScrollToBtn />
    </div>
  )
}

export default App;
library.add(fab, fas, far)