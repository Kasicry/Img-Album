import benjamin from '../images/benjamin-wedemeyer-l-BPJHKGjsk-unsplash.jpg';
import krismas from '../images/krismas-unUkmr0NF8Q-unsplash.jpg';
import wenhao from '../images/wenhao-ryan-txuo6oDDDEM-unsplash.jpg';




function Music(){
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
          
         

        </div>
      </div>        
    );
}
export default Music;


        