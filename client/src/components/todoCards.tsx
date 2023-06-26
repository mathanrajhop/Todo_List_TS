import React from 'react'
import { dotoListInterFace } from '../interface';


const TodoCards: React.FC<dotoListInterFace> = (props) => {

    const {title, id} = props;

  return (
    <div className="card-item">
        {title}
    </div>
  )
}

export default TodoCards
