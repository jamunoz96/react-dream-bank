export default interface AuthStore {
    user: any,
    token: string | null,
    errorMessage: string | null
    isLoading: boolean
}