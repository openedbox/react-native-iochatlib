//package cn.iochat.react;
//
//import com.facebook.react.ReactPackage;
//import com.facebook.react.bridge.JavaScriptModule;
//import com.facebook.react.bridge.NativeModule;
//import com.facebook.react.bridge.ReactApplicationContext;
//import com.facebook.react.uimanager.ViewManager;
//import cn.iochat.react.vlc.ReactVlcPlayerViewManager;
//
//import java.util.Collections;
//import java.util.List;
//
//
//public class ReactVlcPlayerPackage implements ReactPackage {
//
//    @Override
//    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
//        return Collections.emptyList();
//    }
//
//    // Deprecated RN 0.47
//    public List<Class<? extends JavaScriptModule>> createJSModules() {
//        return Collections.emptyList();
//    }
//
//    @Override
//    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
//        return Collections.<ViewManager>singletonList(new ReactVlcPlayerViewManager());
//    }
//}