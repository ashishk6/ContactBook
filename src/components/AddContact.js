import { useState } from "react";
import { useDispatch } from "react-redux";

const { Link } = require("react-router-dom");

function AddContact() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(0);
  const [address, setAddress] = useState("");

  // const getName = (event) => setName(event.target.value);
  const getMobile = (event) => setMobile(event.target.value);
  const getAddress = (event) => setAddress(event.target.value);

  const final = { name: name, mobile: mobile, address: address };
  const final_record = () => dispatch({ type: "ADD_CONTACT", payload: final });

  //const getName = (event) => console.log(event.target.value);
  //const getMobile = (event) => console.log(event.target.value);
  //const getAddress = (event) => console.log(event.target.value);

  return (
    <div>
      <h1>AddContact Component</h1>
      Name:{" "}
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
      ></input>{" "}
      <br />
      Mobile: <input type="number" onChange={getMobile}></input>
      <br />
      Adresss: <input type="textarea" onChange={getAddress}></input>
      <br />
      <button onClick={final_record}>
        <Link to="/">Submit</Link>
      </button>
      <button>
        <Link to="/">Back</Link>
      </button>
      <button>Reset</button>
    </div>
  );
}
export default AddContact;
