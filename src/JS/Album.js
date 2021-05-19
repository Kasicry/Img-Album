import {Button, Modal } from 'react-bootstrap';
import React, { useState } from "react";
import $ from 'jquery';
import ImageZoom from 'react-medium-image-zoom';
import "../Album.css"


function Album(props){

  $(function(){
    // 	이미지 클릭시 해당 이미지 모달
      $(".imgC").click(function(){
        $(".modal").show();
        // 해당 이미지 가겨오기
        var imgSrc = $(this).children("img").attr("src");
        var imgAlt = $(this).children("img").attr("alt");
        $(".modalBox img").attr("src", imgSrc);
        $(".modalBox img").attr("alt", imgAlt);
        
        // 해당 이미지 텍스트 가져오기
        // var imgTit =  $(this).children("p").text();
        // $(".modalBox p").text(imgTit);
        
       // 해당 이미지에 alt값을 가져와 제목으로
        $(".modalBox p").text(imgAlt);
      });
      
      //.modal안에 button을 클릭하면 .modal닫기
      $(".modal button").click(function(){
        $(".modal").hide();
      });
      
      //.modal밖에 클릭시 닫힘
      $(".modal").click(function (e) {
        if (e.target.className != "modal") {
          return false;
        } else {
          $(".modal").hide();
        }
      });
    });

    return(

      <div className="container">         
        

        <p>모달창에 뮤직플레이기능을 넣기</p>
        
        <div className="row">
          {/* <div className="col-md-3">
            <img src={require("../images/benjamin-wedemeyer-l-BPJHKGjsk-unsplash.jpg").default} width="100%" />
            <h4>작가</h4>
            <p>benjamin</p>
          </div> */}

        {/* {반복된UI()} */}

          {/* <div className="imgList">
            <div className="imgC">
              <img src={require("../images/세로4.jpeg").default}  width="100%"/>
              <p>이미지 1</p>
            </div>
            <div className="imgC">
              <img src={require("../images/세로3.jpeg").default} width="100%" />
              <p>이미지 2</p>
            </div>            
          </div> */}

          
        
          {
            
            props.name.map(function(a){              
                        console.log(a)
              return(
                <div className="col-md-3 col-mg imgC">
                  
                    <img 
                    src={a}
                    width="100%"
                    alt="home"
                     />
                  
                </div>

              )
            }
            )
          }

          {/* <!-- 팝업 될 곳 --> */}
          <div class="modal">
            <button>&times;</button>
            <div class="modalBox">
              <img src="" alt="" />
              <p></p>
            </div>
          </div>

        </div>
      </div>        
    );
}


export default Album;

// Copyright (c) 2021 by Hyeonjun Hwang (https://codepen.io/HwangDos/pen/OJNyPoQ)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


        