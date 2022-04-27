create table portfolio_review(
	num number,

	portfolio_num number not null,
	content varchar2(2000) not null,

	priority number(1) unique,

	constraint pk_portfolio_review primary key(num),
	constraint fk_portfolio_review_portfolio_num foreign key(portfolio_num) references portfolio
);

create sequence portfolio_review_seq start with 1 increment by 1;