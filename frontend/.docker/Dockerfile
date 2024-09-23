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

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_URL=http://localhost:3001

# Build the Next.js application
RUN pnpm run build

# Start the application
CMD ["pnpm", "start"]
