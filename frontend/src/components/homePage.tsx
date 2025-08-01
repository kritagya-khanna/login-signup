

export default function HomePage() {

    function fetchLogin(){
      fetch('http://localhost:5000/login').then(res => res.json()).catch(err=>console.log(err));
    }

    function fetchSignUp(){
      fetch('http://localhost:5000/signup').then(res => res.json()).catch(err=>console.log(err));
    }

    return (
      <div className='w-screen h-screen flex justify-center items-center '>
        <div className='w-[60vw] h-[40vh] flex justify-evenly items-end  rounded-xl p-6'>
          <div className='grid grid-cols-2 gap-x-[10vw]  text-[1rem] items-center'>
            <div className='signUpDiv pl-4 pr-4 pt-2 pb-2 rounded-full w-[10vw] text-center border-2 border-black'>
              <div onClick={fetchLogin}>Login</div>
            </div>
            <div className='signUpDiv pl-4 pr-4 pt-2 pb-2 rounded-full w-[10vw] text-center border-2 border-black'>
              <div onClick={fetchSignUp}>SignUp</div>
            </div>
          </div>
        </div>
      </div>
    );
}
