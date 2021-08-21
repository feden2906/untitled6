import {useEffect, useState} from "react";
import {getPostOfUser} from "../../services/Services.users";
import Pos from "../pos/Pos";

export default function Posts({item}){
let [posts,setPosts] = useState([]);

useEffect(()=>{
    getPostOfUser(item).then(({data})=>setPosts([data]));
})
    return (
        <div className="Posts" >
            {
                posts.map(PostsItem => <Pos key={item} item={PostsItem}/>)
            }
        </div>
    );
}
