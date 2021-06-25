import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import Icon1 from '../../images/svg-9.svg'
import Icon2 from '../../images/svg-8.svg'
import Icon3 from '../../images/svg-3.svg'
import Icon4 from '../../images/svg-7.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Tech History</ServicesH1>
            <ServicesWrapper>
                <ServicesCard href="https://www.tristarcareercompact.com/programs/rec-tech" target="_blank">
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Electronics Technology</ServicesH2>
                    <ServicesP>At Tristar Vocational, I learned the fundementals in electrical components. The concepts included electronics components i.e. capacitors, transistors, resistors, diodes, IC's, etc. Theory includes A/C, D/C, Digital Logic. Developed skills to interpret schematics, troubleshooting, soldering, and circuit board design.</ServicesP>
                </ServicesCard>
                <ServicesCard href="https://www.boeing.com/defense/f-15/" target="_blank">
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>F15 Avionics Technician</ServicesH2>
                    <ServicesP>In the U.S. Air Force, I learned how to troubleshoot, service, and maintain F15 fighter jets. Technologies included Radar, ICS, UHF/VHF radios, HSI, Radar Warning Receiver, Control Augmentation Systems, HUD, Joint Helmet Mounted Cueing System, and more. Tasks included pre-flight, post-flight, and scheduled maintenance.  </ServicesP>
                </ServicesCard>
                <ServicesCard href="https://www.apple.com/careers/us/aha.html" target="_blank">
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>AppleCare Senior Advisor</ServicesH2>
                    <ServicesP>At Apple, I provided senior technical cross-platform assistance. In this role, I assisted interal advisors and external customers with guiding, troubleshooting, and educating current and existing services, software, hardware, and company policies. Software included iOS, MacOS, WatchOS, and all built-in services and features.</ServicesP>
                </ServicesCard>
                <ServicesCard href="https://lambdaschool.com/courses/full-stack-web-development" target="_blank">
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Web Development</ServicesH2>
                    <ServicesP>At Lambda School, I learned the fundementals of full stack web development. During this year and a half course, I developed skills with HTML, CSS, Javascript, NodeJS, React, REST, Python, ExpressJS, SQL, PostGreSQL, Secure Authentication, GIT, Environment Variables, and much more. Learning was conducted in lecture and teamwork environments.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
