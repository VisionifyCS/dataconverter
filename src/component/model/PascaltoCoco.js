import { Fragment, useState } from "react";
import "./PascaltoCoco.css";
import { saveAs } from "file-saver";
import xml2js from "xml2js";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

var zip = require("jszip")();
function App() {
  const [data, setData] = useState({});
  const [submit, setSubmit] = useState();
  const [jsonHandle, setJsonHandle] = useState();
  // const [visible, setVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  //Pascal Input file
  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result", e.target.result);
      setData(e.target.result);
      setIsDisabled(false);
    };
  };

  // convert pascal to coco
  const jsonExportHandle = (e) => {
    var parser = new xml2js.Parser({ explicitArray: true });
    parser
      .parseStringPromise(data)
      .then(function (result) {
        console.dir(JSON.stringify(result));
        setJsonHandle(result);
      })
      .catch(function (err) {
        console.log(err, "Not found");
      });
  };

  //Download event
  const downloadEvent = () => {
    var newMain = zip.folder("test");
    newMain.file("test.json", JSON.stringify(jsonHandle));
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "/Example.zip");
    });

    zip = require("jszip")();
  };
  return (
    <Fragment>
      <div className="container">
        <wrapper className="wrapper">
          <h1
            style={{
              color: "grey",
              width: "100%",
              justifyContent: "center",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Welcome to File converter
          </h1>
          <h2 style={{ color: "grey", width: "800px" }}>Pascal to Coco</h2>
        </wrapper>
        <div className="btnDivContainer">
          <div className="file-card">
            <h4 style={{ color: "grey" }}>Convert Your files here</h4>
            <div className="file-inputs">
              <input
                type="file"
                onChange={handleChange}
                id="json"
                multiple
                accept=".xml"
              />
              <button>Upload Your File Here</button>
            </div>
          </div>
          <div className="btnDiv">
            <Button
              variant="contained"
              onClick={jsonExportHandle}
              className="btn"
              disabled={isDisabled}
            >
              Convert Pascal to Coco
            </Button>

            {jsonHandle && (
              <Button
                variant="contained"
                onClick={() => downloadEvent()}
                download
                className="btnInfo"
              >
                Download
              </Button>
            )}
          </div>
        </div>
      </div>
      <footer className="footer">Your File Editor@</footer>
    </Fragment>
  );
}

export default App;
