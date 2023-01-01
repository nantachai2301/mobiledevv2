
import Post from './Post'
import { Comment } from "./Comment"
import { Card } from './Card';
import { Navbar } from './Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
    <Post userId="Dek_SE" message="Yeah,I got a grade A">
      <Comment userId="nantachai"message="Wow,dadaada"></Comment>
      <Comment userId="meno"message="ไอ้เอิทท"></Comment>
      
       </Post>

       <Card></Card>

    
    </div>
  );
}

export default App;
