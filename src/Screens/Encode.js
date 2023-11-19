// import React, { useState, useRef } from "react";

// export default function Encode() {
//   const [count, setCount] = useState(0);
// }

import React, { useState } from "react";
import { MDBContainer, MDBBtn, MDBIcon, MDBInput, MDBRow, MDBCol } from "mdb-react-ui-kit";

const TextFieldComponent = () => {
  const [textFields, setTextFields] = useState([""]); // Array to hold text fields

  const addTextField = () => {
    if (textFields.length < 5) {
      setTextFields([...textFields, ""]);
    }
  };

  const removeTextField = (index) => {
    const updatedTextFields = textFields.filter((_, i) => i !== index);
    setTextFields(updatedTextFields);
  };

  const handleTextFieldChange = (value, index) => {
    const updatedTextFields = [...textFields];
    updatedTextFields[index] = value;
    setTextFields(updatedTextFields);
  };

  const [encodedQR, setEncodedQR] = useState('')

  const handleEncodeSubmit = () => {
    fetch("http://192.168.1.6:5000/create_qr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"key" : textFields}),
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
        setEncodedQR(data['key'])
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };

  return (
    <MDBContainer class="m-4 me-2">
        <img src={"data:image/png;base64," + encodedQR} alt="" />
      {textFields.map((textField, index) => (
        <div key={index} className="mb-4">
            <MDBRow class="d-flex justify-content-evenly">
                <MDBCol size="10">
                    <MDBInput
                        type="text"
                        value={textField}
                        onChange={(e) => handleTextFieldChange(e.target.value, index)}
                    />
                </MDBCol>
                <MDBCol size="2" class="text-center align-items-center d-flex">
                    <MDBIcon
                    far
                    icon="times-circle"
                    className="text-danger"
                    size="lg"
                    onClick={() => removeTextField(index)}
                    style={{ cursor: "pointer" }}
                />
                </MDBCol>
            </MDBRow>
        </div>
      ))}
      {textFields.length < 5 && (
        <MDBBtn className="ms-2" color="primary" onClick={addTextField} floating>
          +
        </MDBBtn>
      )}
      <MDBRow class="mt-5 justify-content-evenly d-flex">
        <MDBCol class="d-flex">
            <MDBBtn class="btn btn-primary" onClick={handleEncodeSubmit}>
                Submit
            </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default TextFieldComponent;
