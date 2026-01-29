import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
// import MissionVision from '../components/MissionVision';
import Products from '../components/Products';
import Facilities from '../components/Facilities';
import QualityControl from '../components/QualityControl';
import Projects from '../components/Projects';
import Laboratory from '../components/Laboratory';
// import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Units from '../components/Units';
// import Customers from '../components/Customers';
import QCICertificate from '../components/QCICertificate';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Ready Mix Concrete Manufacturer in Kolkata | Communique Concrete</title>
        <meta name="description" content="Communique Concrete is a leading ready mix concrete manufacturer in Kolkata delivering high-quality RMC across West Bengal with reliable service." />
        <link rel="canonical" href="https://communiqueconcrete.com/" />
      </Helmet>
      <main className="relative">
        {/* Hero Section - Landing page main banner */}
        <Hero />

        {/* Company Information Sections */}
        <About />
        {/* <MissionVision /> */}

        {/* Product and Services Sections */}
        <Products />
        <Facilities />
        <QualityControl />

        {/* Portfolio and Expertise Sections */}
        <Projects />
        <Laboratory />
        {/* <WhyChooseUs /> */}

        {/* Manufacturing Units Section */}
        <Units />

        {/* Customers Section */}
        {/* <Customers /> */}

        {/* QCI Certificate Section */}
        <QCICertificate />

        {/* Contact Information Section */}
        <Contact />
      </main>
    </>
  );
};

export default HomePage;