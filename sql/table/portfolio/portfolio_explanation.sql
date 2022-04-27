create table portfolio_explanation(
	num number,
	title varchar2(1000),
	why varchar2(10000),
	how varchar2(10000),

	portfolio_num number not null,

	constraint pk_portfolio_explanation primary key(num),
	constraint fk_portfolio_explanation foreign key(portfolio_num) references portfolio
);

create sequence portfolio_explanation_seq start with 1 increment by 1;