create or replace procedure getRecentBlogPost(
	p_type in post_category.category_type%TYPE,
	p_cur out sys_refcursor
)
is
begin
	IF p_type = 0 THEN

		open p_cur for

		select p.title, p.summary as content, p.created_date, p.num, 

		pc.title as category_title, pc.img as category_img
		from post p

		inner join post_category pc
		on p.main_category = pc.num

		where p.main_category in (
			select num 
			from post_category		
			where category_type = 0 
		)
		fetch next 4 rows only;

	ELSE

		open p_cur for

		select p.title, p.summary as content, p.created_date, p.num, 

		pc.title as category_title, pc.img as category_img
		from post p

		inner join post_category pc
		on p.main_category = pc.num

		where p.main_category in(
			select num 
			from post_category		
			where category_type = 2
		)
		fetch next 4 rows only;

	END IF;
end;