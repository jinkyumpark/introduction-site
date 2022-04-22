package com.jinkyumpark.introback.resume;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;

@Mapper
public interface ResumeDao {
    void getHomeProfile(HashMap<String, Object> paramMap);
}
