import benjamin from '../images/benjamin-wedemeyer-l-BPJHKGjsk-unsplash.jpg';
import krismas from '../images/krismas-unUkmr0NF8Q-unsplash.jpg';
import wenhao from '../images/wenhao-ryan-txuo6oDDDEM-unsplash.jpg';
import tony from '../images/tony-pham-FUmDe-Bx1LA-unsplash.jpg';
import React, { useState } from "react";
import axios from "axios";
import $ from 'jquery';


function Album(){

  // const [file, setFile] = useState();
  // const [fileName, setFileName] = useState("");

  // const saveFile = (e) => {
  //   setFile(e.target.files[0]);
  //   setFileName(e.target.files[0].name);
  // };

  // const uploadFile = async (e) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("fileName", fileName);
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:3002/upload", formData
  //     );
  //     console.log(res);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // };

    return(


      <div className="container">
{/* 
        <div className="upload">
              <input type="file" onChange={saveFile} />
              <button onClick={uploadFile}>Upload</button>
            </div> */}
          
        
        <div className="row" >
          <div className="col-md-3">
            <img src={benjamin} width="100%" />
            <h4>작가</h4>
            <p>benjamin</p>
          </div>
          <div className="col-md-3">
            <img src={krismas} width="100%" />
            <h4>작가</h4>
            <p>krismas</p>
          </div>
          <div className="col-md-3">
            <img src={wenhao} width="100%" />
            <h4>작가</h4>
            <p>wenhao</p>
          </div>
          <div className="col-md-3">
            <img src={wenhao} width="100%" />
            <h4>작가</h4>
            <p>wenhao</p>
          </div>
          <div className="col-md-3">
           <img src={tony} width="100%" />
            <h4>작가</h4>
            <p>wesley</p>
          </div>
          <div className="col-md-3">
           <img src={tony} width="100%" />
            <h4>작가</h4>
            <p>wesley</p>
          </div>
          <div className="col-md-3">
           <img src={tony} width="100%" />
            <h4>작가</h4>
            <p>wesley</p>
          </div>
          <div className="col-md-3">
           <img src={tony} width="100%" />
            <h4>작가</h4>
            <p>wesley</p>
          </div>
         

        </div>
      </div>        
    );
}
export default Album;


        