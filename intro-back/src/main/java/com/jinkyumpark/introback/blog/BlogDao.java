package com.jinkyumpark.introback.blog;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.HashMap;

@Mapper
@Component
public interface BlogDao {
    void getRecentBlogPost(HashMap<String, Object> paramMap);
    void getBlogPostsByPage(HashMap<String, Object> paramMap);
    void getBlogPostDetail(HashMap<String, Object> paramMap);
    void getBlogPostDetailLearn(HashMap<String, Object> paramMap);
    void getBlogPostDetailStudyMaterial(HashMap<String, Object> paramMap);
    void getBlogPostDetailSummary(HashMap<String, Object> paramMap);
}
