package com.jinkyumpark.introback.util;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;

@Mapper
public interface UtilDao {
    void getFooter(HashMap<String, Object> paramMap);
}
