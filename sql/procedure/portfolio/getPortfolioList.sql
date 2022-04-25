create or replace procedure getPortfolioList(
	p_page number,
	p_fetch_num number,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select main_img as img, title, summary as content, num, status, start_date, end_date, site_link
	from portfolio
	order by priority, start_date
	offset (p_fetch_num * p_page) rows fetch next p_fetch_num rows only;
end;