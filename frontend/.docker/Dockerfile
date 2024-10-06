FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

# Copy package.json, pnpm-lock.yaml, and panda.config.ts
COPY package.json pnpm-lock.yaml panda.config.ts ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application
COPY . .

# Generate Panda CSS
RUN pnpm run prepare

CMD ["pnpm", "run", "dev"]

