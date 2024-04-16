import { StyledFlex } from './header'
import { Link, chakra } from '@chakra-ui/react'

const StyledLink = chakra(Link, {
    baseStyle: {
        padding: '5px'
    }
})

const Nav = () => {
    return(
        <> 
            <StyledFlex>
                <StyledLink>About Me</StyledLink>
                <StyledLink>Portfolio</StyledLink>
                <StyledLink>Contact</StyledLink>
                <StyledLink>Resume</StyledLink>
            </StyledFlex>
        </>
    )
}

export default Nav