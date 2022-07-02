import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const updateTodo = () => {
    const { id } = useParams();
    const [update, setUpdate]= useState(null);

    const updateProduct = (event) => {
        event.preventDefault();
        // const price = event.target.price.value;
        const title = event.target.title.value;
    
        const data = { title };
        const url = `http://localhost:4000/data/${id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("success", result);
            // alert("Update Successfully!!!");
            toast.success("Update Successfully!!!", {
              position: "top-center",
            });
            event.target.reset();
          });
        }
    return (
        <div>
            <input name='title' type="text" placeholder="Enter Your To-Do" class="input input-bordered" />
        </div>
    );
};

export default updateTodo;