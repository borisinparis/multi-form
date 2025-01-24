export const Completed = ({ setStep }) => {

    const onSubmitBack = () => {
        setStep(3)

    }
    return (<div className="w-[100%] flex items-center justify-center h-[1400px] bg-gray">

        <div className="w-[480px] min-h-[655px] p-8 rounded-xl bg-black">
            <h1 className="text-[26px]  text-white">Join us! 😎</h1>
            <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">Please provide all current information accurately.</p>
            <button onClick={onSubmitBack} className="flex flex-1 items-center justify-center w-[60px] h-[44px] rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80">"back</button>
        </div>



    </div>

    )
}