create table introduction_interview(
	num number,
	question varchar2(100),
	answer varchar2(2000),
	priority number(2) unique,

	constraint pk_introduction_interview primary key(num)
);