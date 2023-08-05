import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Post() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function onSubmit() {
    axios
      .post('http://localhost:3001/posts', {
        title: title,
        body: body,
      })
      .then(() => {
        navigate('/blogs');
      });
  }

  return (
    <>
      <div className='my-3'>
        <label className='form-label'>Title</label>
        <input className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Body</label>
        <textarea className='form-control' value={body} onChange={(e) => setBody(e.target.value)} rows={10} />
      </div>

      <button className='btn btn-primary' onClick={onSubmit}>
        Post
      </button>
    </>
  );
}

export default Post;
