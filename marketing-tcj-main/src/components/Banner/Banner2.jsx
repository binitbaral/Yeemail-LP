import React, { useEffect, useRef } from "react";
import LinkedInIcon from "../../assets/linkedin.png";
import InstagramIcon from "../../assets/instagram.png";
import XIcon from "../../assets/x.png";
import SlackIcon from "../../assets/slack.png";

const Banner2 = () => {
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
        type: "particle", // Regular particle type
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
        type: "star", // Dark orange star type
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
        type: "grayStar", // Gray star type
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
        if (particle.type === "star" || particle.type === "grayStar") {
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
    window.addEventListener("resize", drawCanvas);
    return () => {
      window.removeEventListener("resize", drawCanvas);
    };
  }, []);

  return (
    <div id="contact" className="relative flex flex-col md:flex-row items-stretch min-h-screen">
      {/* Animated Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />

      <div className="container relative z-20 flex flex-col md:flex-row justify-center items-stretch w-full">
        {/* Left Section: Calendly iframe */}
        <div className="flex justify-center items-center w-full md:w-2/5 p-5 min-h-[500px]">
          <div className="flex flex-col items-center">
            {/* Title Above Calendly */}
            <h2 className="text-3xl font-bold mb-5 text-center">Schedule a Meeting</h2>
            <iframe
              src="https://calendly.com/your-calendly-link"
              className="w-full h-[400px] md:h-[600px] rounded-xl shadow-lg" // Increased height
              title="Calendly"
            />
          </div>
        </div>

        {/* Right Section: Contact Options */}
        <div className="flex flex-col justify-center items-center md:items-start p-5 md:p-10 w-full md:w-3/5 animate-slide-in-right min-h-[500px]">
          {/* Title for Social Links */}
          <h2 className="text-3xl font-bold mb-5 text-center md:text-left">Connect with Us Anytime</h2>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer animate-fade-in">
                <img src={LinkedInIcon} alt="LinkedIn" className="w-12 h-12" />
                <span className="ml-4 text-lg text-white font-semibold">LinkedIn</span>
              </div>
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-between bg-gradient-to-r from-pink-500 to-yellow-500 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer animate-fade-in">
                <img src={InstagramIcon} alt="Instagram" className="w-12 h-12" />
                <span className="ml-4 text-lg text-white font-semibold">Instagram</span>
              </div>
            </a>

            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-between bg-gradient-to-r from-gray-500 to-black p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer animate-fade-in">
                <img src={XIcon} alt="Twitter" className="w-12 h-12" />
                <span className="ml-4 text-lg text-white font-semibold">Twitter</span>
              </div>
            </a>

            <a href="https://www.slack.com" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-between bg-gradient-to-r from-green-400 to-teal-500 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer animate-fade-in">
                <img src={SlackIcon} alt="Slack" className="w-12 h-12" />
                <span className="ml-4 text-lg text-white font-semibold">Slack</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
