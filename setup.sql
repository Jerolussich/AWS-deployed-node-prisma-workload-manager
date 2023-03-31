CREATE DATABASE IF NOT EXISTS WorkloadManager;

DO $ $ BEGIN IF NOT EXISTS (
    SELECT
    FROM
        pg_user
    WHERE
        usename = 'postgres'
) THEN CREATE USER postgres WITH PASSWORD 'holberton';

END IF;

END $ $;

ALTER USER postgres WITH ENCRYPTED PASSWORD 'holberton';

GRANT ALL PRIVILEGES ON DATABASE WorkloadManager TO postgres;
