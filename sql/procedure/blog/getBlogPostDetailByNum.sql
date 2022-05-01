create or replace procedure getBlogPostDetail(
	p_num in post.num%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select p.title, p.summary, pc.title, pc.img, p.content, p.created_date
	from post p
	inner join post_category pc
	on p.main_category=pc.num
	where p.num=p_num;
end;

create or replace procedure getBlogPostDetailLearn(
	p_num in post.num%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select title, content
	from post_learned_concept
	where post_num=p_num;
end;


create or replace procedure getBlogPostDetailStudyMaterial(
	p_num in post.num%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select pc.title as category_title, pc.img as category_img, sm.title, sm.link, sm.description, sm.language, sm.complete_percent, sm.difficulty, sm.duration
	from post_study_material sm
	inner join post_category pc
	on sm.category_num=pc.num
	where sm.post_num=p_num
	order by sm.created_date;
end;

create or replace procedure getBlogPostDetailSummary(
	p_num in post.num%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select content
	from post_summary
	where post_num=p_num;
end;