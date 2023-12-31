import Sidebar from '../sidebar/Sidebar';
import './navbar.scss'
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          KixKira Dev
        </motion.span>
        <div className="social">
          <a href="https://github.com/KixKira" target="_blank" rel="noreferrer">
            <img src="/GitHub.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/kixkira/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/LinkedIn.png" alt="" />
          </a>
          <a
            href="https://www.buymeacoffee.com/KixKira"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/coffee-cup.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;