import React from 'react';

const Contact = () => {
    
    return (
        <div className='pageContainer'>
            <div className='contactContainer'>
                <h2>Contact Us!</h2>
                <div className='content'>
                    <div className='card'>
                        <h4>Inquiries</h4>
                        <p>For any inquiries, questions or commendations, please call: (305)-445-2399</p>
                    </div>
                    <div className='card'>
                        <h4>Head Office</h4>
                        <p>45 Valencia Avenue</p>
                        <p>Coral Gables, FL 33134</p>
                        <p>info@mhajjar.com</p>
                        <p>Tel: (305) 445-2399</p>
                    </div>
                    <div className='card'>
                        <h4>Employment</h4>
                        <p>To apply for a job with M.Hajjar & Associates, please send a cover letter together with your C.V. to:info@mhajjar.com</p>
                    </div>
                    <div className='card'>
                        <h4>Testing Lab</h4>
                        <p>12714 SW 145th Court.</p>
                        <p>Miami, FL 33186</p>
                        <p>cyrus@setlabs.com</p>
                        <p>Tel: (305) 219-3767</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;