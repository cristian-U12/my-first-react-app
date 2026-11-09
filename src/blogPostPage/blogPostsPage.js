import React from 'react';
import { Link } from 'react-router';
import {useEffect, useState} from 'react';
import axios from 'axios';
import loadingGif from '../photos/loading.gif';

function PostPage() {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => setPosts(response.data))
    .catch(error => console.error('Error fetching posts:', error)).finally(() => setLoading(false));
  }, []);

  return (

    <ul className='pageList'>
     { loading ? (
       <img src={loadingGif} alt="Loading..." />
      ) : (
     
     
     posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      )))}
    </ul>
  
  );
}

export default PostPage;