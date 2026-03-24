FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy app files
COPY . .

# Build app
RUN npm run build

# Railway uses dynamic PORT
ENV PORT=3000
EXPOSE 3000

# Start app
CMD ["npm", "start"]
