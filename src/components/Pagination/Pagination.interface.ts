export interface paginationProps {
    handlePageChange: (newPage: number) => void;
    pagination : {
        currentPage:number,
        totalPages:number
    }
}