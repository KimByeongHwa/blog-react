import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Card from '../components/Card';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import propTypes from 'prop-types';
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
  const [searchText, setSearchText] = useState('');
  const limit = 5;

  useEffect(() => {
    setTotalPages(Math.ceil(totalPosts / limit));
  }, [totalPosts]);

  function onClickPageButton(page) {
    navigate(`${location.pathname}?page=${page}`);
    setCurrentPage(page);
    getPosts(page);
  }

  const getPosts = useCallback(
    (page = 1) => {
      let params = {
        _page: page,
        _limit: 5,
        _sort: 'id',
        _order: 'desc',
        title_like: searchText,
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
    },
    [isAdmin, searchText]
  );

  useEffect(() => {
    setCurrentPage(parseInt(pageParam) || 1);
    getPosts(parseInt(pageParam || 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  function onSearch(e) {
    if (e.key === 'Enter') {
      navigate(`${location.pathname}?page=1`);
      setCurrentPage(1);
      getPosts(1);
    }
  }

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <input
        type='text'
        className='form-control'
        placeholder='Search...'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={onSearch}
      />
      <hr />
      {posts.length === 0 ? (
        <div>No search results found</div>
      ) : (
        <>
          {renderPosts()}
          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onClick={onClickPageButton} />
          )}
        </>
      )}
    </div>
  );
}

Posts.propTypes = {
  isAdmin: propTypes.bool,
};

Posts.defaultProps = {
  isAdmin: false,
};

export default Posts;
