create or replace procedure getFooter(
	p_id in profile.id%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select github_link, linkedin_link, last_updated_date
	from profile
	where id=p_id;
end;