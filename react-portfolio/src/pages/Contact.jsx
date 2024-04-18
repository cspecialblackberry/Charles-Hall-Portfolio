const handleClickAway = (event) => {
    if (!event.target.value) {
        alert('form required')
    }
}

export default function Contact() {
    return (
        <>
            <div className="email-form">
                <input type="text" placeholder="Enter Your Name Here"></input>
                <input type="text" placeholder="Enter Your Email Address Here"></input>
                <textarea rows='10' placeholder="Enter Your Email Content Here"></textarea>
                <button>Send</button>
            </div>
        </>
    )
}