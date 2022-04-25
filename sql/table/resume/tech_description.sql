create table tech_description(
	tech_num number,
	content varchar2(300),

	constraint fk_tech_num foreign key(tech_num) references tech
);