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

    @RequestMapping(value={"/api/resume/profile", "/api/resume/profile/{id}"})
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

    @RequestMapping(value="/api/resume/language")
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

    @RequestMapping(value="/api/resume/activity")
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
}
