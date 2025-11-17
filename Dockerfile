# ===== STAGE 1: BUILD VITE APP =====
FROM node:20-alpine AS builder

WORKDIR /app

# copy dependencies definition
COPY package*.json ./

# install deps
RUN npm ci

# copy source code
COPY . .

# build production assets
RUN npm run build


# ===== STAGE 2: SERVE WITH NGINX =====
FROM nginx:stable-alpine

# hapus default config Nginx
RUN rm /etc/nginx/conf.d/default.conf

# copy custom nginx config (kita buat di langkah 2)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy hasil build Vite ke root Nginx
COPY --from=builder /dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
