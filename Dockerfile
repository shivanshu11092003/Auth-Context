FROM oven/bun:latest 
WORKDIR /authcontext
COPY package.json .
RUN bun init
RUN bun install
COPY . .
RUN bun run build
EXPOSE 3000