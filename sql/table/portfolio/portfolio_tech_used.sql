create table portfolio_tech_used(
	num number,
	portfolio_tech_num number not null,
	portfolio_num number not null,

	constraint pk_portfolio_tech_used primary key(num),
	constraint fk_portfolio_tech_used_tech_num foreign key(portfolio_tech_num) references portfolio_tech,
	constraint fk_portfolio_tech_used_portfolio_num foreign key(portfolio_num) references portfolio
);

create sequence portfolio_tech_used_seq start with 1 increment by 1;