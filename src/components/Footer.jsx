import React from "react";

function Footer(props) {
  return (
    <div className="relative h-28 w-screen ">
      <div className="absolute inset-x-0 bottom-0 h-16 items-center justify-center">
        <hr className="border mt-28" />
        <p className="text-xl text-center p-5">Made by Parth Pandya</p>
      </div>
    </div>
  );
}

export default Footer;
