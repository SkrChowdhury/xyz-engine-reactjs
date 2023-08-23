import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { GlobalContext } from "../context/GlobalContext";

/**
 * @description - ⚙️ NavLinks Component
 * @returns {JSX.Element}
 * @constructor
 */ 
const NavLinks = () => {
  const { projectName,
    projectDescription,
    client,contractor, csvData } = useContext(GlobalContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  
  console.log("🚀 ~ file: NavLinks.jsx:19 ~ NavLinks ~ csvData:", csvData)

  // This is a ternary operator that checks if the name and email fields are filled out.
  const isProjectDone = projectName?.length !== 0 && projectDescription?.length !== 0 && client?.length !== 0 && contractor?.length !== 0;
  // This is a ternary operator that checks if the twitter and facebook fields are filled out.
  // const isCSVDataDone = twitter.length !== 0 && facebook.length !== 0;
  const isCSVDataDone = csvData !== [] ;

  useEffect(() => {
    if (!isProjectDone && !isCSVDataDone) navigate("/");
  }, []);

  return (
    <div className="pt-5 border-b-2 border-b-slate-300 flex gap-[20px] items-center justify-center">
      <Link
        className={`pb-3 border-b-2 ${
          pathname === "/" && "border-b-slate-800 font-semibold"
        }`}
        to="/"
      >
        ProjectsInfo
      </Link>
      {isProjectDone ? (
        <Link
          className={`pb-3 border-b-2 ${
            pathname === "/csv" && "border-b-slate-800  font-semibold"
          }`}
          to="/csv"
        >
          CSV Upload
        </Link>
      ) : (
        <span className="pb-3 text-slate-500 border-b-2">CSV Upload</span>
      )}
      {isProjectDone && isCSVDataDone ? (
        <Link
          className={`pb-3 border-b-2 ${
            pathname === "/result" && "border-b-slate-800 font-semibold"
          }`}
          to="/result"
        >
          Result
        </Link>
      ) : (
        <span className="pb-3 text-slate-500 border-b-2">Result</span>
      )}
    </div>
  );
};

export default NavLinks;
