import React from 'react';

const BackToTopButton = () => (
  <button
    className="back-to-top"
    style={{
      position: "fixed",
      bottom: "3%",
      right: "3%",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      fontSize: "18px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    }}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    ↑
  </button>
);

export default BackToTopButton;
