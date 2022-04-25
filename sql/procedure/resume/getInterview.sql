create or replace procedure getInterview(
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select question, answer from introduction_interview;
end;