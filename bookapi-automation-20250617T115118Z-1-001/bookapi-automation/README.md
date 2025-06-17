# Book API Automation

This repository contains automated tests for the Book Store API using Playwright and Supertest. Below is an overview of the testing strategy, and hosting instructions.

---

## Hosting the Application

Before running the tests, ensure the application is hosted on a server. Follow these steps:

1. **Start the FastAPI Server**:  
   Run the following command to start the server from the main app:

   ```bash
   uvicorn main:app --reload

2. **Verify API Endpoints**:  
   Use tools like Postman or curl to confirm that all API endpoints (e.g., `/signup`, `/login`, `/books`) are functional.

---

## Testing Strategy

### 1. Writing Test Flows
- **Modular Approach**:  
  Each test suite (e.g., Signup, Login, CRUD operations) is organized into separate `test.describe` blocks for better readability and maintainability.
  
- **Positive and Negative Scenarios**:  
  For every API endpoint, both positive and negative test cases are written to ensure comprehensive coverage.

- **Data-Driven Testing**:  
  Test data is stored in a separate `testdata.js` file, making it easy to update and reuse across tests.

- **Chaining API Calls**:  
  Some tests (e.g., updating or deleting a book) depend on the successful creation of a book. These flows are implemented by chaining API calls within the same test.

---

### 2. Ensuring Reliability and Maintainability
- **Reusable API Methods**:  
  All API interactions are encapsulated in the `CrudApi` class, ensuring that changes to API logic are centralized.

- **Assertions**:  
  Assertions are added to validate both the HTTP status codes and response payloads, ensuring the API behaves as expected.

- **Error Handling**:  
  Tests gracefully handle errors by validating error messages and status codes for invalid inputs or scenarios.

- **Version Control**:  
  The `.gitignore` file excludes unnecessary files (e.g., `node_modules`, test results) to keep the repository clean.


## Running the Tests

1. **Install Dependencies**:  
   Run `npm install` to install all required dependencies.

2. **Run Tests**:  
   Execute `npm run test test` to run all Playwright tests.

3. **Generate Allure Report** (Optional):  
   Use `npm run allure:generate` to generate a detailed test report. Open it with `npm run allure:open`.

---

## Folder Structure

- **`api/`**: Contains API interaction logic (e.g., `crudApi.js`, `apiEndPoints.js`).
- **`tests/`**: Contains Playwright test files.
- **`testdata.js`**: Centralized test data for all scenarios.
- **`playwright-report/`**: Stores Playwright test reports (ignored in `.gitignore`).

---

## Future Improvements

- Add more edge case tests for API endpoints.
- Integrate CI/CD pipelines for automated test execution.
- Expand test coverage to include performance and security testing.

---

