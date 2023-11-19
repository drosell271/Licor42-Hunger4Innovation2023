# Dockerfile
FROM mysql:latest

# Establece la contraseña para el usuario root
ENV MYSQL_ROOT_PASSWORD=rootpassword

# Copia los archivos de inicialización SQL al contenedor
COPY ./init.sql /docker-entrypoint-initdb.d/

# Expone el puerto de MySQL
EXPOSE 3306
#Contraseña_licor42