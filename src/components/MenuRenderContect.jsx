import React from "react";

function MenuRenderContect({ activeContect }) {
  const renderContect = () => {
    switch (activeContect) {
      case "About me":
        return (
            <div>
            <h1>About Me</h1>
            <p class>Γεια σας! Είμαι ο Ιωακείμ Τσαγιαννούδης και διαθέτω γνώση στην κατασκευή ιστοσελίδων σε WordPress και PrestaShop μορφής.</p>

            <p>Αναλαμβάνω την κατασκευή ή αναδιαμόρφωση για την βελτίωση της ιστοσελίδας σας σε μορφή WordPress ή PrestaShop για την ψηφιακή επαγγελματική ή προσωπική προβολή στο διαδίκτυο. Η ιστοσελίδα σας θα εμφανίζεται άψογα σε κινητά και τάμπλετ..</p>
            
            <p>Μαζί με την ιστοσελίδα σας μπορείτε να διαθέτετε υπηρεσίες όπως επαγγελματικά email(πχ info@pap.gr), ssl προτόκολο ασφάλειας, δημιουργία αντιγράφων ασφαλείας όσο και την φιλοξενία στο server(Hosting).</p>
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
