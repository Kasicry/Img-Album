import { useState } from 'react';
import benjamin from '../images/benjamin-wedemeyer-l-BPJHKGjsk-unsplash.jpg';
import krismas from '../images/krismas-unUkmr0NF8Q-unsplash.jpg';
import wenhao from '../images/wenhao-ryan-txuo6oDDDEM-unsplash.jpg';
import $ from 'jquery';


import "../Music.css";
import { Table } from 'react-bootstrap';



function Music(){

    return(

      <div className="container">

        
        


          <div className="black-playlist">
            <h1>MELON</h1>
            
          </div> 

          <div className="row">
          
        <Table className="table-position">
          <thead>
            <tr>
             
              <th>곡정보</th>
              <th>가수</th>
              <th>Play</th>
              
            </tr>
          </thead>
          <tbody>
          <tr>
             
              <td>Dun Dun Dance</td>
              <td>오마이걸 (OH MY GIRL)</td>  
              <td><audio controls src="https://bgmfactory.com/data/item/1597237037/31263291_Gy6oYVeX_94706c83dd004804637543c482c4d600a3f9455c.mp3" alt="음아악"></audio></td>
            </tr>
            <tr>
              
              <td><div className="">그냥 안아 달란 말야</div></td>
              <td>다빈치</td>  
              <td><audio controls src="https://bgmfactory.com/data/item/1597237037/31263291_Gy6oYVeX_94706c83dd004804637543c482c4d600a3f9455c.mp3" alt="음아악"></audio></td>            
            </tr>
            <tr>
             
              <td>롤린(Rollin')</td>
              <td>브레이브걸스 (Brave girls)</td> 
              <td><audio controls src="https://bgmfactory.com/data/item/1597237037/31263291_Gy6oYVeX_94706c83dd004804637543c482c4d600a3f9455c.mp3" alt="음아악"></audio></td>             
            </tr>
            <tr>
              
              <td>까만안경</td>
              <td>이루&견우</td>   
              <td><audio controls src="https://bgmfactory.com/data/item/1597237037/31263291_Gy6oYVeX_94706c83dd004804637543c482c4d600a3f9455c.mp3" alt="음아악"></audio></td>           
            </tr>
            <tr>
              
              <td>살다가</td>
              <td>SG워너비</td>
              <td>
                
              <audio controls src="https://bgmfactory.com/data/item/1597237037/31263291_Gy6oYVeX_94706c83dd004804637543c482c4d600a3f9455c.mp3" alt="음아악"></audio>
              
              </td>                    
            </tr>       

            

          </tbody>
        </Table>
      

          </div>
          
      </div>
      );
  }
export default Music;
