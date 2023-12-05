import React, { useEffect, useState } from 'react'
import './Contact.css'

function Contact(props) {
    const [textareaValue, setTextareaValue] = useState("")

    const progressBarContact = () => {
        props.setProgress(5)
        setTimeout(() => {
            props.setProgress(100)
        }, 200)
    }

    useEffect(() => {
        progressBarContact()
    }, [])

    return (
        <>
            <div className='mainDivContact' >
                <div className='contactCSS '>
                    <div className='form d-flex flex-column justify-content-center'>
                        <h2 className='m-bottom mb-1'>Contact Form</h2>
                        <form action="https://formspree.io/f/mvojjdoa" method='POST' className='d-flex flex-column m-bottom  contactFormCSS' >
                            <input
                                type="text"
                                placeholder='Name'
                                name='Full Name'
                                required
                                autoComplete='off'
                                className=' form-input m-bottom p-3' />

                            <input
                                type="email"
                                placeholder='Email'
                                name='Email'
                                required
                                autoComplete='off'
                                className='form-input m-bottom p-3' />

                            <textarea
                                name='Message'
                                placeholder='Enter message here'
                                value={textareaValue}
                                required
                                autoCorrect='off' className='form-textArea m-bottom customeTextarea' onChange={(e) => { setTextareaValue(e.target.value) }}></textarea>

                            <button type='submit' className=' form-btn mt-2'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact