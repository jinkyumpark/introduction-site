package com.jinkyumpark.introback.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class UtilService {
    @Autowired
    UtilDao udao;

    public void getFooter(HashMap<String, Object> paramMap) {
        udao.getFooter(paramMap);
    }
}

