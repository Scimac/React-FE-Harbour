import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostsCollection() {
    const [postIDInput, setPostID] = useState(1);
    const [post, setPost] = useState();
    const [postsArray, setPostsArray] = useState();
    const [searchPostID, setInputPost] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts'
            ).then((res)=>{
                setPostsArray(res.data);
            }).catch((err)=>{
                console.log(err);
            })
    }, []);

    useEffect(() => {
        if (searchPostID) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${searchPostID}`
            ).then((res)=>{
                setPost(res.data);
            }).catch((err)=>{
                console.log(err);
            });
        }
    },[searchPostID]);

    return (
        <div>
            <input 
                type="number" 
                value={postIDInput} 
                onChange={(e) => setPostID(e.target.value)}
                placeholder="Enter post number" />
            <button onClick={() => setInputPost(postIDInput)} >Search Post</button>
            <br/>
            <br/>
            { 
                post && <div>
                    <b><i>{post.title}</i></b>
                    <br/>
                    {post.body}
                </div> 
            }
            <br/>
            <br/>
            <hr/>
            <ul>
                {
                    postsArray && postsArray.map((post) => { 
                        return (
                            <li key={post.id}>
                                <b><i>{post.title}</i></b>
                                <br/>
                                {post.body}
                                <br/>
                                <br/>
                                <hr></hr>
                            </li>
                        ); 

                    })
                }
            </ul>
        </div>
    )
}

export default PostsCollection