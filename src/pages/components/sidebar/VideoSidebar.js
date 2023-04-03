import React,{useState} from "react";
import "./videoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({likes, messeges, shares}) {

  const[liked, setLiked] = useState(false)

  function handdlelike(){
    setLiked(!liked)
    
  }




  return (
    <div className="videosidebar">

      <div className="videosidebar__options"
      onClick={handdlelike}
      
      >
          {liked ? <FavoriteIcon fontSize="large"/> : <FavoriteBorderIcon fontSize="large"/>}
        
          <p>{liked ? likes + 1 : likes }</p>
      </div>

      <div className="videosidebar__options">
        <ChatIcon fontSize="large" />
        <p>{messeges}</p>
      </div>

      <div className="videosidebar__options">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>

    </div>
  );
}

export default VideoSidebar;
