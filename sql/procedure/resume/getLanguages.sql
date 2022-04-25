create or replace procedure getLanguages(
	p_cur out sys_refcursor
)
is
begin
	open p_cur for

	select lang_icon, title, speaking_level, reading_level, test_score, title_description, test_score_description
	from language;

end;