import { Link } from "react-router";







export default function NotFound() {
    return (
        <div className="app">
            <h1>Not found, go back <Link to="/">Here</Link></h1>
        </div>
    )
}