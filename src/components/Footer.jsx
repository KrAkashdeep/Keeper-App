import React from "react";

function Footer() {
  var date = new Date();
  const year = date.getUTCFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
