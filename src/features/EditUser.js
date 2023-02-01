import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../componenets/Button";
import TextFeild from "../componenets/TextField";
import { editUser } from "./userSlice";
const EditUser = () => {
  const navigate = useNavigate();
  const parms = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  const existingUsers = users.filter((users) => users.id === parms.id);
  const { name, email } = existingUsers[0];
  const [value, setValue] = useState({
    name: name,
    email: email,
  });

  const handleEditUser = () => {
    setValue({ name: "", email: "" });
    dispatch(
      editUser({
        id: parms.id,
        name: value.name,
        email: value.email,
      })
    );
    navigate("/");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextFeild
        label="Name"
        value={value.name}
        onChange={(e) => setValue({ ...value, name: e.target.value })}
        imputProps={{ type: "text", placeholder: " Mustafa" }}
      />
      <br />
      <TextFeild
        label="Email"
        value={value.email}
        onChange={(e) => setValue({ ...value, email: e.target.value })}
        imputProps={{ type: "email", placeholder: " Mustafa" }}
      />
      <Button onClick={handleEditUser}>EDIT</Button>
    </div>
  );
};
export default EditUser;
