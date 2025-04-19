import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return(
        <footer >
            <div className="content">
                <div className="logo">
                    <Image src="/images/logo.webP" alt="logo" width={54} height={54} style={{borderRadius:'8%'}} />
                    <p>VukConnect</p>
                </div>
                <p><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;+21 324 433 231</p>
                <p><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;john@example.com</p>
                <p><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;Grove Street 21 st, Miami, USA</p>
            </div>

            <Image src="/images/Group 2.svg" alt="Vektori" width={1920} height={1080} className="fVektori"/>
        </footer>
    )
}

export default Footer
