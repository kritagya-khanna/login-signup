

export default function HomePage() {
    return (
      <div className='w-screen h-screen flex justify-center items-center '>
        <div className='w-[60vw] h-[40vh] flex justify-evenly items-end  rounded-xl p-6'>
          <div className='grid grid-cols-2 gap-x-[10vw]  text-[1rem] items-center'>
            <div className='signUpDiv pl-4 pr-4 pt-2 pb-2 rounded-full w-[10vw] text-center border-2 border-black'>
              <div>Login</div>
            </div>
            <div className='signUpDiv pl-4 pr-4 pt-2 pb-2 rounded-full w-[10vw] text-center border-2 border-black'>
              <div>SignUp</div>
            </div>
          </div>
        </div>
      </div>
    );
}
