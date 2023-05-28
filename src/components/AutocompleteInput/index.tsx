import {useContext, useEffect, useState, ChangeEvent} from "react";

import StandardInput from "components/StandardInput";
import {AutoCompleteContext} from "components/Autocomplete/context";

import useDebounce from "hooks/useDebounce";

import styles from "./styles.module.scss";

const AutocompleteInput = () => {
    const {setSearchInputValue} = useContext(AutoCompleteContext);
    const [value, setValue] = useState<string>('');

    // useDebounce - optimization trick for reducing number of extra requests in typing
    const debouncedValue: string = useDebounce(value, 400)

    useEffect((): void => {
        setSearchInputValue(value)
    }, [debouncedValue]) // eslint-disable-line

    return (
        <StandardInput
            className={styles.textInput}
            type="search"
            placeholder="Write name of user (e.g Jhon Doe)"
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
    )
}

export default AutocompleteInput;