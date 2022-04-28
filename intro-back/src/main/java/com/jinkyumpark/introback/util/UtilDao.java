package com.jinkyumpark.introback.util;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Mapper
@Repository
public interface UtilDao {
    void getFooter(HashMap<String, Object> paramMap);
}
