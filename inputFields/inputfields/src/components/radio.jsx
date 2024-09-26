import { useState } from "react";

export default function Radio() {
    
    const [
        selectedValue,
        setSelectedValue,
    ] = useState("option1");

    const handleRadioChange = (
        value
    ) => {
        setSelectedValue(value);
    };

    return (
        <>
        <form>
        <label>
            <input type="radio"value="opt1"/> Antoine de Saint-Exupéry
        <input type="radio" value="opt2"/> Jean-Jacques Rousseau
        <input type="radio"  value="opt3"/> Henrik Ibsen
        </label>
        </form>

        </>
    )
}