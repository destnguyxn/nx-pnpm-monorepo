# Stage 1: install dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY .next/package*.json .
RUN npm install

# Stage 2: run
FROM node:18-alpine
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY .next ./
COPY --from=deps /app/package.json ./
RUN npm i semver
CMD ["npm", "run", "start"]
