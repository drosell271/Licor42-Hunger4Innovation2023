import pandas as pd
import mysql.connector
from sqlalchemy import create_engine

# Configuración de la conexión a MySQL
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'Contraseña_licor42',  # La misma contraseña que configuraste en el Dockerfile
    'database': 'mydatabase',    # El nombre de la base de datos que creaste
    'port': 3306,
}

# Ruta al archivo CSV
csv_file_path = 'DatosHackaton.csv'

# Cargar el archivo CSV en un DataFrame de Pandas
df =  pd.read_csv(csv_file_path)

# Crear la conexión a la base de datos MySQL utilizando SQLAlchemy
engine = create_engine(f"mysql+mysqlconnector://{db_config['user']}:{db_config['password']}@{db_config['host']}:{db_config['port']}/{db_config['database']}")

# Insertar los datos en la tabla de la base de datos
df.to_sql('mytable', con=engine, if_exists='replace', index=False)

print("Datos cargados exitosamente en la base de datos MySQL.")
