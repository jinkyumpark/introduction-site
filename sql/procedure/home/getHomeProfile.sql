create or replace procedure getHomeProfile(
	p_id in profile.id%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select img, introduction from profile where id=p_id;
end;