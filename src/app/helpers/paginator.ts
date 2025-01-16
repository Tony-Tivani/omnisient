export class Paginator<T> {
    private items: T[];
    private pageSize: number;
    private currentPage: number;
    private totalItems: number = 0;

    constructor(items: T[], pageSize: number = 5) {
        this.items = items;
        this.totalItems = items.length;
        this.pageSize = pageSize;
        this.currentPage = 1;
    }

    get getTotalPages(): number {
        return Math.ceil(this.items.length / this.pageSize);
    }

    get getTotalItems(){
        return this.totalItems;
    }

    get getCurrentPage(): number {
        return this.currentPage;
    }

    get currentPageItems(): T[] {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.items.slice(start, end);
    }

    get getItemsForCurrentPage(): T[] {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.items.slice(startIndex, endIndex);
    }

    nextPage(): void {
        if (this.currentPage < this.getTotalPages) {
            this.currentPage++;
        }
    }

    set itemsPerPage(pageSize: number) {
        this.pageSize = pageSize;
        this.currentPage = 1; // Reset to the first page when itemsPerPage changes
      }

    previousPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    getDisplayRange(): string {
        const startIndex = (this.currentPage - 1) * this.pageSize + 1;
        const endIndex = Math.min(this.currentPage * this.pageSize, this.totalItems);
        return `${startIndex} - ${endIndex}`;
      }
}