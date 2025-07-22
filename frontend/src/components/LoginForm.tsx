import { useState } from "react";
export default function LoginForm() {
    const [showPassword, SetShowPassword] = useState(false);
    const [useUsername, SetUseUsername] = useState(true);
    function EmailOrUsername(){
        useUsername ? SetUseUsername(false) : SetUseUsername(true);
    }
    function shouldShowPassword() {
        !showPassword ? SetShowPassword(true) : SetShowPassword(false);
    }
    function submitForm(){

    }
    return (
        <>
            <form action="" className="flex flex-col border-2 border-black p-2 mb-2 gap-y-2">
                <div className="username-email flex gap-[1vw] w-[12vw]">
                    <label>{useUsername ? "Username" : "Email"}: </label>
                    <input className="border-2 border-black" type={useUsername? "text" : "email"} placeholder={useUsername ? "Username" : "Email"} />
                </div>
                <div className="password flex gap-[1.3vw]">
                    <label>Password: </label>
                    <div className="password-input flex">
                        <input className="border-2 border-black w-[9vw] border-r-slate-900" type={showPassword ? "text" : "password"} placeholder="password" />
                        <button className="border-2 border-black border-l-0 w-[3vw]"  type="button" onClick={shouldShowPassword}>{showPassword ? "hide" : "show"}</button>
                    </div>
                </div>
                <div className="email-or-username border-2 border-black w-[17.8vw]">
                    <button type= "button" onClick={EmailOrUsername}>Login with {useUsername ?  "Email" : "Username"}</button>
                </div>
                <div className="submit-button border-2 border-black w-[17.8vw]">
                    <button onSubmit={submitForm}>Login</button>
                </div>
            </form>
        </>
    );
}