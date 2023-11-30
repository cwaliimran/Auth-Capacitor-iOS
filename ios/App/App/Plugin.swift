//
//  Plugin.swift
//  App
//
//  Created by Ali on 11/29/23.
//

import Capacitor

@objc(CapacitorGoogleAuth)
public class CapacitorGoogleAuth: CAPPlugin {
    @objc func authenticate(_ call: CAPPluginCall) {
        // Implement native iOS code to handle Google OAuth
        // Use call.success to send the result back to JavaScript
        // Use call.error to handle errors
    }
}
