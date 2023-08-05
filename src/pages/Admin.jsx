import { Link } from 'react-router-dom';
import Posts from '../components/Posts';

function Admin() {
  return (
    <>
      <div className='d-flex justify-content-between mb-3'>
        <h1>Admin</h1>
        <div>
          <Link to='/admin/create' className='btn btn-primary'>
            Create New Post
          </Link>
        </div>
      </div>
      <Posts isAdmin={true} />
    </>
  );
}

export default Admin;
