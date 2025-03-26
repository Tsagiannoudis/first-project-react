import React from "react";

function MenuRenderContect({ activeContect }) {
  const renderContect = () => {
    switch (activeContect) {
      case "About me":
        return (
            <div>
            <h1>About Me</h1>
            <p>Γεια σας! Είμαι ο Ιωακείμ Τσαγιαννούδης και διαθέτω γνώση στην κατασκευή ιστοσελίδων σε WordPress και PrestaShop μορφής.</p>
          </div>
          );
      case "Portfolio":
        return <div>Portfolio</div>;
      case "Contact":
        return <div>Contact</div>;
      default:
        return <div>About me</div>;
    }
  };
  return <div>{renderContect()}</div>;
  
}

export default MenuRenderContect;
