import {
  ThumbDown,
  ThumbDownAltOutlined,
  ThumbDownOffAltOutlined,
  ThumbUp,
  ThumbUpOutlined,
} from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
import Comments from "../components/Comments";
import { subscription } from "../redux/userSlice";
import { dislike, fetchSuccess, like } from "../redux/videoSlice";

export const Container = styled.div`
  display: flex;
  gap: 2.4rem;
`;

export const Content = styled.div`
  flex: 5;
`;

export const VideoWrapper = styled.div``;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

export const Buttons = styled.div`
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme.text};
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const Hr = styled.hr`
  margin: 1.5rem 0;
  border: 0.05rem solid ${({ theme }) => theme.soft};
`;

export const Recommendation = styled.div`
  flex: 2;
`;

export const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChannelInfo = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

export const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

export const ChannelName = styled.span`
  font-weight: 500;
`;

export const ChannelCounter = styled.span`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textSoft};
  font-size: 1.2rem;
`;

export const Description = styled.p`
  font-size: 1.4rem;
`;

export const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  height: 100%;
  padding: 1rem 2rem;
  cursor: pointer;
`;

export const VideoFrame = styled.video`
  max-height: 520px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);

  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];

  console.log(path);

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);

  console.log(currentVideo);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };

  const handleDisLike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);

    dispatch(subscription(channel._id));
  };

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo.videoUrl} />
        </VideoWrapper>

        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>
            {currentVideo?.views} views º {format(currentVideo?.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo?.likes?.includes(currentUser._id) ? (
                <ThumbUp />
              ) : (
                <ThumbUpOutlined />
              )}
              {currentVideo?.likes.length}
            </Button>
            <Button onClick={handleDisLike}>
              {currentVideo?.dislike?.includes(currentUser._id) ? (
                <ThumbDown />
              ) : (
                <ThumbDownOffAltOutlined />
              )}
              Dislike
            </Button>
            <Button>
              <ThumbDownAltOutlined /> Share
            </Button>
            <Button>
              <ThumbDownAltOutlined /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel?.img} />
            <ChannelDetail>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>
                {channel?.subscribers} subscribers
              </ChannelCounter>
              <Description>{currentVideo?.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSub}>
            {currentUser.subscribedUsers?.includes(channel._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </Subscribe>
        </Channel>
        <Hr />
        <Comments videoId={currentVideo._id} />
      </Content>
    </Container>
  );
};

export default Video;
