type companyType = {
    bs: string,
    catchPhrase: string,
    name: string
}
export interface UserType {
    name: string,
    id: number,
    username: string,
    company: companyType,
    phone?: string,
    website?: string
}
