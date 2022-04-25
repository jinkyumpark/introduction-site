create or replace procedure getIntroduction(
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select title, content from introduction;
end;