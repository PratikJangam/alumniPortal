import React from "react";
import "./MessageSender.css";

// icons
import { Avatar } from "@material-ui/core";
import { VideoCall, Photo, InsertEmoticon } from "@material-ui/icons";

// context api

// database
const MessageSender = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="message-width">
        <div className="messageSender">
          <div className="messageSenderTop">
            <Avatar src={" "} />
            <form>
              <input
                className="messageSenderInput"
                placeholder={"What's on your mind"}
              />
              <input placeholder={"Image URL (Optional)"} />
            </form>
          </div>

          <div className="messageSenderBottom">
            <div className="messageSenderOption">
              <VideoCall style={{ color: "black" }} />
              <h3>Live Video</h3>
            </div>

            <div className="messageSenderOption">
              <Photo style={{ color: "blue" }} />
              <h3>Photo/Video</h3>
            </div>

            <div className="messageSenderOption">
              <InsertEmoticon style={{ color: "orange" }} />
              <h3>Feeling/Activity</h3>
            </div>

            <div className="messageSenderOption">
              <button
                class="btn btn-warning pull-right"
                onClick={handleSubmit}
                type="submit"
              >
                Post
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default MessageSender;
