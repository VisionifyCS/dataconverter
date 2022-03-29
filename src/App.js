import { useState } from "react";
import "./App.css";
// import { file } from "jszip";
import { saveAs } from "file-saver";
import xml2js from "xml2js";
// import js2xmlparser from "js2xmlparser";
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
      <div className="heading">
        <h1>Welcome to data converter</h1>
      </div>
      <div className="inputDiv">
        <input
          type="file"
          className="textArea"
          onChange={handleChange}
          id="json"
        />
        <button onClick={onSubmit}>Convert Coco to Pascal</button>
        <button onClick={jsonExportHandle}>Convert Pascal to Coco</button>
      </div>

      <div className="btnDownload">
        {/* {submit && ( */}
        <button onClick={() => downloadEvent()} download>
          Download
        </button>
        {/* )} */}
      </div>
    </>
  );
}

export default App;
