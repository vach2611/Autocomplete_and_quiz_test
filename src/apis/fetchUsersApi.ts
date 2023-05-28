import {UserType} from "components/UserItem/types";

export const fetchUsers = async (param: string): Promise<UserType[]> => {
    const response: Response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${param}`)
    return await response.json();
}
