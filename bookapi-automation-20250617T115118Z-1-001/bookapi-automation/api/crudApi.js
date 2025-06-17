import supertest from 'supertest';
import apiEndPoints from './apiEndPoints';



class CrudApi{
    getApiUrl = () => {
        let apiUrl = `http://127.0.0.1:8000`;
        return apiUrl;
    };
   
    

    async signup(email, password){
        const api = supertest(this.getApiUrl());
        let inputJson = {
            email: email,
            password: password
        };

        return await api
            .post(apiEndPoints.users.signup)
            .send(inputJson)
            .set('Content-Type', 'application/json')
            .then((response) => {
                return response;
            });
    }

    async login(email, password){
        const api = supertest(this.getApiUrl());
        let inputJson = {
            email: email,
            password: password
        };

        return await api
            .post(apiEndPoints.users.login)
            .send(inputJson)
            .set('Content-Type', 'application/json')
            .then((response) => {

                return response;
            });
    }

    async addBook(email, password, bookData){
        // First login to get access token
        const loginResponse = await this.login(email, password);
        const accessToken = loginResponse.body.access_token;

        // Then create the book with the token
        const api = supertest(this.getApiUrl());
        
        return await api
            .post(apiEndPoints.books.create)
            .send(bookData)
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${accessToken}`)
            .then((response) => {
                
                return response;
            });
    }

async updateBook(email, password, bookId, bookData){
    // First login to get access token
    const loginResponse = await this.login(email, password);
    const accessToken = loginResponse.body.access_token;

    // Then update the book with the token
    const api = supertest(this.getApiUrl());
    
    return await api
        .put(apiEndPoints.books.update(bookId))
        .send(bookData)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) => {
            return response;
        });
}

async deleteBook(email, password, bookId){
    // First login to get access token
    const loginResponse = await this.login(email, password);
    const accessToken = loginResponse.body.access_token;

    // Then delete the book with the token
    const api = supertest(this.getApiUrl());
    
    return await api
        .delete(apiEndPoints.books.delete(bookId))
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) => {
            return response;
        });
}

async getBookById(email, password, bookId){
    // First login to get access token
    const loginResponse = await this.login(email, password);
    const accessToken = loginResponse.body.access_token;

    // Then get the book with the token
    const api = supertest(this.getApiUrl());
    
    return await api
        .get(apiEndPoints.books.getById(bookId))
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) => {
            return response;
        });
}

async getAllBooks(email, password){
    // First login to get access token
    const loginResponse = await this.login(email, password);
    const accessToken = loginResponse.body.access_token;

    // Then get all books with the token
    const api = supertest(this.getApiUrl());
    
    return await api
        .get(apiEndPoints.books.getAll)
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) => {
            return response;
        });
}
}
export default new CrudApi();