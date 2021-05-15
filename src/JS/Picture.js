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


<link rel="stylesheet" href="css/base.css" type="text/css" media="screen" />

function Picture(){

    // const [state, setState] = useState(null);
    // console.log(state);

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

            {/* <input type="file" accept="image/*;capture=camera" id = "camera"></input> */}

          <input
            accept="image/*;capture=camera"
            className={classes.input}
            id="icon-button-file camera"
            type="file"
            capture="user"
            onChange={(e) => handleCapture(e.target)}
          />

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


        