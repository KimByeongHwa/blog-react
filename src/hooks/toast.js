import { v4 as uuidv4 } from 'uuid';
import { addToast as add, removeToast } from '../store/toastSlice';
import { useDispatch } from 'react-redux';

function useToast() {
  const dispatch = useDispatch();

  function addToast(toast) {
    const id = uuidv4();
    const toastWithId = {
      ...toast,
      id: id,
    };

    dispatch(add(toastWithId));

    setTimeout(() => {
      deleteToast(id);
    }, 5000);
  }

  function deleteToast(id) {
    dispatch(removeToast(id));
  }

  return { addToast: addToast, deleteToast: deleteToast };
}

export default useToast;
