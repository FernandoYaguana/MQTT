# Usar una imagen oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar todos los archivos del proyecto
COPY . .

# Exponer el puerto
EXPOSE 1883

# Comando para iniciar el servidor
CMD ["node", "server.js"]