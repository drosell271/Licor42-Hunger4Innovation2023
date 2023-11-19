-- init.sql
CREATE DATABASE IF NOT EXISTS mydatabase;
USE mydatabase;

CREATE TABLE IF NOT EXISTS mytable (
    DateTime DATETIME,
    Jenbacher_MG101_P DOUBLE,
    Jenbacher_MG102_P DOUBLE,
    Jenbacher_MG103_P DOUBLE,
    Jenbacher_MG104_P DOUBLE,
    Jenbacher_MG105_P DOUBLE,
    Jenbacher_MG106_P DOUBLE,
    Jenbacher_MG107_P DOUBLE,
    SocomecDirisA40_MDB1_P DOUBLE,
    SocomecDirisA40_MDB2_P DOUBLE,
    TotalConsumptionCoopervision_PotenciaActiva DOUBLE,
    TotalProductionCogeneration_P DOUBLE
);
