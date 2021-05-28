import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./UserInfo.css";

const UserInfo = (props) => {
  const { _id, name, phone, email, hobbies } = props.user;
  const [updateData, setUpdateData] = useState({});
  const [selectedData, setSelectedData] = useState([]);
  const [items, setItems] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("https://glacial-brushlands-61037.herokuapp.com/showData")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  // let others = [];
  // const selectedItem = (id) => {
  //   let sameitems = items.find((item) => item._id === id);
  //   others.push(sameitems);

  //   // let newList;
  //   // newList = [...others, sameitems];
  //   // setSelectedData(newList);
  //   console.log(others);
  // };

  const updateUserInfo = (id) => {
    fetch(`https://glacial-brushlands-61037.herokuapp.com/updateUser/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateData(data);
        setIsTrue(true);
      });
  };
  const onSubmit = (data) => {
    const id = data.id;
    const updateName = data.name;
    const updatePhone = data.phone;
    const updateEmail = data.email;
    const updateHobbies = data.hobbies;
    const updateAll = {
      id,
      updateName,
      updatePhone,
      updateEmail,
      updateHobbies,
    };
    fetch(`https://glacial-brushlands-61037.herokuapp.com/update/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updateAll),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert(" updated successfully");
        }
      });

    console.log(data);
  };

  const deleteUserInfo = (id) => {
    fetch(`https://glacial-brushlands-61037.herokuapp.com/deleteUser/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Delete Done");
        }
      });
  };

  return (
    <div className="full_table_box">
      <input type="checkbox" onClick={() => props.selectedItem(_id)} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="table_box">
          <div>
            {_id}
            <input
              style={{ display: "none" }}
              defaultValue={_id}
              {...register("id")}
            />
          </div>
          <div>
            {isTrue ? (
              <input
                type=" name"
                {...register("name")}
                defaultValue={updateData.name}
              />
            ) : (
              <p>{name}</p>
            )}
          </div>
          <div>
            {isTrue ? (
              <input
                type="tel"
                {...register("phone")}
                defaultValue={updateData.phone}
              />
            ) : (
              <p>{phone}</p>
            )}
          </div>
          <div>
            {isTrue ? (
              <input {...register("email")} defaultValue={updateData.email} />
            ) : (
              <p>{email}</p>
            )}
          </div>
          <div>
            {isTrue ? (
              <input
                {...register("hobbies")}
                defaultValue={updateData.hobbies}
              />
            ) : (
              <p>{hobbies}</p>
            )}
          </div>
          <div>
            {isTrue && (
              <button type=" submit" className="btn btn-primary">
                submit
              </button>
            )}
          </div>
        </div>
      </form>
      <div className="button_box">
        <button
          style={{ width: "100px" }}
          className="btn btn-success "
          onClick={() => updateUserInfo(_id)}
        >
          Update
        </button>
        <button
          style={{ width: "100px" }}
          className="btn btn-danger "
          onClick={() => deleteUserInfo(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
