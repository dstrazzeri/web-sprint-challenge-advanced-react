// write your custom hook here to control your checkout form
import { useState } from 'react' 

const useForm = (initialValue) => {
    const [showSuccessMessage, setSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);

    const handleChanges = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setSuccessMessage(true)
    }
    return ([values, handleChanges, handleSubmit, showSuccessMessage])
}

export default useForm;
