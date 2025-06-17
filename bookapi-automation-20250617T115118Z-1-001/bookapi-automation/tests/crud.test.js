// crud.test.js - Complete test structure
import { test, expect } from '@playwright/test';
import crudApi from '../api/crudApi.js';
import { testData } from '../testdata.js';

test.describe('Book Store API Tests', () => {

    test.describe('Signup Tests', () => {
        test.describe('Positive Scenarios', () => {
            test('should successfully signup a new user', async () => {
                const response = await crudApi.signup(testData.users.newUser.email, testData.users.newUser.password);
                 console.log(response.body);
                expect(response.statusCode).toBe(testData.statusCodes.success);
                expect(response.body.message).toBe(testData.expectedMessages.userCreatedSuccessfully);
            });
        });

        test.describe('Negative Scenarios', () => {
            test('should fail to signup with duplicate email', async () => {
                const response = await crudApi.signup(testData.users.duplicateUser.email, testData.users.duplicateUser.password);
                 console.log(response.body);
                
                expect(response.statusCode).toBe(testData.statusCodes.badRequest);
                expect(response.body.detail).toBe(testData.expectedMessages.emailAlreadyRegistered);
            });
        });
    });

    test.describe('Login Tests', () => {
        test.describe('Positive Scenarios', () => {
            test('should successfully login with valid credentials', async () => {
                const response = await crudApi.login(testData.users.validUser.email, testData.users.validUser.password);
                 console.log(response.body);
                
                expect(response.statusCode).toBe(testData.statusCodes.success);
                expect(response.body.access_token).toBeDefined();
                expect(response.body.token_type).toBe('bearer');
            });
        });

        test.describe('Negative Scenarios', () => {
            test('should fail to login with invalid credentials', async () => {
                const response = await crudApi.login(testData.users.invalidUser.email, testData.users.invalidUser.password);
                 console.log(response.body);
                
                expect(response.statusCode).toBe(testData.statusCodes.badRequest);
                expect(response.body.detail).toBe(testData.expectedMessages.incorrectEmailOrPassword);
            });
        });
    });

    test.describe('Create Book Tests', () => {
        test.describe('Positive Scenarios', () => {
            test('should successfully create a new book', async () => {
                const response = await crudApi.addBook(testData.users.validUser.email, testData.users.validUser.password, testData.books.validBook);
                 console.log(response.body);
                
                expect(response.statusCode).toBe(testData.statusCodes.success);
                expect(response.body.name).toBe(testData.books.validBook.name);
                expect(response.body.author).toBe(testData.books.validBook.author);
                expect(response.body.id).toBeDefined();
            });
        });
    });

    test.describe('Get All Books Tests', () => {
        test.describe('Positive Scenarios', () => {
            test('should successfully get all books', async () => {
                const response = await crudApi.getAllBooks(testData.users.validUser.email, testData.users.validUser.password);
                 console.log(response.body);
                
                expect(response.statusCode).toBe(testData.statusCodes.success);
                expect(Array.isArray(response.body)).toBe(true);
            });
        });

        test.describe('Negative Scenarios', () => {
            test('should fail to get books with invalid credentials', async () => {
                const response = await crudApi.getAllBooks(testData.users.invalidUser.email, testData.users.invalidUser.password);
                 console.log(response.body);
                
                expect(response.statusCode).toBe(testData.statusCodes.fobidden);
                expect(response.body.detail).toBe(testData.expectedMessages.invalidToken);
            });
        });
    });

    test.describe('Get Book By ID Tests', () => {
        test.describe('Positive Scenarios', () => {
            test('should successfully get a book by valid ID', async () => {
                // First create a book to get valid ID
                const createResponse = await crudApi.addBook(testData.users.validUser.email, testData.users.validUser.password, testData.books.validBook);
                const bookId = createResponse.body.id;
                
                const response = await crudApi.getBookById(testData.users.validUser.email, testData.users.validUser.password, bookId);
                 console.log(response.body);
                
                expect(response.statusCode).toBe(testData.statusCodes.success);
                expect(response.body.id).toBe(bookId);
                expect(response.body.name).toBeDefined();
            });
        });

        test.describe('Negative Scenarios', () => {
            test('should fail to get book with invalid ID', async () => {
                const response = await crudApi.getBookById(testData.users.validUser.email, testData.users.validUser.password, testData.bookIds.invalidBookId);
                 console.log(response.body);
                
                expect(response.statusCode).toBe(testData.statusCodes.notFound);
                expect(response.body.detail).toBe(testData.expectedMessages.bookNotFound);
            });
        });
    });

    test.describe('Update Book Tests', () => {
        test.describe('Positive Scenarios', () => {
            test('should successfully update an existing book', async () => {
                // First create a book to get valid ID
                const createResponse = await crudApi.addBook(testData.users.validUser.email, testData.users.validUser.password, testData.books.validBook);
                const bookId = createResponse.body.id;
                
                const response = await crudApi.updateBook(testData.users.validUser.email, testData.users.validUser.password, bookId, testData.books.updatedBook);
                 console.log(response.body);
                
                expect(response.statusCode).toBe(testData.statusCodes.success);
                expect(response.body.name).toBe(testData.books.updatedBook.name);
                expect(response.body.id).toBe(bookId);
            });
        });

        test.describe('Negative Scenarios', () => {
            test('should fail to update non-existent book', async () => {
                const response = await crudApi.updateBook(testData.users.validUser.email, testData.users.validUser.password, testData.bookIds.invalidBookId, testData.books.updatedBook);
                 console.log(response.body);
                
                expect(response.statusCode).toBe(testData.statusCodes.notFound);
                expect(response.body.detail).toBe(testData.expectedMessages.bookNotFound);
            });
        });
    });

    test.describe('Delete Book Tests', () => {
        test.describe('Positive Scenarios', () => {
            test('should successfully delete an existing book', async () => {
                // First create a book to get valid ID
                const createResponse = await crudApi.addBook(testData.users.validUser.email, testData.users.validUser.password, testData.books.validBook);
                const bookId = createResponse.body.id;
                
                const response = await crudApi.deleteBook(testData.users.validUser.email, testData.users.validUser.password, bookId);
                 console.log(response.body);
                
                expect(response.statusCode).toBe(testData.statusCodes.success);
                expect(response.body.message).toBe(testData.expectedMessages.bookDeletedSuccessfully);
            });
        });

        test.describe('Negative Scenarios', () => {
            test('should fail to delete non-existent book', async () => {
                const response = await crudApi.deleteBook(testData.users.validUser.email, testData.users.validUser.password, testData.bookIds.invalidBookId);
                 console.log(response.body);
                
                expect(response.statusCode).toBe(testData.statusCodes.notFound);
                expect(response.body.detail).toBe(testData.expectedMessages.bookNotFound);
            });
        });
    });
});