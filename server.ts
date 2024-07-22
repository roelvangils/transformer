const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    // Only handle POST requests
    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    // Check if the content type is JSON
    const contentType = req.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return new Response("Content-Type must be application/json", { status: 400 });
    }

    try {
      // Parse the JSON body
      const body = await req.json();

      // Check if the 'input' field exists and is a string
      if (typeof body.input !== "string") {
        return new Response("Invalid input: 'input' must be a string", { status: 400 });
      }

      const inputText = body.input;
      let result: string;

      switch (path) {
        case "/urlencode":
          result = encodeURIComponent(inputText);
          break;
        case "/toupper":
          result = inputText.toUpperCase();
          break;
        case "/tolower":
          result = inputText.toLowerCase();
          break;
        default:
          return new Response("Not Found", { status: 404 });
      }

      // Send the transformed data as the response
      return new Response(JSON.stringify({ result }), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response("Invalid JSON input", { status: 400 });
    }
  },
});

console.log(`Transformer API listening on http://localhost:${server.port}`);
console.log("Available routes:");
console.log("  POST /urlencode - URL encodes the input text");
console.log("  POST /toupper - Converts the input text to uppercase");
console.log("  POST /tolower - Converts the input text to lowercase");
