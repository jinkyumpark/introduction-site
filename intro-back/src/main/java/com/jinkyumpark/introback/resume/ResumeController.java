package com.jinkyumpark.introback.resume;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.UUID;

@RestController
public class ResumeController {

    @Autowired
    ResumeService rs;

    @RequestMapping(value={"/api/resume/profile", "/api/resume/profile/{id}"}, produces="application/json;charset=UTF-8")
    public HashMap<String, Object> getProfile(@PathVariable(value="id", required = false) String id) {
        // Create return map
        HashMap<String, Object> profile = new HashMap<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("id", id != null ? id : "jinkyumpark");
        paramMap.put("ref_cursor", null);

        // Fetch from db
        rs.getProfile(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        // Convert to JSON
        if(result == null || result.size() == 0) {
            return new HashMap<>();
        }

        profile.put("profileImg", result.get(0).get("IMG"));
        profile.put("koreanName", result.get(0).get("NAME_KOREAN"));
        profile.put("englishName", result.get(0).get("NAME_ENGLISH"));
        profile.put("school", result.get(0).get("SCHOOL"));
        profile.put("education", result.get(0).get("EDUCATION"));
        profile.put("address", result.get(0).get("ADDRESS"));
        profile.put("email", result.get(0).get("EMAIL"));

        return profile;
    }

    @RequestMapping(value="/api/resume/language", produces="application/json;charset=UTF-8")
    public ArrayList<HashMap<String, Object>> getLanguage() {
        // Create return map
        ArrayList<HashMap<String, Object>> languages = new ArrayList<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("ref_cursor", null);

        // Fetch from db
        rs.getLanguages(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        // Convert to JSON
        for(HashMap<String, Object> language : result) {
            HashMap<String, Object> tmp = new HashMap<>();
            tmp.put("key", UUID.randomUUID());
            tmp.put("title", language.get("TITLE"));
            tmp.put("titleImage", language.get("LANG_ICON"));
            tmp.put("titleImageAlt", "noimage.png");
            tmp.put("titleDescription", language.get("TITLE_DESCRIPTION"));
            tmp.put("speaking", language.get("SPEAKING_LEVEL"));
            tmp.put("reading", language.get("READING_LEVEL"));
            tmp.put("testScore", language.get("TEST_SCORE"));
            tmp.put("testScoreDescription", language.get("TEST_SCORE_DESCRIPTION"));

            languages.add(tmp);
        }

        return languages;
    }

    @RequestMapping(value="/api/resume/activity", produces="application/json;charset=UTF-8")
    public ArrayList<HashMap<String, Object>> getActivities() {
        // Create return array
        ArrayList<HashMap<String,Object>> activities = new ArrayList<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("ref_cursor", null);

        // Fetch from db
        rs.getActivities(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        // Convert to JSON
        for(HashMap<String, Object> activity : result) {
            HashMap<String, Object> tmp = new HashMap<>();
            tmp.put("key", UUID.randomUUID());
            tmp.put("title", activity.get("TITLE"));
            tmp.put("content", activity.get("CONTENT"));
            tmp.put("description", activity.get("DESCRIPTION"));
            // Calculate duration
            tmp.put("duration", activity.get("START_DATE"));

            activities.add(tmp);
        }

        return activities;
    }

    @RequestMapping(value="/api/resume/tech/header", produces="application/json;charset=UTF-8")
    public HashMap<String, Object> getTechHeader() {
        // Create return array
        HashMap<String, Object> tech = new HashMap<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("ref_cursor", null);

        // Fetch from db
        rs.getTechHeader(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");
        tech.put("techNum", result.size());

        // Convert to JSON
        ArrayList<HashMap<String, Object>> techList = new ArrayList<>();
        for(HashMap<String, Object> te : result) {
            HashMap<String, Object> tmp = new HashMap<>();
            tmp.put("key", UUID.randomUUID());
            tmp.put("img", te.get("IMG"));
            tmp.put("title", te.get("TITLE"));

            techList.add(tmp);
        }
        tech.put("techList", techList);

        return tech;
    }

    @RequestMapping(value={"api/resume/tech/list/{page}", "api/resume/tech/list"}, produces="application/json;charset=UTF-8")
    public ArrayList<HashMap<String, Object>> getTechList(@PathVariable(value = "page", required = false) Integer page) {
        // Create return array
        ArrayList<HashMap<String, Object>> techList = new ArrayList<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("page", page != null ? page : 0);
        paramMap.put("ref_cursor", null);

        // Fetch from db
        rs.getTechList(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        // Convert to JSON
        for(HashMap<String, Object> tech : result) {
            HashMap<String, Object> tmp = new HashMap<>();
            tmp.put("key", UUID.randomUUID());
            int num = Integer.parseInt(String.valueOf(tech.get("NUM")));
            tmp.put("num", num);
            tmp.put("name", tech.get("TITLE"));
            tmp.put("img", tech.get("ICON"));

            // Get summary list
            paramMap = new HashMap<>();
            paramMap.put("num", num);
            paramMap.put("ref_cursor", null);

            rs.getTechListSummary(paramMap);
            ArrayList<HashMap<String, Object>> descriptionResult = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");
            ArrayList<String> tmpList = new ArrayList<>();

            for(HashMap<String, Object> des : descriptionResult) {
                tmpList.add((String) des.get("CONTENT"));
            }
            tmp.put("description", tmpList);

            techList.add(tmp);
        }

        return techList;
    }

    @RequestMapping(value="api/resume/introduction/normal", produces="application/json;charset=UTF-8")
    public HashMap<String, Object> getIntroduction() {
        // Creat return map
        HashMap<String, Object> intro = new HashMap<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("ref_cursor", null);

        // Fetch from db
        rs.getIntroduction(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        if(result == null || result.size() == 0) {
            return new HashMap<>();
        }

        // Convert to JSON
        intro.put("title", result.get(0).get("TITLE"));
        intro.put("content", result.get(0).get("CONTENT"));
        intro.put("questionTitle", result.get(0).get("TITLE_QUESTION"));

        return intro;
    }

    @RequestMapping(value="/api/resume/introduction/interview", produces="application/json;charset=UTF-8")
    public ArrayList<HashMap<String, Object>> getInterview() {
        // Create return array
        ArrayList<HashMap<String, Object>> interview = new ArrayList<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("ref_cursor", null);

        // Fetch from DB
        rs.getInterview(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");
        if(result == null || result.size() == 0) {
            return new ArrayList<>();
        }

        // Convert to JSON
        for(HashMap<String, Object> in : result) {
            HashMap<String, Object> tmp = new HashMap<>();
            tmp.put("key", UUID.randomUUID());
            tmp.put("question", in.get("QUESTION"));
            tmp.put("answer", in.get("ANSWER"));

            interview.add(tmp);
        }

        return interview;
    }
}
