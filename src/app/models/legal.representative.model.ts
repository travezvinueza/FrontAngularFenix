export interface LegalRepresentativeModel {
    email?: string,
    person: Person
}


export interface Person {
    name?: string,
    lastName?: string,
    document: string
}