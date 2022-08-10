import anim from "./../images/anim.jpg";
import dance from "./../images/dance.png";
import eat from "./../images/eat.jpg";
import flow from "./../images/flow.jpg";
import hand from "./../images/hand.jpg";
import haus from "./../images/haus.jpg";
import lit from "./../images/lit.jpg";
import mam from "./../images/mam.jpg";
import mast from "./../images/mast.jpg";
import mil from "./../images/mil.jpg";
import mon from "./../images/mon.jpg";
import nig from "./../images/nig.jpg";
import umb from "./../images/umb.jpg";

import './gallery.css'

const gallery = ()=> {
    return (
      <div className="slide">
        <div className="gallery">
          <div className="img-card">
            <div className="img">
              <img src={anim} alt="anim" />
            </div>
            <p>artsyy</p>
            900$
          </div>
          <div className="img-card">
            <div className="img">
              <img src={umb} alt="anim" />
            </div>
            <p>artsyy</p>
            900$
          </div>
          <div className="img-card">
            <div className="img">
              <img src={nig} alt="anim" />
            </div>
            <p>artsyy</p>
            900$
          </div>
          <div className="img-card">
            <div className="img">
              <img src={mam} alt="anim" />
            </div>
            <p>artsyy</p>
            900$
          </div>
          <div className="img-card">
            <div className="img">
              <img src={flow} alt="anim" />
            </div>
            <p>artsyy</p>
            900$
          </div>
          <div className="img-card">
            <div className="img">
              <img src={lit} alt="anim" />
            </div>
            <p>artsyy</p>
            900$
          </div>
          
        </div>
      </div>
    );
}

export default gallery