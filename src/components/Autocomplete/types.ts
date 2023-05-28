import {Dispatch, ReactNode, SetStateAction} from "react";
import {UserType} from "components/UserItem/types";

export interface AutoCompleteContextProps {
    searchInputValue: string,
    setSearchInputValue: Dispatch<SetStateAction<string>>,
    usersData: UserType[],
    setUsersData: Dispatch<SetStateAction<UserType[]>>
}

export type AutoCompleteProviderProps = {
    children: ReactNode
};