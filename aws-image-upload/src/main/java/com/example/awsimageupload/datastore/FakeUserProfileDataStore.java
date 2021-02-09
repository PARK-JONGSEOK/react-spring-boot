package com.example.awsimageupload.datastore;

import com.example.awsimageupload.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {

    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    static {
        USER_PROFILES.add(new UserProfile(UUID.fromString("14b35b50-442f-4bdf-887c-7ae42abbe044"), "JONGSEOKPARK", null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("45ebba8f-8a65-4675-bddf-87d0fd5c5c31"), "PARKJONGSEOK", null));
    }

    public List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }
}
