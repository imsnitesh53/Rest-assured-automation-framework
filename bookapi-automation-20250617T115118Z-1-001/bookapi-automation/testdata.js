// testdata.js - Add status codes and expected responses
import randomutils from "./randomutils";

export const testData = {
    users: {
        validUser: {
            email: 'testuser12@example.com',
            password: 'testpassword123'
        },
        newUser: {
            email: randomutils.generateRandomEmail(),
            password: 'newpassword123'
        },
        invalidUser: {
            email: 'nonexistent@example.com',
            password: 'wrongpassword123'
        },
        duplicateUser: {
            email: 'testuser12@example.com',
            password: 'testpassword123'
        }
    },
    
    books: {
        validBook: {
            name: 'Test Book Title',
            author: 'Test Author',
            published_year: 2023,
            book_summary: 'This is a test book summary for automated testing.'
        },
        updatedBook: {
            name: 'Updated Book Title',
            author: 'Updated Author',
            published_year: 2024,
            book_summary: 'This is an updated book summary.'
        }
    },
    
    bookIds: {
        validBookId: 1,
        invalidBookId: 999999
    },
    
    statusCodes: {
        success: 200,
        created: 201,
        badRequest: 400,
        unauthorized: 401,
        notFound: 404,
        fobidden: 403,
    },
    
    expectedMessages: {
        userCreatedSuccessfully: 'User created successfully',
        emailAlreadyRegistered: 'Email already registered',
        incorrectEmailOrPassword: 'Incorrect email or password',
        bookNotFound: 'Book not found',
        bookDeletedSuccessfully: 'Book deleted successfully',
        invalidToken: 'Invalid token or expired token'
    }
};