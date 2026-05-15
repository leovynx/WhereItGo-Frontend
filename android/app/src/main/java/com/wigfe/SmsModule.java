package com.wigfe;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class SmsModule {

    public static void sendSmsEvent(
            ReactApplication application,
            String message
    ) {

        ReactNativeHost reactNativeHost =
                application.getReactNativeHost();

        ReactContext reactContext =
                reactNativeHost
                        .getReactInstanceManager()
                        .getCurrentReactContext();

        if (reactContext != null) {

            reactContext
                    .getJSModule(
                            DeviceEventManagerModule
                                    .RCTDeviceEventEmitter.class
                    )
                    .emit("SMS_RECEIVED", message);
        }
    }
}