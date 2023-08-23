import { useContext, useState } from "react";

import { Animator } from "./index";
import { GlobalContext } from "../context/GlobalContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument";
import { useForm } from "react-hook-form";

/**
 * @description - ⚙️ ResultScreen Component
 * @returns {JSX.Element}
 * @constructor
 */
const ResultScreen = () => {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const { max_X,min_X,max_Y,min_Y,max_Z,min_Z,minMaxValues, setCsv} =
    useContext(GlobalContext);

  console.log(minMaxValues)

  // A callback function that will be called when the form is submitted.
  const onSubmit = ({max_X,min_X,max_Y,min_Y,max_Z,min_Z}) => {
    setCsv({max_X,min_X,max_Y,min_Y,max_Z,min_Z})
    // alert("Your data is submitted!");
    // setIsSubmit(true);
  };
console.log(max_X)

  return (
    <Animator className="w-full max-w-2xl pl-2 pr-2">
      <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col items-start gap-[20px] w-full max-w-2xl"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >

          <>
          <h2 className="font-semibold text-xl">Fill up all fields</h2>

          <div className="w-full flex justify-evenly">
          <div className="w-1/3">
    <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.max_X && "border-red-500 focus:border-red-500"}`}
        type="number"
        name="max_X"
        defaultValue={minMaxValues.X.max ?? max_X}
        placeholder="max_X"
        {...register("max_X", {required: true})}
    />
    {errors.max_X && <p className="text-red-600 mt-1 text-sm">max_X is required</p>}
</div>

<div className="w-1/3">
    <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.min_X && "border-red-500 focus:border-red-500"}`}
        type="number"
        name="min_X"
        defaultValue={minMaxValues.X.min ?? min_X}
        placeholder="min_X"
        {...register("min_X", {required: true})}
    />
    {errors.min_X && <p className="text-red-600 mt-1 text-sm">min_X is required</p>}
</div>

          </div>


          <div className="w-full flex justify-evenly">
<div className="w-1/3">
    <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.max_Y && "border-red-500 focus:border-red-500"}`}
        type="number"
        name="max_Y"
        defaultValue={minMaxValues.Y.max ?? max_Y}
        placeholder="max_Y"
        {...register("max_Y", {required: true})}
    />
    {errors.max_Y && <p className="text-red-600 mt-1 text-sm">max_Y is required</p>}
</div>
<div className="w-1/3">
    <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.min_Y && "border-red-500 focus:border-red-500"}`}
        type="number"
        name="min_Y"
        defaultValue={ minMaxValues.Y.min ?? min_Y}
        placeholder="min_Y"
        {...register("min_Y", {required: true})}
    />
    {errors.min_Y && <p className="text-red-600 mt-1 text-sm">min_Y is required</p>}
</div>

</div>

<div className="w-full flex justify-evenly">
<div className="w-1/3">
    <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.max_Z && "border-red-500 focus:border-red-500"}`}
        type="number"
        name="max_Z"
        defaultValue={minMaxValues.Z.max ?? max_Z}
        placeholder="max_Z"
        {...register("max_Z", {required: true})}
    />
    {errors.max_Z && <p className="text-red-600 mt-1 text-sm">max_Z is required</p>}
</div>
<div className="w-1/3">
    <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.min_Z && "border-red-500 focus:border-red-500"}`}
        type="number"
        name="min_Z"
        defaultValue={minMaxValues.Z.min ?? min_Z}
        placeholder="min_Z"
        {...register("min_Z", {required: true})}
    />
    {errors.min_Z && <p className="text-red-600 mt-1 text-sm">min_Z is required</p>}
</div>
</div>

<button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={minMaxValues.X.max !== -Infinity}
          >
            Submit
          </button>
          
          </> 


          <div className="w-full">
          
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3 font-bold">
                    Name
                </th>
                <th scope="col" className="px-6 py-3 font-bold">
                    Max Value
                </th>
                <th scope="col" className="px-6 py-3 font-bold">
                    Min Value
                </th>

            </tr>
        </thead>
        <tbody>
            <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    X
                </th>
                <td className="px-6 py-4">
                   { max_X !== undefined ? max_X : minMaxValues?.X?.max  } 
                </td>
                <td className="px-6 py-4">
                { min_X !== undefined  ? min_X : minMaxValues?.X?.min  }
                </td>

            </tr>
            <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                   Y
                </th>
                <td className="px-6 py-4">
                { max_Y !== undefined  ? max_Y : minMaxValues?.Y?.max  }

                </td>
                <td className="px-6 py-4">
                { min_Y !== undefined  ? min_Y : minMaxValues?.Y?.min  }
                </td>

            </tr>
            <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Z
                </th>
                <td className="px-6 py-4">
                { max_Z !== undefined  ? max_Z : minMaxValues?.Z?.max  }

                </td>
                <td className="px-6 py-4">
                { min_Z !== undefined  ? min_Z : minMaxValues?.Z?.min  }
                </td>

            </tr>
        </tbody>
    </table>
</div>

          </div>

        {/* {!isSubmit && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        )} */}

        <PDFDownloadLink
          document={
            <PdfDocument
             minMaxValues={minMaxValues}
             max_X={max_X}
             min_X={min_X}
             max_Y={max_Y}
             min_Y={min_Y}
             max_Z={max_Z}
             min_Z={min_Z}
            />
          }
          fileName="result.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download PDF"
          }
        </PDFDownloadLink>
      </form>
    </Animator>
  );
};

export default ResultScreen;
