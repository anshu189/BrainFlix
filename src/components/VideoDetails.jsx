import React, { useEffect, useState } from "react";
import videosData from "../Data/videos.json";
import videosDetailsData from "../Data/videosDetails.json";
import likesicon from "../assets/likes.svg";
import viewsicon from "../assets/views.svg";
import pfpicon from "../assets/pfp.svg";
import commenticon from "../assets/comment.svg";
import commentpfpicon from "../assets/commentpfp.svg";

const VideoDetails = () => {
  var updatedLocalVideoData = videosData;
  updatedLocalVideoData = updatedLocalVideoData.filter(
    (video) => video.id !== "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [LocalVideoData, setLocalVideoData] = useState(updatedLocalVideoData);

  const [selectedVideo, setSelectedVideo] = useState({
    id: "84e96018-4022-434e-80bf-000ce4cd12b8",
    title: "BMX Rampage: 2021 Highlights",
    channel: "Red Cow",
    image: "https://project-2-api.herokuapp.com/images/image0.jpg",
    description:
      "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
    views: "1,001,023",
    likes: "110,985",
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1626032763000,
    comments: [
      {
        id: "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
        likes: 0,
        timestamp: 1628522461000,
      },
      {
        id: "091de676-61af-4ee6-90de-3a7a53af7521",
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        likes: 0,
        timestamp: 1626359541000,
      },
      {
        id: "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
        likes: 0,
        timestamp: 1626011132000,
      },
    ],
  });

  const handleVideoSelect = (videoId) => {
    const videoDetails = videosDetailsData.find(
      (video) => video.id === videoId
    );
    updatedLocalVideoData = videosData;
    updatedLocalVideoData = updatedLocalVideoData.filter(
      (video) => video.id !== videoId
    );
    setLocalVideoData(updatedLocalVideoData);
    setSelectedVideo(videoDetails);
  };

  // Function to format timestamp into "MM/DD/YYYY" format
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  // Convert timestamps in comments to desired format
  const formattedComments = selectedVideo.comments.map((comment) => ({
    ...comment,
    timestamp: formatDate(comment.timestamp),
  }));

  // Convert timestamp of the main video to desired format
  const formattedVideo = {
    ...selectedVideo,
    timestamp: formatDate(selectedVideo.timestamp),
    comments: formattedComments,
  };

  return (
    <div className="w-[100%]">
      {formattedVideo && (
        <>
          <div className="bg-black h-[65vh] relative flex items-center justify-center overflow-hidden">
            <img
              src={formattedVideo.image}
              alt=""
              className="bg-cover h-full w-[50%]"
            />
          </div>
          <div className="flex justify-center">
            <div className="w-[65%] flex justify-end">
              <div className="w-[90%] py-10 flex flex-col items-start justify-start gap-6">
                <div className="text-4xl font-bold">{formattedVideo.title}</div>
                <div className="w-full flex justify-between items-center">
                  <div className="w-full flex text-sm gap-8 items-center">
                    <div className="font-bold">By {formattedVideo.channel}</div>
                    <div className="text-[#999999]">
                      {formattedVideo.timestamp}
                    </div>
                  </div>
                  <div className="w-full flex gap-4 items-center justify-end px-6">
                    <div className="flex gap-4">
                      <img src={viewsicon} alt="Total Views" className="w-6" />
                      <div>{formattedVideo.views}</div>
                    </div>
                    <div className="flex gap-4">
                      <img src={likesicon} alt="Total Likes" className="w-6" />
                      <div>{formattedVideo.likes}</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-black border-[1px] border-[#dddddd]"></div>
                <div className="pr-6">{formattedVideo.description}</div>

                <div className="w-full flex flex-col items-start justify-center gap-4">
                  <div className="font-bold">
                    {formattedVideo.comments.length} Comments
                  </div>
                  <div className="w-full flex items-end justify-center gap-10 pb-6">
                    <a href="/">
                      <img
                        src={pfpicon}
                        alt=""
                        className="w-12 shadow-[inset_0_0_8px_0_rgba(0,0,0,0.2)] h-12 border-none outline-none cursor-pointer rounded-full"
                      />
                    </a>
                    <div className="w-[60%] flex flex-col items-start gap-2">
                      <div className="text-[#999999]">
                        JOIN THE CONVERSATION
                      </div>
                      <input
                        type="text"
                        placeholder="Add a new comment"
                        className="w-full py-[10px] outline-none px-4 border-[1px] border-[#dddddd] rounded-md"
                      />
                    </div>
                    <div className="flex items-center relative">
                      <img
                        src={commenticon}
                        alt=""
                        className="w-4 absolute ml-4"
                      />
                      <a
                        href="/"
                        className="w-[100%] py-[10px] px-12 bg-[#0095FF] text-white border-none cursor-pointer duration-500 hover:shadow-[0_5px_10px_0_rgba(0,0,0,0.15)] outline-none border-[1px] border-[#999999] rounded-md"
                      >
                        COMMENT
                      </a>
                    </div>
                  </div>
                  {formattedVideo.comments.map((items) => (
                    <div className="w-full flex items-center justify-center gap-10 py-4 border-t-[1px] border-[#dddddd]">
                      <a href="/">
                        <img
                          src={commentpfpicon}
                          alt=""
                          className="w-12 shadow-[inset_0_0_8px_0_rgba(0,0,0,0.2)] h-12 border-none outline-none cursor-pointer rounded-full"
                        />
                      </a>
                      <div className="w-[85%] flex flex-col items-start gap-2">
                        <div className="w-full flex items-center justify-between">
                          <div className="font-bold">{items.name}</div>
                          <div className="text-sm text-[#999999]">
                            {items.timestamp}
                          </div>
                        </div>
                        <div>{items.comment}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-[30%] flex flex-col gap-8 py-8 pl-8 border-l-[1px] border-[#dddddd]">
              <div className="uppercase text-[#999999]">Next Videos</div>
              {LocalVideoData.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center gap-6 video-card cursor-pointer"
                  onClick={() => handleVideoSelect(video.id)}
                >
                  <div className="w-[150px]">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="h-[12vh] w-[100%] bg-auto rounded-md"
                    />
                  </div>
                  <div className="w-[50%] flex flex-col h-full justify-center gap-4 items-start">
                    <h3 className="w-[80%] text-md font-medium leading-tight">
                      {video.title}
                    </h3>
                    <p>{video.channel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoDetails;
