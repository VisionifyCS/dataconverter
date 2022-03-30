import { useState } from "react";
import "./App.css";
import { saveAs } from "file-saver";
import xml2js from "xml2js";
var zip = require("jszip")();
function App() {
  const [data, setData] = useState({});
  const [submit, setSubmit] = useState();
  const [jsonHandle, setJsonHandle] = useState();

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
    <>
      <div className="navbar">
        <nav className="navbarheading">
          <h1 className="navbar-h1">
            Data<span style={{ color: "green" }}>converter</span>
          </h1>
        </nav>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          marginTop: "60px",
          borderRadius: "20px",
        }}
      >
        <div className="heading">
          <h1 style={{ color: "black" }}>Welcome to data converter</h1>
        </div>
        <div className="inputDiv">
          <h2 className="input-h2">Upload Your Files Here</h2>
          <input
            type="file"
            className="inputArea"
            onChange={handleChange}
            id="json"
            multiple
          />
          <button onClick={onSubmit} className="btn">
            Convert Coco to Pascal
          </button>
          <button onClick={jsonExportHandle} className="btn">
            Convert Pascal to Coco
          </button>

          <div className="btnDownload">
            {submit && (
              <button
                onClick={() => downloadEvent()}
                download
                className="btnInfo"
              >
                Download
              </button>
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
      </div>
    </>
  );
}

export default App;
