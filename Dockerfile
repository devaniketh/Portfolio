# Start with an official Node.js image as the base
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

# Production image
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy over the built files from the builder stage
COPY --from=builder /app ./

# Expose the application on port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
