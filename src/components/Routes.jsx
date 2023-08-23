import {Route, Routes, useLocation} from "react-router-dom"

import {AnimatePresence} from "framer-motion"
import CsvUpload from "./CsvUpload"
import {GlobalProvider} from "../context/GlobalContext"
import {NavLinks} from "./index"
import ProjectForm from "./ProjectForm"
import ResultScreen from "./ResultScreen"

/**
 * @description - ⚙️ XYZEngine Component
 * @returns {JSX.Element}
 * @constructor
 */
const XYZEngine = () => {
    // It's a React hook that returns the current location of the user.
    const location = useLocation()

    return <GlobalProvider>
        <NavLinks/>
        <div className="flex items-center justify-center h-full">
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" exact element={<ProjectForm/>}/>
                    <Route path="/csv" exact element={<CsvUpload/>}/>
                    <Route path="/result" exact element={<ResultScreen/>}/>
                </Routes>
            </AnimatePresence>
        </div>
    </GlobalProvider>
}

export default XYZEngine
