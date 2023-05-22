import React from "react";

import { ToastContainer, toast } from "react-toastify";

function ToastExample() {
  const notify = () =>
    toast.success("Bienvenido a mi app!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default ToastExample;
