create or replace procedure getPortfolioLength(
	p_length out INTEGER
)
is

begin
	select count(num) into p_length from portfolio;
end;