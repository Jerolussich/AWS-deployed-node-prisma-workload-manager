CREATE DATABASE IF NOT EXISTS WorkloadManager;

DO $ $ BEGIN IF NOT EXISTS (
    SELECT
        1
    FROM
        \ pg_roles
    WHERE
        rolname = 'postgres'
) THEN CREATE USER postgres WITH PASSWORD 'holberton';

END IF;

END $ $;

ALTER USER postgres WITH ENCRYPTED PASSWORD 'holberton';

GRANT ALL PRIVILEGES ON DATABASE WorkloadManager TO postgres;
