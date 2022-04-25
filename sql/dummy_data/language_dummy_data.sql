insert into language 
(num, title, title_description, lang_icon, speaking_level, reading_level, test_score, test_score_description)
values
(
	language_seq.nextVal, '영어', 
	'의사소통 자유로움, 영어 독해 자유로움(1달에 적어도 1권 이상의 영어책 독서 중), 미국 대학에서 3년 수학',
	'usflag-icon.png', 2, 2, 'TOEIC 970', '2021년 7월 응시'
);
insert into language 
(num, title, title_description, lang_icon, speaking_level, reading_level, test_score, test_score_description)
values
(
	language_seq.nextVal, '일본어', 
	'고등학교때 일본어 수업을 듣고 흥미가 생겨 공부 시작. 취미로 공부했으나 의사소통 자유롭고, 일본어 책 100권 이상 독서해서 독해도 능숙하게 가능.',
	' japanflag-icon.png', 2, 2, 'JLPT N1', '2018년 10월 응시'
);
insert into language 
(num, title, title_description, lang_icon, speaking_level, reading_level, test_score, test_score_description)
values
(
	language_seq.nextVal, '중국어', 
	'초등학교 1학년 ~ 초등학교 3학년까지 아버지의 직장으로 중국에서 유학. 그 후 중국어를 적극적으로 사용하지 않아 많이 서툴러졌으나 기본적인 일상 회화는 가능. 현재 취미로 공부 중.',
	'chinaflag-icon.png',  0, 0, 'HSK 3급', '2022년 내에 재응시 예정'
);