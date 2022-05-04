create or replace procedure getTechPortfolio(
	p_num in tech.num%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select p.num, p.title, p.summary, p.main_img
	from portfolio p
	
end;