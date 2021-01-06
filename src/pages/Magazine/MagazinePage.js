import React from 'react';
import styled from 'styled-components';
import { dummyData } from './MagazineData';

const MagazinePage = () => {
  const data = dummyData[0];

  return (
    <div>
      <Banner>
        <Wrapper>
          <Desc>
            <HashTag>{data.hashtage}</HashTag>
            <Title>{data.title}</Title>
            <SubDesc>{data.description}</SubDesc>
          </Desc>
          <WriterInfo>
            <WriterImg src={data.writer.img} alt={data.content.alt} />
            <Text>{data.writer.name}</Text>
            <Text>{data.writer.email}</Text>
          </WriterInfo>
        </Wrapper>
        <Line />
      </Banner>
      <Content>
        <Text1>{data.content.text}</Text1>
        <ContentImgDiv>
          <ContentImg src={data.content.img} alt={data.content.alt} />
        </ContentImgDiv>
        <Text2>{data.content.text}</Text2>
        <Icons>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20.576"
              viewBox="0 0 68.64 20.576"
              style={{ cursor: 'pointer' }}
            >
              <path
                id="합치기_2"
                data-name="합치기 2"
                d="M49.775,20.046a1.874,1.874,0,0,1,0-2.56L62.79,3.835H1.917A1.917,1.917,0,0,1,1.917,0H66.723a1.918,1.918,0,0,1,1.189,3.422,1.809,1.809,0,0,1-.349.526l-15.347,16.1a1.67,1.67,0,0,1-2.441,0Z"
                transform="translate(68.64 20.576) rotate(180)"
                fill="#303030"
              />
            </svg>
            Prev
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="37" viewBox="0 0 40 37">
            <text
              id="list"
              transform="translate(0 30)"
              fill="#303030"
              fontSize="20"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight="700"
              style={{ cursor: 'pointer' }}
            >
              <tspan x="0" y="0">
                list
              </tspan>
            </text>
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20.575"
              viewBox="0 0 72.001 20.575"
              style={{ cursor: 'pointer' }}
            >
              <path
                id="합치기_1"
                data-name="합치기 1"
                d="M1.917-1254.066A1.917,1.917,0,0,1,0-1255.983a1.917,1.917,0,0,1,1.917-1.917H65.865l-13.652-13.652a1.809,1.809,0,0,1,0-2.56,1.811,1.811,0,0,1,2.56,0l16.1,16.1a1.805,1.805,0,0,1,.346.484,1.914,1.914,0,0,1,.784,1.547,1.917,1.917,0,0,1-1.917,1.917Z"
                transform="translate(0 1274.642)"
                fill="#303030"
              />
            </svg>
            Next
          </div>
        </Icons>
      </Content>
    </div>
  );
};

const Banner = styled.div`
  height: 80vh;
  width: 100%;
  background: rgb(212, 212, 212);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Desc = styled.div`
  align-items: flex-start;
  padding: 0 50px;
  @media (max-width: 768px) {
    padding: 0 40px;
  }
`;
const WriterInfo = styled.div`
  padding: 0 50px;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const WriterImg = styled.img`
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
`;
const SubDesc = styled.div`
  color: rgb(70, 70, 70);
  font-size: 0.8rem;
  font-family: Arial;
`;

const Title = styled.div`
  color: #303030;
  margin-top: 10px;
  font-size: 3.4rem;
  font-family: Stilu;
  font-weight: bold;
  margin-bottom: 15px;
`;
const HashTag = styled.div`
  font-size: 0.8rem;
  width: 80px;
  height: 20px;
  text-align: center;
  color: white;
  overflow: hidden;
  border-radius: 18px 18px;
  background: gray;
  font-family: 'Stilu';
`;
const Text = styled.div`
  margin-top: 5px;
  margin-right: 5px;
  font-family: 'Stilu', Arial;
  font-size: 0.8rem;
`;
const Line = styled.div`
  border-bottom: 1px solid #707070;
  margin: 60px 50px 50px 50px;
`;
const Content = styled.div`
  margin: 50px 80px 0px 80px;
  display: flex;
  flex-direction: column;
`;

const Text1 = styled.div``;
const Text2 = styled.div``;
const ContentImgDiv = styled.div`
  width: 100%;
  height: 400px;
  margin: 40px 0;
`;
const ContentImg = styled.img`
  width: 100%;
  height: 100%;
`;
const Icons = styled.div`
  margin: 200px 0 50px 0;
  display: flex;
  justify-content: space-between;
`;
export default MagazinePage;
