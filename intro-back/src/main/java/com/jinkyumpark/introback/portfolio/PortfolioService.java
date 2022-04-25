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

}