import React,{useState} from 'react'
import AddActivity from '../components/AddActivity'

const Workout = () => {
    const [add, setAdd]= useState(false);
    const handleClick =()=>{
        setAdd(!add)
    };
    
    
  return (
    <div className='workouts-wrapper'>
       <h2> Workout </h2>
       <button onClick={handleClick}>Add activity</button>
        {add && <AddActivity/>}
        </div>

  )
}

export default Workout