// save and persist configuration *after* the node joined a cluster.
uri = "icroot@localhost:3306"

ret_config = dba.configureLocalInstance(uri, {
    "password": "{{mysql_root_password}}",
    "mycnfPath": "/etc/my.cnf",
    "clusterAdmin": "'icroot'@'%'",
    "clusterAdminPassword": "{{mysql_root_password}}",
    "clearReadOnly": true}
    )

if (ret_config["status"] != "ok") {
    exit(1);
}


