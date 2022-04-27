create table post_category(
	num number,
	title varchar(50) not null,
	img varchar(100),

	-- 0 : theory main
	-- 1 : theory sub
	-- 2 : dev main
	-- 3 : dev sub
	category_type number default 0,

	sub_category_belong_to number,

	constraint pk_num primary key(num),
	constraint fk_sub_category_belong_to foreign key(sub_category_belong_to) references post_category(num)
);

create sequence post_category_seq start with 1 increment by 1;