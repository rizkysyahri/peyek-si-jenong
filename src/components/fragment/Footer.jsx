import React from "react";

const Footer = () => {
  return (
    <footer className="container pt-5">
      <div className="mx-auto flex items-center justify-center tracking-wide ">
        <a href="" className="text-slate-400 underline underline-offset-4">
          FAQ
        </a>
        <span className="mx-2 text-xs">|</span>
        <a href="" className="text-slate-400 underline underline-offset-4">
          POLICY
        </a>
        <span className="mx-2 text-xs">|</span>
        <a href="" className="text-slate-400 underline underline-offset-4">
          CONTACT
        </a>
      </div>

      <div className="mx-auto flex items-center justify-center py-4">
        <span>© PEYEK SI JENONG</span>
      </div>
    </footer>
  );
};

export default Footer;
