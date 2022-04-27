create table portfolio_db(
	num number,
	portfolio_num number not null,
	content varchar2(1000),

	constraint pk_portfolio_db primary key(num),
	constraint fk_portfolio_db_num foreign key(portfolio_num) references portfolio
);

create sequence portfolio_db_seq start with 1 increment by 1;