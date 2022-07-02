import React, { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';

const TodoList = () => {
    const [todos, setTodos]= useState([])

    useEffect(() => {
        fetch("https://tranquil-plateau-93863.herokuapp.com/datas")
          .then((res) => res.json())
          .then((data) => setTodos(data));
      }, []);
    return (
        <div class="m-20 overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        
        <th>Title</th>
        <th>Date</th>
        <th>Edid</th>
    
      </tr>
    </thead>
    <tbody>
     
      {
todos.map((todo)=> <tr key={todo._id}>

<td>{todo.title}</td>
<th>{todo.date}</th>
<td><BiEdit className='text-lg font-bold'/></td>

</tr>)
      }
   
      
    </tbody>
  </table>
</div>
    );
};

export default TodoList;