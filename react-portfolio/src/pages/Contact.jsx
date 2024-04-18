import { useState } from 'react'

export default function Contact() {

    const [isNameClicked, setIsNameClicked] = useState(false)
    const [nameValue, setNameValue] = useState('')

    const handleNameClick = (event) => {
        setIsNameClicked(isNameClicked => false)
    }

    const [isEmailClicked, setIsEmailClicked] = useState(false)
    const [emailValue, setEmailValue] = useState('')

    const handleEmailClick = (event) => {

    }

    const [isMessageClicked, setIsMessageClicked] = useState(false)
    const [messageValue, setMessageValue] = useState('')

    const handleMessageClick = (event) => {

    }


    return (
        <>
            <div className="email-form">
                <div className='input-div'>
                    <input
                        type="text"
                        placeholder="Enter Your Name Here"
                        id='name'>
                    </input>
                </div>

                <div className='input-div'>
                    <input
                        type="text"
                        placeholder="Enter Your Email Address Here"
                        id='email'>
                    </input>
                </div>

                <div className='input-div'>
                    <textarea
                        rows='10'
                        placeholder="Enter Your Email Content Here"
                        id='message'>
                    </textarea>
                </div>
                <button>Send</button>
            </div>
        </>
    )
}