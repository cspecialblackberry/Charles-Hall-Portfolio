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
                <StyledLink as= {ReactRouterLink} to='/About' >About Me</StyledLink>
                <StyledLink as= {ReactRouterLink} to='/Portfolio' >Portfolio</StyledLink>
                <StyledLink as= {ReactRouterLink} to='/Contact' >Contact</StyledLink>
                <StyledLink as= {ReactRouterLink} to='/Resume' >Resume</StyledLink>
            </StyledFlex>
        </>
    )
}

export default Nav