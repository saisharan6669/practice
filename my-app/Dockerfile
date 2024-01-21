FROM node:14  as builder
WORKDIR /my-app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /my-app/build /usr/share/nginx/html
