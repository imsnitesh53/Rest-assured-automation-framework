class ApiEndPoints{

    users = {
        signup: `/signup`,
        login: `/login`,
    }
    
    books = {
        create: `/books/`,
        update: (book_id) => `/books/${book_id}`,
        delete: (book_id) => `/books/${book_id}`,
        getById: (book_id) => `/books/${book_id}`,
        getAll: `/books/`
    }
    
    health = {
        check: `/health`
    }
}
export default new ApiEndPoints();