package com.jinkyumpark.introback.portfolio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.UUID;

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
}
