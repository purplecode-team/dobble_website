// 관심있는 브랜드 체크 컴포넌트
// 체크박스 체크시 빨간색 동그라미로 변경하는 부분 구현 x
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Circle, Container, ErrorMessage } from './SignUpStyle';
import circleRedEmpty from '../../components/img/circle_red_empty.png';
import circleRed from '../../components/img/circle_red.png';

const InterestedBrand = ({ step, steps, register, setStep, getValues, setValue }) => {
  const [error, setError] = useState(false);
  const brandList = [
    '마리몬드',
    '위드아이스',
    '뉴킷',
    '마르코로호',
    'BOCE',
    '애니휴먼',
    '메리디아니',
    '없음',
  ];
  const handleChange = (e) => {
    e.persist();
    setValue(e.target.name, e.target.checked);
    console.log(e.target.name, e.target.checked);
  };
  const multipleValues = getValues(brandList);
  console.log('multipleValues', multipleValues);
  useEffect(() => {
    let count = 0;
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in multipleValues) {
      if (multipleValues[key] !== 'undefined' && multipleValues[key]) {
        count += 1;
      }
    }
    if (count === 0) {
      setError(true);
    } else setStep({ ...steps, step5: true });
  }, [multipleValues]);

  return (
    <Container>
      {step[1] ? (
        <Circle src={circleRed} alt="circle" />
      ) : (
        <Circle src={circleRedEmpty} alt="circle" />
      )}
      <InfoDiv>
        <TitleDiv>관심있는 기부 브랜드</TitleDiv>
        <BrandList>
          {brandList.map((c) => (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <Item key={c}>
              <input
                type="checkbox"
                name={c}
                className="brandList"
                ref={register}
                onChange={handleChange}
              />
              <BrandName>{c}</BrandName>
            </Item>
          ))}
          <EtcBox>
            <input type="checkbox" name="etc" ref={register} className="brandList" />
            <InputEtc type="text" placeholder="기타 입력" />
          </EtcBox>
        </BrandList>
        {false ? <ErrorMessage>적어도 하나를 선택해주세요.</ErrorMessage> : ''}
      </InfoDiv>
    </Container>
  );
};
const InfoDiv = styled.div`
  width: 53vw;
  height: 16.38vh;

  @media (max-width: 768px) {
    width: 71vw;
  }
  margin-left: 2.604vw;
`;
const TitleDiv = styled.div`
  height: 3.518vh;
  margin-bottom: 2.77vh;
  font-weight: bold;
  font-size: 1.25vw;
`;
const BrandList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.label`
  width: 17vw;
  display: flex;
  align-items: center;
  margin-bottom: 3vh;
  font-size: 1vw;
`;
const BrandName = styled.div`
  width: 17vw;
  margin-left: 0.8vw;
`;

const EtcBox = styled.label`
  width: 17vw;
  display: flex;
  color: #303030;
  font-size: 1.041vw;
  align-items: center;
`;

const InputEtc = styled.input`
  padding: 0px;
  margin-left: 0.8vw;
  width: 10vw;
  background: rgb(246, 246, 246);
  :focus {
    outline: none;
  }
  border: none;
  border-bottom: 1px gray solid;
  ::placeholder {
    font-size: 1.04vw;
    color: #acacac;
  }
`;
export default InterestedBrand;
