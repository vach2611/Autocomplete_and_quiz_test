import {useContext} from "react";

import UserItem from "components/UserItem";
import NoResultFount from "components/NoResultFount";
import {AutoCompleteContext} from "components/Autocomplete/context";

import styles from "./styles.module.scss";

const ResultList = () => {
    const {usersData} = useContext(AutoCompleteContext)

    return usersData.length ? (
        <div className={styles.resultList}>
            {usersData.map(({name, id}) => (
                <UserItem key={id} name={name} />
            ))}
        </div>
    ) : <NoResultFount />
}

export default ResultList;