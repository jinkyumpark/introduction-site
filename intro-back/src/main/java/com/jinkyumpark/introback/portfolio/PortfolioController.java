package com.jinkyumpark.introback.portfolio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.UUID;

@CrossOrigin(origins="http://jinkyumpark.com")
@RestController
public class PortfolioController {

    @Autowired
    PortfolioService ps;

    @RequestMapping(value= {"/api/portfolio/list/{page}", "/api/portfolio/list"}, produces="application/json;charset=UTF-8")
    public ArrayList<HashMap<String, Object>> getPortfolios(@PathVariable(value = "page", required = false) Integer page, @RequestParam(value="fetchNum", required = false) Integer fetchNum) {
        // Create return HashMap
        ArrayList<HashMap<String, Object>> portfolios = new ArrayList<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("ref_cursor", null);
        paramMap.put("page", page != null ? page : 0);
        paramMap.put("fetch_num", fetchNum != null ? fetchNum : 4);

        // Fetch from DB
        ps.getPortfolioList(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        // check if result is null
        if(result == null || result.size() == 0 ) {
            return new ArrayList<>();
        }

        // Convert to JSON
        for(HashMap<String, Object> port : result) {

            HashMap<String, Object> pdao = new HashMap<>();
            pdao.put("key", UUID.randomUUID());
            pdao.put("img", port.get("IMG"));
            pdao.put("title", port.get("TITLE"));
            pdao.put("content", port.get("CONTENT"));
            pdao.put("portfolioNum", port.get("NUM"));
            pdao.put("status", port.get("STATUS"));
            pdao.put("startDate", port.get("START_DATE"));
            pdao.put("endDate", port.get("END_DATE"));
            pdao.put("siteLink", port.get("SITE_LINK"));

            portfolios.add(pdao);
        }

        return portfolios;
    }

    // For Infinite Scroll
    @RequestMapping(value="/api/portfolio/length", produces="application/json;charset=UTF-8")
    public HashMap<String, Object> getPortfolioLength() {
        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("ref_cursor", null);

        // Fetch from db
        ps.getPortfolioLength(paramMap);
        if(paramMap.get("length") == null) {
            HashMap<String, Object> result = new HashMap<>();
            result.put("length", 0);
            return result;
        }

        Integer length = Integer.parseInt(String.valueOf(paramMap.get("length")));
        HashMap<String, Object> result = new HashMap<>();
        result.put("length", length);

        return result;
    }

    // Portfolio Detail
    @RequestMapping(value="/api/portfolio/detail/{num}", produces="application/json;charset=UTF-8")
    public HashMap<String, Object> getPortfolioDetail(@PathVariable(value="num") int portfolioNum) {
        // Create return Map
        HashMap<String, Object> portfolioDetail = new HashMap<>();
        HashMap<String, Object> paramMap = new HashMap<>();

        // Get basic info
        paramMap.put("num", portfolioNum);
        paramMap.put("ref_cursor", null);
        ps.getPortfolioDetail(paramMap);

        ArrayList<HashMap<String, Object>> basicInfoResult = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");
        if(basicInfoResult == null || basicInfoResult.size() == 0) {
            return new HashMap<>();
        }
        HashMap<String, Object> basicInfo = basicInfoResult.get(0);

        portfolioDetail.put("title", basicInfo.get("TITLE"));
        portfolioDetail.put("image", basicInfo.get("MAIN_IMG"));
        portfolioDetail.put("summary", basicInfo.get("SUMMARY"));
        portfolioDetail.put("startDate", basicInfo.get("START_DATE"));
        portfolioDetail.put("endDate", basicInfo.get("END_DATE"));
        portfolioDetail.put("developerCount", basicInfo.get("DEVELOPER_COUNT"));
        portfolioDetail.put("githubLink", basicInfo.get("GITHUB_LINK"));
        portfolioDetail.put("websiteLink", basicInfo.get("SITE_LINK"));
        portfolioDetail.put("dbImg", basicInfo.get("DB_IMG"));

        // Get portfolio function
        paramMap = new HashMap<>();
        paramMap.put("num", portfolioNum);
        paramMap.put("ref_cursor", null);
        ps.getPortfolioDetailFunction(paramMap);

        ArrayList<HashMap<String, Object>> functionResult = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");
        if(functionResult == null || functionResult.size() == 0) {
            portfolioDetail.put("func", new ArrayList<>());
        } else {
            ArrayList<HashMap<String, Object>> function = new ArrayList<>();
            for(HashMap<String, Object> tmp : functionResult) {
                HashMap<String, Object> tmpMap = new HashMap<>();
                tmpMap.put("key", UUID.randomUUID());
                tmpMap.put("title", tmp.get("TITLE"));
                tmpMap.put("content", tmp.get("CONTENT"));
                tmpMap.put("img", tmp.get("IMG"));

                function.add(tmpMap);
            }
            portfolioDetail.put("func", function);
        }

        // Get portfolio tech
        paramMap = new HashMap<>();
        paramMap.put("num", portfolioNum);
        paramMap.put("ref_cursor", null);
        ps.getPortfolioDetailTech(paramMap);

        ArrayList<HashMap<String, Object>> techResult = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");
        if(techResult == null || techResult.size() == 0) {
            portfolioDetail.put("tech", new ArrayList<>());
        } else {
            ArrayList<HashMap<String, Object>> tech = new ArrayList<>();
            for(HashMap<String, Object> tmp : techResult) {
                HashMap<String, Object> tmpTech = new HashMap<>();
                tmpTech.put("key", UUID.randomUUID());
                tmpTech.put("title", tmp.get("TITLE"));
                tmpTech.put("content", tmp.get("CONTENT"));
                tmpTech.put("img", tmp.get("IMG"));

                tech.add(tmpTech);
            }
            portfolioDetail.put("tech", tech);
        }

        // Get portfolio db (string)
        paramMap = new HashMap<>();
        paramMap.put("num", portfolioNum);
        paramMap.put("ref_cursor", null);
        ps.getPortfolioDetailDb(paramMap);

        ArrayList<HashMap<String, Object>> dbResult = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        ArrayList<String> db = new ArrayList<>();
        for(HashMap<String, Object> tmp : dbResult) {
            db.add((String) tmp.get("CONTENT"));
        }

        portfolioDetail.put("db", db);

        // Get portfolio explanation
        paramMap = new HashMap<>();
        paramMap.put("num", portfolioNum);
        paramMap.put("ref_cursor", null);
        ps.getPortfolioDetailExplanation(paramMap);

        ArrayList<HashMap<String, Object>> explanationResult = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        if(explanationResult == null || explanationResult.size() == 0) {
            portfolioDetail.put("explanation", new ArrayList<>());
        } else {
            ArrayList<HashMap<String, Object>> explanation = new ArrayList<>();

            for(HashMap<String, Object> tmp : explanationResult) {
                HashMap<String, Object> tmpMap = new HashMap<>();
                tmpMap.put("key", UUID.randomUUID());
                tmpMap.put("title", tmp.get("TITLE"));
                tmpMap.put("why", tmp.get("WHY"));
                tmpMap.put("how", tmp.get("HOW"));

                // Get related post
                int explanationNum = Integer.parseInt(String.valueOf(tmp.get("NUM")));
                ArrayList<HashMap<String, Object>> relatedPost = new ArrayList<>();
                paramMap = new HashMap<>();
                paramMap.put("explanation_num", explanationNum);
                paramMap.put("ref_cursor", null);
                ps.getPortfolioDetailExplanationPost(paramMap);
                ArrayList<HashMap<String, Object>> relatedPostResult = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

                if(relatedPostResult == null || relatedPostResult.size() == 0) {
                    tmpMap.put("relatedPost", new ArrayList<>());
                } else {
                    for (HashMap<String, Object> tmpRelatedPost : relatedPostResult) {
                        HashMap<String, Object> tmpRelatedMap = new HashMap<>();
                        tmpRelatedMap.put("key", UUID.randomUUID());
                        tmpRelatedMap.put("num", Integer.parseInt(String.valueOf(tmpRelatedPost.get("NUM"))));
                        tmpRelatedMap.put("title", tmpRelatedPost.get("TITLE"));
                        tmpRelatedMap.put("content", tmpRelatedPost.get("CONTENT"));
                        tmpRelatedMap.put("createdDate", tmpRelatedPost.get("CREATED_DATE"));

                        HashMap<String, Object> category = new HashMap<>();
                        category.put("img", tmpRelatedPost.get("CATEGORY_IMG"));
                        category.put("name", tmpRelatedPost.get("CATEGORY_TITLE"));
                        category.put("type", Integer.parseInt(String.valueOf(tmpRelatedPost.get("CATEGORY_TYPE"))));

                        tmpRelatedMap.put("category", category);

                        relatedPost.add(tmpRelatedMap);
                    }
                    tmpMap.put("relatedPost", relatedPost);
                }
                explanation.add(tmpMap);
            }
            portfolioDetail.put("explanation", explanation);
        }


        // Get portfolio history
        paramMap = new HashMap<>();
        paramMap.put("num", portfolioNum);
        paramMap.put("ref_cursor", null);
        ps.getPortfolioDetailHistory(paramMap);
        ArrayList<HashMap<String, Object>> historyResult = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        if(historyResult == null || historyResult.size() == 0) {
            portfolioDetail.put("history", new ArrayList<>());
        } else {
            ArrayList<HashMap<String, Object>> history = new ArrayList<>();
            for(HashMap<String, Object> tmp : historyResult) {
                HashMap<String, Object> tmpMap = new HashMap<>();
                tmpMap.put("key", UUID.randomUUID());
                tmpMap.put("date", tmp.get("HISTORY_DATE"));
                tmpMap.put("content", tmp.get("CONTENT"));
                tmpMap.put("githubLink", tmp.get("GITHUB_LINK"));

                history.add(tmpMap);
            }
            portfolioDetail.put("history", history);
        }

        // Get portfolio review (String)
        paramMap = new HashMap<>();
        paramMap.put("num", portfolioNum);
        paramMap.put("ref_cursor", null);
        ps.getPortfolioDetailReview(paramMap);
        ArrayList<HashMap<String, Object>> reviewResult = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        if(reviewResult == null || reviewResult.size() == 0) {
            portfolioDetail.put("review", new ArrayList<>());
        } else {
            ArrayList<String> review = new ArrayList<>();
            for(HashMap<String, Object> tmp : reviewResult) {
                review.add((String) tmp.get("CONTENT"));
            }
            portfolioDetail.put("review", review);
        }

        return portfolioDetail;
    }
}
