import React, { useState } from 'react'
import { Button, Navbar, Nav, Container, Form, FormControl, Row, Col } from 'react-bootstrap';
import Camera from 'react-html5-camera-photo'
import {Link, Route, Switch} from 'react-router-dom';
import '../Picture.css'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import axios from 'axios';

<link rel="stylesheet" href="css/base.css" type="text/css" media="screen" />

function Picture(){

    // const [state, setState] = useState(null);
    // console.log(state);

    const [fileinput, setFileinput] = useState({
      file : '',
      previewURL : ''
    });
    

    const useStyles = makeStyles((theme) => ({
                        root: {
                            height: "100%",
                            textAlign: 'center',
                        },
                        imgBox: {
                            maxWidth: "100%",
                            maxHeight: "100%",
                            margin: "50px"
                        },
                        img: {
                            height: "inherit",
                            maxWidth: "inherit",
                        },
                        //   input: {
                        //     display: "none"
                        //   }
                        }));

    const classes = useStyles();
    const [source, setSource] = useState("");
    const handleCapture = (target) => {
        if (target.files) {
        if (target.files.length !== 0) {
            const file = target.files[0];
            const newUrl = URL.createObjectURL(file);
            setSource(newUrl);
        }
        }
    };

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "http://localhost:3002/upload", formData
      );
      const res2 = await axios.get(
        "http://f15cb16e393e.ngrok.io", formData
      );

      const res3 = await axios.post('/l', { userId : 'd', userPassword : 'a' }).then(
        function (response) { console.log('cc') })
        .catch(error => { console.log('error : ',error.response) });


      console.log(res);
      console.log(res2);
      console.log(res3);
    } catch (ex) {
      console.log(ex);
    }
  };

  // ----------------------------------------------------------------------
  
const handleFileOnChange = (event) =>{
  event.preventDefault();
  let reader = new FileReader();
  let file = event.target.files[0];
  reader.onloadend = () => {
    setFileinput({
      file : file,
      previewURL : reader.result
    })
      
    }
    reader.readAsDataURL(file);
  
}

    return(

    <div className=".login Camera-position">


      <div>
        <input type = 'file' accept = 'image/*;capture=camera' name = 'profile_img' onChange={handleFileOnChange}>

        </input>
      </div>

      <div className={classes.root}>
        <Grid container>
            <Grid item xs={12}>
          <h5>Capture your image</h5>
          {source &&
            <Box display="flex" justifyContent="center" border={1} className={classes.imgBox}>
              <img src={source} alt={"snap"} className={classes.img}></img>
            </Box>}

            {/* <input type="file" accept="image/*;capture=camera" id = "camera"></input> */}


          <div className="upload">
            <input
              type="file"
              accept="image/*;capture=camera"
              className={classes.input}
              id="icon-button-file camera"
              // capture="user"
              // onChange={(e) => {handleCapture(e.target);
              //   const saveFile = (e) => {
              //     setFile(e.target.files[0]);
              //     setFileName(e.target.files[0].name);
              //   };
              // }}
               onChange={saveFile}
            />

{/* const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }; */}
            <button onClick={uploadFile}>Upload</button>            
          </div>
            
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              {/* <div className="upload">
                <img src={require('../images/tony-pham-FUmDe-Bx1LA-unsplash.jpg') } />

              </div> */}
            
              <PhotoCameraRoundedIcon fontSize="large" color="primary" />
            </IconButton>
          </label>
        </Grid>
      </Grid>
    </div>
  
        
    </div>
    );

}
export default Picture;


        