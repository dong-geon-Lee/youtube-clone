import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem 0;
`;

export const Avatar = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.text};
`;

export const Name = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
`;

export const Date = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 0.5rem;
`;

export const Text = styled.span`
  font-size: 1.4rem;
`;

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComment = async () => {
      const response = await axios.get(`/users/find/${comment.userId}`);
      setChannel(response.data);
    };
    fetchComment();
  }, [comment.userId]);

  return (
    <Container>
      <Avatar src={channel.img} />
      <Details>
        <Name>
          {channel.name} <Date>1 day ago</Date>
        </Name>
        <Text>{comment.desc}</Text>
      </Details>
    </Container>
  );
};

export default Comment;
