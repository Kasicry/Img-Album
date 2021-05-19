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
                          // input: {
                          //   display: "none"
                          // }
                        }));

  const classes = useStyles();
  const [source, setSource] = useState("");
    
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [fileinput, setFileinput] = useState({
    file : '',
    previewURL : ''
  });
  
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    // formData.append('test', ['hi', 'hello']);
    // formData.get('test');
    // console.log(formData.get('test'))
    try {
      const res = await axios.post(
        "http://localhost:3002/upload", formData
      );   

      // const res3 = await axios.post('/l', { userId : 'd', userPassword : 'a' }).then(
      //   function (response) { console.log('cc') })
      //   .catch(error => { console.log('error : ',error.response) });

      console.log(res);

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
  
  let profile_preview = null;
    if(fileinput.file !== ''){
      profile_preview = <img className='profile_preview' src={fileinput.previewURL}></img>
  }

    return(

    <div className=".login Camera-position">

      <div className={classes.root}>
        <Grid container>
            <Grid item xs={12}>
          <h5>Capture your image</h5>
          {source &&
            <Box display="flex" justifyContent="center" border={1} className={classes.imgBox}>
              <img src={source} alt={"snap"} className={classes.img}></img>
            </Box>}
            
          <div className="upload">
            <input
              type="file"
              accept="image/*;capture=camera"
              className={classes.input}
              id="icon-button-file camera"
              name = 'profile_img' 
              onChange={(e)=>{
                saveFile(e);
                handleFileOnChange(e);
              }}

            />

            <button onClick={uploadFile}>Upload</button>
            {profile_preview}            
          </div>

          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >          
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


        