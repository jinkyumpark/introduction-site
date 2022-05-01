package com.jinkyumpark.introback.home;

import com.jinkyumpark.introback.blog.BlogService;
import com.jinkyumpark.introback.portfolio.PortfolioService;
import com.jinkyumpark.introback.resume.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.UUID;

@CrossOrigin(origins="http://jinkyumpark.com")
@RestController
public class HomeController {

    ResumeService rs;
    PortfolioService ps;
    BlogService bs;

    @Autowired
    public HomeController(ResumeService rs, PortfolioService ps, BlogService bs) {
        this.rs = rs;
        this.ps = ps;
        this.bs = bs;
    }

    @RequestMapping(value="/api/home/profile", produces="application/json;charset=UTF-8")
    public HashMap<String, Object> getHomeProfile() {
        // Create return hashMap
        HashMap<String, Object> profile = new HashMap<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("ref_cursor", null);
        paramMap.put("id", "jinkyumpark");

        // Fetch from db
        rs.getHomeProfile(paramMap);

        // Convert it to json
        if(((ArrayList<HashMap<String, Object>>)paramMap.get("ref_cursor")).size() == 0) {
            return new HashMap<>();
        }

        HashMap<String, Object> result =
                (
                    (
                            (ArrayList<HashMap<String, Object>>)paramMap.get("ref_cursor")
                    ).get(0)
                );

        profile.put("key", UUID.randomUUID());
        profile.put("img", result.get("IMG"));
        profile.put("content", result.get("INTRODUCTION"));

        return profile;
    }

    @RequestMapping(value={"/api/home/blog/cs/{page}", "/api/home/blog/cs"}, produces="application/json;charset=UTF-8")
    public ArrayList<HashMap<String, Object>> getRecentCsBlogPost(@PathVariable(value="page", required = false) Integer page, @RequestParam(value="fetch", required = false) Integer fetchNum) {
        // Create return map
        ArrayList<HashMap<String, Object>> posts = new ArrayList<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("type", 0);
        paramMap.put("page", page != null ? page : 0);
        paramMap.put("fetch_num", fetchNum != null ? fetchNum : 3);
        paramMap.put("ref_cursor", null);

        // Fetch from DB
        bs.getRecentBlogPost(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        // Check if null
        if(result == null || result.size() == 0) {
            return new ArrayList<>();
        }

        // Convert to JSON
        for(HashMap<String, Object> post : result) {
            HashMap<String, Object> pdao = new HashMap<>();

            pdao.put("key", UUID.randomUUID());

            HashMap<String, Object> category = new HashMap<>();
            category.put("title", post.get("CATEGORY_TITLE"));
            category.put("img", post.get("CATEGORY_IMG"));

            pdao.put("category", category);
            pdao.put("title", post.get("TITLE"));
            pdao.put("content", post.get("CONTENT"));
            pdao.put("createdDate", post.get("CREATED_DATE"));
            pdao.put("postNum", post.get("NUM"));

            posts.add(pdao);
        }

        return posts;
    }

    @RequestMapping(value={"/api/home/blog/dev/{page}", "api/home/blog/dev"}, produces="application/json;charset=UTF-8")
    public ArrayList<HashMap<String, Object>> getRecentDevBlogPost(@PathVariable(value="page", required = false) Integer page, @RequestParam(value="fetch", required = false) Integer fetchNum) {
        // Create return array
        ArrayList<HashMap<String, Object>> posts = new ArrayList<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("type", 2);
        paramMap.put("page", page != null ? page : 0);
        paramMap.put("fetch_num", fetchNum != null ? fetchNum : 3);
        paramMap.put("ref_cursor", null);

        // Fetch data from db
        bs.getRecentBlogPost(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        // Convert to JSON
        for(HashMap<String, Object> post : result) {
            HashMap<String, Object> pdto = new HashMap<>();
            pdto.put("key", UUID.randomUUID());
            HashMap<String, Object> category = new HashMap<>();
            category.put("title", post.get("CATEGORY_TITLE"));
            category.put("image", post.get("CATEGORY_IMG"));
            pdto.put("category", category);
            pdto.put("title", post.get("TITLE"));
            pdto.put("content", post.get("CONTENT"));
            pdto.put("createdDate", post.get("CREATED_DATE"));
            pdto.put("postNum", post.get("NUM"));

            posts.add(pdto);
        }

        return posts;
    }
}
