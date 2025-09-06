FROM oven/bun:latest 
WORKDIR /authcontext
COPY package.json .
RUN bun init
RUN bun install
COPY . .
RUN bun run build
CMD [ "sh", "-c", "echo 'Build is Serving' && bun run .output/server/index.mjs" ]
EXPOSE 3000