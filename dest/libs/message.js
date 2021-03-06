"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MysensorAck;
(function (MysensorAck) {
    MysensorAck[MysensorAck["NO"] = 0] = "NO";
    MysensorAck[MysensorAck["YES"] = 1] = "YES";
})(MysensorAck = exports.MysensorAck || (exports.MysensorAck = {}));
var MysensorCommand;
(function (MysensorCommand) {
    MysensorCommand[MysensorCommand["presentation"] = 0] = "presentation";
    MysensorCommand[MysensorCommand["set"] = 1] = "set";
    MysensorCommand[MysensorCommand["req"] = 2] = "req";
    MysensorCommand[MysensorCommand["internal"] = 3] = "internal";
    MysensorCommand[MysensorCommand["stream"] = 4] = "stream";
})(MysensorCommand = exports.MysensorCommand || (exports.MysensorCommand = {}));
var MysensorDeviceType;
(function (MysensorDeviceType) {
    MysensorDeviceType[MysensorDeviceType["S_DOOR"] = 0] = "S_DOOR";
    MysensorDeviceType[MysensorDeviceType["S_MOTION"] = 1] = "S_MOTION";
    MysensorDeviceType[MysensorDeviceType["S_SMOKE"] = 2] = "S_SMOKE";
    MysensorDeviceType[MysensorDeviceType["S_BINARY"] = 3] = "S_BINARY";
    MysensorDeviceType[MysensorDeviceType["S_DIMMER"] = 4] = "S_DIMMER";
    MysensorDeviceType[MysensorDeviceType["S_COVER"] = 5] = "S_COVER";
    MysensorDeviceType[MysensorDeviceType["S_TEMP"] = 6] = "S_TEMP";
    MysensorDeviceType[MysensorDeviceType["S_HUM"] = 7] = "S_HUM";
    MysensorDeviceType[MysensorDeviceType["S_BARO"] = 8] = "S_BARO";
    MysensorDeviceType[MysensorDeviceType["S_WIND"] = 9] = "S_WIND";
    MysensorDeviceType[MysensorDeviceType["S_RAIN"] = 10] = "S_RAIN";
    MysensorDeviceType[MysensorDeviceType["S_UV"] = 11] = "S_UV";
    MysensorDeviceType[MysensorDeviceType["S_WEIGHT"] = 12] = "S_WEIGHT";
    MysensorDeviceType[MysensorDeviceType["S_POWER"] = 13] = "S_POWER";
    MysensorDeviceType[MysensorDeviceType["S_HEATER"] = 14] = "S_HEATER";
    MysensorDeviceType[MysensorDeviceType["S_DISTANCE"] = 15] = "S_DISTANCE";
    MysensorDeviceType[MysensorDeviceType["S_LIGHT_LEVEL"] = 16] = "S_LIGHT_LEVEL";
    MysensorDeviceType[MysensorDeviceType["S_ARDUINO_NODE"] = 17] = "S_ARDUINO_NODE";
    MysensorDeviceType[MysensorDeviceType["S_ARDUINO_REPEATER_NODE"] = 18] = "S_ARDUINO_REPEATER_NODE";
    MysensorDeviceType[MysensorDeviceType["S_LOCK"] = 19] = "S_LOCK";
    MysensorDeviceType[MysensorDeviceType["S_IR"] = 20] = "S_IR";
    MysensorDeviceType[MysensorDeviceType["S_WATER"] = 21] = "S_WATER";
    MysensorDeviceType[MysensorDeviceType["S_AIR_QUALITY"] = 22] = "S_AIR_QUALITY";
    MysensorDeviceType[MysensorDeviceType["S_CUSTOM"] = 23] = "S_CUSTOM";
    MysensorDeviceType[MysensorDeviceType["S_DUST"] = 24] = "S_DUST";
    MysensorDeviceType[MysensorDeviceType["S_SCENE_CONTROLLER"] = 25] = "S_SCENE_CONTROLLER";
    MysensorDeviceType[MysensorDeviceType["S_RGB_LIGHT"] = 26] = "S_RGB_LIGHT";
    MysensorDeviceType[MysensorDeviceType["S_RGBW_LIGHT"] = 27] = "S_RGBW_LIGHT";
    MysensorDeviceType[MysensorDeviceType["S_COLOR_SENSOR"] = 28] = "S_COLOR_SENSOR";
    MysensorDeviceType[MysensorDeviceType["S_HVAC"] = 29] = "S_HVAC";
    MysensorDeviceType[MysensorDeviceType["S_MULTIMETER"] = 30] = "S_MULTIMETER";
    MysensorDeviceType[MysensorDeviceType["S_SPRINKLER"] = 31] = "S_SPRINKLER";
    MysensorDeviceType[MysensorDeviceType["S_WATER_LEAK"] = 32] = "S_WATER_LEAK";
    MysensorDeviceType[MysensorDeviceType["S_SOUND"] = 33] = "S_SOUND";
    MysensorDeviceType[MysensorDeviceType["S_VIBRATION"] = 34] = "S_VIBRATION";
    MysensorDeviceType[MysensorDeviceType["S_MOISTURE"] = 35] = "S_MOISTURE";
    MysensorDeviceType[MysensorDeviceType["S_INFO"] = 36] = "S_INFO";
    MysensorDeviceType[MysensorDeviceType["S_GAS"] = 37] = "S_GAS";
    MysensorDeviceType[MysensorDeviceType["S_GPS"] = 38] = "S_GPS";
    MysensorDeviceType[MysensorDeviceType["S_WATER_QUALITY"] = 39] = "S_WATER_QUALITY";
})(MysensorDeviceType = exports.MysensorDeviceType || (exports.MysensorDeviceType = {}));
var MysensorInterType;
(function (MysensorInterType) {
    MysensorInterType[MysensorInterType["I_BATTERY_LEVEL"] = 0] = "I_BATTERY_LEVEL";
    MysensorInterType[MysensorInterType["I_TIME"] = 1] = "I_TIME";
    MysensorInterType[MysensorInterType["I_VERSION"] = 2] = "I_VERSION";
    MysensorInterType[MysensorInterType["I_ID_REQUEST"] = 3] = "I_ID_REQUEST";
    MysensorInterType[MysensorInterType["I_ID_RESPONSE"] = 4] = "I_ID_RESPONSE";
    MysensorInterType[MysensorInterType["I_INCLUSION_MODE"] = 5] = "I_INCLUSION_MODE";
    MysensorInterType[MysensorInterType["I_CONFIG"] = 6] = "I_CONFIG";
    MysensorInterType[MysensorInterType["I_FIND_PARENT"] = 7] = "I_FIND_PARENT";
    MysensorInterType[MysensorInterType["I_FIND_PARENT_RESPONSE"] = 8] = "I_FIND_PARENT_RESPONSE";
    MysensorInterType[MysensorInterType["I_LOG_MESSAGE"] = 9] = "I_LOG_MESSAGE";
    MysensorInterType[MysensorInterType["I_CHILDREN"] = 10] = "I_CHILDREN";
    MysensorInterType[MysensorInterType["I_SKETCH_NAME"] = 11] = "I_SKETCH_NAME";
    MysensorInterType[MysensorInterType["I_SKETCH_VERSION"] = 12] = "I_SKETCH_VERSION";
    MysensorInterType[MysensorInterType["I_REBOOT"] = 13] = "I_REBOOT";
    MysensorInterType[MysensorInterType["I_GATEWAY_READY"] = 14] = "I_GATEWAY_READY";
    MysensorInterType[MysensorInterType["I_SIGNING_PRESENTATION"] = 15] = "I_SIGNING_PRESENTATION";
    MysensorInterType[MysensorInterType["I_NONCE_REQUEST"] = 16] = "I_NONCE_REQUEST";
    MysensorInterType[MysensorInterType["I_NONCE_RESPONSE"] = 17] = "I_NONCE_RESPONSE";
    MysensorInterType[MysensorInterType["I_HEARTBEAT_REQUEST"] = 18] = "I_HEARTBEAT_REQUEST";
    MysensorInterType[MysensorInterType["I_PRESENTATION"] = 19] = "I_PRESENTATION";
    MysensorInterType[MysensorInterType["I_DISCOVER_REQUEST"] = 20] = "I_DISCOVER_REQUEST";
    MysensorInterType[MysensorInterType["I_DISCOVER_RESPONSE"] = 21] = "I_DISCOVER_RESPONSE";
    MysensorInterType[MysensorInterType["I_HEARTBEAT_RESPONSE"] = 22] = "I_HEARTBEAT_RESPONSE";
    MysensorInterType[MysensorInterType["I_LOCKED"] = 23] = "I_LOCKED";
    MysensorInterType[MysensorInterType["I_PING"] = 24] = "I_PING";
    MysensorInterType[MysensorInterType["I_PONG"] = 25] = "I_PONG";
    MysensorInterType[MysensorInterType["I_REGISTRATION_REQUEST"] = 26] = "I_REGISTRATION_REQUEST";
    MysensorInterType[MysensorInterType["I_REGISTRATION_RESPONSE"] = 27] = "I_REGISTRATION_RESPONSE";
    MysensorInterType[MysensorInterType["I_DEBUG"] = 28] = "I_DEBUG";
})(MysensorInterType = exports.MysensorInterType || (exports.MysensorInterType = {}));
