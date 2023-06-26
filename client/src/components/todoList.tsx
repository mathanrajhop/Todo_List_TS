import React from 'react'
import { dotoListPropsInterFace } from '../interface';
import TodoCards from './todoCards';


const TodoList: React.FC<dotoListPropsInterFace> = (props) => {

    const {todoList, setTodoList} = props;

  return (
    <div className="row">
        <div className="section">
          <h3>Pending</h3>
          <div className="card-list">
            {
                todoList.isPending.map((val) => (<TodoCards title={val.title} id={val.id} key={val.id}/>
            ))
            }
          </div>
        </div>
        <div className="section">
          <h3>Completed</h3>
          <div className="card-list">
          {
                todoList.isDone.map((val) => (<TodoCards title={val.title} id={val.id} key={val.id}/>
            ))
            }
          </div>
        </div>
      </div>
  )
}

export default TodoList
