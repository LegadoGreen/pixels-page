import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-gray-800 text-white text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Legado - A project developed with ❤️ by{" "}
        <a
          href="https://github.com/DavidsDvm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          @DavidsDvm
        </a>
      </p>
    </footer>
  );
};

export default Footer;
