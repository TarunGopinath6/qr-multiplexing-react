import React, { useState } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBFooter,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [resultData, setResultData] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Handle the uploaded image
        setImage(reader.result);
        setResultData([]);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleEncodeSubmit = (imageData) => {
    fetch("http://192.168.1.6:5000/scan_qr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: image + imageData }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data from the response
        console.log("Success:", data);
        setResultData(data["key"]);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <MDBContainer class="m-4">
        <MDBRow class="text-center">
          <MDBCol size="md">
            <img
              src={image}
              alt="Uploaded"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow class=" mt-3 mb-3 d-flex justify-content-evenly w-100">
          <MDBCol class="w-100">
            <MDBBtn class="btn btn-outline-primary w-100">
              <input
                type="file"
                accept="image/*"
                capture="camera"
                onChange={handleImageChange}
              />
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        <MDBRow class="d-flex justify-content-evenly w-100">
          <MDBBtn class="btn btn-primary w-100">UPLOAD</MDBBtn>
        </MDBRow>
        <MDBRow class="d-flex m-0 p-0">
          <MDBCol
            lg="3 w-100"
            onClick={() => {
              handleEncodeSubmit("0");
            }}
            style={{ color: "white" }}
          >
            a
          </MDBCol>
          <MDBCol
            lg="3 w-100"
            onClick={() => {
              handleEncodeSubmit("1");
            }}
            style={{ color: "white" }}
          >
            b
          </MDBCol>
          <MDBCol
            lg="3 w-100"
            onClick={() => {
              handleEncodeSubmit("2");
            }}
            style={{ color: "white" }}
          >
            c
          </MDBCol>
          <MDBCol
            lg="3 w-100"
            onClick={() => {
              handleEncodeSubmit("3");
            }}
            style={{ color: "white" }}
          >
            d
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {resultData.map((textField, index) => (
        <div key={index} className="mb-4">
          <MDBRow class="d-flex justify-content-evenly">
            <MDBCol size="10">
              <MDBInput type="text" value={textField} disabled />
            </MDBCol>
          </MDBRow>
        </div>
      ))}

      <MDBContainer>
        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-muted"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="www.google.com" className="me-4 text-reset">
                <MDBIcon fab icon="x" />
              </a>
              <a href="www.google.com" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" />
              </a>
              <a href="www.google.com" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href="www.google.com" className="me-4 text-reset">
                <MDBIcon fab icon="github" />
              </a>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              QRScanner.com
            </a>
          </div>
        </MDBFooter>
      </MDBContainer>
    </div>
  );
};

export default ImageUploader;
