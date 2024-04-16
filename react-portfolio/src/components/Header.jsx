import { Flex, Heading, chakra } from '@chakra-ui/react'
import Nav from './Nav'

export const StyledFlex = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'red',
        padding: '30px',
        justifyContent: 'space-around'
    }
})

export const Header = () => {
   return(
    <>
    <StyledFlex>
        <Heading size='4xl'>Charles Hall</Heading>
        <Nav></Nav>
    </StyledFlex>
    </>
   )
}

