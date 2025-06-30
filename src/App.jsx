import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Index from './pages/Index'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'
import ProjectPage from './pages/ProjectPage'

function App() {
  
    return (
      <>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    )
}

export default App
