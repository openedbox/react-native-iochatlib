#import "RCTWeChat.h"
#import "WXApiObject.h"

#import <React/RCTBridge.h>

#define NOT_REGISTERED (@"registerApp required.")
#define INVOKE_FAILED (@"WeChat API invoke returns false.")
#define INVOKE_SUCCESS (@"ok")

@implementation RCTWeChat

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(registerApp:(NSString *)appid
                  :(NSString *)universalLink
                  :(RCTPromiseResolveBlock)resolve
                  :(RCTPromiseRejectBlock)reject)
{
    self.appId = appid;
    BOOL result = [WXApi registerApp:appid universalLink:universalLink];
    if(result){
        resolve(@"ok");
    } else {
        resolve(INVOKE_FAILED);
    }
}


@end
