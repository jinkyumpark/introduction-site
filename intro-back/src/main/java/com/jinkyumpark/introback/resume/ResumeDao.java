package com.jinkyumpark.introback.resume;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Mapper
@Component
public interface ResumeDao {
    void getHomeProfile(HashMap<String, Object> paramMap);
    void getProfile(HashMap<String, Object> paramMap);
    void getLanguages(HashMap<String, Object> paramMap);
    void getActivities(HashMap<String, Object> paramMap);
    void getTechHeader(HashMap<String, Object> paramMap);
    void getTechList(HashMap<String, Object> paramMap);
    void getTechListSummary(HashMap<String, Object> paramMap);
    void getIntroduction(HashMap<String, Object> paramMap);
    void getInterview(HashMap<String, Object> paramMap);
    void getTechPost(HashMap<String, Object> paramMap);
}
