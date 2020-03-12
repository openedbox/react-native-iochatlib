Pod::Spec.new do |s|
  s.name         = "IochatLib"
  s.version      = "0.0.1"
  s.summary      = "iochat share lib"
  s.requires_arc = true
  s.author       = { 'iochat' => 'iochat@qq.com' }
  s.license      = 'MIT'
  s.homepage     = 'https://github.com/openedbox/react-native-iochatlib'
  s.source       = { :git => "https://github.com/openedbox/react-native-iochatlib.git" }
  s.source_files = 'ios/IochatLib/*'
  s.platform     = :ios, "9.0"
  s.static_framework = true  
  s.dependency 'React'
  s.dependency 'WechatOpenSDK'
  s.dependency 'MobileVLCKit', '~>3.3.0'
end
