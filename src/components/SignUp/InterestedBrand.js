import React from 'react';
import styled from 'styled-components';

const InterestedBrand = () => {
  return (
    <SignUpDiv>
      <CircleSvg
        xmlns="http://www.w3.org/2000/svg"
        width="1.979vw"
        height="3.518vh"
        viewBox="0 0 38 38"
      >
        <g id="타원_6" data-name="타원 6" fill="none" stroke="red" strokeWidth="5">
          <circle cx="19" cy="19" r="19" stroke="none" />
          <circle cx="19" cy="19" r="16.5" fill="none" />
        </g>
      </CircleSvg>
      <InfoDiv>
        <TitleDiv>관심있는 기부 브랜드</TitleDiv>
        <BrandList>
          <FirstUl>
            <BrandLi>
              <ChkBrand type="checkbox" />
              <div>마리몬드</div>
            </BrandLi>
            <BrandLi>
              <ChkBrand type="checkbox" />
              <div>마르코로호</div>
            </BrandLi>
            <BrandLi>
              <ChkBrand type="checkbox" />
              <div>애니휴먼</div>
            </BrandLi>
          </FirstUl>
          <SecondUl>
            <BrandLi>
              <ChkBrand type="checkbox" />
              <div>위드아이스</div>
            </BrandLi>
            <BrandLi>
              <ChkBrand type="checkbox" />
              <div>BOCE</div>
            </BrandLi>
            <BrandLi>
              <ChkBrand type="checkbox" />
              <div>메리디아니</div>
            </BrandLi>
          </SecondUl>
          <ThirdUl>
            <BrandLi>
              <ChkBrand type="checkbox" />
              <div>뉴킷</div>
            </BrandLi>
            <BrandLi>
              <ChkBrand type="checkbox" />
              <div>파이어마커스</div>
            </BrandLi>
            <BrandLi>
              <ChkBrand type="checkbox" />
              <LineDiv>
                <InputEtc type="text" placeholder="기타 입력" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10.8vw"
                  height="1.5"
                  viewBox="0 0 207.5 1.5"
                >
                  <line
                    id="선_3"
                    data-name="선 3"
                    x2="207.5"
                    transform="translate(0 0.75)"
                    fill="none"
                    stroke="#707070"
                    strokeWidth="1.5"
                  />
                </svg>
              </LineDiv>
            </BrandLi>
          </ThirdUl>
        </BrandList>
      </InfoDiv>
    </SignUpDiv>
  );
};
const SignUpDiv = styled.div`
  display: flex;
  width: 57.187vw;
  margin: 0vh auto 2.685vh auto;
`;

const CircleSvg = styled.svg`
  margin-bottom: 1.759vh;
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 52.6204vw;
  margin-left: 2.604vw;
`;
const TitleDiv = styled.div`
  font-size: 1.25vw;
  height: 3.518vh;
  margin-bottom: 2.77vh;
  font-weight: bold;
`;
const BrandList = styled.div`
  width: 52.62vw;
  display: flex;
  justify-content: space-between;
`;
const FirstUl = styled.ul`
  list-style: none;
  height: 15.648vh;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SecondUl = styled.ul`
  list-style: none;
  height: 15.648vh;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ThirdUl = styled.ul`
  list-style: none;
  height: 15.648vh;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const BrandLi = styled.li`
  display: flex;
  color: #303030;
  font-size: 1.041vw;
  align-items: center;
`;
const ChkBrand = styled.input`
  margin-right: 0.937vw;
`;
const InputEtc = styled.input`
  padding: 0px;
  width: 10vw;
  :focus {
    outline: none;
  }
  border: none;
  ::placeholder {
    font-size: 1.04vw;
    color: #acacac;
  }
`;
const LineDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export default InterestedBrand;
