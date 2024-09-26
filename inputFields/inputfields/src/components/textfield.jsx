import { useState } from "react";
import './css/textfield.css'

export default function TextField() {

    return (
        <>
            <h1>Hva syntes du om den lille prinsen som bok?</h1>
            
            <label>
                <input className="textfield" type="text" />
            </label>
        </>
    )
}