create table activity(
	num number,
	title varchar2(1000),
	content varchar2(5000) not null,
	description varchar2(5000),
	startDate date default sysdate,
	endDate date,

	constraint pk_activity primary key(num)
);