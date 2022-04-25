create table activity(
	num number,
	title varchar2(50) not null,
	description varchar2(200) not null,
	startDate date default sysdate,
	endDate date,

	constraint pk_activity primary key(num)
);