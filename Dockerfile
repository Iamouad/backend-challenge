#  Dockerfile for Node Express Backend

FROM node:10.16-alpine

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 5000

CMD ["sh", "-c",  "echo mongodb://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/; export mongoURI=mongodb://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/; npm run server"]

