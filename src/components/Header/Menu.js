import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import HamburgerMenu from './HamburgerMenu';
import HeaderIcon from './HeaderIcon';
import { headerIconData } from './interface';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = () => setMenuOpen(false);

  const location = useLocation();

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <IconSection>
      {headerIconData.map((iconData) =>
        iconData.onToggle ? (
          <HeaderIcon key={iconData.alt} {...iconData} onClick={onToggleMenu} />
        ) : (
          <HeaderIcon key={iconData.alt} {...iconData} />
        ),
      )}
      <HamburgerMenu menuOpen={menuOpen} closeMenu={closeMenu} />
    </IconSection>
  );
};

const IconSection = styled.div`
  height: 40px;
`;

export default Menu;
