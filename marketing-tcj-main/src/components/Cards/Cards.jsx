import React, { useEffect, useRef } from "react";
import Img1 from "../../assets/icon/1.jpg"; // Replace with actual images as needed
import Img2 from "../../assets/icon/2.jpg";
import Img3 from "../../assets/icon/3.jpg";
import { slideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Cards = () => {
  const canvasRef = useRef(null);
  const starCanvasRef = useRef(null); // New ref for star canvas
  const darkOrangeStarCanvasRef = useRef(null); // Ref for dark orange star canvas

  // Function to create animated canvas effect
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = 150; // Increased particle count for denser effect

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: "rgba(169, 169, 169, 0.5)", // Gray color
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.y += particle.speed;
        if (particle.y > canvas.height) particle.y = 0; // Reset to top
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  };

  // Function to create starry canvas effect
  const drawStarCanvas = () => {
    const starCanvas = starCanvasRef.current;
    const ctx = starCanvas.getContext("2d");
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;

    const stars = 100; // Number of stars
    for (let i = 0; i < stars; i++) {
      const x = Math.random() * starCanvas.width;
      const y = Math.random() * starCanvas.height;
      const radius = Math.random() * 2 + 1;
      const color = "rgba(255, 255, 255, 0.8)"; // Star color

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
  };

  // Function to create dark orange star canvas effect
  const drawDarkOrangeStarCanvas = () => {
    const darkOrangeStarCanvas = darkOrangeStarCanvasRef.current;
    const ctx = darkOrangeStarCanvas.getContext("2d");
    darkOrangeStarCanvas.width = window.innerWidth;
    darkOrangeStarCanvas.height = window.innerHeight;

    const stars = 50; // Number of dark orange stars
    for (let i = 0; i < stars; i++) {
      const x = Math.random() * darkOrangeStarCanvas.width;
      const y = Math.random() * darkOrangeStarCanvas.height;
      const radius = Math.random() * 2 + 1;
      const color = "rgba(255, 140, 0, 0.8)"; // Dark orange color

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
  };

  useEffect(() => {
    drawCanvas();
    drawStarCanvas(); // Call star canvas function
    drawDarkOrangeStarCanvas(); // Call dark orange star canvas function
    // Resize the canvas on window resize
    window.addEventListener("resize", () => {
      drawCanvas();
      drawStarCanvas();
      drawDarkOrangeStarCanvas();
    });
    return () => {
      window.removeEventListener("resize", () => {
        drawCanvas();
        drawStarCanvas();
        drawDarkOrangeStarCanvas();
      });
    };
  }, []);

  return (
    <div className="relative">
      {/* Main Animated Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      {/* Starry Canvas */}
      <canvas ref={starCanvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      {/* Dark Orange Star Canvas */}
      <canvas ref={darkOrangeStarCanvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      <div id="testimonials" className="z-10 relative">
        <div className="container py-14">
          {/* Title for Testimonials */}
          <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="bg-gradient-to-r from-[#FFFFFF] to-[#FFFAF0] hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl rounded-xl px-5 py-12 text-center flex flex-col justify-center items-center gap-5 md:max-w-[300px] mx-auto"
            >
              <img
                src={Img1}
                alt="CEO Alex Johnson"
                className="w-20 h-20 rounded-full object-contain p-3 bg-black"
              />
              <p className="text-2xl font-semibold text-gray-800">Alex Johnson</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                "Yeemail transformed our outreach strategy! We've seen a 150% increase in engagement since partnering with them."
              </p>
              <p className="text-sm text-gray-600 font-light">Company ABC</p> {/* Company name added */}
            </motion.div>
            <motion.div
              variants={slideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="bg-gradient-to-r from-[#FFFFFF] to-[#FFFAF0] hover:scale-105 transition-transform duration-300 ease-in-out shadow-md rounded-xl px-5 py-12 text-center flex flex-col justify-center items-center gap-5 md:max-w-[300px] mx-auto"
            >
              <img
                src={Img2}
                alt="Co-Founder Hero Kunwar"
                className="w-20 h-20 rounded-full object-contain p-3 bg-black"
              />
              <p className="text-2xl font-semibold text-gray-800">Ram Neupane</p>
              <p className="text-sm text-gray-700">
                "With Yeemail, we found the perfect balance of creativity and data-driven strategy. Our campaigns have never been more effective!"
              </p>
              <p className="text-sm text-gray-600 font-light">Company XYZ</p> {/* Company name added */}
            </motion.div>
            <motion.div
              variants={slideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="bg-gradient-to-r from-[#FFFFFF] to-[#FFFAF0] hover:scale-105 transition-transform duration-300 ease-in-out shadow-md rounded-xl px-5 py-12 text-center flex flex-col justify-center items-center gap-5 md:max-w-[300px] mx-auto"
            >
              <img
                src={Img3}
                alt="Managing Director John Smith"
                className="w-20 h-20 rounded-full object-contain p-3 bg-black"
              />
              <p className="text-2xl font-semibold text-gray-800">Shyam Shahi</p>
              <p className="text-sm text-gray-700">
                "Yeemail’s innovative approach took our email marketing to the next level. Highly recommended!"
              </p>
              <p className="text-sm text-gray-600 font-light">Company 123</p> {/* Company name added */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
