FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install \
    node ./utils/auth/generateKey.js
    
COPY  utils\auth\.env ./

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start"]
