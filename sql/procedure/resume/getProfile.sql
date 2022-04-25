create or replace procedure(
	p_cur out sys_refcursor,
	p_id in profile.id%TYPE
)
is
begin
	open p_cur for
	select img, name_korean, name_english, school, address, education, email 
	from profile
	where id=p_id;
end;