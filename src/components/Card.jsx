import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 36rem;
  margin-bottom: 4.5rem;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 20.2rem;
  background-color: #999;
`;

export const Details = styled.div`
  display: flex;
  margin-top: 1.6rem;
  gap: 1.2rem;
`;

export const ChannelImage = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background-color: #999;
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

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container>
        <Image src="https://miro.medium.com/max/996/1*zn5QvioT-Vy_jGZ3mLeKgQ.png" />
        <Details>
          <ChannelImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/P_mathematics.svg/2276px-P_mathematics.svg.png" />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>lee Dev</ChannelName>
            <Info>350,825 views º 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
