import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import {brand_red} from "../../utils/colors";

const DirectionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 7vh;
  height: calc(100vh - 70px);
  
  > div:first-of-type {
    border-top: none;
  }
`;

const Direction = styled(Link)`
  width: 100%;
  flex: 1 1;
  border-top: 1px solid ${brand_red};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DirectionSelector = (props) => {
    const {
        directions,
        url
    } = props;
    return (
            <DirectionContainer>
                {Object.keys(directions).map((direction, index) => (
                    <Direction key={direction} to={`${url}/${direction}`}>
                        {direction}
                    </Direction>
                ))}
            </DirectionContainer>
    );
};



export default DirectionSelector;

