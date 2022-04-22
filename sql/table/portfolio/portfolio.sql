create table portfolio(
	num number,
	main_img varchar(100),
	title varchar(100) not null,
	summary varchar(300),
	status number(1) default 0,
	github_link varchar(100),
	site_link varchar(100),
	start_date date default sysdate,
	end_date date,
	deveoper_count number(2) default 0,
	db_img varchar(100),

	priority number(1) default 5,
	
	constraint pk_portfolio primary key(num)
);

create sequence portfolio_seq start with 1 increment by 1;