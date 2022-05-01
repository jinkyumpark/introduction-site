create table post_learned_concept(
	num number,
	title varchar2(100),
	content varchar2(300),

	post_num number not null,

	constraint pk_post_learned_concept primary key(num),
	constraint fk_post_learned_concept foreign key(post_num) references post on delete cascade
);

create sequence post_learned_concept_seq start with 1 increment by 1;