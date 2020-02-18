# build environment
FROM node:10-alpine AS build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN npm install
RUN npm run build


# production environment
FROM nginx:1.15.10-alpine
COPY --from=build /usr/src/app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]