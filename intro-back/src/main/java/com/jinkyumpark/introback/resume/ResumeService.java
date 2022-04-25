package com.jinkyumpark.introback.resume;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class ResumeService {

    @Autowired
    ResumeDao rdao;

    public void getHomeProfile(HashMap<String, Object> paramMap) {
        rdao.getHomeProfile(paramMap);
    }

    public void getProfile(HashMap<String, Object> paramMap) {
        rdao.getProfile(paramMap);
    }

    public void getLanguages(HashMap<String, Object> paramMap ) {
        rdao.getLanguages(paramMap);
    }

    public void getActivities(HashMap<String, Object> paramMap) {
        rdao.getActivities(paramMap);
    }
}