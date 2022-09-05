import { ThumbDownAltOutlined, ThumbUpOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

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
  /*  */
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

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="520"
            src="https://www.youtube.com/embed/4bmUFRxNEIg"
            title="Luis Fonsi - Despacito ( cover by J.Fla )"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>

        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154 views º Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined /> 123
            </Button>
            <Button>
              <ThumbDownAltOutlined /> Dislike
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
            <Image src="https://freshpet.com/wp-content/uploads/2019/09/cat-2068462_1280.jpg" />
            <ChannelDetail>
              <ChannelName>Cat Dev</ChannelName>
              <ChannelCounter>120M subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                cumque nisi ea ex ut delectus vitae at, ad laboriosam quis,
                consequuntur laborum quas! Perspiciatis obcaecati deserunt
                incidunt nihil veniam optio?
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
      </Content>
      <Recommendation>recommendation</Recommendation>
    </Container>
  );
};

export default Video;
