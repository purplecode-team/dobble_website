import styled from 'styled-components';

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6vh;
`;

export const UserName = styled.div`
  margin-top: 3vh;
  font-weight: bold;
  font-size: 1.35vw;
  justify-content: center;
  @media (max-width: 480px) {
    font-size: 3.3vw;
  }
`;
export const ItemList = styled.ul`
  margin: 4.4vh auto 0 auto;
  padding: 0px;
  justify-content: center;
  @media (max-width: 480px) {
    width: 100%;
    margin-top: 0vh;
  }
`;
export const InfoItem = styled.li`
  margin-top: 2vh;
  display: flex;
  align-items: center;
  font-family: Arial;
  font-size: 1.25vw;
  @media (max-width: 480px) {
    display: block;
    margin-top: 3vh;
    font-size: 3vw;
  }
`;
export const MailTitle = styled.div`
  font-weight: bold;
  margin-right: 5vw;
  @media (max-width: 480px) {
    margin-bottom: 1.5vh;
  }
`;
export const TelTitle = styled.div`
  font-weight: bold;
  margin-right: 2.5vw;
  @media (max-width: 480px) {
    margin-bottom: 1.5vh;
  }
`;
export const InfoContent = styled.div``;
export const Button = styled.div`
  width: 30%;
  margin-top: 11vh;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Secession = styled.div`
  margin-top: 3vh;
  color: #b3b3b3;
  font-family: Arial;
  font-size: 1.04vw;
  border-bottom: 1px solid #b3b3b3;
`;
export const Line = styled.div`
  border-bottom: 2px solid #efefef;
  display: none;
  @media (max-width: 480px) {
    display: block;
    margin-top: 3vh;
  }
`;
export const ModifyBtn = styled.input`
  :focus {
    outline: none;
  }
  width: 95px;
  height: 7vh;
  border-radius: 30px;
  border: none;
  background-color: #ea404a;
  font-size: 1.25vw;
  color: white;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 48%;
  }
  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;
export const LogoutBtn = styled.input`
  :focus {
    outline: none;
  }
  width: 95px;
  height: 7vh;
  border-radius: 30px;
  border: 1px solid #ea404a;
  background: rgb(246, 246, 246);
  font-size: 1.25vw;
  color: black;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 48%;
  }
  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;
