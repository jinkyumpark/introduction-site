create table post_category(
	num number,
	title varchar(50) not null,
	img varchar(100),

	-- 0 : theory main
	-- 1 : theory sub
	-- 2 : dev main
	-- 3 : dev sub
	category_type number default 0,

	constraint pk_num primary key(num)
);

create sequence post_category_seq start with 1 increment by 1;