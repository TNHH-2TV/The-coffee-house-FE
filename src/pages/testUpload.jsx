import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import fetch from "../api";

function TestUpload(props) {
  const [file, setFile] = useState();
  const [filename, setFileName] = useState("");

  const handleChangleFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("filename", filename);

    fetch
      .post("/admin/upload", formData)
      .then(() => {
        console.log("success");
      })
      .catch(() => console.log("fail"));
  };
  return (
    <Box>
      <input type="file" onChange={handleChangleFile} />
      <button onClick={handleSubmit}>Upload</button>
    </Box>
  );
}

export default TestUpload;
