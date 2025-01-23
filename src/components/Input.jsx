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
            setThirdValue((prev) => ({ ...prev, [el.name]: event.target.value }))   
            console.log(thirdValue);
            
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
}