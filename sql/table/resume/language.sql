create table language(
	num number,
	title varchar2(30) not null,
	title_description varchar2(300),
	lang_icon varchar2(50) default 'noimage.png',
	-- 0
	-- 1
	-- 2
	speaking_level number(1),
	reading_level number(1),
	test_score varchar2(20),
	test_score_description varchar2(300),

	constraint pk_language primary key(num)
);