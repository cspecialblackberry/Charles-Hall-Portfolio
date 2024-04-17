import { StyledFlex } from './header'
import { Link, chakra } from '@chakra-ui/react'
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'

const StyledLink = chakra(Link, {
    baseStyle: {
        padding: '5px'
    }
})

const Nav = () => {
    const currentPage = useLocation().pathname
    return(
        <> 
            <StyledFlex>
                <StyledLink as= {ReactRouterLink} to='/About' className='hello'>About Me</StyledLink>
                <StyledLink>Portfolio</StyledLink>
                <StyledLink>Contact</StyledLink>
                <StyledLink>Resume</StyledLink>
            </StyledFlex>
        </>
    )
}

export default Nav