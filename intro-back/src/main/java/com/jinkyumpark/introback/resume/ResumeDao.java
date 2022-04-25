package com.jinkyumpark.introback.resume;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;

@Mapper
public interface ResumeDao {
    void getHomeProfile(HashMap<String, Object> paramMap);
    void getProfile(HashMap<String, Object> paramMap);
    void getLanguages(HashMap<String, Object> paramMap);
    void getActivities(HashMap<String, Object> paramMap);
}
