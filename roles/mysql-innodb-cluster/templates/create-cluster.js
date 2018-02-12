// Create or get the given cluster 
try {
    cluster = dba.createCluster('{{cluster_name}}');
} catch(err) {
    cluster = dba.getCluster('{{cluster_name}}');
}

var options = {"password": "{{mysql_root_password}}"};

// {ipWhitelist: "10.157.120.0/24, 192.168.1.110"}
// {multiMaster: false }

{% for host in  play_hosts[1:] %}
    cluster.addInstance('icroot@{{hostvars[host]["ansible_default_ipv4"]["address"]}}', options);
{% endfor %}
