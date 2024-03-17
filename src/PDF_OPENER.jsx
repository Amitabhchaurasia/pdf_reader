import React, { useState } from "react";

function PDF_OPENER() {
  const [pdf, setPdf] = useState(null);

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setPdf(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      {pdf === null ? (
        <label
          htmlFor="pdfInput"
          style={{
            padding: "10px 20px",
            border: "2px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
            height: "260px",
        width: "390px",
        border: "2px solid black",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
          }}
        >
          Select PDF
          <input
            type="file"
            id="pdfInput"
            accept=".pdf"
            style={{
              display: "none",
            }}
            onChange={handlePdfChange}
          />
        </label>
      ) : (
        <object
  data={pdf}
  type="application/pdf"
  width="900px"
  height="490px"
  style={{
    display: "block",
    margin: "auto",
  }}
>
  Your browser does not support PDFs. Please download the PDF to view it:{" "}
  <a href={pdf}>Download PDF</a>
</object>

      )}
    </div>
  );
}

export default PDF_OPENER;
