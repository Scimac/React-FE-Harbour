import { useReducer, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from "./redux/reducer/userReducer";

// function reducerFunction (state, action) {
//   switch (action.type) {
//     case "addUser":      
//       return [...state, `User ${state?.length + 1}`];
//     case "removeUser":
//       let updatedState = [...state]
//       updatedState?.splice(action.payload, 1);
//       return [...updatedState]
//     default:
//       return state;
//   }
// };

function App() {
  // const [usersList, setUsersList] = useState([]);

  // const handleAddUser = (usersList) => {
  //   return setUsersList(prev => [...prev, `User ${usersList?.length + 1}`]);
  // };

  // const handleRemoveUser = (userIndex) => {
  //   return setUsersList(prev => {
  //     let updatedState = prev?.splice(userIndex, 1);
  //     return [...prev]
  //   });
  // };

  // const [usersList, dispatch] = useReducer(reducerFunction, []);

  // return (
  //   <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
  //     <ul>
  //       {usersList?.length > 0 && usersList.map((user, index) => {
  //         return <li>
  //           <span style={{ paddingInline: "1rem"}}>{user}</span>
  //           <button style={{ margin: "1rem"}}  onClick={() => dispatch({type: "removeUser", payload: index})} >remove user</button>
  //         </li>
  //       })}
  //     </ul>
  //     <button style={{ margin: "1rem", height: "4rem"}} onClick={() => dispatch({type: "addUser"})} >Add user</button>
  //   </div>
  // );

  // useDispatch 
  // useSelectors
  const usersList = useSelector(state => state.userList.userList);
  const dispatch = useDispatch();

  return (
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
        <ul>
          {usersList?.length > 0 && usersList.map((user, index) => {
            return <li>
              <span style={{ paddingInline: "1rem"}}>{user}</span>
              <button style={{ margin: "1rem"}}  onClick={() => dispatch(removeUser({payload: index}))} >remove user</button>
            </li>
          })}
        </ul>
        <button style={{ margin: "1rem", height: "4rem"}} onClick={() => dispatch(addUser({}))} >Add user</button>
      </div>
  );
}

export default App;
