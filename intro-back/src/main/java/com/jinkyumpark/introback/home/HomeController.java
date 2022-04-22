package com.jinkyumpark.introback.home;

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
}