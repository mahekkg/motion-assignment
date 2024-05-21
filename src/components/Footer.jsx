import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r  from-[#eb4034] via-[#eb4034] via-10% to-[#5E11FF] to-100% text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-sm">
          © 2023 Copywrite. All rights reserved by QodeMatrix
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-sm hover:underline">Documentation</a>
          <a href="#" className="text-sm hover:underline">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
