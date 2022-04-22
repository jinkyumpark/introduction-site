package com.jinkyumpark.introback.home;

import com.jinkyumpark.introback.portfolio.PortfolioService;
import com.jinkyumpark.introback.resume.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.UUID;

@RestController
public class HomeController {

    @Autowired
    ResumeService rs;

    @Autowired
    PortfolioService ps;

    @RequestMapping("/api/home/profile")
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

    @RequestMapping("/api/home/portfolio")
    public ArrayList<HashMap<String, Object>> getHomePortfolio() {
        // Create return HashMap
        ArrayList<HashMap<String, Object>> portfolios = new ArrayList<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("ref_cursor", null);

        // Fetch from DB
        ps.getHomePortfolio(paramMap);
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
}