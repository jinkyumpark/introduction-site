create or replace procedure getTechPost(
	p_num in tech.num%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select p.title, p.created_date, p.num, pc.title as category_title, pc.img as category_img
	from tech_category tc
	inner join post p
	on p.sub_category=tc.category_num
	inner join post_category pc
	on p.sub_category=pc.num
	where tc.tech_num=p_num;
end;

-- category(title, img)
-- title
-- cratedDate