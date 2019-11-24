//
//  MapViewManager.swift
//  vision
//
//  Created by Mohamed on 11/22/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import TomTomOnlineSDKMaps

@objc(MapViewManager)
class MapViewManager: RCTViewManager {
  
  override func view() -> TTMapView {
    let ttMap = TomTomMap(frame: CGRect(x:0, y:0, width: 0, height: 0))
    return ttMap
  }
}
