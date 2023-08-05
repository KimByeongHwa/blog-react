import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { bool } from 'prop-types';

function Create({ editing }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [originalTitle, setOriginalTitle] = useState('');
  const [originalBody, setOriginalBody] = useState('');
  const [publish, setPublish] = useState(false);
  const [originalPublish, setOriginalPublish] = useState(false);

  useEffect(() => {
    if (editing) {
      axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
        setTitle(res.data.title);
        setBody(res.data.body);
        setOriginalTitle(res.data.title);
        setOriginalBody(res.data.body);
        setPublish(res.data.publish);
        setOriginalPublish(res.data.publish);
      });
    }
  }, [editing, id]);

  function isEdited() {
    return title !== originalTitle || body !== originalBody || publish !== originalPublish;
  }

  function onSubmit() {
    if (editing) {
      axios
        .patch(`http://localhost:3001/posts/${id}`, {
          title: title,
          body: body,
          publish: publish,
        })
        .then(() => {
          navigate(`/blogs/${id}`);
        });
    } else
      axios
        .post('http://localhost:3001/posts', {
          title: title,
          body: body,
          publish: publish,
          createdTime: Date.now(),
        })
        .then(() => {
          navigate('/blogs');
        });
  }

  function goBack() {
    navigate(-1);
  }

  function onChangePublish(e) {
    setPublish(e.target.checked);
  }

  return (
    <>
      <div className='my-3'>
        <h1>{editing ? 'Edit' : 'Create'} a blog post</h1>
        <label className='form-label'>Title</label>
        <input className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className='mb-3'>
        <label className='form-label'>Body</label>
        <textarea className='form-control' value={body} onChange={(e) => setBody(e.target.value)} rows={10} />
      </div>

      <div className='form-check mb-3'>
        <input className='form-check-input' type='checkbox' checked={publish} onChange={onChangePublish} />
        <label className='form-check-label'>Publish</label>
      </div>

      <button className='btn btn-primary' onClick={onSubmit} disabled={editing && !isEdited()}>
        {editing ? 'Edit' : 'Post'}
      </button>
      <button className='btn btn-danger ms-2' onClick={goBack}>
        Cancel
      </button>
    </>
  );
}

Create.propTypes = {
  editing: bool,
};

Create.defaultProps = {
  editing: false,
};

export default Create;
