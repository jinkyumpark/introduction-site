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
}
