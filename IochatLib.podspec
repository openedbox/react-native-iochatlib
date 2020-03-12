require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|

  s.name           = 'IochatLib'
  s.version        = package['version'].gsub(/v|-beta/, '')
  s.summary        = package['description']
  s.author         = package['author']
  s.license        = package['license']
  s.homepage       = package['homepage']
  s.requires_arc = true
  s.source       = { :git => "https://github.com/openedbox/react-native-iochatlib.git" }
  s.source_files = 'ios/IochatLib/*.{h,m}'
  s.public_header_files = ['ios/IochatLib/*.h']
  s.platform     = :ios, "9.0"
  s.static_framework = true  
  s.dependency 'React'
  s.dependency 'WechatOpenSDK'
  s.dependency 'MobileVLCKit', '~>3.3.0'
end
