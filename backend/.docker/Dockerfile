FROM node:18-alpine

RUN npm install -g pnpm

WORKDIR /app

# COPY package*.json ./
COPY package.json pnpm-lock.yaml ./

# RUN npm install
RUN pnpm install

# COPY prisma ./prisma/

# Generate Prisma client
# RUN npx prisma generate

COPY . .
RUN npm run build
RUN pnpm prisma generate

EXPOSE 3001

CMD ["pnpm", "start"]
