import React from "react";

const Button = ({ text }) => {
  return (
    <button
      // data-aos="zoom-in"
      // data-aos-easing="ease-out-cubic"
      // data-aos-duration="2000"
      className="transition duration-500 bg-gradient-to-r hover:shadow-button py-3 hover:scale-105 px-8 rounded-lg hover:from-themeOrange hover:to-themePink from-themePink font-medium to-themeOrange text-white"
    >
      {text}
    </button>
  );
};

export default Button;
