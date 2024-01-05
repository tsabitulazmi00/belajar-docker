FROM node:18.16.0-slim

# Create a directory to hold the application code inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if present) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --quiet

# Copy the entire project to the working directory
COPY . .

# Set the default command to start the application
CMD ["npm", "start"]
