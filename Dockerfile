# This file is the main docker file configurations

# Official Node JS runtime as a parent image
FROM node:14-alpine

# Set the working directory to ./app
WORKDIR ./app

# Install app dependencies
COPY package.json yarn.lock  ./

# Install any needed packages
RUN yarn install --frozen-lockfile

# Audit fix npm packages
RUN yarn audit fix

# Bundle app source
COPY . /app

# Make port 3000 available to the world outside this container
EXPOSE 6000

# Run app.js when the container launches
CMD ["yarn", "start"]
