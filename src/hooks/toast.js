import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

function useToast() {
  const toasts = useRef([]);
  const [, setToastRerender] = useState(false);

  function addToast(toast) {
    const id = uuidv4();
    const toastWithId = {
      ...toast,
      id: id,
    };

    // setToasts((prev) => [...prev, toastWithId]);
    toasts.current = [...toasts.current, toastWithId];
    setToastRerender((prev) => !prev);

    setTimeout(() => {
      deleteToast(id);
    }, 5000);
  }

  function deleteToast(id) {
    const filteredToasts = toasts.current.filter((toast) => {
      return toast.id !== id;
    });

    // setToasts(filteredToasts);
    toasts.current = filteredToasts;
    setToastRerender((prev) => !prev);
  }

  return [toasts.current, addToast, deleteToast];
}

export default useToast;
