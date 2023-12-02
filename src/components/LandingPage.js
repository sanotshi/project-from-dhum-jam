import React from "react";
import BarGraph from "./BarGraph";

const LandingPage = () => {
  return (
    <div>
      <div className="adminDashboard">
        <h1>Social,Hebbal On Dhun Jam</h1>
        <div className="songRequest">
          <form>
            <div className="songInfo">
              <h3 className="songDescription">
                Do you want to charge your customers for requesting songs?
              </h3>
              <span className="radioButton">
                <input type="radio" />
                <label className="label">Yes</label>
              </span>
              <span className="labelButton">
                <input type="radio"  />
                <label className="label">No</label>
              </span>
            </div>
            <div className="songInfo">
              <h3 className="songDescription">Custom song request amount</h3>
              <input className="input" value={444}/>
            </div>
            <div className="songInfo">
              <h3 className="songDescription">
                Regular song request amounts, from high to low
              </h3>
              <div className="valueButton">
              <input value={199}/>
              <input value={149}/>
              <input value={99}/>
              <input value={49}/>

              </div>
            </div>
          </form>
        </div>
      </div>
      <BarGraph />
    </div>
  );
};

export default LandingPage;
