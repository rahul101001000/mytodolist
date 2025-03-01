# Development stage
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

EXPOSE 3000

# Add environment variables with default values
ENV PORT=3000
ENV NODE_ENV=development

COPY . .

CMD ["npm", "run", "dev"]