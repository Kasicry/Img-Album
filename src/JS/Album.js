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

        <div className="black-background" >
          <div className="white-background">

          </div>

        </div>
        
        <div className="row">
          {/* <div className="col-md-3">
            <img src={require("../images/benjamin-wedemeyer-l-BPJHKGjsk-unsplash.jpg").default} width="100%" />
            <h4>작가</h4>
            <p>benjamin</p>
          </div> */}

        {/* {반복된UI()} */}

          각 이미지를 홈페이지에 표시하고 이미지를 클릭시 모달창으로 커진(원본의) 사이즈의 클릭한 이미지와 뮤직플레이기능을 넣기
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

          {/* <!-- 팝업 될 곳 --> */}
          <div class="modal">
            <button>&times;</button>
            <div class="modalBox">
              <img src="" alt="aa" />
              <p></p>
            </div>
          </div>
        
          {
            
            props.name.map(function(a){              
                        console.log(a)
              return(
                <div className="col-md-3 col-mg imgC">
                  
                    <img 
                    src={a}
                    width="100%"
                    // onClick=
                     />
                  
                </div>

              )
            }
            )
          }

        </div>
      </div>        
    );
}


export default Album;


        