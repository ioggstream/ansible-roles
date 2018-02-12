Role Name
=========

Install mysql enterprise backup and some related packages (zip, gzip, bzip2, ..). Moreover creates the mysqlbackup user with uid=1001 and group=mysql with 3 directories.

Role Variables
--------------

- `mysqlbackup_home`: the desired home directory. Defaults to `/home/mysqlbackup`

Dependencies
------------

None

Example Playbook
----------------

Including an example of how to use your role (for instance, with variables passed in as parameters) is always nice for users too:

    - hosts: servers
      roles:
         - role: ioggstream.mysqlbackup
            mysqlbackup_home: /backup

License
-------

BSD

