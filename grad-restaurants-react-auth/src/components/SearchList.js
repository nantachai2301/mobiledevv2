import React from 'react'
import  Card  from './Card'
export const SearchList = ({filteredRestaurnats , handleDelete}) => {
    const filtered = filteredRestaurnats.map((restaurant)=>{
        return(<Card key={restaurant.id}
        restaurant={restaurant}
        handleDelete={handleDelete}/>)
    })
    return (
        <>{filtered}</>
  )
}

