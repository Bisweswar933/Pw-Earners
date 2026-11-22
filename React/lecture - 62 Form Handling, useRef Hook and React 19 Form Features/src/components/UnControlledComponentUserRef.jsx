import { useRef } from "react";


function UnControlledComponentUserRef() {
    const nameRef = useRef(null)


    function signup(e) {
        e.preventDefault();
        console.log(e.target);
        const formData = new FormData(e.target)
        console.log(Object.fromEntries(formData));
        // console.log(nameRef.current.value);
        nameRef.current.focus()

    }

    console.log("re-rendered");
    return (
        <div>
            <h1>form in react (Uncontrolled Component -useRef )</h1>
            <form action="" onSubmit={signup}>
                <label  htmlFor="name">
                    Name : {""}
                </label>
                <input ref={nameRef} type="text" name="name" id="name" />

                <br />

                <label htmlFor="name">Email :</label>
                <input type="text" name="email" id="email" />

                <br />

                <label htmlFor="password">Password :</label>
                <input type="text" name="password" id="password" />

                <br />
                <button>Submit</button>

            </form>
        </div>
    )
}

export default UnControlledComponentUserRef;
