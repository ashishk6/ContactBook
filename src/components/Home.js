import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const abc = useSelector((state) => state);
  const dispatch = useDispatch();
  function deleteContact(i) {
    console.log(i);
    dispatch({ type: "DELETE_CONTACT", payload: i });
  }

  const abcd = () => console.log(abc);
  const list = abc.map((xyz, i) => (
    <>
      <tr>
        <td>{xyz.name}</td>
        <td>{xyz.mobile}</td>
        <td>{xyz.address}</td>
        <td>
          <button>
            <Link to={"/editContact/" + i}>Edit</Link>
          </button>
        </td>
        <td>
          <button onClick={() => deleteContact(i)}>Delete</button>
        </td>
      </tr>
    </>
  ));
  return (
    <div>
      <h1>Home Component</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Phone No</th>
          <th>Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>

        {list}
      </table>

      <button>
        <Link to="/addContact">Add Contact</Link>
      </button>
    </div>
  );
}
export default Home;
