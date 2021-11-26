import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 400px;
  display: flex;
  align-items: center;
  height: 32px;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 48px;

  & input {
    flex: 1;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    font-size: 21px;
    height: 100%;
    margin-right: 1rem;
  }

  & button {
    background: black;
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
    height: 100%;
    font-weight: bold;

    &:hover {
      background-color: #495057;
    }
  }
`;

export const StyledWrapper = styled.div`
  width: 400px;
  margin: 0 auto;

  .profile-head {
    display: flex;
    align-items: center;

    img {
      display: block;
      width: 64px;
      height: 64px;
      border-radius: 32px;
      margin-right: 1rem;
    }

    .name {
      font-weight: bold;
    }
  }

  .blog {
    a {
      text-decoration: underline;
    }
  }
`;
