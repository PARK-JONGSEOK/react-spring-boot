package com.example.awsimageupload.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
public class AmazonConfig {

    @Bean
    public AmazonS3 s3() {
        Map<String, String> awsCredentialsKey = AwsKeyReader.readCsv();
        String AWS_ACCESS_KEY_ID = awsCredentialsKey.get("AWSAccessKeyId");
        String AWS_SECRET_KEY = awsCredentialsKey.get("AWSSecretKey");

        AWSCredentials awsCredentials = new BasicAWSCredentials(
                AWS_ACCESS_KEY_ID,
                AWS_SECRET_KEY
        );

        return AmazonS3ClientBuilder
                .standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .withRegion(Regions.AP_NORTHEAST_1)
                .build();
    }


}
