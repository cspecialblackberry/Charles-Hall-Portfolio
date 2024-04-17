import { Input } from '@chakra-ui/react'

const handleClickAway = (event) => {
    if(!event.target.value){
        alert('form required')
    }
}

export default function Contact() {
    return (
        <>
            <div>
                <Input placeholder='Enter your name' onClickAway={handleClickAway}></Input>
                <Input placeholder='Enter a valid email address'></Input>
                <Input placeholder='Enter your message' ></Input>
            </div>
        </>
    )
}