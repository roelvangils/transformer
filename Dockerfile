FROM oven/bun:1.0.18
WORKDIR /app
COPY package.json .
RUN bun install
COPY . .
EXPOSE 3000
CMD ["bun", "run", "start"]
