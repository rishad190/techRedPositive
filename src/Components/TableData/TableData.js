import React, { useEffect, useState } from "react";
import UserInfo from "../UserInfo/UserInfo";
// import { init, sendForm } from "emailjs-com";
// init("user_hYcCEKE1swKnj0zgWshjG");

const TableData = () => {
  const [userInfo, setUser] = useState([]);

  useEffect(() => {
    fetch("https://glacial-brushlands-61037.herokuapp.com/showData")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  let others = [];
  const selectedItem = (id) => {
    let sameitems = userInfo.find((item) => item._id === id);
    others.push(sameitems);

    console.log(others);
  };
  const sendMail = () => {
    console.log(others);
    fetch("https://glacial-brushlands-61037.herokuapp.com/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(others),
    }).then((res) => {
      if (res) {
        alert("Add Information");
      }
    });
  };

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
