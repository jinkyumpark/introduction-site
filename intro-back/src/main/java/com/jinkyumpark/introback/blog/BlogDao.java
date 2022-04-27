package com.jinkyumpark.introback.blog;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;

@Mapper
public interface BlogDao {
    void getRecentBlogPost(HashMap<String, Object> paramMap);
    void getBlogPostsByPage(HashMap<String, Object> paramMap);
}
