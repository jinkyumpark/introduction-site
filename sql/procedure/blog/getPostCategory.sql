create or replace procedure getPostCategory(
	p_type in post_category.category_type%TYPE,
	p_num in post_category.num%TYPE,
	p_cur out sys_refcursor	
)
is
begin
	if p_type = 0 then
		open p_cur for
		select num, title, img
		from post_category
		where category_type=0;
	ELSIF p_type = 2 then
		open p_cur for
		select num, title, img
		from post_category
		where category_type=2;
	elsif p_type = 3 then
		open p_cur for
		select num, title, img
		from post_category
		where category_type=3 and belong=p_num;
	end if;
end;