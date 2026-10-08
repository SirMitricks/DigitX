import React, { useState } from 'react';
import './MapSection.scss';
import {Picturies} from "../../../assets/Fhoto.js";
import  IconServices from "../../../assets/IconServices1.png";

const WebDesignSection = () => {
    const [activeSection, setActiveSection] = useState('features');

    const sections = [
        {
            id: 'features',
            title: ` Web Design `,
            content: (
                <div className="content-card">
                    <div className="one-section">
                        <p>Web Design</p>
                        <p>Web Design is the art and science of creating visually appealing and user-friendly websites that reflect your brand identity and resonate with your target audience. At DigitX, our web design process involves a careful blend of creativity, user experience (UX) design, and cutting-edge technologies. We take the time to understand your business goals, target market, and unique selling points to create a website that not only looks great but also drives results.</p>
                    </div>
                    <div className="two-section">
                        <p>Key Features</p>
                        <div className="container-section">
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>Customized Design</p>
                                    <p>We craft bespoke designs tailored to match your brand personality and industry.</p>
                                </div>
                                <div className="card-section">
                                    <p>Responsive Design</p>
                                    <p>Ensuring your website adapts seamlessly to different devices and screen sizes.</p>
                                </div>
                            </div>
                            <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>User-Centric Approach</p>
                                    <p>Prioritizing ease of navigation and intuitive user experience.</p>
                                </div>
                                <div className="card-section">
                                    <p>Visual Elements</p>
                                    <p>Incorporating engaging visuals, graphics, and animations to enhance the overall appeal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="three-section">
                        <div className="title-section">
                            <p>Design Process</p>
                            <p>Our Web Design process follows a systematic approach to deliver a website that aligns perfectly with your business needs and branding. Here's an overview of our design process</p>
                        </div>
                        <div className="container-section">
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>Discovery & Planning</p>
                                    <p>We start by understanding your business, target audience, and project goals. This stage involves gathering requirements and planning the design strategy.</p>
                                </div>
                                <div className="card-section">
                                    <p>Wireframing & Prototyping</p>
                                    <p>Creating wireframes and interactive prototypes to visualize the website's layout and user flow.</p>
                                </div>
                            </div>
                            <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>Design & Development</p>
                                    <p>Once the wireframes are approved, our designers start working on the visual elements while our developers bring the design to life.</p>
                                </div>
                                <div className="card-section">
                                    <p>Testing & Review</p>
                                    <p>We conduct thorough testing to ensure the website functions flawlessly across different browsers and devices. Client feedback is also incorporated at this stage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="four-section">
                        <div className="title-section">
                            <p>Web Design Portfolio</p>
                            <p>Check out some of our most recent Web Design projects in the table below</p>
                        </div>
                        <div className="imgcont">
                            <img src={Picturies.PhotoServices} alt=""/>
                            <button>View All Projects<img src={Picturies.ArrowLeft} alt=""/></button>
                        </div>
                    </div>
                    <div className="five-section">
                        <div className="title-section">
                            <p>Our Web Design Competed Projects</p>
                            <p>At DigitX, we are dedicated to creating transformative mobile apps that empower your business and enrich your users' experiences.</p>
                        </div>
                        <div className="Table">
                            <div className="title-sectioncc">
                                <p>Project Name</p>
                                <p>Industry</p>
                                <p>Website URL</p>
                            </div>
                            <div className="table-c">

                                    <p>GlobalTech Solutions</p>
                                    <p>E-commerce</p>
                                    <a href="">www.globaltechsolutions.com</a>


                                    <p>GreenEarth Eco Store</p>
                                    <p>Design Agency</p>
                                    <a href="">www.greenearthecostore.com</a>


                                    <p>TechGuru Inc.</p>
                                    <p>Technology</p>
                                    <a href="">www.techguruinc.com</a>

                            </div>
                        </div>

                    </div>
                </div>

            )
        },
        {
            id: 'process',
            title: `Web Development`,
            content: (
                <div className="content-card">
                    <div className="one-section">
                        <p>Web Development</p>
                        <p>Web Design is the art and science of creating visually appealing and user-friendly websites that reflect your brand identity and resonate with your target audience. At DigitX, our web design process involves a careful blend of creativity, user experience (UX) design, and cutting-edge technologies. We take the time to understand your business goals, target market, and unique selling points to create a website that not only looks great but also drives results.</p>
                    </div>
                    <div className="two-section">
                        <p>Key Features</p>
                        <div className="container-section">
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>Customized Design</p>
                                    <p>We craft bespoke designs tailored to match your brand personality and industry.</p>
                                </div>
                                <div className="card-section">
                                    <p>Responsive Design</p>
                                    <p>Ensuring your website adapts seamlessly to different devices and screen sizes.</p>
                                </div>
                            </div>
                            <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>User-Centric Approach</p>
                                    <p>Prioritizing ease of navigation and intuitive user experience.</p>
                                </div>
                                <div className="card-section">
                                    <p>Visual Elements</p>
                                    <p>Incorporating engaging visuals, graphics, and animations to enhance the overall appeal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="three-section">
                        <div className="title-section">
                            <p>Design Process</p>
                            <p>Our Web Design process follows a systematic approach to deliver a website that aligns perfectly with your business needs and branding. Here's an overview of our design process</p>
                        </div>
                        <div className="container-section">
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>Discovery & Planning</p>
                                    <p>We start by understanding your business, target audience, and project goals. This stage involves gathering requirements and planning the design strategy.</p>
                                </div>
                                <div className="card-section">
                                    <p>Wireframing & Prototyping</p>
                                    <p>Creating wireframes and interactive prototypes to visualize the website's layout and user flow.</p>
                                </div>
                            </div>
                            <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>Design & Development</p>
                                    <p>Once the wireframes are approved, our designers start working on the visual elements while our developers bring the design to life.</p>
                                </div>
                                <div className="card-section">
                                    <p>Testing & Review</p>
                                    <p>We conduct thorough testing to ensure the website functions flawlessly across different browsers and devices. Client feedback is also incorporated at this stage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="four-section">
                        <div className="title-section">
                            <p>Web Design Portfolio</p>
                            <p>Check out some of our most recent Web Design projects in the table below</p>
                        </div>
                        <div className="imgcont">
                            <img src={Picturies.PhotoServices} alt=""/>
                            <button>View All Projects<img src={Picturies.ArrowLeft} alt=""/></button>
                        </div>
                    </div>
                    <div className="five-section">
                        <div className="title-section">
                            <p>Our Web Design Competed Projects</p>
                            <p>At DigitX, we are dedicated to creating transformative mobile apps that empower your business and enrich your users' experiences.</p>
                        </div>
                        <div className="Table">
                            <div className="title-sectioncc">
                                <p>Project Name</p>
                                <p>Industry</p>
                                <p>Website URL</p>
                            </div>
                            <div className="table-c">

                                <p>GlobalTech Solutions</p>
                                <p>E-commerce</p>
                                <a href="">www.globaltechsolutions.com</a>


                                <p>GreenEarth Eco Store</p>
                                <p>Design Agency</p>
                                <a href="">www.greenearthecostore.com</a>


                                <p>TechGuru Inc.</p>
                                <p>Technology</p>
                                <a href="">www.techguruinc.com</a>

                            </div>
                        </div>

                    </div>
                </div>
            )
        },
        {
            id: 'portfolio',
            title: ` Mobile App Development`,
            content: (
                <div className="content-card">
                    <div className="one-section">
                        <p>Mobile App Development</p>
                        <p>Web Design is the art and science of creating visually appealing and user-friendly websites that reflect your brand identity and resonate with your target audience. At DigitX, our web design process involves a careful blend of creativity, user experience (UX) design, and cutting-edge technologies. We take the time to understand your business goals, target market, and unique selling points to create a website that not only looks great but also drives results.</p>
                    </div>
                    <div className="two-section">
                        <p>Key Features</p>
                        <div className="container-section">
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>Customized Design</p>
                                    <p>We craft bespoke designs tailored to match your brand personality and industry.</p>
                                </div>
                                <div className="card-section">
                                    <p>Responsive Design</p>
                                    <p>Ensuring your website adapts seamlessly to different devices and screen sizes.</p>
                                </div>
                            </div>
                            <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>User-Centric Approach</p>
                                    <p>Prioritizing ease of navigation and intuitive user experience.</p>
                                </div>
                                <div className="card-section">
                                    <p>Visual Elements</p>
                                    <p>Incorporating engaging visuals, graphics, and animations to enhance the overall appeal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="three-section">
                        <div className="title-section">
                            <p>Design Process</p>
                            <p>Our Web Design process follows a systematic approach to deliver a website that aligns perfectly with your business needs and branding. Here's an overview of our design process</p>
                        </div>
                        <div className="container-section">
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>Discovery & Planning</p>
                                    <p>We start by understanding your business, target audience, and project goals. This stage involves gathering requirements and planning the design strategy.</p>
                                </div>
                                <div className="card-section">
                                    <p>Wireframing & Prototyping</p>
                                    <p>Creating wireframes and interactive prototypes to visualize the website's layout and user flow.</p>
                                </div>
                            </div>
                            <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>Design & Development</p>
                                    <p>Once the wireframes are approved, our designers start working on the visual elements while our developers bring the design to life.</p>
                                </div>
                                <div className="card-section">
                                    <p>Testing & Review</p>
                                    <p>We conduct thorough testing to ensure the website functions flawlessly across different browsers and devices. Client feedback is also incorporated at this stage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="four-section">
                        <div className="title-section">
                            <p>Web Design Portfolio</p>
                            <p>Check out some of our most recent Web Design projects in the table below</p>
                        </div>
                        <div className="imgcont">
                            <img src={Picturies.PhotoServices} alt=""/>
                            <button>View All Projects<img src={Picturies.ArrowLeft} alt=""/></button>
                        </div>
                    </div>
                    <div className="five-section">
                        <div className="title-section">
                            <p>Our Web Design Competed Projects</p>
                            <p>At DigitX, we are dedicated to creating transformative mobile apps that empower your business and enrich your users' experiences.</p>
                        </div>
                        <div className="Table">
                            <div className="title-sectioncc">
                                <p>Project Name</p>
                                <p>Industry</p>
                                <p>Website URL</p>
                            </div>
                            <div className="table-c">

                                <p>GlobalTech Solutions</p>
                                <p>E-commerce</p>
                                <a href="">www.globaltechsolutions.com</a>


                                <p>GreenEarth Eco Store</p>
                                <p>Design Agency</p>
                                <a href="">www.greenearthecostore.com</a>


                                <p>TechGuru Inc.</p>
                                <p>Technology</p>
                                <a href="">www.techguruinc.com</a>

                            </div>
                        </div>

                    </div></div>
            )
        },
        {
            id: 'projects',
            title: ` Digital Marketing`,
            content: (
                <div className="content-card">
                    <div className="one-section">
                        <p>Digital Marketing</p>
                        <p>Web Design is the art and science of creating visually appealing and user-friendly websites that reflect your brand identity and resonate with your target audience. At DigitX, our web design process involves a careful blend of creativity, user experience (UX) design, and cutting-edge technologies. We take the time to understand your business goals, target market, and unique selling points to create a website that not only looks great but also drives results.</p>
                    </div>
                    <div className="two-section">
                        <p>Key Features</p>
                        <div className="container-section">
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>Customized Design</p>
                                    <p>We craft bespoke designs tailored to match your brand personality and industry.</p>
                                </div>
                                <div className="card-section">
                                    <p>Responsive Design</p>
                                    <p>Ensuring your website adapts seamlessly to different devices and screen sizes.</p>
                                </div>
                            </div>
                            <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>User-Centric Approach</p>
                                    <p>Prioritizing ease of navigation and intuitive user experience.</p>
                                </div>
                                <div className="card-section">
                                    <p>Visual Elements</p>
                                    <p>Incorporating engaging visuals, graphics, and animations to enhance the overall appeal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="three-section">
                        <div className="title-section">
                            <p>Design Process</p>
                            <p>Our Web Design process follows a systematic approach to deliver a website that aligns perfectly with your business needs and branding. Here's an overview of our design process</p>
                        </div>
                        <div className="container-section">
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>Discovery & Planning</p>
                                    <p>We start by understanding your business, target audience, and project goals. This stage involves gathering requirements and planning the design strategy.</p>
                                </div>
                                <div className="card-section">
                                    <p>Wireframing & Prototyping</p>
                                    <p>Creating wireframes and interactive prototypes to visualize the website's layout and user flow.</p>
                                </div>
                            </div>
                            <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                            <div className="cont-card">
                                <div className="card-section">
                                    <p>Design & Development</p>
                                    <p>Once the wireframes are approved, our designers start working on the visual elements while our developers bring the design to life.</p>
                                </div>
                                <div className="card-section">
                                    <p>Testing & Review</p>
                                    <p>We conduct thorough testing to ensure the website functions flawlessly across different browsers and devices. Client feedback is also incorporated at this stage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="four-section">
                        <div className="title-section">
                            <p>Web Design Portfolio</p>
                            <p>Check out some of our most recent Web Design projects in the table below</p>
                        </div>
                        <div className="imgcont">
                            <img src={Picturies.PhotoServices} alt=""/>
                            <button>View All Projects<img src={Picturies.ArrowLeft} alt=""/></button>
                        </div>
                    </div>
                    <div className="five-section">
                        <div className="title-section">
                            <p>Our Web Design Competed Projects</p>
                            <p>At DigitX, we are dedicated to creating transformative mobile apps that empower your business and enrich your users' experiences.</p>
                        </div>
                        <div className="Table">
                            <div className="title-sectioncc">
                                <p>Project Name</p>
                                <p>Industry</p>
                                <p>Website URL</p>
                            </div>
                            <div className="table-c">

                                <p>GlobalTech Solutions</p>
                                <p>E-commerce</p>
                                <a href="">www.globaltechsolutions.com</a>


                                <p>GreenEarth Eco Store</p>
                                <p>Design Agency</p>
                                <a href="">www.greenearthecostore.com</a>


                                <p>TechGuru Inc.</p>
                                <p>Technology</p>
                                <a href="">www.techguruinc.com</a>

                            </div>
                        </div>

                    </div>
                </div>
            )
        }
    ];

    const activeContent = sections.find(section => section.id === activeSection)?.content;

    return (
        <div className="web-design-section">
                <div className="content-wrapper">
                    <div className="navigation-buttons">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
                                onClick={() => setActiveSection(section.id)}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>

                    <div className="content-display">
                        {activeContent}
                    </div>
                </div>
        </div>
    );
};

export default WebDesignSection;