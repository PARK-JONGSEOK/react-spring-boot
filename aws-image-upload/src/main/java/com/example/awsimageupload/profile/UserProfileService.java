package com.example.awsimageupload.profile;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserProfileService {

    private final UserProfileDataAccessService userProfileDataAccessService;

    List<UserProfile> getUserProfiles() {
        return userProfileDataAccessService.getUserProfiles();
    }

    public void uploadUserProfileImage(UUID userProfileId, MultipartFile file) {
        /*
         1. check if image is not empty?
         2. If file is an image?
         3. The user exists in out database?
         4. GraB some metadata from file if any
         5. Store the image in s3 and update database (userProfileImageLink) with s3 image link
         */
    }
}
