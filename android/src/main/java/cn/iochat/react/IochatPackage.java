package cn.iochat.react;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import cn.iochat.react.picker.PickerViewModule;
import cn.iochat.react.vlc.ReactVlcPlayerViewManager;
import cn.iochat.react.wx.WeChatModule;

public class IochatPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(new PickerViewModule(reactContext), new WeChatModule(reactContext));
    }

    // Deprecated RN 0.47
    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.<ViewManager>singletonList(new ReactVlcPlayerViewManager());
    }
}