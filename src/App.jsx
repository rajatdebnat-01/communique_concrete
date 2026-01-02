import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsAndCondition';
import HomePage from './pages/HomePage';



function App() {
  return (
    <>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <div className="relative">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default App