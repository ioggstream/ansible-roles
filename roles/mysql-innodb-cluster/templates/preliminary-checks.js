
try {
    cluster = dba.getCluster('{{cluster_name}}');
    exit(0);
} catch (err) {
    // cluster does not exist.
}

uri = 'root@localhost:3306'
dba.verbose = 8
ret = dba.checkInstanceConfiguration(uri, {"password": "{{mysql_root_password}}"})

if (ret["status"] != "ok") {
    exit(1);
}

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

