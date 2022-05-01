package com.jinkyumpark.introback.util;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Mapper
@Component
public interface UtilDao {
    void getFooter(HashMap<String, Object> paramMap);
}
