import React from 'react';
import { StyledWrapper } from './styles';

type GithubProfileInfoProps = {
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
};

const GithubProfileInfo = ({
  name,
  thumbnail,
  bio,
  blog,
}: GithubProfileInfoProps) => {
  return (
    <StyledWrapper className="GithubProfileInfo">
      <div className="profile-head">
        <img src={thumbnail} alt="user thumbnail" />
        <div className="name">{name}</div>
      </div>
      <p>{bio}</p>
      <div className="blog">
        {blog !== '' && (
          <a href={blog} target="_blank" rel="noreferrer noopener">
            개인 블로그로 이동
          </a>
        )}
      </div>
    </StyledWrapper>
  );
};

export default GithubProfileInfo;
