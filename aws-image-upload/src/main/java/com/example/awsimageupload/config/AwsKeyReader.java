package com.example.awsimageupload.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.yaml.snakeyaml.Yaml;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

public class AwsKeyReader {

    private static final String CSV_FILE_PATH = "src/main/resources/rootkey.yml";
    private static final Logger logger = LoggerFactory.getLogger(AwsKeyReader.class);

    public static Map<String, String> readCsv() {
        Map<String, String> data = new HashMap<>();
        try {
            InputStream inputStream = new FileInputStream(CSV_FILE_PATH);
            Yaml yaml = new Yaml();
            data = yaml.load(inputStream);
        } catch (IOException e) {
            logger.error("CSV 파일 읽기 실패");
            e.printStackTrace();
        }
        return data;
    }
}



