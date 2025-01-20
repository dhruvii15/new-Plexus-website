import { useState, useEffect } from 'react';

const CaptchaInput = ({ onValidate }) => {
    const [captchaText, setCaptchaText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isVerificationAttempted, setIsVerificationAttempted] = useState(false);
    const [error, setError] = useState('');

    // Generate random captcha text
    const generateCaptcha = () => {
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptchaText(captcha);
        setUserInput('');
        setIsValid(false);
        setError('');
        setIsVerificationAttempted(false);
        onValidate(false); // Reset validation state when generating new CAPTCHA
    };

    // Initialize captcha on component mount
    useEffect(() => {
        generateCaptcha();
    }, []);

    // Handle input change
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
        if (isVerificationAttempted) {
            setError('Please verify the CAPTCHA');
            onValidate(false);
        }
    };

    // Validate captcha
    const validateCaptcha = () => {
        setIsVerificationAttempted(true);
        if (!userInput) {
            setError('Please enter the CAPTCHA text');
            setIsValid(false);
            onValidate(false);
            return;
        }

        if (userInput === captchaText) {
            setIsValid(true);
            setError('');
            onValidate(true);
        } else {
            setIsValid(false);
            setError('Invalid CAPTCHA. Please try again.');
            onValidate(false);
            generateCaptcha();
        }
    };

    return (
        <div className="mt-2">
            <div className="mb-3">
                <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                    <div className="bg-light p-2 rounded">
                        <span
                            className="font-monospace fs-4 fw-bold text-decoration-line-through"
                            style={{
                                letterSpacing: '0.2em',
                                transform: 'skew(-10deg)',
                                display: 'inline-block'
                            }}
                        >
                            {captchaText}
                        </span>
                    </div>
                    <button
                        type="button"
                        onClick={generateCaptcha}
                        className="btn btn-link text-primary text-decoration-none fs-3"
                    >
                        ↺
                    </button>
                    <div>
                        <input
                            type="text"
                            value={userInput}
                            onChange={handleInputChange}
                            placeholder="Enter CAPTCHA"
                            className="form-control"
                        />
                    </div>
                    <button 
                        type="button"
                        onClick={validateCaptcha} 
                        className="btn border"
                    >
                        Verify
                    </button>
                </div>
            </div>
            {error && <p className="text-danger mt-2" style={{ fontSize: "12px" }}>{error}</p>}
            {isValid && <p className="text-success mt-2" style={{ fontSize: "12px" }}>CAPTCHA verified successfully!</p>}
        </div>
    );
};

export default CaptchaInput;