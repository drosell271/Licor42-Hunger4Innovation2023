## ========================================================================= ##
#  -------------------------------- SAMPOL ---------------------------------  #
## ========================================================================= ##

# Descripción de los datos:

DateTime                        -> Fecha y hora en la que se toman los datos
Jenbacher_MG101                 -> [KW] producción de energía del motor 1
Jenbacher_MG102                 -> [KW] producción de energía del motor 2
Jenbacher_MG103                 -> [KW] producción de energía del motor 3
Jenbacher_MG104                 -> [KW] producción de energía del motor 4
Jenbacher_MG105                 -> [KW] producción de energía del motor 5
Jenbacher_MG106                 -> [KW] producción de energía del motor 6
Jenbacher_MG107                 -> [KW] producción de energía del motor 7
SocomecDirisA40_MDB1.P          -> [KW] Consumo de la planta de la línea A 
SocomecDirisA40_MDB2.P          -> [KW] Consumo de la planta de la línea B
TotalConsumptionCoopervision    -> [KW] Consumo de las instalaciones (PotenciaActiva)
TotalProductionCogeneration.P   -> [KW] Producción total de energía de la planta

# Notas:

    · Los datos corresponden a una consulta directa a la base de datos donde
    se almacenan los históricos de datos de la planta.

    · Cada fila del documento corresponde a una lectura instantánea de la 
    producción y el consumo de la planta de producción y las instalaciones que 
    alimenta.

    · Las lecturas se hacen con un intervalo de 1s durante 1h

    · 'SocomecDirisA40_MDB1.P' y 'SocomecDirisA40_MDB2.P' corresponden al 
    consumo de energía de la propia planta de generación.

    · 'TotalConsumptionCoopervision.PotenciaActiva' corresponde al consumo
    total de energía de las instalaciones del cliente.