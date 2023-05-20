import React from 'react'
import './footer.css'
function Footer() {
    return (
        <div className='footer'>
            <form action="" className='footer-form' onSubmit={(e) => { e.preventDefault() }}>
                <label htmlFor="">name</label>
                <input type="text" />
                <label htmlFor="">email address</label>
                <input type="text" />
                <label htmlFor="">your message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Footer