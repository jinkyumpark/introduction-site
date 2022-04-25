insert into tech (num, title, icon, content)
values (tech_seq.nextVal, 'React', 'reactjs-icon.png', 'SPA 프론트엔드 라이브러리');
insert into tech (num, title, icon, content)
values (tech_seq.nextVal, 'Spring', 'spring-icon.png', '백엔드 프레임워크');
insert into tech (num, title, icon, content)
values (tech_seq.nextVal, 'Bootstrap', 'bootstrap-icon.png', 'CSS 라이브러리');
insert into tech (num, title, icon, content)
values (tech_seq.nextVal, 'Docker', 'docker-icon.png', '가상 컨테이너');

insert into tech_summary (tech_num, content)
values (1, 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음');
insert into tech_summary (tech_num, content)
values (1, 'redux 등의 상태 관리 library의 필요성과 특성을 파악하고 있고, 사용할 수 있음');
insert into tech_summary (tech_num, content)
values (1, '그 밖에 SPA를 만들때 중요한 router 등의 다양한 기능을 활용할 수 있음');