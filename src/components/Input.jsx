export const Input = ({ el, errors, step, setValueInput, setSecondPage,setThirdValue,thirdValue}) => {


    if (step === 1) {
        const onChange = (event) => {
            setValueInput((prev) => ({ ...prev, [el.name]: event.target.value }))
        };

        return (
            <div className="flex flex-col mt-10" >
                <label className="text-sm text-white font-semibold">{el?.name}</label>
                <input
                    type={el.type}
                    placeholder={el.search}
                    onChange={onChange}
                    className="w-full border py-4 px-2 rounded-xl"
                />
                <div className="text-red-700"> {errors[el.name]} </div>
            </div>
        )
    }

    if (step === 2) {

        const onChange = (event) => {
            setSecondPage((prev) => ({ ...prev, [el.name]: event.target.value }))
        };

        return (
            <div className="flex flex-col mt-10" >
                <label className="text-sm text-white font-semibold">{el?.name}</label>
                <input
                    type={el.type}
                    placeholder={el.search}
                    onChange={onChange}
                    className="w-full border py-4 px-2 rounded-xl"
                />
                <div className="text-red-700"> {errors[el.name]} </div>
            </div>
        )
    }

    if (step === 3) {

        const onChange = (event) => {
            if(el.name == "Date of birth" ) {
                setThirdValue({[el.name]: event.target.value})
                console.log([el.name]);
                
            } 
            if(el.name == "profile") {
                console.log({[el.name]: event.target.value});
                
             setThirdValue((prev) => ({ ...prev, [el.name]: event.target.value }))  
             
            }
            // console.log({[el.name]:event.target.value});
            
            
        };

        return (
            <div className="flex flex-col mt-10" >
                <label className="text-sm text-white font-semibold">{el?.name}</label>
                <input
                    type={el.type}
                    placeholder={el.search}
                    accept="image/*"
                    onChange={onChange}
                    className="w-full border py-4 px-2 rounded-xl"
                />
                <div className="text-red-700"> {errors[el.name]} </div>
            </div>
        )
    }
}