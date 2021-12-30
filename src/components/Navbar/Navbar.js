import React, { useState } from 'react';
import { 
    Container, 
    LogoContainer, 
    Menu, 
    MenuItem, 
    MenuItemLink, 
    MobileIcon, 
    Wrapper 
} from './Navbar.elements';
import { 
    FaBattleNet, 
    FaBars,
    FaTimes,
    FaHome,
    FaUserAlt,
    FaBriefcase,
    FaGlasses
 } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: {fontSize: "2em"} }}>

                <LogoContainer>
                    <FaBattleNet />
                    <p>
                        Vector -
                    </p>
                    <p>
                        F(x)
                    </p>
                </LogoContainer>

                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {
                        showMobileMenu ? <FaTimes /> : <FaBars />
                    }
                </MobileIcon>

                <Menu open={showMobileMenu}>
                    <MenuItem>
                        <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                            <FaHome />
                            HOME
                        </div>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                            <FaUserAlt />
                            ABOUT ME
                        </div>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                            <FaBriefcase />
                            PORTFOLIO
                        </div>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                            <FaGlasses />
                            CONTACT ME
                        </div>
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    );
};

export default Navbar;