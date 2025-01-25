import { useState } from "react";

export const Input = ({ el, errors, value, step, setValueInput, setSecondPage, setThirdValue }) => {

    const [imagePreview, setImagePreview] = useState(null);


    if (step === 1) {
        const stepOneOnChange = (event) => {
            setValueInput((prev) => ({ ...prev, [el.name]: event.target.value }))
        };

        return ( <fieldset className="space-y-2">
                <label className="block text-sm font-semibold leading-4 text-[#334155]">{el?.name}
                    <span className="text-red-500">*</span>
                </label>
                <input
                    type={el.type}
                    placeholder={el.search}
                    onChange={stepOneOnChange}
                    value={value}
                    className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
                />
                <div className="text-red-700"> {errors[el.name]} </div>
                </fieldset>
        )
    }

    if (step === 2) {

        const stepTwoonChange = (event) => {
            setSecondPage((prev) => ({ ...prev, [el.name]: event.target.value }))
        };

        return ( <fieldset className="space-y-2">

                <label className="block text-sm font-semibold leading-4 text-[#334155]">{el?.name}
                    <span className="text-red-500">*</span>
                </label>
                <input
                    type={el.type}
                    placeholder={el.search}
                    value={value}
                    onChange={stepTwoonChange}
                    className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
                />
                <div className="text-red-700"> {errors[el.name]} </div>
                </fieldset>
        )
    }



    const onChange = (event) => {
        if (el.name == "Date of birth") {
            setThirdValue({ [el.name]: event.target.value })
            console.log([el.name]);

        }
        if (el.name === "profile" && event.target.files) {


            const file = event.target.files[0];

            if (file) {
                setThirdValue((prev) => ({ ...prev, [el.name]: file }));

                const reader = new FileReader();

                reader.onload = function (e) {
                    setImagePreview(e.target.result);
                };

                reader.readAsDataURL(file); // Read the file as a data URL (base64 encoded)
            }
        }
    };



    return (
       <fieldset className="space-y-2">
            <label className="block text-sm font-semibold leading-4 text-[#334155]">{el?.name}
                <span className="text-red-700">*</span>
            </label>
            <input
                type={el.type}
                placeholder={el.search}
                accept="image/*"
                onChange={onChange}
                className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            />
            {el?.name === "profile" && (
                <img src={imagePreview} alt="Profile Preview" className="w-[400px] h-[300px]" />
            )}
            <div className="text-red-700"> {errors[el.name]} </div>
            </fieldset>

    )

}
