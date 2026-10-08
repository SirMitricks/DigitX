const FAQ = () => {
    return (
        <>
            <section className="faq-section">
                <div className="faq-container">

                    <details className="faq-item">
                        <summary className="faq-question">
                            How long does it take to complete a web development project?
                        </summary>
                        <div className="faq-answer">
                            <p>The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.</p>
                        </div>
                    </details>
                    <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                    <details className="faq-item">
                        <summary className="faq-question">
                            Can you handle large-scale mobile app development projects?
                        </summary>
                        <div className="faq-answer">
                            <p>Yes, we have extensive experience in developing large-scale mobile applications for both iOS and Android platforms. Our team follows industry best practices and agile methodologies to ensure successful delivery.</p>
                        </div>
                    </details>
                    <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                    <details className="faq-item">
                        <summary className="faq-question">
                            Do you offer maintenance services for websites and apps developed by other companies?
                        </summary>
                        <div className="faq-answer">
                            <p>Absolutely. We provide comprehensive maintenance and support services for existing websites and applications, regardless of who originally developed them. This includes updates, bug fixes, security patches, and performance optimization.</p>
                        </div>
                    </details>
                    <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                    <details className="faq-item">
                        <summary className="faq-question">
                            How do you ensure the security of user data in your web applications?
                        </summary>
                        <div className="faq-answer">
                            <p>We implement multiple layers of security including data encryption, secure authentication protocols, regular security audits, and compliance with industry standards like GDPR and OWASP guidelines to protect user data.</p>
                        </div>
                    </details>

                </div>
                <div className="faq-container">

                    <details className="faq-item">
                        <summary className="faq-question">
                            Can you create a responsive website design that looks great on all devices?
                        </summary>
                        <div className="faq-answer">
                            <p>The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.</p>
                        </div>
                    </details>
                    <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                    <details className="faq-item">
                        <summary className="faq-question">
                            What digital marketing strategies do you employ to drive website traffic?
                        </summary>
                        <div className="faq-answer">
                            <p>Yes, we have extensive experience in developing large-scale mobile applications for both iOS and Android platforms. Our team follows industry best practices and agile methodologies to ensure successful delivery.</p>
                        </div>
                    </details>
                    <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                    <details className="faq-item">
                        <summary className="faq-question">
                            Can you integrate third-party APIs into our mobile app?
                        </summary>
                        <div className="faq-answer">
                            <p>Absolutely. We provide comprehensive maintenance and support services for existing websites and applications, regardless of who originally developed them. This includes updates, bug fixes, security patches, and performance optimization.</p>
                        </div>
                    </details>
                    <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                    <details className="faq-item">
                        <summary className="faq-question">
                            How do you ensure cross-platform compatibility for mobile apps?
                        </summary>
                        <div className="faq-answer">
                            <p>We implement multiple layers of security including data encryption, secure authentication protocols, regular security audits, and compliance with industry standards like GDPR and OWASP guidelines to protect user data.</p>
                        </div>
                    </details>

                </div>
            </section>
            <style jsx>
                {`

                    .faq-section {
                        width: 90%;
                        height: auto;
                        display: flex;
                        justify-content: space-between;
                        font-family: "Sora", sans-serif;
                    }

                    .faq-container {
                        width: 620px;
                        display: flex;
                        flex-direction: column;
                        
                    }

                    .faq-item {
                        overflow: hidden;
                        transition: all 0.3s ease;
                        background:transparent;
                    }

                    .faq-item:hover {
                        border-color: #4a6cf7;
                        background:transparent;
                        
                    }

                    .faq-item[open] {
                        
                    }

                    .faq-question {
                        height: 128px;
                        width: 550px;
                        cursor: pointer;
                        font-weight: 600;
                        font-size: 20px;
                        display: flex;
                        align-items: center;
                        color: white;
                        list-style: none;
                        position: relative;
                        transition: background-color 0.3s ease;
                    }
                    
                    .faq-question::-webkit-details-marker {
                        display: none;
                    }

                    .faq-question::after {
                        content: "+";
                        position: absolute;
                        right:-60px;
                        color: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: transform 0.3s ease;
                        font-size:30px;
                        font-weight: 400;
                        background-color: rgba(26, 26, 26, 1);
                        width: auto;
                        height: auto;
                        padding: 0.5rem 1.1rem;
                        border-radius: 50%;
                        cursor: pointer;
                        border: 1px solid rgba(38, 38, 38, 1) ;
                    }

                    .faq-item[open] .faq-question::after {
                        content: "-";
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0.4rem 1.1rem;
                    }

                    .faq-answer {
                        width: 633px;
                        animation: fadeIn 0.3s ease;
                    }

                    .faq-answer p {
                        margin-bottom: 30px;
                        margin-top: 0;
                        color: rgba(140, 140, 140, 1);
                        font-size:18px;
                        font-family: "Sora", sans-serif;
                        font-weight: 400;
                        line-height: 150%;
                    }

                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(-10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    /* Адаптивность */
                    @media (max-width: 768px) {
                        .faq-section {
                            padding: 20px 15px;
                        }

                        .faq-section h2 {
                            font-size: 1.5rem;
                            margin-bottom: 20px;
                        }

                        .faq-question {
                            padding: 15px 40px 15px 15px;
                            font-size: 1rem;
                        }

                        .faq-answer {
                            padding: 15px;
                        }

                        .faq-answer p {
                            font-size: 0.95rem;
                        }

                        .faq-question::after {
                            right: 15px;
                        }
                    }

                    @media (max-width: 480px) {
                        .faq-section {
                            padding: 15px 10px;
                        }

                        .faq-section h2 {
                            font-size: 1.3rem;
                        }

                        .faq-question {
                            padding: 12px 35px 12px 12px;
                            font-size: 0.95rem;
                        }

                        .faq-answer {
                            padding: 12px;
                        }
                    }
                `}
            </style>

        </>

    );
};

export default FAQ;