FROM node
WORKDIR /app
COPY package.json .
RUN npm install --save react react-dom @emotion/react
RUN npm install --save @ericz1803/react-google-calendar
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
