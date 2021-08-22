import {useEffect, useState} from "react";
import {getAxiosUsers, getPostOfUser} from "./services/Services.users";


import Pos from "./components/pos/Pos";

export default function App() {
    let [users, setUsers] = useState([]);
    let [chosenUser, setChosenUser] = useState({});
    let [posts,setPost] = useState([])

    const getChosenPost = (id)=>{
        getPostOfUser(id).then(({data}) => setPost([...data]));
    }

    useEffect(() => {
        getAxiosUsers().then(({data}) => setUsers([...data]));
    }, []);

const sets=(e)=>{
    setChosenUser(e.target.value)
    getChosenPost(e.target.value)
}

  return (
    <div className="App"  >

        <select value={chosenUser} onChange={sets}>
        {
            users.map(UsersItem =>(<option value={UsersItem.id} key={UsersItem.id}>{UsersItem.name}</option>   ))
        }
        </select>
        {
            posts.map(UsersItem =>(<Pos key={UsersItem.id} item={UsersItem}/>))
        }
    </div>
  );
}

