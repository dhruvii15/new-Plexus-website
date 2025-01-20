import React, { useState } from 'react';

const CaptchaInput = ({ onValidate }) => {
    // Generate initial captcha
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

    // Generate new captcha
    const refreshCaptcha = () => {
        setInput('');
        setMessage('');
        setCaptcha(generateRandomText());
        if (onValidate) {
            onValidate(false);
        }
    };

    // Handle verification
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

    return (
        <div className="mt-2">
            <div className="mb-3">
                <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                    {/* CAPTCHA display */}
                    <div className="bg-light p-2 rounded">
                        <span 
                            className="font-monospace fs-4 fw-bold text-decoration-line-through"
                            style={{ letterSpacing: '0.2em' }}
                        >
                            {captcha}
                        </span>
                    </div>

                    {/* Refresh button */}
                    <button
                        type="button"
                        onClick={refreshCaptcha}
                        className="btn btn-link text-primary text-decoration-none fs-3"
                    >
                        ↺
                    </button>

                    {/* Input field */}
                    <div>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter CAPTCHA"
                            className="form-control"
                        />
                    </div>

                    {/* Verify button */}
                    <button 
                        type="button"
                        onClick={verify}
                        className="btn border"
                    >
                        Verify
                    </button>
                </div>
            </div>

            {/* Messages */}
            {message && (
                <p 
                    className={`text-${messageType} mt-2`} 
                    style={{ fontSize: "12px" }}
                >
                    {message}
                </p>
            )}
        </div>
    );
};

export default CaptchaInput;