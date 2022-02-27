--Eliminando las bases de datos antiguas con el mismo nombre
drop database if exists schools;

-- Creando base de datos
create database schools ;
use schools;
--creando primera tabla school

create table schools.schools (
    id int(11) not null AUTO_INCREMENT,
    name varchar(45) not null, 
    address varchar(100) not null,
    primary key(id)
    );

-- creando segunda tabla teachers

create table schools.teachers(
    id int(11) not null AUTO_INCREMENT,
    name varchar(50) not null,
    email varchar(50) not null,
    school_id int(11) not null,
    primary key(id),
    foreign key (school_id) references schools(id)
);

--creando tercera tabla course

create table schools.courses(
    id int(11) not null AUTO_INCREMENT,
    name varchar(50) not null,
    code varchar(45) not null,
    teacher_id int(11) not null,
    primary key(id),
    foreign key(teacher_id) references teachers(id)
);

--creando cuarta tabla students 

create table schools.students(
    id int(11) not null AUTO_INCREMENT,
    name varchar(50) not null,
    email varchar(50) not null,
    school_id int(11) not null,
    primary key(id),
    foreign key(school_id) references schools(id)
);

--creando tabla intermedia course_x_student

create table schools.courses_x_students(
    id int(11) not null AUTO_INCREMENT,
    id_course int(11) not null,
    id_student int(11) not null,
    primary key(id),
    foreign key(id_course) references courses(id),
    foreign key(id_student) references students(id)
);

--creando ultima tabla intermedia grades 

create table schools.grades(
    id int(11) not null AUTO_INCREMENT,
    id_course int(11) not null,
    id_student int(11) not null,
    grade float(11) ,
    primary key(id),
    foreign key(id_course) references courses(id),
    foreign key(id_student) references students(id)
)

--agregando colegios 

insert into schools (
    name, address) values('Trilce','SJL')