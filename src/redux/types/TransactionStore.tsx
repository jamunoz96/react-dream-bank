export default interface TransactionStore {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: object[],
    errorMessage: string | null
    isLoading: boolean
}