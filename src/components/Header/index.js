import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaFilter, FaChevronLeft } from 'react-icons/fa';
import { brand_blue, brand_orange, brand_red } from "../../utils/colors";
import { usePrevious } from '../../hooks';

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,146,208, 0.2);
  background: linear-gradient(90deg, rgba(0,146,208,1) 0%, rgba(253,190,67,1) 35%, rgba(255,117,0,1) 100%);
  border-bottom: 1px solid ${brand_blue};
  z-index: 100;
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
  display: none;
`;

const Logo = styled.div`
  height: 80%;
  max-width: calc(100% - 80px);
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const FilterButton = styled(Button)`
  right: 20px;
  display: none;
`;

const Header = (props) => {
    const {
        location
    } = props;
    const previousLocation = usePrevious(location);
    const showBackButton = location.pathname !== '/';
    return (
      <HeaderContainer>
          {showBackButton && <BackButton onClick={(e) => window.location.assign(previousLocation.pathname)}>
              <IconContext.Provider value={{ color: brand_orange}}>
                <FaChevronLeft />
              </IconContext.Provider>
          </BackButton>}
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

const HeaderWithRouter = withRouter(Header);

export default HeaderWithRouter;
