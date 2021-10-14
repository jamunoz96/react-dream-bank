export default interface AuthStore {
    user: object,
    token: string | null,
    isAuthed: boolean,
    errorMessage: string | null
    isLoading: boolean
}