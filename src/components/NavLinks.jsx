import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { GlobalContext } from "../context/GlobalContext";

/**
 * @description - ⚙️ NavLinks Component
 * @returns {JSX.Element}
 * @constructor
 */
const NavLinks = () => {
  const { projectName, projectDescription, client, contractor, csvData } =
    useContext(GlobalContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // This is a ternary operator that checks if all fields are filled out.
  const isProjectDone =
    projectName?.length !== 0 &&
    projectDescription?.length !== 0 &&
    client?.length !== 0 &&
    contractor?.length !== 0;
  // This is a ternary operator that checks if there are values for csvData
  const isCSVDataDone = csvData !== [];

  useEffect(() => {
    if (!isProjectDone && !isCSVDataDone) navigate("/");
  }, []);

  return (
    <div className="pt-5 border-b-2 border-b-slate-300 flex gap-[20px] items-center justify-center">
      <Link
        className={`p-3  ${
          pathname === "/" &&
          "bg-rose-700 bg-opacity-70 rounded-xl border-4 shadow-sm text-white font-semibold "
        }`}
        to="/"
      >
        Project Info
      </Link>
      {isProjectDone ? (
        <Link
          className={`p-3 ${
            pathname === "/csv" &&
            "bg-rose-700 bg-opacity-70 rounded-xl border-4 shadow-sm text-white font-semibold "
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
          className={`p-3  ${
            pathname === "/result" &&
            "bg-rose-700 bg-opacity-70 rounded-xl border-4 shadow-sm text-white font-semibold "
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
