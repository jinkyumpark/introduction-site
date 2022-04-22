create table post_category(
	num number,

	main_category number not null,
	sub_category number,

	constraint pk_post_category primary key(num),
	constraint fk_main_category foreign key(main_category) references post_category_detail,
	constraint fk_sub_category foreign key(sub_category) references post_category_detail
);

create sequence post_category_seq start with 1 increment by 1;