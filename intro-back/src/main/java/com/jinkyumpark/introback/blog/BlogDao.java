package com.jinkyumpark.introback.blog;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Mapper
@Component
public interface BlogDao {
    void getRecentBlogPost(HashMap<String, Object> paramMap);
    void getBlogPostsByPage(HashMap<String, Object> paramMap);
}
