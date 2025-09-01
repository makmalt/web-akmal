/* eslint-disable react/prop-types */
import { Label, TextInput } from "flowbite-react";

const Input = ({ label, placeholder}) => {
    return (
        <div>
            <Label htmlFor={label}>{label}</Label>
            <TextInput id={placeholder} placeholder={placeholder} />
        </div>
    )
}
 
export default Input;