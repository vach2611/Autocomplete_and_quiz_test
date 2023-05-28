import {HighlightableComponentType} from "./types";

import styles from "./styles.module.scss";

const HighlightableText = ({text, isHighlighted}: HighlightableComponentType) => {
    return (
        <span
            className={isHighlighted ? styles.highlight : styles.standard}
            aria-label={isHighlighted ? `Highlighted: ${text}` : undefined}
        >
            {text}
        </span>
    )
}

export default HighlightableText;
