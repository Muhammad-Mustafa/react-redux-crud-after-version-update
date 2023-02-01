import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../componenets/Button";
import TextFeild from "../componenets/TextField";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from "uuid";
const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValue({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
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
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
