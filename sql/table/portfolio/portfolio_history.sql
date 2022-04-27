create table portfolio_history(
	num number,
	portfolio_num number not null,

	history_date date default sysdate,
	content varchar2(2000) not null,
	github_link varchar2(1000),

	constraint pk_portfolio_history primary key(num),
	constraint fk_portfolio_history_portfolio_num foreign key(portfolio_num) references portfolio
);

create sequence portfolio_history_seq start with 1 increment by 1;