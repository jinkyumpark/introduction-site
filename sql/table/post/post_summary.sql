create table post_summary(
	num number,

	content varchar2(1000) not null,

	post_num number,

	constraint pk_post_summary primary key(num),
	constraint fk_post_summary_post_num foreign key(post_num) references post 
);

create sequence post_summary_seq start with 1 increment by 1;