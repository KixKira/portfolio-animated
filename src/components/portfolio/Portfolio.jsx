import { useRef } from 'react';
import './portfolio.scss'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import eazyroof from '/eazyroof.png'
import soundAdvisors from '/soundadvisors.png'
import simultaneoEstudio from '/simultaneo.png'
import studio23 from '/studio23.png'
import radomUserGenerator from '/random.png'
import lpsOperaciones from '/lps.png'
import growersTechnology from '/growers.png'
import muyMalaMia from '/muy.png'
import glassWood from '/gwlogo.jpg'
import venemergencia from '/venemergencia.png'
import colegioSanIgnacio from '/csi.png'

const items = [
  {
    id: 1,
    title: "EazyRoof",
    img: eazyroof,
    desc: "Revolutionize your roofing experience with EazyRoof. Seamlessly browse roofing options, estimate costs, and schedule services, all in one user-friendly platform.",
    tech: "React.js, Node.js, MongoDB, Express.js, RESTful API, Bootstrap, AWS S3.",
    link: "https://eazyroof.com/"
  },
  {
    id: 2,
    title: "Sound Advisors",
    img: soundAdvisors,
    desc: "Immerse yourself in the world of sound investments with Sound Advisors. Explore financial strategies, personalized consultations, and dynamic market insights for a harmonious approach to wealth management.",
    tech: "WordPress, PHP, JavaScript, HTML5, CSS3, Bootstrap, MySQL.",
    link: "https://soundadvisors.cl/"
  },
  {
    id: 3,
    title: "Simultaneo Estudio",
    img: simultaneoEstudio,
    desc: "Elevate your learning experience with Simultaneo Estudio. Access a diverse range of courses, engage with interactive materials, and embrace a seamless educational journey.",
    tech: "Django, Python, HTML5, CSS3, JavaScript, PostgreSQL, Bootstrap.",
    link: "https://simultaneoestudio.com/"
  },
  {
    id: 4,
    title: "Studio23",
    img: studio23,
    desc: "Unleash your creativity at Studio23. An innovative platform for artists to showcase their work, connect with fellow creatives, and explore a vibrant community of diverse artistic expressions.",
    tech: "React.js, Node.js, MongoDB, Express.js, RESTful API, Firebase Authentication, CSS3.",
    link: "https://studio23.netlify.app/"
  },
  {
    id: 5,
    title: "Random User Generator",
    img: radomUserGenerator,
    desc: "Embark on a journey of serendipity with Random User Generator. Instantly create unique user profiles for testing and design purposes, making development more efficient and delightful.",
    tech: "React.js, JavaScript, RESTful API, Axios, HTML5, CSS3, Bootstrap.",
    link: "https://randomusergene.netlify.app/"
  },
  {
    id: 6,
    title: "LPS Operaciones",
    img: lpsOperaciones,
    desc: "Optimize logistics seamlessly with LPS Operaciones. From real-time tracking to efficient resource management, empower your operations for maximum productivity and reliability in the supply chain.",
    tech: "WordPress, PHP, JavaScript, HTML5, CSS3, MySQL.",
    link: "https://lpsoperaciones.com/"
  },
  {
    id: 7,
    title: "Growers Technology",
    img: growersTechnology,
    desc: "Explore the future of agriculture technology at Growers Technology. From precision farming to smart solutions, we cultivate innovation to empower farmers and elevate agricultural practices.",
    tech: "WordPress, PHP, JavaScript, HTML5, CSS3, Bootstrap, MySQL.",
    link: "http://growerstechnology.cl/"
  },
  {
    id: 8,
    title: "Muy Mala Mia",
    img: muyMalaMia,
    desc: "Indulge your culinary passions at Muy Mala Mia. Discover delectable recipes, culinary inspirations, and a feast for the senses, making every meal an exquisite culinary adventure.",
    tech: "WordPress, PHP, JavaScript, HTML5, CSS3, Bootstrap, MySQL.",
    link: "https://muymalamia.com/"
  },
  {
    id: 9,
    title: "Glass & Wood",
    img: glassWood,
    desc: "Experience the artistry of glass at Glasswood. Our bespoke glass creations blend craftsmanship with design, transforming spaces into captivating reflections of elegance and innovation.",
    tech: "WordPress, PHP, JavaScript, HTML5, CSS3, Bootstrap, MySQL.",
    link: "https://glasswood.cl/"
  },
  {
    id: 10,
    title: "Venemergencia",
    img: venemergencia,
    desc: "VenEmergencia streamlines emergency response by connecting users to local services with real-time geolocation. Its responsive design ensures swift assistance in critical situations.",
    tech: "Node.js, MongoDB, Responsive Design.",
    link: "https://venemergencia.com/"
  },
  {
    id: 11,
    title: "Colegio San Ignacio - Venemergencia",
    img: colegioSanIgnacio,
    desc: "CSI by VenEmergencia empowers community health workers, enhancing healthcare accessibility. Manage patient data seamlessly, prioritize visits, and track health indicators for informed decision-making.",
    tech: "React, Node.js, MongoDB, REST API, Material-UI.",
    link: "https://csi.venemergencia.com/informacion/"
  },
];

const Single = ({ item }) => {
    const ref = useRef();  
    const { scrollYProgress } = useScroll({
      target: ref,
    });  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <p>{item.tech}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>See Demo</button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
}

export default Portfolio