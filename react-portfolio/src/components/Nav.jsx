import { StyledFlex } from './header'
import { Link, chakra} from '@chakra-ui/react'
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'

const StyledLink = chakra(Link, {
    baseStyle: {
        padding: '5px',
        textDecoration: 'underline'
    }
})

const Nav = () => {
    const currentPage = useLocation().pathname
    return(
        <> 
            <StyledFlex>
                <StyledLink as= {ReactRouterLink} to='/About' className={currentPage==='/About' ? 'currentLink' : ''}>About Me</StyledLink>
                <StyledLink as= {ReactRouterLink} to='/Portfolio' className={currentPage==='/Portfolio' ? 'currentLink' : ''}>Portfolio</StyledLink>
                <StyledLink as= {ReactRouterLink} to='/Contact' className={currentPage==='/Contact' ? 'currentLink' : ''} >Contact</StyledLink>
                <StyledLink as= {ReactRouterLink} to='/Resume' className={currentPage==='/Resume' ? 'currentLink' : ''}>Resume</StyledLink>
            </StyledFlex>
        </>
    )
}

export default Nav