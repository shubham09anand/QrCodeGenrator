# BASE IMAGE will be node:18
FROM node:18

# Working Directory
WORKDIR /app

# Copy package-lock.json file into container whose name will be same (package-lock.json)
COPY package-lock.json package-lock.json ./
COPY package.json package.json ./

# execute the command to install all dependices
RUN npm install

# COPY the rest of the code
COPY . .

# Expose the port on 3000
EXPOSE 3000

# command to run the app
CMD ["npm", "start"]