create table post(
	num number,
	title varchar2(100) not null,
	summary varchar2(200),
	created_date date default sysdate,
	content varchar2(5000),

	main_category number not null,
	sub_category number,

	constraint pk_post primary key(num),
	constraint fk_main_category foreign key(main_category) references post_category on delete cascade,
	constraint fk_sub_category foreign key(sub_category) references post_category on delete cascade
);

create sequence post_seq start with 1 increment by 1;