import { Flex, Link, chakra} from '@chakra-ui/react'

const FooterFlex = chakra(Flex, {
    baseStyle: {
       backgroundColor: 'red', 
       justifyContent: 'space-between',
       position: 'fixed',
       bottom: '0px',
       padding: '5px',
    }
})

const Footer = () => {
    <div> 
        <Link href='https://github.com/cspecialblackberry'>GitHub</Link>
        <Link href='https://www.linkedin.com/in/charles-samuel-hall-958a932a2/'>LinkedIn</Link>
    </div>
}

export default Footer