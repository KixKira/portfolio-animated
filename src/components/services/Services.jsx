import { useRef } from 'react';
import './services.scss'
import { useInView, motion } from 'framer-motion';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const scrollToContactMe = () => {
    const contactMeSection = document.getElementById("Contact");
    contactMeSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Custom Web Development</h2>
          <p>
            Crafting bespoke websites to meet your unique needs. From design to
            implementation, we ensure your online presence is effective and
            appealing.
          </p>
          <button onClick={scrollToContactMe}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Intuitive User Interface Design</h2>
          <p>
            Focusing on creating user-friendly and visually appealing
            interfaces. We design each element with precision to ensure a
            seamless and satisfying experience for your users.
          </p>
          <button onClick={scrollToContactMe}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Performance Optimization</h2>
          <p>
            Enhancing the speed and performance of your website through advanced
            optimization techniques. From image compression to code
            optimization, we ensure your site loads quickly and operates
            seamlessly.
          </p>
          <button onClick={scrollToContactMe}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Digital Strategy Consulting</h2>
          <p>
            Assisting you in developing a robust digital strategy to achieve
            your business goals. From identifying opportunities to implementing
            effective tactics, we guide you on the path to online success.
          </p>
          <button onClick={scrollToContactMe}>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services