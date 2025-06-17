// randomutils.js
class RandomUtils {
    
    // Generate random string of specified length
    generateRandomString(length = 8) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Generate random number
    generateRandomNumber(min = 1000, max = 9999) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Generate random email
    generateRandomEmail() {
        const domains = ['example.com', 'test.com', 'demo.org', 'sample.net'];
        const randomString = this.generateRandomString(8);
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];
        return `user${randomString}@${randomDomain}`;
    }

    // Generate random password
    generateRandomPassword(length = 12) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        let password = '';
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
    }

    // Generate random user object
    generateRandomUser() {
        return {
            email: this.generateRandomEmail(),
            password: this.generateRandomPassword()
        };
    }

    // Generate multiple random users
    generateRandomUsers(count = 1) {
        const users = [];
        for (let i = 0; i < count; i++) {
            users.push(this.generateRandomUser());
        }
        return users;
    }

    // Generate random book data
    generateRandomBook() {
        const bookTitles = ['Mystery of', 'Adventures in', 'The Secret of', 'Journey to', 'Tales from'];
        const locations = ['Wonderland', 'the Forest', 'Space', 'the Mountains', 'the Ocean'];
        const authors = ['John Smith', 'Jane Doe', 'Alex Johnson', 'Sarah Wilson', 'Mike Brown'];
        
        const randomTitle = bookTitles[Math.floor(Math.random() * bookTitles.length)];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
        const randomYear = Math.floor(Math.random() * (2024 - 1900 + 1)) + 1900;
        
        return {
            name: `${randomTitle} ${randomLocation}`,
            author: randomAuthor,
            published_year: randomYear,
            book_summary: `This is a fascinating book about ${randomLocation.toLowerCase()}. ${this.generateRandomString(50)}`
        };
    }

    // Generate timestamp-based unique identifier
    generateUniqueId() {
        return Date.now().toString() + this.generateRandomNumber(100, 999);
    }
}

export default new RandomUtils();