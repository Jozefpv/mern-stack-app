import React from 'react'
const ListedTask = ({item}) => {
    const {title, description} = item
    return(
          <li >
              <h5>{title}</h5>
              <p>{description}</p>
         </li>
        )
  }

  export default ListedTask;