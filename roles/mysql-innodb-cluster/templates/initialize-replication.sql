-- Initialize mysql with the following file.

-- Do not replicate this commands
SET SQL_LOG_BIN=0;

-- Reset local user password
ALTER USER 'root'@'localhost' IDENTIFIED BY '{{mysql_root_password}}';

-- Create a remote root user.
CREATE USER IF NOT EXISTS 'root'@'%';
ALTER USER 'root'@'%' IDENTIFIED BY '{{mysql_root_password}}';
GRANT ALL ON *.* TO 'root'@'%' WITH GRANT OPTION;

-- Create a replication user.
CREATE USER  IF NOT EXISTS rpl_user@'%' IDENTIFIED BY '{{mysql_root_password}}';
GRANT REPLICATION SLAVE ON *.* TO rpl_user@'%';

SET SQL_LOG_BIN=1;

-- STOP SERVER NOW
SHUTDOWN

;




