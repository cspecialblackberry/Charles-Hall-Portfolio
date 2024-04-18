import { useState } from 'react'

export default function Contact() {

    const [isNameEntered, setIsNameEntered] = useState('')
    const [nameValue, setNameValue] = useState('')

    const handleNameChange = (event) => {
        setNameValue(event.target.value)
        setIsNameEntered(true)
    }

    const handleNameBlur = () => {
        if (!nameValue) {
            setIsNameEntered(false)
        } else {
            setIsNameEntered(true)
        }
    }

    const [isEmailEntered, setIsEmailEntered] = useState('')
    const [emailValue, setEmailValue] = useState('')

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value)
        setIsEmailEntered(true)
    }

    const handleEmailBlur = () => {
        if (!emailValue) {
            setIsEmailEntered(false)
        } else {
            setIsEmailEntered(true)
        }
    }
    const [isMessageEntered, setIsMessageEntered] = useState('')
    const [messageValue, setMessageValue] = useState('')

    const handleMessageChange = (event) => {
        setMessageValue(event.target.value)
        setIsMessageEntered(true)
    }

    const handleMessageBlur = () => {
        if (!messageValue) {
            setIsMessageEntered(false)
        } else {
            setIsMessageEntered(true)
        }
    }

    return (
        <>
            <div className="email-form">
                <div className='input-div'>
                    {isNameEntered === false && <p>Name Field Is Required</p>}
                    <input
                        type="text"
                        placeholder="Enter Your Name Here"
                        id='name'
                        autoComplete='off'
                        onChange={handleNameChange}
                        onBlur={handleNameBlur}>
                    </input>
                </div>

                <div className='input-div'>
                    {isEmailEntered === false && <p>Email Field Is Required</p>}
                    <input
                        type="text"
                        placeholder="Enter Your Email Address Here"
                        id='email'
                        autoComplete='off'
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}>
                            
                    </input>
                </div>

                <div className='input-div'>
                    {isMessageEntered === false && <p>Message Field Is Required</p>}
                    <textarea
                        rows='10'
                        placeholder="Enter Your Email Content Here"
                        id='message'
                        onChange={handleMessageChange}
                        onBlur={handleMessageBlur}>
                    </textarea>
                </div>
                <button>Send</button>
            </div>
        </>
    )
}