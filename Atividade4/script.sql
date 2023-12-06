Create database if not exists devweb2;
Use devweb2;

create table cliente (
	cli_id int primary key auto_increment,
    cli_nome varchar(30),
    cli_email varchar(100),
    cli_data_cadastro date
);

create table pedido (
	ped_id int primary key auto_increment,
    ped_desc varchar(255),
    ped_valor decimal(10,2),
    cli_id int,
    ped_data date,
    foreign key (cli_id) references cliente(cli_id)
);

