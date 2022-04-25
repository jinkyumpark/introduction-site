create or replace procedure getTechHeader(
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select title, icon
	from tech;
end;