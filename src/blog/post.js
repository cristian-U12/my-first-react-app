import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import loadingGif from '../photos/loading.gif';





function Post() {



const { postId} = useParams();
const [loading, setLoading] = useState(true);

const [posts, setPosts] = useState([]);
const [users, setUsers] = useState([]);


useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => setPosts([response.data]))
    .catch(error => console.error('Error fetching post:', error))
    .finally(() => setLoading(false));
}, [postId]);

  
const post = posts.find((item) => item.id === parseInt(postId));

const userId = post?.userId;

useEffect(() => {
  if (!userId) return;
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => setUsers([response.data]))
      .catch(error => console.error('Error fetching user:', error));
  }, [userId]);

  const user =post?users.find((item) => item.id === post.userId): null;

  //adds a empty comment section
  const [comments, setComments] = useState([]);

  // fetches comments for the specific post from the API
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  }, [postId]);

  //holds the new comment data
  const [newComment, setNewComment] = useState({
    name: '',
    body: '',
  });

  function addComment(event) {
    event.preventDefault();

    const name = newComment.name.trim();
    const body = newComment.body.trim();
    if (!name || !body) return;

    axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      postId: parseInt(postId),
      name: name,
      body,
    })
      .then(response => {
        setComments((currentComments) => [
          ...currentComments,
          { name: response.data.name, body: response.data.body },
        ]);
        setNewComment({ name: '', body: '' });
      })
      .catch(error => console.error('Error posting comment:', error));


  }

  if (loading) {
    return <img src={loadingGif} alt="Loading..." />;
  }

  if (!post) {
    return <p>Post not found.</p>;
  }
  

  return (
    (
      
      <article id="post" className="Post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>

        <div className="post-meta">
          <p><strong>Author:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
        </div>

        <div className="comment-box">
          <form id="newComment" onSubmit={addComment}>
            <h2>Comments</h2>
            <input
              placeholder="Name"
              value={newComment.name}
              onChange={(event) =>
                setNewComment({ ...newComment, name: event.target.value })
              }
              required
            />
            <textarea
              id="comment-box"
              placeholder="Make a comment"
              value={newComment.body}
              onChange={(event) =>
                setNewComment({ ...newComment, body: event.target.value })
              }
              required
            />
            <button type="submit" id="submit-btn">Post</button>
          </form>
        </div>

        {comments.length === 0 ? (
          <p className='empty-comments'>There are no comments to display</p>
        ) : (
          <div className="comment-sec">
            <h3>Comment section</h3>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>
                  {comment.name && <strong>{comment.name}: </strong>}
                  {comment.body}
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    )
  );
}

export default Post;