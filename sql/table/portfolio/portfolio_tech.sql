create table portfolio_tech(
	num number,
	title varchar2(100),
	content varchar2(1000),
	img varchar2(100),

	post_category_num number,

	constraint pk_portfolio_tech primary key(num),
	constraint fk_portfolio_tech_post_category foreign key(post_category_num) references post_category
);

create sequence portfolio_tech_seq start with 1 increment by 1;