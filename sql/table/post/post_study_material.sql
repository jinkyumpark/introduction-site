create table post_study_material(
	num number,
	category_num number,

	created_date date default sysdate,

	title varchar2(200) not null,
	link varchar2(200),
	description varchar2(2000),
	-- 0 : english
	-- 1 : korean
	language number(1) default 0,

	complete_percent number(3) default 0,
	-- 0 easy
	-- 1 medium
	-- 2 hard
	difficulty number(1) default 0,
	-- in minute
	duration number(3) default 0,

	post_num number,

	constraint pk_post_study_material primary key(num),
	constraint fk_post_study_material foreign key(category_num) references post_category,
	constraint fk_post_study_material_post_num foreign key(post_num) references post
);

create sequence post_study_material_seq start with 1 increment by 1;