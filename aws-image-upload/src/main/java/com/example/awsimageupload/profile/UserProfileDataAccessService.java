package com.example.awsimageupload.profile;

import com.example.awsimageupload.datastore.FakeUserProfileDataStore;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class UserProfileDataAccessService {

    private final FakeUserProfileDataStore fakeUserProfileDataStore;

    List<UserProfile> getUserProfiles() {
        return fakeUserProfileDataStore.getUserProfiles();
    }
}
