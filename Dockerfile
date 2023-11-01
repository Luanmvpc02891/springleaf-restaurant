#Deploy front-end
#stage1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build-prod

#stage2
FROM nginx:alpine
EXPOSE 4200
COPY --from=node app/dist/lazy-load-demo /usr/share/nginx/html