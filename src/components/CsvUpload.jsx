import { Animator } from "./index";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

/**
 * @description - ⚙️ CsvUpload Component
 * @returns {JSX.Element}
 * @constructor
 */
const CsvUpload = () => {
  let navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    projectName,
    projectDescription,
    client,
    contractor,
    csvData,
    setCsv,
  } = useContext(GlobalContext);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const csvText = event.target.result;
        const lines = csvText.split("\n");

        if (lines.length >= 2) {
          const csvHeaders = lines[0].split(",").map((header) => header.trim());
          const csvDataArray = [];

          for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(",");
            if (values.length === csvHeaders.length) {
              const csvObject = {};
              csvHeaders.forEach((header, index) => {
                csvObject[header] = values[index].trim();
              });
              csvDataArray.push(csvObject);
            }
          }

          setCsv({ csvData: csvDataArray });
        } else {
          console.log("CSV file doesn't have enough lines.");
        }
      };

      reader.readAsText(file);
    }
  };

  // Initialize min and max objects with initial values
  const initialValues = {
    KP: { min: Infinity, max: -Infinity },
    X: { min: Infinity, max: -Infinity },
    Y: { min: Infinity, max: -Infinity },
    Z: { min: Infinity, max: -Infinity },
  };

  const minMaxCalculation = () => {
    // Iterate through the data to find min and max values
    csvData.forEach((entry) => {
      Object.keys(entry).forEach((key) => {
        const value = parseFloat(entry[key]);
        if (!isNaN(value)) {
          initialValues[key].min = Math.min(initialValues[key].min, value);
          initialValues[key].max = Math.max(initialValues[key].max, value);
        }
      });
    });

    // Resulting min and max values
    const minMaxValues = Object.fromEntries(
      Object.entries(initialValues).map(([key, { min, max }]) => [
        key,
        { min, max },
      ])
    );

    setCsv({ minMaxValues: minMaxValues });
  };

  // It's a callback function that will be called when the form is submitted.
  const onSubmit = () => {
    minMaxCalculation();
    navigate("/result");
  };

  return (
    <Animator className="w-full max-w-2xl pl-2 pr-2 top-1/4">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col items-start gap-[20px] w-full max-w-2xl"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="font-semibold text-xl bg-green-600 p-4 rounded-xl text-center text-white place-self-center w-full shadow-md ">
          Upload CSV file or click on Next button{" "}
        </h2>

        <div className="w-full">
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
              errors.projectName && "border-red-500 focus:border-red-500"
            }`}
            type="text"
            name="projectName"
            defaultValue={projectName}
            disabled
          />
        </div>

        <div className="w-full">
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
              errors.projectDescription && "border-red-500 focus:border-red-500"
            }`}
            type="text"
            name="projectDescription"
            defaultValue={projectDescription}
            disabled
          />
        </div>
        <div className="w-full">
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
              errors.client && "border-red-500 focus:border-red-500"
            }`}
            type="text"
            name="client"
            defaultValue={client}
            disabled
          />
        </div>
        <div className="w-full">
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
              errors.contractor && "border-red-500 focus:border-red-500"
            }`}
            type="text"
            name="contractor"
            defaultValue={contractor}
            disabled
          />
        </div>
        <div className="w-full">
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
              errors.facebook && "border-red-500 focus:border-red-500"
            }`}
            type="file"
            name="facebook"
            accept=".csv"
            onChange={handleFileUpload}
          />
        </div>

        <button
          className=" place-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Next
        </button>
      </form>
    </Animator>
  );
};

export default CsvUpload;
