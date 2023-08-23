import {BrowserRouter as Router} from "react-router-dom"
import XYZEngine from "./components/Routes"

/**
 * @description - ⚙️ Root Component
 * @returns {JSX.Element}
 * @constructor
 */
const Root = () =>
    <Router>
        <div className="overflow-hidden bg-gray-200 w-full h-screen">
           <XYZEngine/>
        </div>
    </Router>

export default Root
