import {FC, useContext} from "react";

import HighlightableText from "components/HighlightableText";
import {AutoCompleteContext} from "components/Autocomplete/context";

import {divideTextBySearchValue} from "utilities/divideTextBySearchValue";

import styles from "./styles.module.scss";

const UserItem: FC<{name: string}> = ({ name }) => {
    const {searchInputValue} = useContext(AutoCompleteContext);
    const textPieces: string[] = divideTextBySearchValue({text: name, searchValue: searchInputValue});
    const searchTerm: string = searchInputValue.toLowerCase()

    return (
        <div className={styles.userItem}>
            {textPieces.map((textPiece, index) => (
                <HighlightableText
                    key={index}
                    text={textPiece}
                    isHighlighted={textPiece.toLowerCase() === searchTerm}
                />
            ))}
        </div>
    )
}

export default UserItem;