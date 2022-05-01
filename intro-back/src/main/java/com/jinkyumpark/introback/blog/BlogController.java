package com.jinkyumpark.introback.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.UUID;

@CrossOrigin(origins="http://jinkyumpark.com")
@RestController
public class BlogController {
    @Autowired
    BlogService bs;

    @RequestMapping(value={"/api/blog/{type}", "/api/blog/{type}/{page}"}, produces="application/json;UTF-8")
    public ArrayList<HashMap<String, Object>> getBlogPosts(@PathVariable(value="type") String type, @PathVariable(value="page", required = false) Integer page) {
        // Create return array
        ArrayList<HashMap<String, Object>> posts = new ArrayList<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("ref_cursor", null);
        // cs : 0 / dev : 1
        paramMap.put("type", type);
        paramMap.put("page", page == null ? 0 : page);

        // Fetch from DB
        bs.getBlogPostsByPage(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        if(result == null || result.size() == 0) {
            return new ArrayList<>();
        }

        // Convert to JSON
        for(HashMap<String, Object> post : result) {
            HashMap<String, Object> tmp = new HashMap<>();
            tmp.put("key", UUID.randomUUID());
            tmp.put("num", Integer.parseInt(String.valueOf(post.get("NUM"))));

            HashMap<String, Object> category = new HashMap<>();
            category.put("img", post.get("CATEGORY_IMG"));
            category.put("name", post.get("CATEGORY_NAME"));
            tmp.put("category", category);

            tmp.put("title", post.get("TITLE"));
            tmp.put("content", post.get("CONTENT"));
            tmp.put("createdDate", post.get("CREATED_DATE"));

            posts.add(tmp);
        }

        return posts;
    }

    /*
    // Return cs categoryData + cs postNum
    @RequestMapping(value="/api/blog/cs/category", produces="application/json;UTF-8")
    public HashMap<String, Object> getCsBlogCategory() {
        // Create return map
        HashMap<String, Object> blogCategory = new HashMap<>();

    // Get total Posts
        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("paramMap", null);
        paramMap.put("type", 0);

        // Fetch from DB
        bs.getBlogCountByType(paramMap);
        HashMap<String, Object> result = (HashMap<String, Object>) paramMap.get("ref_cursor");
        Integer count = Integer.parseInt(String.valueOf(result.get("COUNT")));

        // put to return map
        blogCategory.put("totalBlogPosts", count);

    // Get categoreies
        // Create paramMap
        paramMap = new HashMap<>();
        paramMap.put("ref_cursor", null);
        paramMap.put("type", 0);
        bs.getMainCategoryByType()

        // Fetch from DB

        // Convert to JSON and put to return map


        return blogCategory;
    }

    */

    @RequestMapping(value="/api/blog/dev/category/main", produces="application/json;UTF-8")
    public ArrayList<HashMap<String, Object>> getDevMainCategory() {
        return null;
    }

    @RequestMapping(value="/api/blog/dev/category/sub", produces="application/json;UTF-8")
    public ArrayList<HashMap<String, Object>> getDevSubCategory() {
        return null;
    }

    @RequestMapping(value="/api/blog/post/detail/{num}")
    public HashMap<String, Object> getPostDetail(@PathVariable(value="num") Integer postNum) {
        return null;
    }
}
