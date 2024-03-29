import React from 'react';
import { useParams } from 'react-router';

interface ProfileType {
  [key: string]: {
    name: string;
    description: string;
  };
}

const profileData: ProfileType = {
  paul: {
    name: '강바울',
    description: '프론트엔드 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '백엔드 개발자',
  },
};

const Profile: React.FC = () => {
  const params = useParams();

  const profile = profileData[params.username as string];

  if (!profile) {
    return <h1>존재하지 않는 사용자입니다.</h1>;
  }

  return (
    <div>
      <h1>
        {params.username}({profile.name})
      </h1>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
