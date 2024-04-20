import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { TbUpload } from "react-icons/tb";

const Button = ({ setUpdateUI }) => {
  const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", e.target.files[0]);

    axios
      .post("http://localhost:5000/api/save", formData)
      .then((res) => {
        console.log(res.data);
        setUpdateUI(res.data._id);
        toast.success("Image added");

      })
      .catch((err) => {
        toast.error("Please upload a valid image")
        console.log(err)
      });
  };

  return (
    <label className="button" htmlFor="file_picker">

      <div className="addicon">

        <TbUpload />
      </div>


      <input
        hidden
        type="file"
        name="file_picker"
        id="file_picker"
        onChange={(e) => handleChange(e)}
        accept="image/*"
      />
      {/* <Toaster /> */}

    </label>
  );
};

export default Button;
