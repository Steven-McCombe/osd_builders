import React, {Component} from "react";
import Header from "../Home1/Header";
import HeroArea from "../About/HeroArea";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

class ContactPage extends Component{
    render() {
        return(
            <div>
                <Header/>
                <HeroArea slug='CONTACT US' title='Get A Free Quote'/>
                <ContactInfo/>
                <ContactMap/>
                <ContactForm/>
            </div>
        )
    }
}
export default ContactPage;