package com.jinkyumpark.introback.portfolio;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Mapper
@Repository
public interface PortfolioDao {
    void getPortfolioList(HashMap<String, Object> paramMap);
    void getPortfolioLength(HashMap<String, Object> paramMap);
    void getPortfolioDetail(HashMap<String, Object> paramMap);
    void getPortfolioDetailFunction(HashMap<String, Object> paramMap);
    void getPortfolioDetailTech(HashMap<String, Object> paramMap);
    void getPortfolioDetailDb(HashMap<String, Object> paramMap);
    void getPortfolioDetailExplanation(HashMap<String, Object> paramMap);
    void getPortfolioDetailExplanationPost(HashMap<String, Object> paramMap);
    void getPortfolioDetailHistory(HashMap<String, Object> paramMap);
    void getPortfolioDetailReview(HashMap<String, Object> paramMap);
}