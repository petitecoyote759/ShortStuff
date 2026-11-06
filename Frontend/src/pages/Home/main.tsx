import { Link } from "react-router"
import "./main.css"







export default function Home() {
    return (
        <div className="app">
            <aside className="sidebar">
                <h1>Header</h1>
                <p>Some Stuff yay, and links:
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/tests">Testing</Link>
                    </nav>
                </p>
            </aside>

            <div className="main">Information</div>
        </div>
    )
}