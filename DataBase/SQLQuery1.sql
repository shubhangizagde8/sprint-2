 create database RealEstateDb;

 use RealEstateDb;

 create table TblLogin(Id int primary key identity(1,1),
                       UserName varchar(200) unique not null,
					   Email varchar(200) unique,
					   Password varchar(100) not null,
					   isAdmin int );

select *from TblLogin;

drop table  TblLogin;

create table TblProperty(Id int primary key identity(1,1),
                       PropertyName varchar(200)  not null,
					   PropertyDescription varchar(500),
					   PropertyImage varchar(100) not null,
					   Sell_Rent varchar(100) not null,
					   PropertyAdress varchar(200)  not null,
					   PropertyPrice int );

select *from TblProperty;


drop table  TblProperty;

