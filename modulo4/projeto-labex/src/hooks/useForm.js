import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return [form, onChangeForm]
}

export default useForm