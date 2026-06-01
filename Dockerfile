FROM node:alpine

WORKDIR /app

RUN npm install -g vite

EXPOSE 8080

CMD ["vite", "--host", "0.0.0.0", "--port", "8080"]