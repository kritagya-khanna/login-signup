import { useState } from "react";
export default function SigninForm() {
    const [showPassword, SetShowPassword] = useState(false);
    const [showConfrimPassword, SetShowConfirmPassword] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);
    const [password, setPassword] = useState("");
    function shouldShowPassword() {
        !showPassword ? SetShowPassword(true) : SetShowPassword(false);
    }
    function shouldShowConfrimPassword() {
        !showConfrimPassword ? SetShowConfirmPassword(true) : SetShowConfirmPassword(false);
    }
    function checkConfirmPassword(confirmPassword: string) {
        confirmPassword !== password ? setError(true) : setError(false)
    }
    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(firstName.trim() === "") return;
        if(lastName.trim() === "") return;
        if(email.trim() === "") return;
        if(username.trim() === "") return;
        if(password.length < 8)
        if(error) return;
    }
    function reload(){
        window.location.href = "https://google.com";
    }
    return (
        <>
            <form onSubmit={submitForm} action={reload} className="border-2 border-black p-2 flex flex-col">
                <div className="NameDiv">
                    <label>First Name </label>
                    <input 
                        id="firstName" 
                        type="text" 
                        placeholder="First Name"
                        onChange={(e)=>setFirstName(e.target.value)} />
                    <label>Last Name </label>
                    <input 
                        id="lastName" 
                        type="text" 
                        placeholder="Last Name" 
                        onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Email </label>
                    <input 
                        id="emailId" 
                        type="text" 
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Username </label>
                    <input 
                        id="userName"
                        type="text" 
                        placeholder="Username"
                        onChange={(e)=>setUsername(e.target.value)} />
                </div>

                <div>
                    <label>Password</label>
                    <input 
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)} />
                    <button 
                        type="button" 
                        onClick={shouldShowPassword}>{showPassword ? "hide" : "show"}
                        password
                    </button>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type={showConfrimPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        onChange={(e) => checkConfirmPassword(e.target.value)} />
                    <button 
                        type="button" 
                        onClick={shouldShowConfrimPassword}>{showConfrimPassword ? "hide" : "show"} 
                        password
                    </button>
                    {error && <p id="isSame">password doesnt match</p>}
                </div>

                <button  type="submit">Signup</button>
            </form>
        </>
    );
}