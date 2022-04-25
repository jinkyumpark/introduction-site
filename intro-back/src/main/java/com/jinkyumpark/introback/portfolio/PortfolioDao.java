package com.jinkyumpark.introback.portfolio;
import org.apache.ibatis.annotations.Mapper;
import java.util.HashMap;

@Mapper
public interface PortfolioDao {
    void getPortfolioList(HashMap<String, Object> paramMap);
}