package com.jinkyumpark.introback.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class BlogService {

    @Autowired
    BlogDao bdao;

    public void getRecentBlogPost(HashMap<String, Object> paramMap) {
        bdao.getRecentBlogPost(paramMap);
    }

    public void getBlogPostsByPage(HashMap<String, Object> paramMap) {
        bdao.getBlogPostsByPage(paramMap);
    }

    public void getBlogPostDetail(HashMap<String, Object> paramMap) {
        bdao.getBlogPostDetail(paramMap);
    }

    public void getBlogPostDetailLearn(HashMap<String, Object> paramMap) {
        bdao.getBlogPostDetailLearn(paramMap);
    }

    public void getBlogPostDetailStudyMaterial(HashMap<String, Object> paramMap) {
        bdao.getBlogPostDetailStudyMaterial(paramMap);
    }

    public void getBlogPostDetailSummary(HashMap<String, Object> paramMap) {
        bdao.getBlogPostDetailSummary(paramMap);
    }
}
