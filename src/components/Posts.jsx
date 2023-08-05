import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { bool } from 'prop-types';

function Posts({ isAdmin }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  function getPosts() {
    axios.get('http://localhost:3001/posts').then((res) => {
      setPosts(res.data);
      setLoading(false);
    });
  }

  // 삭제 방법 1
  function deletePost(e, id) {
    e.stopPropagation();
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    });
  }

  // 삭제 방법 2
  // function deletePost(e, id) {
  //   e.stopPropagation();
  //   axios.delete(`http://localhost:3001/posts/${id}`);
  // }

  // useEffect(() => {
  //   getPosts();
  // }, [posts]);

  useEffect(() => {
    getPosts();
  }, []);

  function renderPosts() {
    if (loading) return <LoadingSpinner />;

    if (posts.length === 0) {
      return <div>게시글이 존재하지 않습니다.</div>;
    }

    return posts
      .filter((post) => {
        return isAdmin || post.publish;
      })
      .map((post) => {
        return (
          <Card key={post.id} title={post.title} onClick={() => navigate(`/blogs/${post.id}`)}>
            {isAdmin ? (
              <div>
                <button className='btn btn-danger btn-sm' onClick={(e) => deletePost(e, post.id)}>
                  Delete
                </button>
              </div>
            ) : null}
          </Card>
        );
      });
  }

  return <div>{renderPosts()}</div>;
}

Posts.propTypes = {
  isAdmin: bool,
};

Posts.defaultProps = {
  isAdmin: false,
};

export default Posts;
