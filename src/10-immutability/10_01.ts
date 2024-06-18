export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, titleCity: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: titleCity
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, titleLaptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: titleLaptop
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string) {
    return {
        ...u,
        books: [...u.books, newBooks]
    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType,
                           oldBook: string,
                           newBook: string) => ({
    ...u,
    books: u.books.map(b => (b === oldBook) ? newBook : b)
})

export const removeBook = (u: UserWithLaptopType & UserWithBooksType,
                           dontNeedBook: string) => ({
    ...u,
    books: u.books.filter(b => b !== dontNeedBook)
})

export const addNewCompanies = (u: UserWithLaptopType & WithCompaniesType,
                                addNewCompany: { id: number, title: string }) => ({
    ...u,
    companies: [
        {
            ...u.companies,
            addNewCompany
        }
    ]
})

export const updateCompanyTitle = (user: WithCompaniesType,
                                   newId: number,
                                   newTitle: string) => ({
    ...user,
    companies: user.companies.map(c => c.id === newId
        ? {...c, title: newTitle}
        : c
    )
})

export const updateCompanyTitle2 = (companies: {[key: string]: Array<CompanyType>},
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy
}

