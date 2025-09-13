import React, { useRef } from 'react'

type Props = {}

function UncontrolledComponent(_props: Props) {
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        if (emailRef.current && nameRef.current) {
            console.log("Email value: " + emailRef.current.value);
            console.log("Password value: " + nameRef.current.value);
            alert(emailRef.current.value + " " + nameRef.current.value);
        }
    }

    return (
        <React.Fragment>
            <h2>Uncontrolled Component User Login Form</h2>
            <p>
                An uncontrolled component is a form component where the form data is handled by
                the Document Object Model (DOM) itself, rather than by the state within your React component.
                It's similar to traditional HTML form inputs. You can retrieve the value of an uncontrolled
                component using a ref once the form is submitted.
            </p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" name="name" ref={nameRef} required /><br />
                <input type="email" placeholder="email" name="email" ref={emailRef} required /><br />
                <input type="submit" value="Submit" />
            </form>

        </React.Fragment>
    )
}

export default UncontrolledComponent