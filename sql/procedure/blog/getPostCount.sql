create or replace procedure getPostCount(
	p_num in post_category.num%TYPE,
	p_type in post_category.category_type%TYPE,
	p_count out number
)
is
begin
	if p_type = 3 then
		select count(p.num) into p_count
		from post p
		inner join post_category pc
		on pc.num=p.sub_category
		where pc.num=p_num;
	else
		if p_num = 0 then
			select count(p.num) into p_count
			from post p
			inner join post_category pc
			on pc.num=p.main_category
			where pc.category_type=p_type;
		else
			select count(p.num) into p_count
			from post p
			inner join post_category pc
			on pc.num=p.main_category
			where pc.category_type=p_type and pc.num=p_num;
		end if;
	end if;
end;