import React, { useEffect, useState } from "react";
import UserInfo from "../UserInfo/UserInfo";
// import { init, sendForm } from "emailjs-com";
// init("user_hYcCEKE1swKnj0zgWshjG");

const TableData = () => {
  const [userInfo, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/showData")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  let sortData = userInfo.sort();
  console.log(sortData);
  let others = [];
  const selectedItem = (id) => {
    let sameitems = userInfo.find((item) => item._id === id);
    others.push(sameitems);

    // let newList;
    // newList = [...others, sameitems];
    // setSelectedData(newList);
    console.log(others);
  };
  const sendMail = () => {};

  return (
    <div className="container " style={{ marginBottom: "100px" }}>
      <div className="row">
        {userInfo.map((user) => (
          <UserInfo
            key={user._id}
            user={user}
            selectedItem={selectedItem}
          ></UserInfo>
        ))}
      </div>
      <button onClick={sendMail} className="btn btn-primary">
        Send Mail
      </button>
    </div>
  );
};

export default TableData;
