import { format } from 'date-fns';
import React, { useState } from 'react';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { toast } from "react-toastify";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Home = () => {
 
  const [selected, setSelected] =useState(new Date() );
  const formattedDate = format(selected, "PP");
  
  const handleBooking = (event) => {
    event.preventDefault();
    
    const createTodo ={
      date: formattedDate,
      title: event.target.title.value
    }
    fetch("https://tranquil-plateau-93863.herokuapp.com/createTodo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          
          toast.success("To-Do is Listed", {
            position: "top-center",
          });
          event.target.reset();
        }
        
      });
  }
  return (
    <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
      <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            
    />
    
      </div>
      <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <div class="card-body">
         <form onSubmit={handleBooking}>
         <div class="form-control">
            
            <input
              type="text"
              disabled
              value={format(selected, "PP")}
              className="w-full max-w-lg input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
           
            <input name='title' type="text" placeholder="Enter Your To-Do" class="input input-bordered" />
           
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary gap-1"><HiOutlinePlusSm className='text-lg font-bold'/> Add</button>
          </div>
         </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;