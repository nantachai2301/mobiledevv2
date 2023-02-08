import React from "react";
import { Stack, Box } from "@mui/material";
import { Loader } from "./";
import VideoCard from "./VideoCard";
const Videos = ({ videos, direction }) => {
  //console.log(videos);
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, index) => {
        console.log(item);
        return(
        <Box key={index}>
          <VideoCard video={item} />
          {item.id.videoID && <VideoCard video={item} />}
        </Box>
       );
      })}
    </Stack>
  );
};

export default Videos;
