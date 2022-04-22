create table post(
	num number,
	category number not null,
	title varchar2(100) not null,
	summary varchar2(200),
	created_date date default sysdate,
	content varchar2(5000),

	constraint pk_post primary key(num),
	constraint fk_post_in_category foreign key(category) references post_category on delete cascade
);

create sequence post_seq start with 1 increment by 1;