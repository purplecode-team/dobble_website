import React from 'react';
import styled from 'styled-components';
import CloseIcon from './img/closeIcon.png';
import Heart from './img/heart.png';

const Modal = ({ open, closeModal, data }) => {
  return (
    <div>
      <Dimmer open={open} onClick={closeModal}>
        <ModalDiv>
          <XButton onClick={closeModal}>
            <CloseBtn src={CloseIcon} alt="closeBtn" />
          </XButton>
          <ContentDiv>
            <LeftBox>
              <ProductImg src={data.img} />
            </LeftBox>
            <RightBox>
              <Brand>{data.brand}</Brand>
              <Title>
                {data.title}
                <HeartIcon src={Heart} alt="img" />
              </Title>
              <Price>
                {data.price}
                {data.banner && <BannerText>{data.banner}</BannerText>}
              </Price>
              <hr />
              <Delivery>
                <DeliveryTop>배송정보</DeliveryTop>
                <div>기본배송비 : 2,500원 (50,000원 이상 무료)</div>
                <div>추가배송비 : 2,700원~8,000원 (지역별)</div>
              </Delivery>
            </RightBox>
          </ContentDiv>
        </ModalDiv>
      </Dimmer>
    </div>
  );
};

const Dimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  z-index: 10000;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const ContentDiv = styled.div`
  padding: 30px;
  padding-bottom: 0px;
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;

const LeftBox = styled.div`
  overflow: hidden;
  border-radius: 18px 18px;
  display: inline-block;
  width: 300px;
  height: 367px;
  margin-right: 30px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const RightBox = styled.div`
  display: inline-block;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ModalDiv = styled.div`
  position: absolute;
  width: 60%;
  height: 60%;
  top: 20%;
  left: 19%;
  background: white;
  border-radius: 26px;
  padding: 30px;
  @media (max-width: 768px) {
    overflow-y: scroll;
    width: 75%;
    height: 80%;
    left: 5%;
    top: 10%;
  }
`;

const CloseBtn = styled.img`
  width: 20px;
  height: 20px;
`;

const XButton = styled.div`
  cursor: pointer;
`;

const Brand = styled.div`
  margin-top: 30px;
  font-size: 1.4rem;
`;

const Title = styled.div`
  font-size: 1.6rem;
`;

const BannerText = styled.div`
  font-size: 1.2rem;
  color: red;
  display: inline-block;
  margin-left: 10px;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const Delivery = styled.div`
  margin-top: 30px;
  font-size: 0.8rem;
`;

const DeliveryTop = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const HeartIcon = styled.img`
  width: 30px;
  height: 30px;
  float: right;
`;

export default Modal;
