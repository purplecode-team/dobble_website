import React from 'react';
import styled from 'styled-components';

const Dot = () => {
  return (
    <MyDiv>
      <DotUl>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="1%" height="1.7%" viewBox="0 0 18 18">
            <circle id="타원_6" data-name="타원 6" cx="9" cy="9" r="9" fill="#e2e2e2" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="1%" height="1.7%" viewBox="0 0 18 18">
            <circle id="타원_6" data-name="타원 6" cx="9" cy="9" r="9" fill="#e2e2e2" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="1%" height="1.7%" viewBox="0 0 18 18">
            <circle id="타원_6" data-name="타원 6" cx="9" cy="9" r="9" fill="#e2e2e2" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="1%" height="1.7%" viewBox="0 0 18 18">
            <circle id="타원_6" data-name="타원 6" cx="9" cy="9" r="9" fill="#e2e2e2" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="1%" height="1.7%" viewBox="0 0 18 18">
            <circle id="타원_6" data-name="타원 6" cx="9" cy="9" r="9" fill="#e2e2e2" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="1%" height="1.7%" viewBox="0 0 18 18">
            <circle id="타원_11" data-name="타원 11" cx="9" cy="9" r="9" fill="#9d9d9d" />
          </svg>
        </li>
      </DotUl>
    </MyDiv>
  );
};

const MyDiv = styled.div`
  margin-top: 2.77%;
  margin-bottom: 4.16%x;
`;
const DotUl = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 5%;
`;
export default Dot;
