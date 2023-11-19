import mysql.connector
import pandas as pd
import matplotlib.pyplot as plt

# Configuración de la conexión a MySQL
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'rootpassword',  # La misma contraseña que configuraste en el Dockerfile de MySQL
    'database': 'mydatabase',    # El nombre de la base de datos que creaste
    'port': 3306,
}

# Conectar a la base de datos
connection = mysql.connector.connect(**db_config)

# Consulta SQL para obtener datos (ajusta según tu base de datos y estructura de tabla)
query = "SELECT DateTime, Jenbacher_MG101_P FROM mytable"

# Obtener datos en un DataFrame de Pandas
df = pd.read_sql(query, connection, parse_dates=['DateTime'])

# Cerrar la conexión a la base de datos
connection.close()

# Visualizar datos con Matplotlib
plt.figure(figsize=(10, 6))
plt.plot(df['DateTime'], df['Jenbacher_MG101_P'], label='Jenbacher_MG101_P')
plt.title('Visualización de Datos')
plt.xlabel('Fecha y Hora')
plt.ylabel('Jenbacher_MG101_P')
plt.legend()
plt.show()
