FROM node:14-alpine AS development
# Set environment variables
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
# Install dependencies
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 4000
# Start the app
CMD [ "yarn", "run", "dev" ]

FROM development AS production
# Set environment variables
ENV NODE_ENV production
# Build project
RUN yarn run build
# Install dependencies without devDependencies
RUN rm -rf node_modules
RUN yarn install --production
# Expose port
EXPOSE 4000
# Start the app
CMD [ "yarn", "start" ]
