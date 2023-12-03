import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BarGraph from "./BarGraph";

const LandingPage = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [userdata, setData] = useState({
    id: null,
    name: null,
    location: "",
    charge_customers: false,
    amount: {
      category_6: null,
      category_7: null,
      category_8: null,
      category_9: null,
      category_10: null,
    },
  });

  useEffect(() => {
    console.log(user);
    if (!user) navigate("/");
    else {
      getDashBoardDetails(user.uid);
    }
  }, [user]);

  const getDashBoardDetails = async (id) => {
    const data = await fetch("https://stg.dhunjam.in/account/admin/" + id, {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await data.json();
    console.log(json);
    if (json.data) {
      setData(json.data);
      // id: null,
      // name: null,
      // location: "",
      // charge_customers: false,
      // amount: {
      //   category_6: 100,
      //   category_7: 80,
      //   category_8: 60,
      //   category_9: 40,
      //   category_10: 20,
      // },
    }
  };

  const onValueChange = (event) => {
    console.log(event);
    if (event.target.name) {
      const amount = {
        ...userdata.amount,
        [event.target.name]: event.target.value,
      };
      setData((old) => ({ ...old, amount: amount }));
    }
  };

  const onChargeChange = (event) => {
    const flag = event.target.name === "yes" ? true : false;
    setData((old) => ({ ...old, charge_customers: flag }));
  };
  const adminPriceUpdate = async () => {
    const data = await fetch("https://stg.dhunjam.in/account/admin/"+user.uid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: userdata.amount }),
    });
    const json = await data.json();
    if (json && json.response === "Success") getDashBoardDetails(user.uid);
  };

  const isSaveDisabled = () => {
    const { category_6, category_7, category_8, category_9, category_10 } =
      userdata.amount;
    if (
      category_6 >= 99 &&
      category_7 >= 79 &&
      category_8 >= 59 &&
      category_9 >= 39 &&
      category_10 >= 19
    )
      return false;
    return true;
  };

  const handleSaveClick =() =>{
    adminPriceUpdate()
  }
  return (
    <div>
      <div className="adminDashboard">
        <h1>
          {userdata.name}, {userdata.location} On Dhun Jam
        </h1>
        <div className="songRequest">

          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="songInfo">
              <h3 className="songDescription">
                Do you want to charge your customers for requesting songs?
              </h3>
              <div className="userAction">
                <span className="radioButton">
                  <input
                    type="radio"
                    name="yes"
                    checked={!!userdata.charge_customers}
                    onChange={onChargeChange}
                  />
                  <label className="label">Yes</label>
                </span>
                <span className="labelButton">
                  <input
                    type="radio"
                    name="no"
                    checked={!userdata.charge_customers}
                    onChange={onChargeChange}
                  />
                  <label className="label">No</label>
                </span>
              </div>
            </div>
            <div className="songInfo">
              <h3 className="songDescription">Custom song request amount</h3>
              <div className="userAction">
                <input
                  className="input"
                  name="category_6"
                  min={99}
                  disabled={!userdata.charge_customers}
                  value={userdata.amount?.category_6}
                  onChange={onValueChange}
                />
              </div>
            </div>
            <div className="songInfo">
              <h3 className="songDescription">
                Regular song request amounts, from high to low
              </h3>
              <div className="userAction valueButton">
                <input
                  value={userdata.amount?.category_7}
                  name="category_7"
                  min={79}
                  disabled={!userdata.charge_customers}
                  onChange={onValueChange}
                />
                <input
                  value={userdata.amount?.category_8}
                  name="category_8"
                  min={59}
                  disabled={!userdata.charge_customers}
                  onChange={onValueChange}
                />
                <input
                  value={userdata.amount?.category_9}
                  name="category_9"
                  min={39}
                  disabled={!userdata.charge_customers}
                  onChange={onValueChange}
                />
                <input
                  value={userdata.amount?.category_10}
                  name="category_10"
                  min={19}
                  disabled={!userdata.charge_customers}
                  onChange={onValueChange}
                />
              </div>
            </div>
            <BarGraph graphData={userdata.amount} />

            <button
              className="saveButton"
              onClick={handleSaveClick}
              disabled={(!userdata.charge_customers || !!isSaveDisabled())}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
