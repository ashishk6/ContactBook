import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const abc = useSelector((state) => state);
  const abcd = () => console.log(abc);
  const list = abc.map((xyz) => (
    <>
      <tr>
        <td>{xyz.name}</td>
        <td>{xyz.mobile}</td>
        <td>{xyz.address}</td>
        <td>
          <button>Edit</button>
        </td>
        <td>
          <button>Delete</button>
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
