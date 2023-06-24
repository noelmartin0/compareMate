import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/searchpage");
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Percentage of the element that needs to be in view to trigger the animation
  });

  const transitionVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const transitionConfig = {
    type: "spring",
    damping: 10,
    stiffness: 85,
  };

  return (
    <div className="content">
      {/* <Navbar /> */}
      <HOME>
        <div className="maincontainer">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="heading text"
            >
              Welcome to CompareMate
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="para text"
            >
              CompareMate, a price-comparison web application that utilizes the
              BeautifySoup4 library, ReactJS, and Flask. CompareMate is designed
              to simplify the process of comparing prices for various products
              across different online platforms. By leveraging web scraping
              capabilities, CompareMate extracts product information from
              multiple e-commerce websites. This data is then presented to users
              in a user-friendly interface, allowing them to quickly and easily
              compare prices and make informed purchasing decisions. With
              features such as product search, price comparison, detailed
              product information, favorites saving, user reviews, and user
              authentication. CompareMate aims to provide a seamless and
              efficient user experience. It offers users a comprehensive and
              user-friendly price-comparison platform. This documentation will
              guide you through the various components and functionalities of
              CompareMate, enabling you to understand and contribute to this
              exciting project.
            </motion.p>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              src="homepage.png"
              className="image"
              alt="random-img-here"
            />
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              type="button"
              class="btn btn-outline"
              onClick={handleClick}
            >
              Get Started
            </motion.button>
          </div>
        </div>
        <div className="container-fluid">
          <motion.img
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={transitionVariant}
            transition={transitionConfig}
            className="group"
            src="Group.png"
            alt="random-img-here"
          />
          <div className="rectangle">
            <motion.h1 
            initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{hidden:{ opacity: 0, scale: 0.5 }, visible:{ opacity: 1, scale: 1 },}}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            className="heading subpage">Why CompareMate ?</motion.h1>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{ hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },}}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}>
              CompareMate is a user-friendly web application that significantly
              reduces the time and effort required to find the best price for a
              product. By aggregating and comparing prices from multiple sites,
              CompareMate presents you with a comprehensive overview,
              eliminating the need for manual search and comparison. With its
              intuitive interface and advanced algorithms, CompareMate
              simplifies the shopping experience, enabling you to make informed
              decisions quickly and efficiently. Say goodbye to endless browsing
              and hello to hassle-free price comparisons with CompareMate.
            </motion.p>
          </div>
        </div>
      </HOME>
      <Footer />
    </div>
  );
};

const HOME = styled.section`
  .content {
    scrollbar-color: red yellow;
  }
  .maincontainer {
    background-color: #002b5b;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23002B5B' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23012958' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23022754' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23022551' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2303234d' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2303224a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23042047' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23041e43' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23041c40' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23041a3d' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23041939' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23041736' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23041533' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23041330' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2304112d' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23040e2a' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23030b27' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23020824' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    padding-top: 10rem;
    padding-bottom: 2rem;
    height: 100vh;
  }

  .container {
    height: 100vh;
    position: relative;
  }

  .context {
    margin-top: auto;
    display: inline-block;
    align-items: center;
  }

  p {
    text-align: justify;
    color: #fff;
    font-size: 1.1rem;
  }

  .text {
    max-width: 60%;
  }

  .heading {
    max-width: 80%;
    font-size: 3.5rem;
    margin-bottom: 2%;
    color: aliceblue;
  }

  .heading.subpage {
    max-width: 100%;
    margin-bottom: 4%;
  }

  .image {
    position: absolute;
    top: -5%;
    left: 65%;
    display: inline-block;
    width: 31rem;
    height: 31rem;
  }
  button {
    outline: 1px solid #002b5b;
    margin-top: 2%;
  }

  .btn-outline {
    background-color: #002b5b;
    color: whitesmoke;
    align-self: end;
    padding: 8px;
  }
  .btn-outline:hover {
    background-color: #004799;
    color: #fff;
  }
  .heading2 {
    padding-top: 1rem;
    color: #002b5b;
    text-align: center;
  }
  .container-fluid {
    margin: 0;
    padding: 0;
    height: 100vh;
    position: relative;
  }
  .group {
    position: absolute;
    width: 60.37538rem;
    height: 48.52738rem;
    z-index: 1;
  }
  .rectangle {
    padding-top: 7.31%;
    padding-left: 6%;
    padding-right: 5%;
    position: absolute;
    width: 50vw;
    height: 100vh;
    top: 0;
    right: 0;
    background-color: #002b5b;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23002B5B' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23012958' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23022754' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23022551' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2303234d' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2303224a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23042047' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23041e43' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23041c40' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23041a3d' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23041939' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23041736' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23041533' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23041330' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2304112d' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23040e2a' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23030b27' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23020824' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
`;

export default Home;
