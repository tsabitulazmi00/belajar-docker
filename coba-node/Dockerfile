FROM node:alpine

WORKDIR /root/belajar-docker/coba-node

COPY package*.json /root/belajar-docker/coba-node

RUN npm install

COPY . /root/belajar-docker/coba-node

CMD npm start