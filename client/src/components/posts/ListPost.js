import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import "./post.scss";

const ListPost = ({ posts }) => {
   return (
      <Container>
         <div className="grid-container">
            {posts.map(post => (
               <Link to={`/blog/post/${post._id}`} key={post._id}>
                  <Post post={post} />
               </Link>
            ))}
         </div>
      </Container>
   );
};

ListPost.propTypes = {
   posts: PropTypes.array.isRequired
};

export default ListPost;
