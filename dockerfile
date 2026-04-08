FROM node:24-alpine
RUN apk add --no-cache curl
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 4000
HEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:4000/ || exit 1
CMD ["node", "index.js"]