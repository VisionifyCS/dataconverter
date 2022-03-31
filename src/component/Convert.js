import { Fragment, useState } from "react";
import "../component/Convert.css";
import { saveAs } from "file-saver";
import xml2js from "xml2js";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

var zip = require("jszip")();
function App() {
  const [data, setData] = useState({});
  const [submit, setSubmit] = useState();
  const [jsonHandle, setJsonHandle] = useState();
  const [visible, setVisible] = useState(false);

  //Coco to ${Pascal} Input file
  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result", e.target.result);
      setData(e.target.result);
    };
  };

  //On Submit Convert coco to pascal
  const onSubmit = () => {
    const obj = JSON.parse(data);
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(obj);
    setSubmit(xml);
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
    var main = zip.folder("main");
    main.file("main.xml", submit);
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
          <h1 style={{ color: "grey" }}>Welcome to File converter</h1>
          <h2>
            Pascal to Coco / Coco to Pascal / LablemeJson to Pascal / Pascal to
            LablemeJson
          </h2>
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
                onClick={() => setVisible(true)}
              />
              <button>Upload Your File Here</button>
            </div>
          </div>
          {visible && (
            <div className="btnDiv">
              <Button variant="contained" onClick={onSubmit} className="btn">
                Convert Coco to Pascal
              </Button>
              <Button
                variant="contained"
                onClick={jsonExportHandle}
                className="btn"
              >
                Convert Pascal to Coco
              </Button>
              <Button variant="contained" onClick={onSubmit} className="btn">
                Convert LabelMeJson to Pascal
              </Button>
              <Button
                variant="contained"
                onClick={jsonExportHandle}
                className="btn"
              >
                Convert Pascal to LabelMeJson
              </Button>
            </div>
          )}
        </div>

        <div>
          {submit && (
            <Button
              variant="contained"
              onClick={() => downloadEvent()}
              download
              className="btnInfo"
            >
              Download
            </Button>
          )}

          {jsonHandle && (
            <button
              onClick={() => downloadEvent()}
              download
              className="btnInfo"
            >
              Download
            </button>
          )}
        </div>
      </div>
      <footer className="footer">Your File Editor@</footer>
    </Fragment>
  );
}

export default App;
