create or replace procedure getBlogPostsByPage(
	p_type in number,
	p_page in number,
	p_cur out sys_refcursor
)
is
begin
	if p_type = 0 then
		select p.num, p.title, p.summary as content, p.created_date, pc.title, pc.img
		from post p
		inner join post_category pc
		on pc.num=p.main_category
		where pc.category_type=0
		order by created_date desc;
	else
		select p.num, p.title, p.summary as content, p.created_date, pc.title, pc.img
		from post p
		inner join post_category pc
		on pc.num=p.sub_category
		where pc.category_type=3
		order by created_date desc;
	end if;
end;