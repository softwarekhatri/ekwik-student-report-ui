# Use the official Node.js 20 Alpine image
FROM node:20-alpine
# Set the working directory
WORKDIR /app
# Install necessary packages for Puppeteer
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    libstdc++ \
    wqy-zenhei \
    udev \
    bash \
    font-noto \
    font-noto-cjk

# Install pm2 globally
RUN npm install -g pm2
# Copy package.json and package-lock.json files
COPY package*.json ./
# Install project dependencies
RUN npm install
# Copy the rest of the application code
COPY . .
# Set the environment variable for Puppeteer to use the installed Chromium
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
# Expose the application port (change if your app uses a different port)
EXPOSE 3025
# Start the application in foreground mode
CMD ["pm2-runtime", "start", "server.js", "--name", "student-result-app"]