import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import Card from '../components/Card';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { bool } from 'prop-types';
import Pagination from './Pagination';

function Posts({ isAdmin }) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pageParam = params.get('page');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 5;

  useEffect(() => {
    setTotalPages(Math.ceil(totalPosts / limit));
  }, [totalPosts]);

  function onClickPageButton(page) {
    navigate(`${location.pathname}?page=${page}`);
    getPosts(page);
  }

  function getPosts(page = 1) {
    let params = {
      _page: page,
      _limit: 5,
      _sort: 'id',
      _order: 'desc',
    };

    if (!isAdmin) {
      params = { ...params, publish: true };
    }

    axios
      .get(`http://localhost:3001/posts`, {
        params: params,
      })
      .then((res) => {
        setTotalPosts(parseInt(res.headers['x-total-count']));
        setPosts(res.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    setCurrentPage(parseInt(pageParam) || 1);
    getPosts(parseInt(pageParam || 1));
  }, [pageParam]);

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

  function renderPosts() {
    return posts.map((post) => {
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

  if (loading) return <LoadingSpinner />;

  if (posts.length === 0) {
    return <div>게시글이 존재하지 않습니다.</div>;
  }

  return (
    <div>
      {renderPosts()}
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onClick={onClickPageButton} />}
    </div>
  );
}

Posts.propTypes = {
  isAdmin: bool,
};

Posts.defaultProps = {
  isAdmin: false,
};

export default Posts;
