FROM node:18-alpine3.19

# copy json from lokal to docker
COPY package*.JSON .

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm","run","docker"]

# masih berupa image, ketika dijalankan dibutuhkan container