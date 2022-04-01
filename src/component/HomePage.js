import { Box, Button, Paper } from "@material-ui/core";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/hello.png";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="container">
        <div className="infoWrapper">
          <h1 style={{ color: "#fff" }}>
            Every tool you need to work with convert in one place
          </h1>
          <h2 style={{ color: "#fff" }}>
            Easy to convert your file here 100% free
          </h2>
          <h3 style={{ color: "#fff" }}>Convert your ML Data</h3>
        </div>
        <div className="box-div">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 1300,
                height: 500,
              },
            }}
          >
            <Paper elevation={3} className="Paper">
              <Box className="box-info">
                <Button
                  className="wrapper"
                  onClick={() => {
                    navigate("/pascaltococo/");
                  }}
                >
                  {" "}
                  <div>
                    <h1 style={{ fontSize: "15px" }}>Pascal to Coco</h1>
                    <h5 style={{ color: "grey" }}>
                      Convert your pascal xml data to coco json{" "}
                    </h5>
                  </div>
                </Button>
              </Box>
              <Box className="box-info">
                <Button
                  className="wrapper"
                  onClick={() => {
                    navigate("/cocotopascal/");
                  }}
                >
                  <div>
                    <h1 style={{ fontSize: "15px" }}>Coco to Pascal</h1>
                    <h5 style={{ color: "grey" }}>
                      Convert your Cocon JSON data to Pascal XML
                    </h5>
                  </div>
                </Button>
              </Box>
              <Box className="box-info">
                <Button
                  className="wrapper"
                  onClick={() => {
                    navigate("/labelmetopascal/");
                  }}
                >
                  <div>
                    <h1 style={{ fontSize: "15px" }}>Lableme Json to Pascal</h1>
                    <h5 style={{ color: "grey" }}>
                      Convert your labelmejson data to Pascal XML{" "}
                    </h5>
                  </div>
                </Button>
              </Box>
            </Paper>
          </Box>
          <br></br>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
