package com.jinkyumpark.introback.portfolio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class PortfolioService {

    @Autowired
    PortfolioDao pdao;

    public void getPortfolioList(HashMap<String, Object> paramMap) {
        pdao.getPortfolioList(paramMap);
    }

    public void getPortfolioLength(HashMap<String, Object> paramMap) {
        pdao.getPortfolioLength(paramMap);
    }

    public void getPortfolioDetail(HashMap<String, Object> paramMap) {
        pdao.getPortfolioDetail(paramMap);
    }

    public void getPortfolioDetailFunction(HashMap<String, Object> paramMap) {
        pdao.getPortfolioDetailFunction(paramMap);
    }

    public void getPortfolioDetailTech(HashMap<String, Object> paramMap) {
        pdao.getPortfolioDetailTech(paramMap);
    }

    public void getPortfolioDetailDb(HashMap<String, Object> paramMap) {
        pdao.getPortfolioDetailDb(paramMap);
    }

    public void getPortfolioDetailExplanation(HashMap<String, Object> paramMap) {
        pdao.getPortfolioDetailExplanation(paramMap);
    }

    public void getPortfolioDetailExplanationPost(HashMap<String, Object> paramMap) {
        pdao.getPortfolioDetailExplanationPost(paramMap);
    }

    public void getPortfolioDetailHistory(HashMap<String, Object> paramMap) {
        pdao.getPortfolioDetailHistory(paramMap);
    }

    public void getPortfolioDetailReview(HashMap<String, Object> paramMap) {
        pdao.getPortfolioDetailReview(paramMap);
    }
}