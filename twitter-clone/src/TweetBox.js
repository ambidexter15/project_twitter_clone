import { Avatar,Button } from '@material-ui/core';
import React, {useState} from 'react';
import "./TweetBox.css";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();

    
    db.collection("posts").add({
      displayName: "Akanksha Gupta",
      username: "mbidexter",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://s3.ap-south-1.amazonaws.com/feed-resources-dev/631aa6e5-35f8-41ac-b926-21c9aba94795/avatar/image/5eed684b-d9eb-4836-bb79-93298147eaa1.jpeg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
        <div className="tweetBox">
        <form>
        <div className="tweetBox__input">
        <Avatar src="https://s3.ap-south-1.amazonaws.com/feed-resources-dev/631aa6e5-35f8-41ac-b926-21c9aba94795/avatar/image/5eed684b-d9eb-4836-bb79-93298147eaa1.jpeg" />
          <input 
          onChange = {(e) => setTweetMessage(e.target.value)}
          value ={tweetMessage}
           placeholder="What's happening?" 
           type="text" />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>   
        </form>
        </div>
    );
}

export default TweetBox;
