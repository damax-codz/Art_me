import anim from "../../components/images/anim.jpg";
import dance from "../../components/images/dance.png";
import eat from "../../components/images/eat.jpg";
import flow from "../../components/images/flow.jpg";
import hand from "../../components/images/hand.jpg";
import haus from "../../components/images/haus.jpg";
import lit from "../../components/images/lit.jpg";
import mam from "../../components/images/mam.jpg";
import mast from "../../components/images/mast.jpg";
import mil from "../../components/images/mil.jpg";
import mon from "../../components/images/mon.jpg";
import nig from "../../components/images/nig.jpg";
import umb from "../../components/images/umb.jpg";

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