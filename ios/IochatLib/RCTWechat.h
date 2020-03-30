#import <React/RCTBridgeModule.h>
#import "WXApi.h"

@interface RCTWeChat : NSObject <RCTBridgeModule, WXApiDelegate>

@property NSString* appId;

@end