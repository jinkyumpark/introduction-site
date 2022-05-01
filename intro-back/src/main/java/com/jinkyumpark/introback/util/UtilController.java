package com.jinkyumpark.introback.util;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;

@CrossOrigin(origins="http://jinkyumpark.com")
@Controller
public class UtilController {

    UtilService us;

    @Autowired
    public UtilController(UtilService us) {
        this.us = us;
    }

    @ResponseBody
    @GetMapping(value="/images/{name}", produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] getImage(@PathVariable("name") String name) throws IOException {
        InputStream in = getClass().getResourceAsStream("/images/" + name.replaceAll("\\s+",""));

        if(in == null) {
            in = getClass().getResourceAsStream("/images/noimg.png");
        }

        return IOUtils.toByteArray(in);
    }

    @RequestMapping(value="/api/footer", produces = "application/json;UTF-8")
    public HashMap<String, Object> getFooter() {
        // Create return map
        HashMap<String, Object> footer = new HashMap<>();

        // Create paramMap
        HashMap<String, Object> paramMap = new HashMap<>();
        paramMap.put("id", "jinkyumpark");
        paramMap.put("ref_cursor", null);

        // Fetch from DB
        us.getFooter(paramMap);
        ArrayList<HashMap<String, Object>> result = (ArrayList<HashMap<String, Object>>) paramMap.get("ref_cursor");

        // Convert to JSON
        if(result == null || result.size() == 0) {
            return new HashMap<>();
        }

        footer.put("lastUpdatedDate", result.get(0).get("LAST_UPDATED_DATE"));
        footer.put("githubLink", result.get(0).get("GITHUB_LINK"));
        footer.put("linkedinLink", result.get(0).get("LINKEDIN_LINK"));

        return footer;
    }
}
