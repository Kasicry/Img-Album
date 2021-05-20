import { useState } from 'react';
import benjamin from '../images/benjamin-wedemeyer-l-BPJHKGjsk-unsplash.jpg';
import krismas from '../images/krismas-unUkmr0NF8Q-unsplash.jpg';
import wenhao from '../images/wenhao-ryan-txuo6oDDDEM-unsplash.jpg';
import $ from 'jquery';
import footer from './footer';
// import "../Album.css";
import "../Music.css";
import { Table } from 'react-bootstrap';



function Music(){


  const [앨범커버, 앨범커버변경] = useState([
    require("../images/앨범커버3.jpg").default,
    require("../images/앨범커버4.jpg").default,
    require("../images/앨범커버5.jpg").default,
    require("../images/앨범커버6.jpg").default,
    require("../images/앨범커버7.jpg").default,
    require("../images/앨범커버8.png").default,
    require("../images/앨범커버9.jpg").default,
    require("../images/앨범커버10.jpg").default,
    require("../images/앨범커버11.png").default,
    require("../images/앨범커버12.png").default,
    require("../images/앨범커버13.jpg").default,
    require("../images/앨범커버14.jpg").default,
    require("../images/앨범커버15.png").default,
    require("../images/앨범커버16.png").default,
    require("../images/앨범커버17.png").default,
    require("../images/앨범커버18.jpg").default,
    require("../images/앨범커버19.jpg").default,
    require("../images/앨범커버20.jpg").default,
    require("../images/앨범커버21.jpg").default,
    require("../images/앨범커버22.jpg").default,
    require("../images/앨범커버23.jpg").default,      
    
    ]    
    );

    const [앨범커버2, 앨범커버변경2] = useState([
      "/앨범커버3",
      "/앨범커버4",
      "/앨범커버5.jpg",
      "/앨범커버6.jpg",
      "/앨범커버7.jpg",
      "/앨범커버8.png",
      "/앨범커버9.jpg",
      "/앨범커버10.jpg",
      "/앨범커버11.png",
      "/앨범커버12.png",
      "/앨범커버13.jpg",
      "/앨범커버14.jpg",
      "/앨범커버15.png",
      "/앨범커버16.png",
      "/앨범커버17.png",
      "/앨범커버18.jpg",
      "/앨범커버19.jpg",
      "/앨범커버20.jpg",
      "/앨범커버21.jpg",
      "/앨범커버22.jpg",
      "/앨범커버23.jpg"       
      ]    
      );

        let path = "../music/다비치.mp3"
        let audio = new Audio("https://bgmfactory.com/data/item/1597237037/31263291_Gy6oYVeX_94706c83dd004804637543c482c4d600a3f9455c.mp3");
    
      console.log('../music/다비치.mp3');

    return(

      <div className="container">
        

            {/* {            
            앨범커버.map(function(a, i){              
                          // console.log(a)
                          console.log("/Music"+i)
                return(
                  <div className="col-md-3 col-mg imgC">
                    <a href={"/Music/"+i}>
                      <img 
                      src={a}
                      width="100%"
                      alt=""                    
                      />
                    </a>
                      <p>작가</p>
                      <p>benjamin</p>
                    
                  </div>
                )
              }
              )
            } */}

          <div className="black-playlist">
            <h1>MELON</h1>
            
          </div> 

          <div className="row">
          
        <Table className="table-position">
          <thead>
            <tr>
              {/* <th width="100px">앨범커버</th> */}
              <th>곡정보</th>
              <th>가수</th>
              <th>Play</th>
              
            </tr>
          </thead>
          <tbody>
          <tr>
              {/* <td><img className="coverSize" src={require("../images/앨범커버21.jpg").default} /></td> */}
              <td>Dun Dun Dance</td>
              <td>오마이걸 (OH MY GIRL)</td>  
              <td><audio controls src="https://bgmfactory.com/data/item/1597237037/31263291_Gy6oYVeX_94706c83dd004804637543c482c4d600a3f9455c.mp3" alt="음아악"> Your user agent does not support the HTML5 Audio element. </audio></td>
            </tr>
            <tr>
              {/* <td><img className="coverSize" src={require("../images/앨범커버25.jpg").default} /></td> */}
              <td><div className="">그냥 안아 달란 말야</div></td>
              <td>다빈치</td>  
              <td><audio controls src="https://bgmfactory.com/data/item/1597237037/31263291_Gy6oYVeX_94706c83dd004804637543c482c4d600a3f9455c.mp3" alt="음아악"> Your user agent does not support the HTML5 Audio element. </audio></td>            
            </tr>
            <tr>
              {/* <td><img className="coverSize" src={require("../images/앨범커버20.jpg").default} /></td> */}
              <td>롤린(Rollin')</td>
              <td>브레이브걸스 (Brave girls)</td> 
              <td><audio controls src="https://bgmfactory.com/data/item/1597237037/31263291_Gy6oYVeX_94706c83dd004804637543c482c4d600a3f9455c.mp3" alt="음아악"> Your user agent does not support the HTML5 Audio element. </audio></td>             
            </tr>
            <tr>
              {/* <td><img className="coverSize" src={require("../images/앨범커버27.jpg").default} /></td> */}
              <td>까만안경</td>
              <td>이루&견우</td>   
              <td><audio controls src="https://bgmfactory.com/data/item/1597237037/31263291_Gy6oYVeX_94706c83dd004804637543c482c4d600a3f9455c.mp3" alt="음아악"> Your user agent does not support the HTML5 Audio element. </audio></td>           
            </tr>
            <tr>
              {/* <td><img className="coverSize" src={require("../images/앨범커버29.jpg").default} /></td> */}
              <td>살다가</td>
              <td>SG워너비</td>
              <td>
                
              <audio controls src="https://bgmfactory.com/data/item/1597237037/31263291_Gy6oYVeX_94706c83dd004804637543c482c4d600a3f9455c.mp3" alt="음아악"> Your user agent does not support the HTML5 Audio element. </audio>
              
              </td>                    
            </tr>       

            {/* <audio controls src="https://bgmfactory.com/data/item/1597237037/31263291_Gy6oYVeX_94706c83dd004804637543c482c4d600a3f9455c.mp3" alt="음아악"> Your user agent does not support the HTML5 Audio element. </audio> */}

          </tbody>
        </Table>
      

          {/* <div className="row" >
            <div className="col-md-3">
              <img src={benjamin} width="100%" />
              <h4>작가</h4>
              <p>benjamin</p>
            </div> */}
           
            

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
export default Music;
