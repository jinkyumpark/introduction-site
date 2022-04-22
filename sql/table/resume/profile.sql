create table profile(
	id varchar(10),

	name_korean varchar(100),
	name_english varchar(100),
	school varchar(100),
	address varchar(100),
	education varchar(100),
	email varchar(100),
	phone varchar(50),
	img varchar(100),
	introduction varchar(500),

	github_link varchar(50),
	linkedin_link varchar(50),
	
	last_updated_date date default sysdate,

	constraint pk_profile primary key(id)
);

create sequence profile_seq start with 1 increment by 1;