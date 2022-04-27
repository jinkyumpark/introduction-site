create table portfolio_explanation_post(
	num number,

	portfolio_explanation_num number not null,
	post_num number not null,

	constraint pk_portfolio_explanation_post primary key(num),
	constraint fk_portfolio_explanation_post_portfolio_explanation_num foreign key(portfolio_explanation_num) references portfolio_explanation,
	constraint fk_portfolio_explanation_post_post_num foreign key(post_num) references post
);

create sequence portfolio_explanation_post_seq start with 1 increment by 1;