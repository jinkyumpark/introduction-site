create or replace procedure getActivities(
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select title, startDate, endDate, description
	from activity;
end;