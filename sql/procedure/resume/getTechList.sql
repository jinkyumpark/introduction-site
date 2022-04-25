create or replace procedure getTechList(
	p_page in number,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select num, title, icon
	from tech
	offset (p_page * 3) rows fetch next 3 rows only;
end;


create or replace procedure getTechListSummary(
	p_num in tech.num%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select content
	from tech_summary
	where tech_num=p_num;
end;