import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaFilter, FaChevronLeft } from 'react-icons/fa';
import { brand_blue, brand_orange, brand_red } from "../../utils/colors";

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFF;
  border-bottom: 1px solid ${brand_blue};
`;

const Button = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
   top: calc(50% - 20px);
   width: 40px;
   height: 40px;
`;

const BackButton = styled(Button)`
  left: 20px;
`;

const Logo = styled.div`
  height: 90%;
`;

const Image = styled.img`
  max-height: 100%;
`

const FilterButton = styled(Button)`
  right: 20px;
`;

const Header = (props) => {
    const {
        isLanding
    } = props;

    return (
      <HeaderContainer>
          <BackButton>
              <IconContext.Provider value={{ color: brand_orange}}>
                <FaChevronLeft />
              </IconContext.Provider>
          </BackButton>
          <Logo>
              <Image src="/img/smarta-logo.png" fit="contain"/>
          </Logo>
          <FilterButton>
              <IconContext.Provider value={{ color: brand_red}}>
                <FaFilter />
              </IconContext.Provider>
          </FilterButton>
      </HeaderContainer>
    );
};

    export default Header;
