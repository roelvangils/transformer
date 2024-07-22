FROM oven/bun:1.0.18

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 3000

CMD ["bun", "run", "server.ts"]
