import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 57.187vw;
  margin: 0vh auto 2.685vh auto;
`;
export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1.979vw;
`;
export const Circle = styled.svg`
  margin-bottom: 1.759vh;
`;
export const InfoBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 52.6204vw;
  margin-left: 2.604vw;
`;
export const Title = styled.label`
  font-size: 1.25vw;
  height: 3.518vh;
  font-weight: bold;
`;

export const InfoInput = styled.input`
  padding: 0px;
  width: 25vw;
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
  justify-content: space-between;
  margin-top: 2.77vh;
`;

export const Line = styled.div`
  border-bottom: 1px solid black;
  width: 52.6204vw;
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
`;
export const ChkDiv = styled.div`
  font-size: 1.4vw;
  display: flex;
  height: 2.77vh;
  align-items: center;
`;

export const SubDesc = styled.div`
  font-size: 1.04vw;
  margin-left: 0.937vw;
  color: #cbcbcb;
`;
export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.61vh;
`;

export const ErrorMessage = styled.div`
  font-family: 'Arial';
  font-size: 1.04vw;
  color: #ff0000;
  ::before {
    content: '⚠ ';
  }
`;
