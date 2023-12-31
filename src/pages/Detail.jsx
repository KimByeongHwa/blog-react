import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import useToast from '../hooks/toast';

function Detail() {
  const { id } = useParams(); // 변수명을 routes 경로 끝의 이름과 같게 해야 함.
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { addToast } = useToast;

  function getPost(id) {
    axios
      .get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setError('Something went wrong in DB');
        addToast({
          text: 'Something went wrong in DB',
          type: 'danger',
        });
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

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className='d-flex'>
        <h1 className='flex-grow-1'>{post.title}</h1>
        <div>
          <Link to={`/admin/${id}/edit`} className='btn btn-success'>
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
