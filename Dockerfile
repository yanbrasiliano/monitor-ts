FROM node:18 AS frontend

WORKDIR /app

COPY package*.json ./
COPY resources/package*.json ./resources/
RUN npm install
RUN cd resources && npm install

COPY resources ./resources
RUN cd resources && npm run build

FROM node:18 AS backend

WORKDIR /app

COPY package*.json ./
RUN npm install concurrently --save-dev

COPY . .

COPY --from=frontend /app/resources/dist ./dist

EXPOSE 8001
