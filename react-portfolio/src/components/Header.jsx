import { Flex, Heading, chakra, Link } from '@chakra-ui/react'
import Nav from './Nav'
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'


export const StyledFlex = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'red',
        padding: '30px',
        justifyContent: 'space-around'
    }
})

export const Header = () => {
    return (
        <>
            <StyledFlex>
                <Heading size='4xl' as={ReactRouterLink} to='/'>Charles Hall</Heading>
                <Nav></Nav>
            </StyledFlex>
        </>
    )
}

