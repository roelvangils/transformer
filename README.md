# Transformer API

A simple HTTP server built with Bun that provides text transformation services.

## Features

- URL encoding
- Converting text to uppercase
- Converting text to lowercase

## Prerequisites

- [Bun](https://bun.sh/) runtime

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/transformer-api.git
   cd transformer-api
   ```

2. Install dependencies:
   ```
   bun install
   ```

## Usage

1. Start the server:
   ```
   bun run index.ts
   ```

2. The server will start running on `http://localhost:3000`.

## API Endpoints

All endpoints accept POST requests with JSON payloads.

### URL Encode

- **Endpoint:** `/urlencode`
- **Method:** POST
- **Input:**
  ```json
  {
    "input": "Hello World!"
  }
  ```
- **Output:**
  ```json
  {
    "result": "Hello%20World%21"
  }
  ```

### To Uppercase

- **Endpoint:** `/toupper`
- **Method:** POST
- **Input:**
  ```json
  {
    "input": "Hello World!"
  }
  ```
- **Output:**
  ```json
  {
    "result": "HELLO WORLD!"
  }
  ```

### To Lowercase

- **Endpoint:** `/tolower`
- **Method:** POST
- **Input:**
  ```json
  {
    "input": "Hello World!"
  }
  ```
- **Output:**
  ```json
  {
    "result": "hello world!"
  }
  ```

## Error Handling

- If the request method is not POST, the API will return a 405 Method Not Allowed error.
- If the Content-Type is not `application/json`, the API will return a 400 Bad Request error.
- If the JSON payload is invalid or missing the `input` field, the API will return a 400 Bad Request error.
- If an invalid endpoint is accessed, the API will return a 404 Not Found error.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

This README provides a comprehensive overview of the Transformer API, including its features, installation instructions, usage guide, API endpoints, error handling, and contribution guidelines. You may want to adjust the repository URL, add more specific installation or configuration steps if needed, and include any additional information that might be relevant to your project.
