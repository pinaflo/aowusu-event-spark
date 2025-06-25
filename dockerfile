# Use Node.js Alpine base image
FROM node:alpine

# Create and set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install

# Copy the entire codebase to the working directory
COPY . /app/

# Build the application for production
RUN npm run build

# Expose the correct port
EXPOSE 3000

# For development, use:
# CMD ["npm", "run", "dev"]

# For production, use:
CMD ["npm", "run", "preview"]
