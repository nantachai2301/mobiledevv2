import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Box} from "@mui/material"
import {Feed, ChannelDetail, Search, VideoDetail} from "./pages";
import {Navbar}from "./commponents"

const App = () =>{
  return(
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/Video/:videoId" element={<VideoDetail/>} />
        <Route path="/Channel" element={<ChannelDetail/>} />
        <Route path="/Search/:searchId" element={<Search/>} />
      </Routes>
    </Box>
  </BrowserRouter>);
}


export default App;