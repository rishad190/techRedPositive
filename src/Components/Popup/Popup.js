import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Popup = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    closeModal();
    console.log(data);
    fetch("http://localhost:5000/addData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res) {
        alert("Add Information");
      }
    });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        GIVE INFORMATION NOW !
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={closeModal}>close</button> */}
        <h1>Form</h1>
        <form style={{ width: "500px" }} onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3 ">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="name"
              class="form-control"
              id="name"
              placeholder="Enter your Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">
              Phone
            </label>
            <input
              type="tel"
              class="form-control"
              id="phone"
              placeholder="+8801**********"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>
          <div class="mb-3">
            <label for="hobbies" class="form-label">
              Hobbies
            </label>
            <input
              type="text"
              class="form-control"
              id="hobbies"
              placeholder="like:drawing"
              {...register("hobbies", { required: true })}
            />
            {errors.hobbies && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>

          <button className="btn btn-primary" onClick={openModal} type="submit">
            Done
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Popup;
