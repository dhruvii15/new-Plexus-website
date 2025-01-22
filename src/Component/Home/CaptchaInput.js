import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const CaptchaInput = ({ onValidate }) => {
    // Generate random CAPTCHA text
    const generateRandomText = () => {
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    // States
    const [captcha, setCaptcha] = useState(generateRandomText());
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    // Refresh CAPTCHA
    const refreshCaptcha = () => {
        setInput('');
        setMessage('');
        setCaptcha(generateRandomText());
        if (onValidate) {
            onValidate(false);
        }
    };

    // Verify CAPTCHA
    const verify = () => {
        if (input === captcha) {
            setMessage('CAPTCHA verified successfully!');
            setMessageType('success');
            if (onValidate) {
                onValidate(true);
            }
        } else {
            setMessage('Invalid CAPTCHA. Please try again.');
            setMessageType('danger');
            if (onValidate) {
                onValidate(false);
            }
            refreshCaptcha();
        }
    };

    // Render distorted CAPTCHA as styled text
    const renderCaptchaText = () => {
        return captcha.split('').map((char, index) => (
            <span
                key={index}
                style={{
                    display: 'inline-block',
                    transform: `rotate(${Math.random() * 30 - 25}deg)`,
                    fontSize: `${Math.random() * 2 + 20}px`,
                    fontWeight: '600',
                    color: `hsl(${Math.random() * 360}, 70%, 50%)`,
                    margin: '0 2px',
                    padding: '2px'
                }}
            >
                {char}
            </span>
        ));
    };

    return (
        <div className="my-4">
            <div>
                <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                    {/* CAPTCHA Display */}
                    <div
                        className="bg-light rounded d-flex align-items-center justify-content-center px-2"
                    >
                        {renderCaptchaText()}

                        {/* Refresh Button */}
                        <button
                            type="button"
                            onClick={refreshCaptcha}
                            className="btn btn-link text-primary text-decoration-none fs-3 ps-4"
                        >
                            ↺
                        </button>
                    </div>

                    {/* Input Field */}
                    <div>
                        <div className="input-group">
                            {/* Input Field */}
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Enter CAPTCHA"
                                className="form-control"
                                style={{padding:"14px"}}
                            />
                            {/* Check Icon */}


                            {/* Verify Button */}
                            <button
                                type="button"
                                onClick={verify}
                                className="btn border px-3"
                            >
                                <FontAwesomeIcon icon={faCheck} className='text-success fs-5' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages */}
            {message && (
                <p
                    className={`text-${messageType} mt-2`}
                    style={{ fontSize: '12px' }}
                >
                    {message}
                </p>
            )}
        </div>
    );
};

export default CaptchaInput;