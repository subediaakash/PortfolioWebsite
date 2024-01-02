import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Footer from "./Components/Footer";
import { motion } from "framer-motion";

const App = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="bg-[##121610]"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <motion.div variants={fadeInVariants}>
        <Navbar />
      </motion.div>
      <motion.div variants={fadeInVariants}>
        <Home />
      </motion.div>
      <motion.div variants={fadeInVariants}>
        <Skills />
      </motion.div>
      <motion.div variants={fadeInVariants}>
        <Works />
      </motion.div>
      <motion.div variants={fadeInVariants}>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default App;
