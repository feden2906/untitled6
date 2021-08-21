import {useEffect, useState} from "react";
import {getAxiosUsers} from "./services/Services.users";

import Posts from "./components/post/Posts";

export default function App() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getAxiosUsers().then(({data}) => setUsers([...data]));
    }, []);

const info = ()=>{
    users.map(UsersItem =>(<Posts key={UsersItem.id} item={UsersItem.id}/>))
}

  return (
    <div className="App" onChange={info} >

        <select name="" id="">
        {
            users.map(UsersItem =>(<option value={"UsersItem.id"}>{UsersItem.name}</option>   ))
        }

        </select>
    </div>
  );
}

