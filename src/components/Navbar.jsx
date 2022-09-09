import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { VideoCallOutlined } from "@mui/icons-material";
import Upload from "./Upload";

export const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 5.6rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 2rem;
  position: relative;
`;

export const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.text};
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
`;

export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const Avatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: #999;
`;

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input
              placeholder="Search"
              onChange={(e) => setQ(e.target.value)}
            />
            <SearchOutlinedIcon onClick={() => navigate(`/search?q=${q}`)} />
          </Search>

          {currentUser ? (
            <User>
              <VideoCallOutlined onClick={() => setOpen(true)} />
              <Avatar src={currentUser.img} />
              {currentUser.name}
            </User>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
