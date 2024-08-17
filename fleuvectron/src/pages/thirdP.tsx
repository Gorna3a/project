import React from "react";
import "./pages.css"; // Import the specific CSS for the third page
import doc from"../assets/doc.svg";

const ThirdPage = () => {
  return (
    <div className="third-page-container">
      <img
        src={doc} // Update with the correct path to your image
        alt="Descriptive alt text"
        className="third-page-image"
      />
    </div>
  );
};

export default ThirdPage;

