import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./style.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        <span>Made with&nbsp;</span> <FavoriteIcon className="footer-love" />
        <span>&nbsp;by Mayukh</span>
      </p>
    </div>
  );
};

export default Footer;
