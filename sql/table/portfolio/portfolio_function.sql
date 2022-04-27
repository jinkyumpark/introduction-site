create table portfolio_function(
	num number,
	title varchar2(500) not null,
	content varchar2(2000),
	img varchar2(200) default 'noimg.png',

	portfolio_num number not null,

	constraint pk_portfolio_function primary key(num),
	constraint fk_portfolio_function_num foreign key(portfolio_num) references portfolio
);

create sequence portfolio_function_seq start with 1 increment by 1;