create table post_category_detail(
	num number,
	title varchar(50) not null,
	img varchar(100) not null,

	-- 0 : theory
	-- 1 : dev
	category_type number default 0,

	constraint pk_num primary key(num)
);

create sequence post_category_detail_seq start with 1 increment by 1;