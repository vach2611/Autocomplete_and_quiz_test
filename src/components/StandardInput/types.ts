import {ChangeEvent} from "react";

export type StandardInputComponentType = {
    className?: string,
    type?: string,
    placeholder?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string | number
}