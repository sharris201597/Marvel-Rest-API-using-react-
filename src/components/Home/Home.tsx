import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import marvelBackground from '../assets/images/marvelBackground.jpg';
import { Link } from 'react-router-dom';


interface Props{
    title: string;
}

const Root = styled('div')({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '60px',
    backgroundColor: '#ED1D24'
})
const Logo = styled('a')({
    margin: '0 0 0 0.50em'
})
const LogoA = styled('a')({
    color: 'rgb(28,24,22)',
    listStyle: 'non',
    texTransform: 'uppercase',
    textDecoration: 'none'
})
const LogoNavigation = styled('ul')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'

})
const NavA = styled(Link)({
    display: 'black',
    padding: '1em',
    color: 'white',
    fontSize: '20px'

})
const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${marvelBackground});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div') ({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'

})


export const Home =(props:Props) => {
    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/32px-Marvel_Logo.svg.png'></img></LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to='/Home'>Home</NavA>
                    </li>
                    <li>
                        <NavA to='#'>About</NavA>
                    </li>
                    <li>
                        <NavA to='#'>Learn More</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p> Assemble!!!!</p>
                    <Button color = 'primary' variant='contained' component={Link} to='/dashboard' >See Our Collection</Button>
                </MainText>
            </Main>
        </Root>
    )
};

