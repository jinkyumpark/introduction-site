package com.jinkyumpark.introback.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.UUID;

@CrossOrigin(origins="http://jinkyumpark.com")
@RestController
public class BlogController {
    @Autowired
    BlogService bs;

    // Fetch 3 recent blog post by type (for main page)
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

    // Fetch categories by type
    @RequestMapping(value= {"/api/blog/category/{type}", "/api/blog/category/{type}/{num}"}, produces="application/json;charset=UTF-8")
    public ArrayList<HashMap<String, Object>> getDevMainCategory(@PathVariable(value="type", required = true) int type, @PathVariable(value="num", required = false) Integer belongNum) {
        // return array
        ArrayList<HashMap<String, Object>> categories = new ArrayList<>();

        // paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("type", type);
        paramMap.put("num", belongNum == null ? 0 : belongNum);
        paramMap.put("ref_cursor", null);

        bs.getPostCategory(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        if(result == null || result.size() == 0) {
            return new ArrayList<>();
        }

        for(HashMap<String, Object> category : result) {
            HashMap<String, Object> tmp = new HashMap<>();
            tmp.put("key", UUID.randomUUID());
            tmp.put("name", category.get("TITLE"));
            tmp.put("icon", category.get("IMG"));
            tmp.put("num", category.get("NUM"));
            categories.add(tmp);
        }

        return categories;
    }

    // Fetch blog post detail
    @RequestMapping(value="/api/blog/post/detail/{num}", produces="application/json;charset=UTF-8")
    public HashMap<String, Object> getPostDetail(@PathVariable(value="num") Integer postNum) {
        // Create return map
        HashMap<String, Object> postDetail = new HashMap<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();

        // Post Detail
        paramMap.put("num", postNum);
        paramMap.put("ref_cursor", null);
        bs.getBlogPostDetail(paramMap);
        ArrayList<HashMap<String, Object>> postDetailResultArray = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");
        if(postDetailResultArray == null || postDetailResultArray.size() == 0) {
            return new HashMap<>();
        }
        HashMap<String, Object> postDetailResut = postDetailResultArray.get(0);
        postDetail.put("title", postDetailResut.get("TITLE"));
        postDetail.put("subtitle", postDetailResut.get("SUMMARY"));

        HashMap<String, Object> categoryMap = new HashMap<>();
        categoryMap.put("name", postDetailResut.get("CATEGORY_TITLE"));
        categoryMap.put("icon", postDetailResut.get("CATEGORY_IMG"));
        postDetail.put("classification", categoryMap);

        postDetail.put("content", postDetailResut.get("CONTENT"));
        postDetail.put("createdDate", postDetailResut.get("CREATED_DATE"));

        // Summary
        postDetail.put("summary", new ArrayList<>());

        // Learned Material
        paramMap = new HashMap<>();
        paramMap.put("num", postNum);
        paramMap.put("ref_cursor", null);
        bs.getBlogPostDetailLearn(paramMap);
        ArrayList<HashMap<String, Object>> postLearnedMaterialResult = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");
        if(postLearnedMaterialResult == null || postLearnedMaterialResult.size() == 0) {
            postDetail.put("learned", new ArrayList<>());
        } else {
            ArrayList<HashMap<String, Object>> postLearnedMaterial = new ArrayList<>();
            for(HashMap<String, Object> ma : postLearnedMaterialResult) {
                HashMap<String, Object> material = new HashMap<>();
                material.put("key", UUID.randomUUID());
                material.put("title", ma.get("TITLE"));
                material.put("content", ma.get("CONTENT"));

                postLearnedMaterial.add(material);
            }
            postDetail.put("concepts", postLearnedMaterial);
        }

        // Study Mateiral
        paramMap = new HashMap<>();
        paramMap.put("num", postNum);
        paramMap.put("ref_cursor", null);
        bs.getBlogPostDetailStudyMaterial(paramMap);
        ArrayList<HashMap<String, Object>> postStudyMaterialResult = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");
        if(postStudyMaterialResult == null || postStudyMaterialResult.size() == 0) {
            postDetail.put("learningContent", new ArrayList<>());
        } else {
            ArrayList<HashMap<String, Object>> postStudyMaterial = new ArrayList<>();
            for(HashMap<String, Object> sm : postStudyMaterialResult) {
                HashMap<String, Object> studyMaterial = new HashMap<>();
                studyMaterial.put("key", UUID.randomUUID());
                studyMaterial.put("title", sm.get("TITLE"));
                studyMaterial.put("link", sm.get("LINK"));
                studyMaterial.put("description", sm.get("DESCRIPTION"));
                studyMaterial.put("language", sm.get("LANGUAGE"));
                studyMaterial.put("completePercnet", sm.get("COMPLETE_PERCENT"));
                studyMaterial.put("difficulty", sm.get("DIFFICULTY"));
                studyMaterial.put("duration", sm.get("DURATION"));

                HashMap<String, Object> classification = new HashMap<>();
                classification.put("title", sm.get("CATEGORY_TITLE"));
                classification.put("icon", sm.get("CATEGORY_IMG"));
                studyMaterial.put("classification", classification);

                postStudyMaterial.add(studyMaterial);
            }
            postDetail.put("learningContent", postStudyMaterial);
        }

         // Summary
        paramMap = new HashMap<>();
        paramMap.put("num", postNum);
        paramMap.put("ref_cursor", null);
        bs.getBlogPostDetailSummary(paramMap);
        ArrayList<HashMap<String, Object>> summaryResult = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");
        if(summaryResult == null || summaryResult.size() == 0) {
            postDetail.put("summary", new ArrayList<>());
        } else {
            ArrayList<HashMap<String, Object>> summary = new ArrayList<>();
            for(HashMap<String, Object> sum : summaryResult) {
                HashMap<String, Object> sumMap = new HashMap<>();
                sumMap.put("key", UUID.randomUUID());
                sumMap.put("content", sum.get("CONTENT"));
                summary.add(sumMap);
            }
            postDetail.put("summary", summary);
        }

        return postDetail;
    }

    // Fetch filtered blog post list by category
    @RequestMapping(value= {"/api/blog/filter/{type}/{num}/{page}", "/api/blog/filter/{type}/{num}"}, produces="application/json;charset=UTF-8")
    public ArrayList<HashMap<String, Object>> getPostsByCategory(@PathVariable(value="num") int categoryNum, @PathVariable(value="type") int type, @PathVariable(value="page", required = false) Integer page) {
        ArrayList<HashMap<String, Object>> posts = new ArrayList<>();

        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("num", categoryNum);
        paramMap.put("type", type);
        paramMap.put("page", page ==  null ? 0 : page);
        paramMap.put("ref_cursor", null);

        bs.getPostsByCategory(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");
        if(result == null || result.size() == 0) {
            return new ArrayList<>();
        }

        for(HashMap<String, Object> p : result) {
            HashMap<String, Object> post = new HashMap<>();
            post.put("key", UUID.randomUUID());
            post.put("num", p.get("NUM"));
            post.put("title", p.get("TITLE"));
            post.put("content", p.get("CONTENT"));
            post.put("createdDate", p.get("CREATED_DATE"));
            HashMap<String, Object> category = new HashMap<>();
            category.put("img", p.get("CATEGORY_IMG"));
            category.put("name", p.get("CATEGORY_NAME"));
            post.put("category", category);
            posts.add(post);
        }

        return posts;
    }

    // Fetch total post count
    @RequestMapping(value={"/api/blog/post/count/{type}/{num}", "/api/blog/post/count/{type}"}, produces = "application/json;charset=UTF-8")
    public HashMap<String, Object> getPostCount(@PathVariable(value="type") int type, @PathVariable(value="num", required = false) Integer categoryNum) {
        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("num", categoryNum == null ? 0 : categoryNum);
        paramMap.put("type", type);

        bs.getPostCount(paramMap);
        Integer count = (Integer) paramMap.get("count");

        HashMap<String, Object> returnMap = new HashMap<>();

        if(count == null) {
            returnMap.put("postCount", 1000);
        } else {
            returnMap.put("postCount", count);
        }

        return returnMap;
    }
}