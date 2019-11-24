//
//  NativeBridge.m
//  vision
//
//  Created by Mohamed on 11/22/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"


@interface RCT_EXTERN_MODULE(MapViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(mapZoom, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(mapCenter, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(markers, NSArray)
RCT_EXPORT_VIEW_PROPERTY(onMapReady, RCTDirectEventBlock)
@end
