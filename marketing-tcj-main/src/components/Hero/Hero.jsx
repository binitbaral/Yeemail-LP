import React, { useEffect, useRef } from "react";
import HeroImg from "../../assets/7.png"; // Make sure to use an appropriate image for an email marketing agency
import PartnerLogo1 from "../../assets/8.png"; // Import the first partner logo
import PartnerLogo2 from "../../assets/9.png"; // Import the second partner logo
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Hero = () => {
  const canvasRef = useRef(null);

  // Function to create animated canvas effect
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = 150; // Total number of regular gray particles
    const starCount = 50; // Number of dark orange star particles
    const grayStarCount = 50; // Number of gray star particles

    // Create regular gray particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: "rgba(169, 169, 169, 0.5)", // Gray color
        speed: Math.random() * 0.5 + 0.1,
        type: 'particle', // Regular particle type
      });
    }

    // Create dark orange star particles
    for (let i = 0; i < starCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 2, // Stars are slightly larger
        color: "rgba(255, 140, 0, 0.8)", // Dark orange color for stars
        speed: Math.random() * 0.2 + 0.05,
        twinkle: Math.random() > 0.5, // Randomly determine if the star twinkles
        type: 'star', // Dark orange star type
      });
    }

    // Create gray star particles
    for (let i = 0; i < grayStarCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1.5, // Gray stars slightly larger than regular particles
        color: "rgba(169, 169, 169, 0.8)", // Darker gray for stars
        speed: Math.random() * 0.3 + 0.1, // Different speed for gray stars
        twinkle: Math.random() > 0.5, // Randomly determine if the star twinkles
        type: 'grayStar', // Gray star type
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.y += particle.speed;
        if (particle.y > canvas.height) particle.y = 0; // Reset to top

        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add twinkling effect for stars
        if (particle.type === 'star' || particle.type === 'grayStar') {
          ctx.globalAlpha = particle.twinkle ? Math.random() * 0.5 + 0.5 : 1; // Random opacity for twinkling
        }
      });
      ctx.globalAlpha = 1; // Reset global alpha for non-twinkling particles
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  };

  useEffect(() => {
    drawCanvas();
    // Resize the canvas on window resize
    window.addEventListener("resize", drawCanvas);
    return () => {
      window.removeEventListener("resize", drawCanvas);
    };
  }, []);

  return (
    <div className="relative">
      {/* Background Effect - White Background */}
      <div className="absolute inset-0 bg-white z-0" />
      
      {/* Animated Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />

      <div className="container relative z-20"> {/* Ensure text is above the background */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen"> {/* Changed min-height to screen height */}
          {/* Text content section */}
          <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl xl:text-5xl font-bold"
              style={{ color: "#545454" }} // Main text color
            >
              Elevate Your Business with <span className="text-[#c65d0d] underline">Email Marketing</span>
            </motion.h1>
            <motion.p
              variants={slideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-gray-600" // Change to a suitable text color
            >
              Unlock the full potential of your audience with tailored email strategies designed to engage, convert, and retain your customers.
            </motion.p>
            <motion.button
              variants={slideUp(0.8)}
              initial="initial"
              animate="animate"
              className="primary-btn bg-[#3e3e3e] text-white duration-300"
              style={{
                background: "#c65d0d", // Button background color
                color: "#fff", // Button text color
                padding: '10px 20px',
                borderRadius: '20px', // Increased border radius for roundness
                transition: "background-color 0.3s ease", // Removed hover effect transition
              }}
            >
              Book an Audit
            </motion.button>

            {/* Partner Logos Section with Entrance Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Initial state
              animate={{ opacity: 1, y: 0 }} // Final state
              transition={{ duration: 0.5, delay: 0.5 }} // Animation duration and delay
              className="flex justify-center space-x-6 mt-5"
            >
              <img src={PartnerLogo1} alt="Partner Logo 1" className="h-8" /> {/* Adjust height to make it smaller */}
              <img src={PartnerLogo2} alt="Partner Logo 2" className="h-8" /> {/* Adjust height to make it smaller */}
            </motion.div>
          </div>
          {/* Hero Image section */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{
                opacity: 0,
                x: 100,
                scale: 1,
              }}
              animate={{ opacity: 1, x: 0, scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.5 }} // Adjust the initial animation duration
              src={HeroImg}
              alt="Email Marketing Hero"
              className="w-full md:w-[100%] xl:w-[100%] h-auto rounded-lg" // Set width to 100% and height to auto
              style={{ perspective: '1000px' }} // Perspective for 3D effect
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
