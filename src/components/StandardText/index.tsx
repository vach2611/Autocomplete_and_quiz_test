import {StandardTextComponentType} from "./types";

const StandardText = ({text, className}: StandardTextComponentType) => (
    <p className={className} >{text}</p>
)

export default StandardText;
