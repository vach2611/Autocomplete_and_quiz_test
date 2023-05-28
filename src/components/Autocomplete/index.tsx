import AutocompleteInput from "components/AutocompleteInput";
import ResultList from "components/ResultList";
import StandardText from "components/StandardText";

import {AutoCompleteProvider} from "./context";

import styles from "./styles.module.scss";

const Autocomplete = () => {
    return (
        <AutoCompleteProvider>
            <div className={styles.autocompleteContainer}>
                <StandardText className={styles.title} text="All names comes from 'JSONPlaceholder API Service', type something inside text input" />

                <AutocompleteInput />

                <ResultList />
            </div>
        </AutoCompleteProvider>
    )
}

export default Autocomplete;