create or replace procedure getPortfolioDetail(
	p_num in portfolio.num%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select title, main_img, summary, start_date, end_date, developer_count, github_link, site_link 
	from portfolio
	where num=p_num;
end;

create or replace procedure getPortfolioDetailFunction(
	p_num in portfolio.num%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select title, content, img
	from portfolio_function
	where portfolio_num=p_num;
end;

create or replace procedure getPortfolioDetailTech(
	p_num in portfolio.num%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select title, content, img
	from portfolio_tech
	where num in 
	(select portfolio_tech_num from portfolio_tech_used where portfolio_num=p_num);
end;

create or replace procedure getPortfolioDetailDb(
	p_num in portfolio.num%TYPE,
	p_cur out sys_refcursor
)
is
begin 
	open p_cur for
	select content
	from portfolio_db
	where portfolio_num=p_num;
end;

create or replace procedure getPortfolioDetailExplanation(
	p_num in portfolio.num%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select title, why, how, num
	from portfolio_explanation
	where portfolio_num=p_num;
end;

create or replace procedure getPortfolioDetailExplanationPost(
	p_explanation_num in portfolio_explanation.num%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select p.num, p.title, p.summary as content, p.created_date, 
			pc.title, pc.img, pc.category_type
	from post p
	inner join post_category pc
	on p.main_category=pc.num
	where p.num
	in (select post_num from portfolio_explanation_post where portfolio_explanation_num=p_explanation_num);
end;


create or replace procedure getPortfolioDetailReview(
	p_num in portfolio.num%TYPE,
	p_cur out sys_refcursor
)	
is
begin
	open p_cur for
	select content
	from portfolio_review 
	where portfolio_num=p_num
	order by priority, portfolio_num;
end;

create or replace procedure getPortfolioDetailHistory(
	p_num in portfolio.num%TYPE,
	p_cur out sys_refcursor
)
is
begin
	open p_cur for
	select history_date as date, content, github_link
	from portfolio_history
	where portfolio_num=p_num
	order by history_date desc;
end;