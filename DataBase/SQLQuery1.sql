 create database RealEstateDb;

 use RealEstateDb;

 create table TblLogin(Id int primary key identity(1,1),
                       UserName varchar(200) not null,
					   Email varchar(200) unique,
					   Password varchar(100) not null,
					   isAdmin int );

select *from TblLogin;