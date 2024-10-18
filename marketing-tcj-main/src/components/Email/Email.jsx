import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FooterImg from "../../assets/5.png"; // Background image for the email section
import FooterLogo from "../../assets/14.png"; // Update to use logo 14.png

const bgStyle = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const faqAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Email = () => {
  const canvasRef = useRef(null);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = 150;
    const starCount = 50;
    const grayStarCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: "rgba(169, 169, 169, 0.5)",
        speed: Math.random() * 0.5 + 0.1,
        type: "particle",
      });
    }

    for (let i = 0; i < starCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 2,
        color: "rgba(255, 140, 0, 0.8)",
        speed: Math.random() * 0.2 + 0.05,
        twinkle: Math.random() > 0.5,
        type: "star",
      });
    }

    for (let i = 0; i < grayStarCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1.5,
        color: "rgba(169, 169, 169, 0.8)",
        speed: Math.random() * 0.3 + 0.1,
        twinkle: Math.random() > 0.5,
        type: "grayStar",
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.y += particle.speed;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        if (particle.type === "star" || particle.type === "grayStar") {
          ctx.globalAlpha = particle.twinkle ? Math.random() * 0.5 + 0.5 : 1;
        }
      });
      ctx.globalAlpha = 1;
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
    <div style={bgStyle} className="relative">
      {/* Canvas for star animation */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Frequently Asked Questions Section */}
      <section
        className="faq-section py-10 bg-[#3e3e3e] text-white relative z-10 flex flex-col justify-center items-center"
        style={{ minHeight: "100vh" }} // Ensure FAQ takes full screen
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-[#FF8C00] mb-8"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="faq-container space-y-6 mx-auto max-w-4xl px-4">
          <motion.div
            variants={faqAnimation}
            initial="hidden"
            whileInView="visible"
            className="faq-item bg-gray-600 p-5 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <p className="text-xl font-semibold text-[#FF8C00]">Q: How can email marketing boost my business?</p>
            <p className="text-lg text-gray-100">
              A: At <strong>Yeemail</strong>, we create tailored email campaigns that engage customers, convert leads, and supercharge your revenue.
            </p>
          </motion.div>
          <motion.div
            variants={faqAnimation}
            initial="hidden"
            whileInView="visible"
            className="faq-item bg-gray-600 p-5 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <p className="text-xl font-semibold text-[#FF8C00]">Q: What makes Yeemail different from other agencies?</p>
            <p className="text-lg text-gray-100">
              A: We use data-driven strategies and continuous performance optimization to maximize your ROI. Each campaign is crafted to fit your business perfectly.
            </p>
          </motion.div>
          <motion.div
            variants={faqAnimation}
            initial="hidden"
            whileInView="visible"
            className="faq-item bg-gray-600 p-5 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <p className="text-xl font-semibold text-[#FF8C00]">Q: How do you ensure my emails won't land in spam?</p>
            <p className="text-lg text-gray-100">
              A: We follow email best practices—maintaining clean lists, writing compliant content, and utilizing high-quality email servers to ensure optimal deliverability.
            </p>
          </motion.div>
          <motion.div
            variants={faqAnimation}
            initial="hidden"
            whileInView="visible"
            className="faq-item bg-gray-600 p-5 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <p className="text-xl font-semibold text-[#FF8C00]">Q: Can I track the performance of my email campaigns?</p>
            <p className="text-lg text-gray-100">
              A: Absolutely! Our real-time analytics offer insights into open rates, clicks, conversions, and much more, helping you measure campaign success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-black text-white py-6">
        <div className="flex justify-center items-center mb-4">
          <img src={FooterLogo} alt="Footer Logo" className="h-10" />
        </div>
        <p className="text-center text-sm">&copy; 2024 Yeemail. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Email;
