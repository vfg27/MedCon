insert into users(username, password, enabled) values ('Juan', '{bcrypt}$2a$04$jinUHwWsVfxmmvPJZSJJt.5N0rq02S22KdjipaDNgqeOq2Ysi79hG', true);
insert into authorities(username, authority) values ('Juan', 'ROLE_MEDICO');
insert into users(username, password, enabled) values ('Maria', '{bcrypt}$2a$04$sjle90OV5GhLIC3fKr1Smevpzni5vIz8fF1EY.0sr93o.VAwyvBnK', true);
insert into authorities(username, authority) values ('Maria', 'ROLE_MEDICO');
insert into users(username, password, enabled) values ('centro', '{bcrypt}$2a$04$KGEMr67x7T5TCW8QgYfr5u6KCv3T2MMAY5OO5YI3qLb/L8KnWmlI.', true);
insert into authorities(username, authority) values ('centro', 'ROLE_ADMIN');