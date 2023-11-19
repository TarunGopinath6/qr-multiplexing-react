import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";

export default function App() {
  return (
    <>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img
              src="https://www.researchgate.net/profile/Amol-Bhondekar/publication/301788314/figure/fig19/AS:357565289517075@1462261616597/9-Generated-RGB-colored-QR-Code.png"
              height="70"
              alt=""
              loading="lazy"
            />
            QR Scanner
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
