package com.jinkyumpark.introback.util;

import org.apache.commons.io.IOUtils;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.io.InputStream;

@Controller
public class Image {

    @ResponseBody
    @GetMapping(value="/images/{name}", produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] getImage(@PathVariable("name") String name) throws IOException {
        InputStream in = getClass().getResourceAsStream("/images/" + name);

        return IOUtils.toByteArray(in);
    }
}
