import benjamin from '../images/benjamin-wedemeyer-l-BPJHKGjsk-unsplash.jpg';
import krismas from '../images/krismas-unUkmr0NF8Q-unsplash.jpg';
import wenhao from '../images/wenhao-ryan-txuo6oDDDEM-unsplash.jpg';
import tony from '../images/tony-pham-FUmDe-Bx1LA-unsplash.jpg';
import React, { useState } from "react";
import axios from "axios";
import $ from 'jquery';


function Album(){

  const reqSvgs = require.context ( '../images', true, /\.jpg$/  )
  const paths = reqSvgs.keys ()
  
  const svgs = paths.map( path => reqSvgs ( path ) )

  console.log({svgs});


    return(


      <div className="container">
          
        
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


        