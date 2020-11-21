import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderIcon = ({ mobile = false, link, img, alt, onClick = () => null }) => (
  <Container mobile={mobile}>
    {link ? (
      <Link to={link}>
        <Icon src={img} alt={alt} onClick={onClick} />
      </Link>
    ) : (
      <Icon src={img} alt={alt} onClick={onClick} />
    )}
  </Container>
);

const Container = styled.div`
  margin-left: 35px;
  display: flex;
  align-items: center;
  float: left;

  @media (max-width: 768px) {
    ${(props) =>
      props.mobile &&
      `
    display: none;
  `}
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export default HeaderIcon;
