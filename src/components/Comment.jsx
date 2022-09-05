import React from "react";
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

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/P_mathematics.svg/2276px-P_mathematics.svg.png" />
      <Details>
        <Name>
          Cat Dev <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos
          laboriosam ullam quibusdam, adipisci tempora. Incidunt, omnis alias
          reprehenderit quo illum fuga at quibusdam nemo tempora quisquam
          eligendi, culpa fugiat!
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
