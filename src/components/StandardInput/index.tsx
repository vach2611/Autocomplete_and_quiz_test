import {StandardInputComponentType} from "./types";

const StandardInput = ({className, type, placeholder, onChange, value}: StandardInputComponentType) => (
    <input
        className={className}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
)

export default StandardInput;
