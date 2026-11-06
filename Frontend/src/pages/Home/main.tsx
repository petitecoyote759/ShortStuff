import { Link } from "react-router"
import "./main.css"
import { useState, type ReactElement } from "react"
import { DefaultSections } from "./MainContents"


export class Section {
    constructor(level: string, title: string, contents: ReactElement<any, any>) {
        this.level = level
        this.title = title
        this.id = "NO ID"
        this.contents = contents
    }

    level: string
    title: string
    id: string = "NO ID"
    contents: ReactElement<any, any>
}




export default function Home() {
    const [sidebarMode, setSidebarMode] = useState<string>("Contents")
    const [sections, setSections] = useState<Section[]>(DefaultSections());


    return (
        <div className="app">
            <aside className="sidebar">
                <div className="sidebar-switch-wrapper">
                    <button 
                        onClick={() => setSidebarMode("Contents")} 
                        className={`sidebar-switch-button ${sidebarMode == "Contents" ? "button-active" : ""}`}>Contents</button>
                    <button 
                        onClick={() => setSidebarMode("Projects")}  
                        className={`sidebar-switch-button ${sidebarMode == "Projects" ? "button-active" : ""}`}>Projects</button>
                </div>

                <div className="sidebar-contents">
                    {sidebarMode == "Contents" && (
                        <>
                            {sections.map((section, index) => (
                                <div 
                                    className="sidebar-section"
                                    key={index}
                                    onClick={() => {
                                        document.getElementById(`section-${index}`)
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start"
                                        })
                                    }}    
                                >
                                    <span className="sidebar-section-id">{section.id}</span>
                                    <h1>{section.title}</h1>
                                </div>
                            ))}
                        </>
                    )}
                </div>

            </aside>

            <div className="main">

                
                {sections.map((section, index) => (
                    <div className="section" id={`section-${index}`} key={index}>
                        <h1>{`${section.id} ${section.title}`}</h1>
                        {section.contents}
                    </div>
                ))}
                

            </div>
        </div>
    )
}