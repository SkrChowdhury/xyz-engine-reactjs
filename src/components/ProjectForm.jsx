import {Animator} from "./index"
import {GlobalContext} from "../context/GlobalContext"
import {useContext} from "react"
import {useForm} from "react-hook-form"
import {useNavigate} from "react-router-dom"

/**
 * @description - ⚙️ ProjectForm Component
 * @returns {JSX.Element}
 * @constructor
 */
const ProjectForm = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const { projectName,
    projectDescription,
    client,contractor,setProject} = useContext(GlobalContext)

    // A callback function that will be called when the form is submitted.
    const onSubmit = ({projectName,
        projectDescription,
        client,contractor,}) => {
        setProject({projectName,
            projectDescription,
            client,contractor,})
        navigate("/csv")
       
    }

    return <Animator className="w-full max-w-2xl pl-2 pr-2">
        <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col items-start gap-[20px] w-full max-w-2xl"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className="font-semibold text-xl">Tell us about yourself</h2>

            <div className="w-full">
                <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.projectName && "border-red-500 focus:border-red-500"}`}
                    type="text"
                    name="projectName"
                    defaultValue={projectName}
                    placeholder="Project name?"
                    {...register("projectName", {required: true})}
                />
                {errors.projectName && <p className="text-red-600 mt-1 text-sm">Project name is required</p>}
            </div>

            <div className="w-full">
                <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.projectDescription && "border-red-500 focus:border-red-500"}`}
                    type="text"
                    name="projectDescription"
                    defaultValue={projectDescription}
                    placeholder="Project Description?"
                    {...register("projectDescription", {required: true})}
                />
                {errors.projectDescription && <p className="text-red-600 mt-1 text-sm">Project description is required</p>}
            </div>

            <div className="w-full">
                <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.client && "border-red-500 focus:border-red-500"}`}
                    type="text"
                    name="client"
                    defaultValue={client}
                    placeholder="Client?"
                    {...register("client", {required: true})}
                />
                {errors.client && <p className="text-red-600 mt-1 text-sm">client is required</p>}
            </div>

            <div className="w-full">
                <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.contractor && "border-red-500 focus:border-red-500"}`}
                    type="text"
                    name="contractor"
                    defaultValue={contractor}
                    placeholder="Contractor?"
                    {...register("contractor", {required: true})}
                />
                {errors.contractor && <p className="text-red-600 mt-1 text-sm">contractor is required</p>}
            </div>



            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >Next
            </button>
        </form>
    </Animator>
}

export default ProjectForm
