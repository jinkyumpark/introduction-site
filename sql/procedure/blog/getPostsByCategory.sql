create or replace procedure getPostsByCategory(
	p_num in post_category.num%TYPE,
	p_type in post_category.category_type%TYPE,
	p_page in number,
	p_cur out sys_refcursor
)
is
begin
	if p_type = 0 then
		if p_num = 0 then
			open p_cur for
			select p.num, p.title, p.summary as content, p.created_date, pc.title as category_name, pc.img as category_img
			from post p
			inner join post_category pc
			on p.main_category=pc.num
            where p.main_category in (select num from post_category where category_type=0)
            order by p.created_date desc
            offset (10 * p_page) rows fetch next 10 rows only;
		else
			open p_cur for
			select p.num, p.title, p.summary as content, p.created_date, pc.title as category_name, pc.img as category_img
			from post p
			inner join post_category pc
			on p.main_category=pc.num
            where p.main_category = p_num
            order by p.created_date desc
            offset (10 * p_page) rows fetch next 10 rows only;
		end if;
	else if p_type = 2 then
		if p_num = 0 then
			open p_cur for
			select p.num, p.title, p.summary as content, p.created_date, pc.title as category_name, pc.img as category_img
			from post p
			inner join post_category pc
			on p.sub_category=pc.num
            where p.main_category in (select num from post_category where category_type=2)
            order by p.created_date desc
            offset (10 * p_page) rows fetch next 10 rows only;
		else
			open p_cur for
			select p.num, p.title, p.summary as content, p.created_date, pc.title as category_name, pc.img as category_img
			from post p
			inner join post_category pc
			on p.sub_category=pc.num
            where p.main_category=p_num
            order by p.created_date desc
            offset (10 * p_page) rows fetch next 10 rows only;
		end if;
	else
		open p_cur for
		select p.num, p.title, p.summary as content, p.created_date, pc.title as category_name, pc.img as category_img
		from post p
		inner join post_category pc
		on p.sub_category=pc.num
        where p.sub_category=p_num
        order by p.created_date desc
        offset (10 * p_page) rows fetch next 10 rows only;
	end if;
end if;
end;