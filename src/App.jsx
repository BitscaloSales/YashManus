import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AmazonConnect from './pages/AmazonConnect'
import MicrosoftDynamics from './pages/MicrosoftDynamics'
import Migrations from './pages/Migrations'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/amazon-connect" element={<AmazonConnect />} />
            <Route path="/microsoft-dynamics" element={<MicrosoftDynamics />} />
            <Route path="/migrations" element={<Migrations />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

