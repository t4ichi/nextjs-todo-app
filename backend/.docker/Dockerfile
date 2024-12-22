FROM node:18-alpine

WORKDIR /app

# OpenSSLとその他の必要なパッケージをインストール
RUN apk add --no-cache \
    openssl \
    netcat-openbsd \
    postgresql-client

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

RUN pnpm run build
RUN pnpm run prisma:generate

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3001

ENTRYPOINT ["/entrypoint.sh"]