FROM node:21-alpine

# cria uma pasta que armazenara a aplicação
WORKDIR /app

ENV PORT=4000
EXPOSE 4000

# copia os arquivos de configuração
COPY package*.json .
COPY vite.config.js .


RUN npm i

COPY . .

CMD ["npm","run","dev"]