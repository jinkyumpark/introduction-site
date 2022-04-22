create or replace procedure getRecentBlogPost(
	p_type in post_category_detail.category_type%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for

	select p.title, p.summary as content, p.created_date, p.num, pcd.title as category_title, pcd.img as category_img
	from post p

	inner join post_category pc
	on p.category = pc.num

	inner join post_category_detail pcd
	on pc.main_category=pcd.num

	where p.category in(
		select num 
		from post_category		
		where main_category in 
		(
			select num 
			from post_category_detail
			where category_type=p_type
		)
	)
	fetch next 4 rows only;
end;