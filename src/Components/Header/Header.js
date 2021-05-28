import React from "react";
import Popup from "../Popup/Popup";
import { pic } from "../../images/animation.gif";
import "./Header.css";

const Header = () => {
  return (
    <div className="container header_box">
      <div className="row">
        <div className="col-md-6">
          <h1 className="mb-5">Employ Global Talent</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            facilis vero quasi quas possimus, labore numquam ab assumenda
            tempore perspiciatis dolor, quae eaque sunt, nesciunt quia at dolore
            debitis nihil! Doloribus voluptatibus ipsam, harum aliquam eius
            officia quaerat illum recusandae ex voluptate maiores, officiis,
            debitis facere. Consequuntur veritatis error a officia nostrum
            asperiores alias eveniet magni laborum consectetur. Ad facere sint
            eius voluptate beatae! Odio corrupti, accusamus officia totam harum
            nostrum ad impedit veritatis perferendis nobis libero dolore fugiat
            molestias fuga ea id. Minus ipsum laudantium qui autem iusto ipsam
            rem, omnis sint ea sapiente. Aliquam nam voluptatum aliquid omnis!
          </p>
          <Popup></Popup>
        </div>
        <div className="col-md-6">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
