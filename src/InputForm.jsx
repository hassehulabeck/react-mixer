import { useRef, useState } from 'react'

export function InputForm({ onAdd }) {
    const [error, setError] = useState("")
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)

    function handleSubmit(e) {
        // No reload of page
        e.preventDefault()
        const firstname = firstNameRef.current.value.trim()
        const lastname = lastNameRef.current.value.trim()

        if (!firstname || !lastname) {
            setError("Please enter a name")
            return
        }

        // Call the parent with the function, cleanup form.
        onAdd(firstname, lastname)
        setError("")
        firstNameRef.current.value = ""
        lastNameRef.current.value = ""
        firstNameRef.current.focus()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First name</label>
            <input ref={firstNameRef} type="text" name="firstname" id="firstname" />
            <label htmlFor="lastname">Last name</label>
            <input ref={lastNameRef} type="text" name="lastname" id="lastname" />
            <button type="submit">Add person</button>
            {error && <p>{error}</p>}
        </form>
    )
}