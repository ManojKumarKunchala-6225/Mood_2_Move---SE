import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; 2025 Mood2Move. All Rights Reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="hover:text-blue-500">Facebook</a>
          <a href="#" className="hover:text-blue-500">Twitter</a>
          <a href="#" className="hover:text-blue-500">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
