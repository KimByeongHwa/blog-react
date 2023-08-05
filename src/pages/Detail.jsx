import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

function Detail() {
  const { id } = useParams(); // 변수명을 routes 경로 끝의 이름과 같게 해야 함.
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  function getPost(id) {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      setPost(res.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    getPost(id);
  }, [id]);

  function printDate(timeStamp) {
    return new Date(timeStamp).toLocaleString();
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className='d-flex'>
        <h1 className='flex-grow-1'>{post.title}</h1>
        <div>
          <Link to={`/blogs/${id}/edit`} className='btn btn-success'>
            Edit
          </Link>
        </div>
      </div>
      <small className='text-muted'>Created At: {printDate(post.createdTime)}</small>
      <hr />
      <p>{post.body}</p>
    </div>
  );
}

export default Detail;
