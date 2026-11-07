import { useState, type ReactNode } from "react"
import "./main.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"



type TabParams = {
    text?: string,
    className?: string
    contents?: ReactNode

    onClick?: Function
    isOpen?: boolean
}

function Tab({text, className="", contents, onClick, isOpen=false}: TabParams) {

    if (onClick != null) {
        return (
        <button 
            className={`tab clickable-tab ${className} ${isOpen ? "open-tab" : ""}`}
            onClick={() => {onClick()}}
            >
            <span>
                {text == null ? contents : text}
            </span>
        </button>
        )
    }


    return (
        <div className={`tab ${className}`}>
            <span>
                {text == null ? contents : text}
            </span>
        </div>
    )
}






export default function AltHome() {

    const [openTab, setOpenTab] = useState<string>("")


    return (
        <div className="app-wrapper">
            <div className="top-bar">
                {/*Tabs*/}
                <Tab className="name-tab" text="matthew-short"/>

                
                <Tab onClick={() => {setOpenTab("Welcome.md")}} isOpen={openTab == "Welcome.md"} text="Welcome.md"/>
                <Tab onClick={() => {setOpenTab("About_Me.md")}} isOpen={openTab == "About_Me.md"} text="About_Me.md"/>
                <Tab onClick={() => {setOpenTab("Technical_Skills.md")}} isOpen={openTab == "Technical_Skills.md"} text="Technical_Skills.md"/>
                <Tab onClick={() => {setOpenTab("Education.md")}} isOpen={openTab == "Education.md"} text="Education.md"/>
                <Tab onClick={() => {setOpenTab("Experience.md")}} isOpen={openTab == "Experience.md"} text="Experience.md"/>
                    


                <div className="tag-gap"/>

                    
                <Tab onClick={() => {setOpenTab("")}} className="contact-tab" text="Close Tab"/>


                <Tab text="Contact Me" className=""/>
            </div>




            <main className="main">

            </main>






            <div className="bottom-bar">
                <Tab text="Find Me:"/>
                
                <Tab onClick={() => {}} contents={<FontAwesomeIcon className="social-icon" icon={faGithub}/>}/>
                <Tab onClick={() => {}} contents={<FontAwesomeIcon className="social-icon" icon={faInstagram}/>}/>
                <Tab onClick={() => {}} contents={<FontAwesomeIcon className="social-icon" icon={faLinkedin}/>}/>
            </div>
        </div>
    )
}