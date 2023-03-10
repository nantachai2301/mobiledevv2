import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { SearchList } from '../components/SearchList';
const Search = () => {
  const [searchField,setSearchField] = useState("");
  const [restaurants,setRestaurants] = useState ([]);

  const searchList = ()=>{
    return (
      <SearchList filteredRestaurnats={filteredRestaurnats}
        handleDelete={handleDelete}
        
        />
    );
  }
 useEffect(()=>{
        const fetchAllRestaurants = async () =>{
            try {
                const res = await axios.get("http://localhost:5000/apis/restaurants")
                setRestaurants(res.data)
            } catch(error){
                console.log(error);
            }
        }
        fetchAllRestaurants();
    },[])
  const handleChange = (e) =>{
    setSearchField(e.target.value)
  }
const handleDelete = async (id) =>{
        try{
        await axios.delete(`http://localhost:5000/apis/restaurants/${id}`);
        window.location.reload()
        }catch (error) {
            console.log(error)

        }
    }
    const filteredRestaurnats = restaurants.filter((restaurant)=>{
      return (restaurant.name.includes(searchField)||
      restaurant.type.includes(searchField)); //สิ่งที่ filer ค้นหาคือ สิ่งที่อยู่ใน return
    })


  return (
    <div className='container'>
      <h1>GrabRestarants</h1>
      <div className='row'>
      <input className='search'type="text" 
      placeholder='Search restaurant'
      onChange={handleChange}
      />
    </div>
    <div className='row'>
    <div className='restaurants'>{searchList()}</div>
    </div>
    </div>
  )
}

export default Search
