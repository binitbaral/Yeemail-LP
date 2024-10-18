import React from "react";
import Logo from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";

const NavbarLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Services", link: "#services" },
  { id: 3, title: "Our Strategy", link: "#strategy" },
  { id: 4, title: "Testimonials", link: "#testimonials" },
  { id: 5, title: "Contact Us", link: "#contact" },
];

const logoVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const Navbar = () => {
  const handleSmoothScroll = (event, target) => {
    event.preventDefault(); // Prevent default anchor click behavior

    // Check if the target is the Home link
    if (target === "/") {
      window.location.reload(); // Refresh the page
    } else {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth", // Smooth scroll
          block: "start",     // Align to the top of the section
        });
      }
    }
  };

  return (
    <motion.nav
      variants={slideBottom(0.2)}
      initial="initial"
      animate="animate"
      className="container mx-auto flex justify-between items-center shadow-lg"
      style={{
        background: "linear-gradient(90deg, rgba(85, 85, 85, 1) 0%, rgba(84, 84, 84, 1) 100%)", // Gradient from lighter gray to #545454
        padding: '15px 30px', // Increased padding for a more spacious look
        borderRadius: '20px', // Added border radius for a rounded effect
        width: '100%',  // Full width
        position: 'relative',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Enhanced shadow for depth
        marginTop: '20px', // Added margin-top to create space above
      }}
    >
      {/* Logo section with animation */}
      <motion.div
        variants={logoVariants}
        className="flex items-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <img
          src={Logo}
          alt="Hustle Logo"
          className="w-[90px] md:w-[100px] lg:w-[110px] transition-transform duration-300" // Increased the logo size further
        />
      </motion.div>

      {/* Links section */}
      <div className="hidden md:block">
        <ul className="flex gap-4 lg:gap-6">
          {NavbarLinks.map((link) => (
            <li key={link.id} className="relative group">
              <motion.a
                className="uppercase text-xs lg:text-sm font-semibold tracking-wide transition duration-300 ease-in-out"
                href={link.link}
                onClick={(e) => handleSmoothScroll(e, link.link)} // Add smooth scroll handler
                style={{ color: "#fff" }} // Changed text color to white
                whileHover={{ color: "#FF8C00", scale: 1.05 }} // Dark orange color on hover with slight scale effect
              >
                {link.title}
              </motion.a>
              {/* Hover underline effect */}
              <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#FF8C00] transition-all duration-300 group-hover:w-full"></span> {/* Change to dark orange underline */}
            </li>
          ))}
        </ul>
      </div>

      {/* Button section */}
      <motion.div
        whileHover={{ scale: 1.05 }} // Slightly less scaling for a subtler effect
        whileTap={{ scale: 0.95 }}
      >
        <motion.button
          className="px-4 py-2 rounded-full shadow-md transition duration-300 ease-in-out"
          style={{
            background: "#C65D0D", // Set button color to dark orange
            color: "#fff", // Set button text color to white
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          }}
          whileHover={{ background: "#3e3e3e", color: "#fff" }} // Change background to dark gray on hover
        >
          Book an Audit
        </motion.button>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
