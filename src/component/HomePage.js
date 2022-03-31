import { Box, Button, Paper } from "@material-ui/core";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="container">
        <div className="infoWrapper">
          <h1>Every tool you need to work with convert in one place</h1>
          <h2>Easy to convert your file here 100% free</h2>
          <h3>Convert your ML Data</h3>
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
                    navigate("/converter/");
                  }}
                >
                  <h1>Pascal to Coco</h1>
                  <h5>Convert your pascal xml data to coco json </h5>
                </Button>
              </Box>
              <Box className="box-info">
                <Button
                  className="wrapper"
                  onClick={() => {
                    navigate("/converter/");
                  }}
                >
                  <h1>Coco to Pascal</h1>
                  <h5>Convert your Cocon JSON data to Pascal XML</h5>
                </Button>
              </Box>
              <Box className="box-info">
                <Button
                  className="wrapper"
                  onClick={() => {
                    navigate("/converter/");
                  }}
                >
                  <h1>labelme to Pascal</h1>
                  <h5>Convert your labelme data to Pascal XML </h5>
                </Button>
              </Box>
              <Box className="box-info">
                <Button
                  className="wrapper"
                  onClick={() => {
                    navigate("/converter/");
                  }}
                >
                  <h1>Pascal to labelme</h1>
                  <h5>Convert your pascal xml data to Labelme</h5>
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
