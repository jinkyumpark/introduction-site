create table tech_category(
	num number,

	tech_num number not null,
	category_num number not null,

	constraint pk_tech_category primary key(num),
	constraint fk_tech_category_tech_num foreign key(tech_num) references tech,
	constraint fk_tech_category_category_num foreign key(category_num) references post_category
);

create sequence tech_category_seq start with 1 increment by 1;