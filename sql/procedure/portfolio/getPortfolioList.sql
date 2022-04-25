create or replace procedure getHomePortfolio(
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select main_img as img, title, summary as content, num, status, start_date, end_date, site_link
	from portfolio
	order by priority, start_date
	fetch next 4 rows only;
end;