import React from "react";
import Waste from "./Waste.png";
import Location from "./Location.png";
import Complaint from "./Complaint.png";
import Recycle from "./Recycle.png";
import Menstrl from "./Menstrl.png";
import {Link} from "react-router-dom"
export default function Card() {
  return (
    <div className="main">
        <div className="card" id="card" style={{ width: "18rem" }}>
          <img src={Waste} className="card-img-top" alt="/" id="cardImg" />
          <div className="card-body">
            <h5 id="cardText">Dry & Wet</h5>
            <p id="cardText">Learn categorizing wastes for better tommorow</p>
            <Link to="/wastes" className="btn btn-dark">
              Learn
            </Link>
          </div>
        </div>
        <div className="card text-center" id="card" style={{ width: "18rem" }}>
          <img src={Location} className="card-img-top" alt="/" id="cardImage2" />
          <div className="card-body">
            <h5 id="cardText">Dump Yards</h5>
            <p id="cardText">Learn categorizing wastes for better tommorow</p>
             <Link to="/location" className="btn btn-dark">
              Learn
             </Link>
          </div>
        </div>
        <div className="card text-center" id="card" style={{ width: "18rem" }}>
          <img src={Complaint} className="card-img-top" alt="/" id="cardImage2" />
          <div className="card-body">
            <h5 id="cardText">Complaint</h5>
            <p id="cardText">Learn categorizing wastes for better tommorow</p>
             <Link to="/complaint" className="btn btn-dark">
              Learn
             </Link>
          </div>
        </div>
        <div className="card" id="card" style={{ width: "18rem" }}>
          <img src={Menstrl} className="card-img-top" alt="/" id="cardImage3" />
          <div className="card-body">
            <h5 id="cardText">Wastes from menustralt</h5>
            <p id="cardText">Learn categorizing wastes for better tommorow</p>
             <Link to="/menstrual" className="btn btn-dark">
              Learn
             </Link>
          </div>
        </div>
        <div className="card" id="card" style={{ width: "18rem" }}>
          <img src={Recycle} className="card-img-top" alt="/" id="cardImage2" />
          <div className="card-body">
            <h5 id="cardText">Recycle</h5>
            <p id="cardText">Learn categorizing wastes for better tommorow</p>
             <Link to="/recyle" className="btn btn-dark">
              Learn
             </Link>
          </div>
        </div>
    </div>
  );
}
