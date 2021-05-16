import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const { Link, useParams } = require("react-router-dom");

function EditContact() {
  const abc = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [name, setName] = useState(abc[id].name);
  const [mobile, setMobile] = useState(abc[id].mobile);
  const [address, setAddress] = useState(abc[id].address);

  // const getName = (event) => setName(event.target.value);
  const getMobile = (event) => setMobile(event.target.value);
  const getAddress = (event) => setAddress(event.target.value);

  abc[id] = { name: name, mobile: mobile, address: address };
  const final_record = () => dispatch({ type: "EDIT_CONTACT", payload: abc });

  //const getName = (event) => console.log(event.target.value);
  //const getMobile = (event) => console.log(event.target.value);
  //const getAddress = (event) => console.log(event.target.value);

  return (
    <div>
      <h1>EditContact Component</h1>
      Name:{" "}
      <input
        defaultValue={abc[id].name}
        type="text"
        onChange={(event) => setName(event.target.value)}
      ></input>{" "}
      <br />
      Mobile:{" "}
      <input
        defaultValue={abc[id].mobile}
        type="number"
        onChange={getMobile}
      ></input>
      <br />
      Adresss:{" "}
      <input
        type="textarea"
        defaultValue={abc[id].address}
        onChange={getAddress}
      ></input>
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
export default EditContact;
