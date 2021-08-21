import {useEffect, useState} from "react";
import {getAxiosUsers, getPostOfUser} from "./services/Services.users";


import Pos from "./components/pos/Pos";

export default function App() {
    let [users, setUsers] = useState([]);
    let [posts,setPost] = useState([])

    const getChosenPost = (id)=>{
        getPostOfUser(id).then(value => setPost([...value]));
    }

    useEffect(() => {
        getAxiosUsers().then(({data}) => setUsers([...data]));
    }, []);

const sets=(e)=>{
    getChosenPost(e.target.value)
}

  return (
    <div className="App"  >

        <select onChange={sets}>
        {
            users.map(UsersItem =>(<option value={"UsersItem.id"}>{UsersItem.name}</option>   ))
        }
            {
                posts.map(UsersItem =>(<Pos key={UsersItem.id} item={UsersItem}/>))
            }
        </select>
    </div>
  );
}

