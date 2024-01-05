FROM  node:18.16.0-slim 
WORKDIR /root
COPY package*.json ./
COPY . .
RUN npm install
CMD npm start