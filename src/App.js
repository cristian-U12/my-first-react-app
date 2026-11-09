import { BrowserRouter, Routes, Route } from 'react-router';

import Post from './blog/post.js';
import ContactPage from './contactpage/contactPage.js';


import './App.css';
import CommonLayout from './Layout/commonLayout.js';
import PostPage from './blogPostPage/blogPostsPage.js';


function App() {
  return (
    <BrowserRouter>
   
    <Routes>


    <Route element={<CommonLayout/>}>


    <Route path="/" element={<Post />} />
    <Route path="/contactPage" element={<ContactPage />} />
    <Route path="/individualPost/:post_id" element={<Post />}/>
    <Route path="/posts/:postId" element={<Post />}/>
    <Route path="/PostPage" element={<PostPage/>}/>

    
    </Route>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
