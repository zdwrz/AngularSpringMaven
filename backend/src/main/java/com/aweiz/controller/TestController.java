package com.aweiz.controller;

import com.aweiz.controller.vo.DataVO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/data")
    @CrossOrigin("*")
    public DataVO getData() throws InterruptedException {
        return new DataVO("hahaha, you did it","Success");
    }
}
