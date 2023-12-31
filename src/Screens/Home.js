import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBFooter, MDBIcon } from "mdb-react-ui-kit";
import {Header} from './Header'

const ImageUploader = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Handle the uploaded image
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <MDBContainer class='d-flex justify-content-evenly mt-5 mb-5'>
        <MDBRow class='d-flex'>
          {/* <input
            type="file"
            accept="image/*"
            capture="camera"
            onChange={handleImageChange}
          /> */}
          <MDBCol>
            <MDBBtn class="btn btn-primary" onClick={() => {navigate('/encode')}}>
              encode
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow class='d-flex'>
          <MDBCol>
            <MDBBtn class="btn btn-success" onClick={() => {navigate('/decode')}}>
              decode
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    <MDBContainer>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="x" />
          </a>
          <a href='www.google.com' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='www.google.com' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='www.google.com' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          QRScanner.com
        </a>
      </div>
    </MDBFooter>
  </MDBContainer>
    
    </div>
  );
};

export default ImageUploader;
