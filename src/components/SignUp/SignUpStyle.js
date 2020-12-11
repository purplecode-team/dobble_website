import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 58vw;
  height: 21.11vh;
  margin-bottom: 2.685vh;
  @media (max-width: 768px) {
    width: 76vw;
  }
`;
export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 21.11vh;
  width: 1.979vw;
`;
export const Circle = styled.img`
  margin-bottom: 1.759vh;
  width: 20px;
  height: 20px;
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;
export const VerticalLine = styled.img`
  height: 15.833vh;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 21.11vh;
  margin-left: 2.604vw;
`;
export const Title = styled.label`
  font-size: 1.25vw;
  height: 3.518vh;
  font-weight: bold;
`;

export const InfoInput = styled.input`
  padding: 0px;
  width: 28vw;
  background: rgb(246, 246, 246);
  height: 4.81vh;
  :focus {
    outline: none;
  }
  border: none;
  ::placeholder {
    font-size: 1.25vw;
    color: #cbcbcb;
  }
`;
export const LineDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SubmitSvg = styled.svg`
  width: 2.031vw;
  height: 1.813vh;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.77vh;
  margin-bottom: 1vh;
`;

export const Line = styled.div`
  border-bottom: 1px solid black;
  width: 53vw;
  @media (max-width: 768px) {
    width: 71vw;
  }
`;
export const ButtonInput = styled.input`
  :focus {
    outline: none;
  }
  width: 7.18vw;
  height: 4.07vh;
  border-radius: 12px;
  border: none;
  background-color: #efefef;
  font-size: 1.14vw;
  color: #d2d2d2;
  :hover {
    background-color: gray;
  }
  cursor: pointer;
  @media (max-width: 768px) {
    width: 13vw;
    height: 3.5vh;
  }
`;
export const ChkDiv = styled.div`
  font-size: 1.4vw;
  display: flex;
  height: 2.77vh;
  align-items: center;
  margin-top: 2vh;
`;
export const ChkBox = styled.input`
  margin: 0px;
`;

export const SubDesc = styled.div`
  font-size: 1.04vw;
  margin-left: 0.937vw;
  color: #cbcbcb;
`;
export const ErrorMessage = styled.div`
  font-family: 'Arial';
  font-size: 1.04vw;
  color: #ff0000;
  ::before {
    content: '⚠ ';
  }
`;
