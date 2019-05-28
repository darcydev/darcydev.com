import React, { useState } from 'react';
import styled from 'styled-components';

import NavItems from '../navItems/navItems';
import HamburgerToggler from './hamburgerToggle/hamburgerToggle';
import DarkModeToggle from '../darkModeToggle/darkModeToggle';

const BackgroundWrapper = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  background-color: var(--background);
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 6rem;
  padding: 2rem 1rem;
`;

const MobileMenu = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <HamburgerToggler
        menuOpened={menuOpened}
        toggleChange={() => setMenuOpened(!menuOpened)}
      />
      {menuOpened ? (
        <BackgroundWrapper>
          <Wrapper>
            <NavItems mobile clicked={() => setMenuOpened(false)} />
            <DarkModeToggle mobile />
          </Wrapper>
        </BackgroundWrapper>
      ) : null}
    </>
  );
};

export default MobileMenu;