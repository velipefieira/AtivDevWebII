Create database if not exists devweb2;
Use devweb2;

Create table if not exists cargo (car_id int primary key auto_increment, car_nome varchar (30) not null, car_salario decimal (8,2));
Insert into cargo (car_nome, car_salario) values ('Dev. Junior', '3000.00');
Insert into cargo (car_nome, car_salario) values ('Dev. Pleno', '5000.00');
Insert into cargo (car_nome, car_salario) values ('Dev. Senior', '10000.00');
Insert into cargo (car_nome, car_salario) values ('Product Owner', '7000.00');

Create table if not exists funcionario (
        fun_id int primary key auto_increment,
        fun_nome varchar (255) not null,
        fun_idade varchar (255) not null,
        fun_cargo int,
        foreign key (fun_cargo) references cargo(car_id)
);

Insert into funcionario (fun_nome, fun_idade, fun_cargo) values ('Felipe Vieira', '18', '1');
