import React, { useState } from 'react';
import styled from 'styled-components';
import { wishListData } from './wishListData';

const WishList = () => {
  const [cancel, setCancel] = useState(false);

  const onChangeHeart = () => {
    setCancel(!cancel);
  };
  return (
    <WishListContainer>
      {wishListData.map(({ alt, title, link, img, price, brand, banner }) => (
        <ProductDiv key={alt} href={link}>
          <ProductImgDiv>
            <ProductImg src={img} alt={alt} />
            <Heart
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 30 25"
              onClick={onChangeHeart}
            >
              <g id="그룹_165" data-name="그룹 165" transform="translate(-146.947 -51.305)">
                <path
                  id="패스_92"
                  data-name="패스 92"
                  d="M176.715,59.453a6.117,6.117,0,0,0-5.1-3.7c-2.528-.236-4.742,1.707-5.958,3.592a1.9,1.9,0,0,1-3.134,0c-.716-1.111-2.632-3.6-5.407-3.6-.138,0-.278.006-.42.018a6.115,6.115,0,0,0-5.1,3.7c-1.235,3.435,3,7.85,6.74,11.745a43.868,43.868,0,0,0,5.808,5.065,44.034,44.034,0,0,0,5.822-5.079C173.712,67.3,177.95,62.888,176.715,59.453Z"
                  transform="translate(-2.212 -2.198)"
                  fill={cancel ? '#EFEFEF' : 'red'}
                  opacity="0.1"
                />
                <path
                  id="패스_93"
                  data-name="패스 93"
                  d="M176.567,56.745a8.793,8.793,0,0,0-14.678-2.5,8.759,8.759,0,0,0-7.071-2.894,8.873,8.873,0,0,0-7.491,5.407c-1.737,4.767,2.811,9.444,6.823,13.571a43.345,43.345,0,0,0,6.8,5.679,1.793,1.793,0,0,0,1.981,0,43.515,43.515,0,0,0,6.813-5.692C173.755,66.188,178.3,61.511,176.567,56.745ZM161.94,72.864a39.886,39.886,0,0,1-5.3-4.563c-3.411-3.509-7.278-7.486-6.151-10.58a5.573,5.573,0,0,1,4.65-3.337c.13-.011.258-.017.383-.017,2.533,0,4.281,2.24,4.935,3.241a1.749,1.749,0,0,0,2.86,0c1.109-1.7,3.131-3.448,5.437-3.236a5.574,5.574,0,0,1,4.651,3.336c1.127,3.094-2.74,7.071-6.153,10.581A40.033,40.033,0,0,1,161.94,72.864Z"
                  transform="translate(0 0)"
                  fill="#fff"
                />
              </g>
            </Heart>
          </ProductImgDiv>
          <Text>{brand}</Text>
          <Text>
            <BannerText>{banner}</BannerText>
            {title}
          </Text>
          <Price>{price}</Price>
        </ProductDiv>
      ))}
    </WishListContainer>
  );
};
const WishListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 6vh;
`;
const ProductDiv = styled.div`
  margin-bottom: 3vh;
  width: 105px;
  height: 200px;
  margin-bottom: 3vh;
  margin-right: 1.8vw;
  @media (max-width: 768px) {
    width: 90px;
    height: 180px;
    margin-right: 2.5vw;
  }
`;

const ProductImgDiv = styled.div`
  width: 105px;
  height: 130px;
  overflow: hidden;
  border-radius: 18px 18px;
  background: rgb(220, 220, 220);
  @media (max-width: 768px) {
    width: 90px;
    height: 120px;
  }
`;

const ProductImg = styled.img`
  width: 105px;
  height: 130px;
  z-index: 1;
  position: relative;
`;
const Heart = styled.svg`
  position: relative;
  cursor: pointer;
  z-index: 2;
  top: -30px;
  right: -80px;
  @media (max-width: 768px) {
    top: -40px;
    right: -65px;
  }
`;
const Text = styled.div`
  font-size: 0.5rem;
  margin: 7px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BannerText = styled.div`
  background: yellow;
  font-size: 0.5rem;
  color: rgb(100, 100, 100);
  display: inline-block;
  margin-right: 5px;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 0.8rem;
`;

export default WishList;
