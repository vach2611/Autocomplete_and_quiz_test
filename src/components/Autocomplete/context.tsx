import {createContext, useState, FC, useEffect} from "react";

import {UserType} from "components/UserItem/types";

import {fetchUsers} from "apis/fetchUsersApi";

import {AutoCompleteContextProps, AutoCompleteProviderProps} from "./types";

export const AutoCompleteContext = createContext<AutoCompleteContextProps>({
    searchInputValue: '',
    setSearchInputValue: () => {},
    usersData: [],
    setUsersData: () => {}
});

export const AutoCompleteProvider: FC<AutoCompleteProviderProps> = ({children}) => {
    const [searchInputValue, setSearchInputValue]
        = useState<string>('');
    const [usersData, setUsersData]
        = useState<UserType[]>([]);

    useEffect(() => {
        fetchUsers(searchInputValue).then(result => setUsersData(result))
    }, [searchInputValue])

    return (
        <AutoCompleteContext.Provider
            value={{
                searchInputValue,
                setSearchInputValue,
                usersData,
                setUsersData
            }}
        >
            {children}
        </AutoCompleteContext.Provider>
    )
}
