import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";

export const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "1rem" : "4.5rem")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "12rem" : "20.2rem")};
  background-color: #999;
  flex: 1;
`;

export const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "1.6rem"};
  gap: 1.2rem;
  flex: 1;
`;

export const ChannelImage = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

export const Texts = styled.div``;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const ChannelName = styled.h2`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textSoft};
  margin: 0.9rem 0;
`;

export const Info = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl} />

        <Details type={type}>
          <ChannelImage type={type} src={channel.img} />

          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {video.views} views • {format(video.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
