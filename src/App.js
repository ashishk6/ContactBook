import "./styles.css";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./reducer/reducer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { Provider } from "react-redux";

export default function App() {
  let store = createStore(counterReducer, composeWithDevTools());

  const abc = () => console.log(store.getState());
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/addContact">
          <AddContact></AddContact>
        </Route>
        <Route path="/editContact">
          <EditContact></EditContact>
        </Route>
      </Router>
    </Provider>
  );
}
