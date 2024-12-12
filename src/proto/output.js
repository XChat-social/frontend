/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    pb.BusinessExt = (function() {

        /**
         * Constructs a new BusinessExt service.
         * @memberof pb
         * @classdesc Represents a BusinessExt
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function BusinessExt(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (BusinessExt.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = BusinessExt;

        /**
         * Creates new BusinessExt service using the specified rpc implementation.
         * @function create
         * @memberof pb.BusinessExt
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {BusinessExt} RPC service. Useful where requests and/or responses are streamed.
         */
        BusinessExt.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pb.BusinessExt#signIn}.
         * @memberof pb.BusinessExt
         * @typedef SignInCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.SignInResp} [response] SignInResp
         */

        /**
         * Calls SignIn.
         * @function signIn
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.ISignInReq} request SignInReq message or plain object
         * @param {pb.BusinessExt.SignInCallback} callback Node-style callback called with the error, if any, and SignInResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(BusinessExt.prototype.signIn = function signIn(request, callback) {
            return this.rpcCall(signIn, $root.pb.SignInReq, $root.pb.SignInResp, request, callback);
        }, "name", { value: "SignIn" });

        /**
         * Calls SignIn.
         * @function signIn
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.ISignInReq} request SignInReq message or plain object
         * @returns {Promise<pb.SignInResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.BusinessExt#getUser}.
         * @memberof pb.BusinessExt
         * @typedef GetUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.GetUserResp} [response] GetUserResp
         */

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.IGetUserReq} request GetUserReq message or plain object
         * @param {pb.BusinessExt.GetUserCallback} callback Node-style callback called with the error, if any, and GetUserResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(BusinessExt.prototype.getUser = function getUser(request, callback) {
            return this.rpcCall(getUser, $root.pb.GetUserReq, $root.pb.GetUserResp, request, callback);
        }, "name", { value: "GetUser" });

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.IGetUserReq} request GetUserReq message or plain object
         * @returns {Promise<pb.GetUserResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.BusinessExt#updateUser}.
         * @memberof pb.BusinessExt
         * @typedef UpdateUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls UpdateUser.
         * @function updateUser
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.IUpdateUserReq} request UpdateUserReq message or plain object
         * @param {pb.BusinessExt.UpdateUserCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(BusinessExt.prototype.updateUser = function updateUser(request, callback) {
            return this.rpcCall(updateUser, $root.pb.UpdateUserReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "UpdateUser" });

        /**
         * Calls UpdateUser.
         * @function updateUser
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.IUpdateUserReq} request UpdateUserReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.BusinessExt#searchUser}.
         * @memberof pb.BusinessExt
         * @typedef SearchUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.SearchUserResp} [response] SearchUserResp
         */

        /**
         * Calls SearchUser.
         * @function searchUser
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.ISearchUserReq} request SearchUserReq message or plain object
         * @param {pb.BusinessExt.SearchUserCallback} callback Node-style callback called with the error, if any, and SearchUserResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(BusinessExt.prototype.searchUser = function searchUser(request, callback) {
            return this.rpcCall(searchUser, $root.pb.SearchUserReq, $root.pb.SearchUserResp, request, callback);
        }, "name", { value: "SearchUser" });

        /**
         * Calls SearchUser.
         * @function searchUser
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.ISearchUserReq} request SearchUserReq message or plain object
         * @returns {Promise<pb.SearchUserResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.BusinessExt#getTwitterAuthorizeURL}.
         * @memberof pb.BusinessExt
         * @typedef GetTwitterAuthorizeURLCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.TwitterAuthorizeURLResp} [response] TwitterAuthorizeURLResp
         */

        /**
         * Calls GetTwitterAuthorizeURL.
         * @function getTwitterAuthorizeURL
         * @memberof pb.BusinessExt
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {pb.BusinessExt.GetTwitterAuthorizeURLCallback} callback Node-style callback called with the error, if any, and TwitterAuthorizeURLResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(BusinessExt.prototype.getTwitterAuthorizeURL = function getTwitterAuthorizeURL(request, callback) {
            return this.rpcCall(getTwitterAuthorizeURL, $root.google.protobuf.Empty, $root.pb.TwitterAuthorizeURLResp, request, callback);
        }, "name", { value: "GetTwitterAuthorizeURL" });

        /**
         * Calls GetTwitterAuthorizeURL.
         * @function getTwitterAuthorizeURL
         * @memberof pb.BusinessExt
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<pb.TwitterAuthorizeURLResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.BusinessExt#twitterSignIn}.
         * @memberof pb.BusinessExt
         * @typedef TwitterSignInCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.TwitterSignInResp} [response] TwitterSignInResp
         */

        /**
         * Calls TwitterSignIn.
         * @function twitterSignIn
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.ITwitterSignInReq} request TwitterSignInReq message or plain object
         * @param {pb.BusinessExt.TwitterSignInCallback} callback Node-style callback called with the error, if any, and TwitterSignInResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(BusinessExt.prototype.twitterSignIn = function twitterSignIn(request, callback) {
            return this.rpcCall(twitterSignIn, $root.pb.TwitterSignInReq, $root.pb.TwitterSignInResp, request, callback);
        }, "name", { value: "TwitterSignIn" });

        /**
         * Calls TwitterSignIn.
         * @function twitterSignIn
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.ITwitterSignInReq} request TwitterSignInReq message or plain object
         * @returns {Promise<pb.TwitterSignInResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.BusinessExt#dailySignIn}.
         * @memberof pb.BusinessExt
         * @typedef DailySignInCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.DailySignInResp} [response] DailySignInResp
         */

        /**
         * Calls DailySignIn.
         * @function dailySignIn
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.IDailySignInReq} request DailySignInReq message or plain object
         * @param {pb.BusinessExt.DailySignInCallback} callback Node-style callback called with the error, if any, and DailySignInResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(BusinessExt.prototype.dailySignIn = function dailySignIn(request, callback) {
            return this.rpcCall(dailySignIn, $root.pb.DailySignInReq, $root.pb.DailySignInResp, request, callback);
        }, "name", { value: "DailySignIn" });

        /**
         * Calls DailySignIn.
         * @function dailySignIn
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.IDailySignInReq} request DailySignInReq message or plain object
         * @returns {Promise<pb.DailySignInResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.BusinessExt#claimSevenDayReward}.
         * @memberof pb.BusinessExt
         * @typedef ClaimSevenDayRewardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.ClaimSevenDayRewardResp} [response] ClaimSevenDayRewardResp
         */

        /**
         * Calls ClaimSevenDayReward.
         * @function claimSevenDayReward
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.IClaimSevenDayRewardReq} request ClaimSevenDayRewardReq message or plain object
         * @param {pb.BusinessExt.ClaimSevenDayRewardCallback} callback Node-style callback called with the error, if any, and ClaimSevenDayRewardResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(BusinessExt.prototype.claimSevenDayReward = function claimSevenDayReward(request, callback) {
            return this.rpcCall(claimSevenDayReward, $root.pb.ClaimSevenDayRewardReq, $root.pb.ClaimSevenDayRewardResp, request, callback);
        }, "name", { value: "ClaimSevenDayReward" });

        /**
         * Calls ClaimSevenDayReward.
         * @function claimSevenDayReward
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.IClaimSevenDayRewardReq} request ClaimSevenDayRewardReq message or plain object
         * @returns {Promise<pb.ClaimSevenDayRewardResp>} Promise
         * @variation 2
         */

        return BusinessExt;
    })();

    pb.SignInReq = (function() {

        /**
         * Properties of a SignInReq.
         * @memberof pb
         * @interface ISignInReq
         * @property {string|null} [phoneNumber] SignInReq phoneNumber
         * @property {string|null} [code] SignInReq code
         * @property {number|Long|null} [deviceId] SignInReq deviceId
         */

        /**
         * Constructs a new SignInReq.
         * @memberof pb
         * @classdesc Represents a SignInReq.
         * @implements ISignInReq
         * @constructor
         * @param {pb.ISignInReq=} [properties] Properties to set
         */
        function SignInReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignInReq phoneNumber.
         * @member {string} phoneNumber
         * @memberof pb.SignInReq
         * @instance
         */
        SignInReq.prototype.phoneNumber = "";

        /**
         * SignInReq code.
         * @member {string} code
         * @memberof pb.SignInReq
         * @instance
         */
        SignInReq.prototype.code = "";

        /**
         * SignInReq deviceId.
         * @member {number|Long} deviceId
         * @memberof pb.SignInReq
         * @instance
         */
        SignInReq.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SignInReq instance using the specified properties.
         * @function create
         * @memberof pb.SignInReq
         * @static
         * @param {pb.ISignInReq=} [properties] Properties to set
         * @returns {pb.SignInReq} SignInReq instance
         */
        SignInReq.create = function create(properties) {
            return new SignInReq(properties);
        };

        /**
         * Encodes the specified SignInReq message. Does not implicitly {@link pb.SignInReq.verify|verify} messages.
         * @function encode
         * @memberof pb.SignInReq
         * @static
         * @param {pb.ISignInReq} message SignInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.phoneNumber);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.deviceId);
            return writer;
        };

        /**
         * Encodes the specified SignInReq message, length delimited. Does not implicitly {@link pb.SignInReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SignInReq
         * @static
         * @param {pb.ISignInReq} message SignInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignInReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SignInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SignInReq} SignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SignInReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.phoneNumber = reader.string();
                        break;
                    }
                case 2: {
                        message.code = reader.string();
                        break;
                    }
                case 3: {
                        message.deviceId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignInReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SignInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SignInReq} SignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignInReq message.
         * @function verify
         * @memberof pb.SignInReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignInReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (!$util.isString(message.phoneNumber))
                    return "phoneNumber: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                    return "deviceId: integer|Long expected";
            return null;
        };

        /**
         * Creates a SignInReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SignInReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SignInReq} SignInReq
         */
        SignInReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SignInReq)
                return object;
            var message = new $root.pb.SignInReq();
            if (object.phoneNumber != null)
                message.phoneNumber = String(object.phoneNumber);
            if (object.code != null)
                message.code = String(object.code);
            if (object.deviceId != null)
                if ($util.Long)
                    (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = false;
                else if (typeof object.deviceId === "string")
                    message.deviceId = parseInt(object.deviceId, 10);
                else if (typeof object.deviceId === "number")
                    message.deviceId = object.deviceId;
                else if (typeof object.deviceId === "object")
                    message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SignInReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SignInReq
         * @static
         * @param {pb.SignInReq} message SignInReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignInReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.phoneNumber = "";
                object.code = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceId = options.longs === String ? "0" : 0;
            }
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                object.phoneNumber = message.phoneNumber;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (typeof message.deviceId === "number")
                    object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
                else
                    object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber() : message.deviceId;
            return object;
        };

        /**
         * Converts this SignInReq to JSON.
         * @function toJSON
         * @memberof pb.SignInReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignInReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignInReq
         * @function getTypeUrl
         * @memberof pb.SignInReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignInReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SignInReq";
        };

        return SignInReq;
    })();

    pb.SignInResp = (function() {

        /**
         * Properties of a SignInResp.
         * @memberof pb
         * @interface ISignInResp
         * @property {boolean|null} [isNew] SignInResp isNew
         * @property {number|Long|null} [userId] SignInResp userId
         * @property {string|null} [token] SignInResp token
         */

        /**
         * Constructs a new SignInResp.
         * @memberof pb
         * @classdesc Represents a SignInResp.
         * @implements ISignInResp
         * @constructor
         * @param {pb.ISignInResp=} [properties] Properties to set
         */
        function SignInResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignInResp isNew.
         * @member {boolean} isNew
         * @memberof pb.SignInResp
         * @instance
         */
        SignInResp.prototype.isNew = false;

        /**
         * SignInResp userId.
         * @member {number|Long} userId
         * @memberof pb.SignInResp
         * @instance
         */
        SignInResp.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SignInResp token.
         * @member {string} token
         * @memberof pb.SignInResp
         * @instance
         */
        SignInResp.prototype.token = "";

        /**
         * Creates a new SignInResp instance using the specified properties.
         * @function create
         * @memberof pb.SignInResp
         * @static
         * @param {pb.ISignInResp=} [properties] Properties to set
         * @returns {pb.SignInResp} SignInResp instance
         */
        SignInResp.create = function create(properties) {
            return new SignInResp(properties);
        };

        /**
         * Encodes the specified SignInResp message. Does not implicitly {@link pb.SignInResp.verify|verify} messages.
         * @function encode
         * @memberof pb.SignInResp
         * @static
         * @param {pb.ISignInResp} message SignInResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isNew != null && Object.hasOwnProperty.call(message, "isNew"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isNew);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified SignInResp message, length delimited. Does not implicitly {@link pb.SignInResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SignInResp
         * @static
         * @param {pb.ISignInResp} message SignInResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignInResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SignInResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SignInResp} SignInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SignInResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.isNew = reader.bool();
                        break;
                    }
                case 2: {
                        message.userId = reader.int64();
                        break;
                    }
                case 3: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignInResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SignInResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SignInResp} SignInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignInResp message.
         * @function verify
         * @memberof pb.SignInResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignInResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isNew != null && message.hasOwnProperty("isNew"))
                if (typeof message.isNew !== "boolean")
                    return "isNew: boolean expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a SignInResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SignInResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SignInResp} SignInResp
         */
        SignInResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SignInResp)
                return object;
            var message = new $root.pb.SignInResp();
            if (object.isNew != null)
                message.isNew = Boolean(object.isNew);
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a SignInResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SignInResp
         * @static
         * @param {pb.SignInResp} message SignInResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignInResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isNew = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.token = "";
            }
            if (message.isNew != null && message.hasOwnProperty("isNew"))
                object.isNew = message.isNew;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this SignInResp to JSON.
         * @function toJSON
         * @memberof pb.SignInResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignInResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignInResp
         * @function getTypeUrl
         * @memberof pb.SignInResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignInResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SignInResp";
        };

        return SignInResp;
    })();

    pb.User = (function() {

        /**
         * Properties of a User.
         * @memberof pb
         * @interface IUser
         * @property {number|Long|null} [userId] User userId
         * @property {string|null} [nickname] User nickname
         * @property {number|null} [sex] User sex
         * @property {string|null} [avatarUrl] User avatarUrl
         * @property {string|null} [extra] User extra
         * @property {number|Long|null} [createTime] User createTime
         * @property {number|Long|null} [updateTime] User updateTime
         * @property {string|null} [twitterId] User twitterId
         * @property {string|null} [twitterUsername] User twitterUsername
         * @property {number|null} [xpoint] User xpoint
         */

        /**
         * Constructs a new User.
         * @memberof pb
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {pb.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User userId.
         * @member {number|Long} userId
         * @memberof pb.User
         * @instance
         */
        User.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof pb.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * User sex.
         * @member {number} sex
         * @memberof pb.User
         * @instance
         */
        User.prototype.sex = 0;

        /**
         * User avatarUrl.
         * @member {string} avatarUrl
         * @memberof pb.User
         * @instance
         */
        User.prototype.avatarUrl = "";

        /**
         * User extra.
         * @member {string} extra
         * @memberof pb.User
         * @instance
         */
        User.prototype.extra = "";

        /**
         * User createTime.
         * @member {number|Long} createTime
         * @memberof pb.User
         * @instance
         */
        User.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User updateTime.
         * @member {number|Long} updateTime
         * @memberof pb.User
         * @instance
         */
        User.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User twitterId.
         * @member {string} twitterId
         * @memberof pb.User
         * @instance
         */
        User.prototype.twitterId = "";

        /**
         * User twitterUsername.
         * @member {string} twitterUsername
         * @memberof pb.User
         * @instance
         */
        User.prototype.twitterUsername = "";

        /**
         * User xpoint.
         * @member {number} xpoint
         * @memberof pb.User
         * @instance
         */
        User.prototype.xpoint = 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof pb.User
         * @static
         * @param {pb.IUser=} [properties] Properties to set
         * @returns {pb.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link pb.User.verify|verify} messages.
         * @function encode
         * @memberof pb.User
         * @static
         * @param {pb.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sex);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatarUrl);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.extra);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.createTime);
            if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.updateTime);
            if (message.twitterId != null && Object.hasOwnProperty.call(message, "twitterId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.twitterId);
            if (message.twitterUsername != null && Object.hasOwnProperty.call(message, "twitterUsername"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.twitterUsername);
            if (message.xpoint != null && Object.hasOwnProperty.call(message, "xpoint"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.xpoint);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link pb.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.User
         * @static
         * @param {pb.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof pb.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        message.nickname = reader.string();
                        break;
                    }
                case 3: {
                        message.sex = reader.int32();
                        break;
                    }
                case 4: {
                        message.avatarUrl = reader.string();
                        break;
                    }
                case 5: {
                        message.extra = reader.string();
                        break;
                    }
                case 6: {
                        message.createTime = reader.int64();
                        break;
                    }
                case 7: {
                        message.updateTime = reader.int64();
                        break;
                    }
                case 8: {
                        message.twitterId = reader.string();
                        break;
                    }
                case 9: {
                        message.twitterUsername = reader.string();
                        break;
                    }
                case 10: {
                        message.xpoint = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof pb.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                    return "updateTime: integer|Long expected";
            if (message.twitterId != null && message.hasOwnProperty("twitterId"))
                if (!$util.isString(message.twitterId))
                    return "twitterId: string expected";
            if (message.twitterUsername != null && message.hasOwnProperty("twitterUsername"))
                if (!$util.isString(message.twitterUsername))
                    return "twitterUsername: string expected";
            if (message.xpoint != null && message.hasOwnProperty("xpoint"))
                if (!$util.isInteger(message.xpoint))
                    return "xpoint: integer expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.User)
                return object;
            var message = new $root.pb.User();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.extra != null)
                message.extra = String(object.extra);
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
            if (object.updateTime != null)
                if ($util.Long)
                    (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = false;
                else if (typeof object.updateTime === "string")
                    message.updateTime = parseInt(object.updateTime, 10);
                else if (typeof object.updateTime === "number")
                    message.updateTime = object.updateTime;
                else if (typeof object.updateTime === "object")
                    message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber();
            if (object.twitterId != null)
                message.twitterId = String(object.twitterId);
            if (object.twitterUsername != null)
                message.twitterUsername = String(object.twitterUsername);
            if (object.xpoint != null)
                message.xpoint = object.xpoint | 0;
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.User
         * @static
         * @param {pb.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.sex = 0;
                object.avatarUrl = "";
                object.extra = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updateTime = options.longs === String ? "0" : 0;
                object.twitterId = "";
                object.twitterUsername = "";
                object.xpoint = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (typeof message.updateTime === "number")
                    object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
                else
                    object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber() : message.updateTime;
            if (message.twitterId != null && message.hasOwnProperty("twitterId"))
                object.twitterId = message.twitterId;
            if (message.twitterUsername != null && message.hasOwnProperty("twitterUsername"))
                object.twitterUsername = message.twitterUsername;
            if (message.xpoint != null && message.hasOwnProperty("xpoint"))
                object.xpoint = message.xpoint;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof pb.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof pb.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.User";
        };

        return User;
    })();

    pb.GetUserReq = (function() {

        /**
         * Properties of a GetUserReq.
         * @memberof pb
         * @interface IGetUserReq
         * @property {number|Long|null} [userId] GetUserReq userId
         */

        /**
         * Constructs a new GetUserReq.
         * @memberof pb
         * @classdesc Represents a GetUserReq.
         * @implements IGetUserReq
         * @constructor
         * @param {pb.IGetUserReq=} [properties] Properties to set
         */
        function GetUserReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserReq userId.
         * @member {number|Long} userId
         * @memberof pb.GetUserReq
         * @instance
         */
        GetUserReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetUserReq instance using the specified properties.
         * @function create
         * @memberof pb.GetUserReq
         * @static
         * @param {pb.IGetUserReq=} [properties] Properties to set
         * @returns {pb.GetUserReq} GetUserReq instance
         */
        GetUserReq.create = function create(properties) {
            return new GetUserReq(properties);
        };

        /**
         * Encodes the specified GetUserReq message. Does not implicitly {@link pb.GetUserReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GetUserReq
         * @static
         * @param {pb.IGetUserReq} message GetUserReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified GetUserReq message, length delimited. Does not implicitly {@link pb.GetUserReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetUserReq
         * @static
         * @param {pb.IGetUserReq} message GetUserReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetUserReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetUserReq} GetUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetUserReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetUserReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetUserReq} GetUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserReq message.
         * @function verify
         * @memberof pb.GetUserReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetUserReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetUserReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetUserReq} GetUserReq
         */
        GetUserReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetUserReq)
                return object;
            var message = new $root.pb.GetUserReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetUserReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetUserReq
         * @static
         * @param {pb.GetUserReq} message GetUserReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            return object;
        };

        /**
         * Converts this GetUserReq to JSON.
         * @function toJSON
         * @memberof pb.GetUserReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetUserReq
         * @function getTypeUrl
         * @memberof pb.GetUserReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetUserReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GetUserReq";
        };

        return GetUserReq;
    })();

    pb.GetUserResp = (function() {

        /**
         * Properties of a GetUserResp.
         * @memberof pb
         * @interface IGetUserResp
         * @property {pb.IUser|null} [user] GetUserResp user
         */

        /**
         * Constructs a new GetUserResp.
         * @memberof pb
         * @classdesc Represents a GetUserResp.
         * @implements IGetUserResp
         * @constructor
         * @param {pb.IGetUserResp=} [properties] Properties to set
         */
        function GetUserResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserResp user.
         * @member {pb.IUser|null|undefined} user
         * @memberof pb.GetUserResp
         * @instance
         */
        GetUserResp.prototype.user = null;

        /**
         * Creates a new GetUserResp instance using the specified properties.
         * @function create
         * @memberof pb.GetUserResp
         * @static
         * @param {pb.IGetUserResp=} [properties] Properties to set
         * @returns {pb.GetUserResp} GetUserResp instance
         */
        GetUserResp.create = function create(properties) {
            return new GetUserResp(properties);
        };

        /**
         * Encodes the specified GetUserResp message. Does not implicitly {@link pb.GetUserResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GetUserResp
         * @static
         * @param {pb.IGetUserResp} message GetUserResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.pb.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetUserResp message, length delimited. Does not implicitly {@link pb.GetUserResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetUserResp
         * @static
         * @param {pb.IGetUserResp} message GetUserResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetUserResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetUserResp} GetUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetUserResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.user = $root.pb.User.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetUserResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetUserResp} GetUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserResp message.
         * @function verify
         * @memberof pb.GetUserResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.pb.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a GetUserResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetUserResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetUserResp} GetUserResp
         */
        GetUserResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetUserResp)
                return object;
            var message = new $root.pb.GetUserResp();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".pb.GetUserResp.user: object expected");
                message.user = $root.pb.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUserResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetUserResp
         * @static
         * @param {pb.GetUserResp} message GetUserResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.pb.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this GetUserResp to JSON.
         * @function toJSON
         * @memberof pb.GetUserResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetUserResp
         * @function getTypeUrl
         * @memberof pb.GetUserResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetUserResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GetUserResp";
        };

        return GetUserResp;
    })();

    pb.UpdateUserReq = (function() {

        /**
         * Properties of an UpdateUserReq.
         * @memberof pb
         * @interface IUpdateUserReq
         * @property {string|null} [nickname] UpdateUserReq nickname
         * @property {number|null} [sex] UpdateUserReq sex
         * @property {string|null} [avatarUrl] UpdateUserReq avatarUrl
         * @property {string|null} [extra] UpdateUserReq extra
         */

        /**
         * Constructs a new UpdateUserReq.
         * @memberof pb
         * @classdesc Represents an UpdateUserReq.
         * @implements IUpdateUserReq
         * @constructor
         * @param {pb.IUpdateUserReq=} [properties] Properties to set
         */
        function UpdateUserReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateUserReq nickname.
         * @member {string} nickname
         * @memberof pb.UpdateUserReq
         * @instance
         */
        UpdateUserReq.prototype.nickname = "";

        /**
         * UpdateUserReq sex.
         * @member {number} sex
         * @memberof pb.UpdateUserReq
         * @instance
         */
        UpdateUserReq.prototype.sex = 0;

        /**
         * UpdateUserReq avatarUrl.
         * @member {string} avatarUrl
         * @memberof pb.UpdateUserReq
         * @instance
         */
        UpdateUserReq.prototype.avatarUrl = "";

        /**
         * UpdateUserReq extra.
         * @member {string} extra
         * @memberof pb.UpdateUserReq
         * @instance
         */
        UpdateUserReq.prototype.extra = "";

        /**
         * Creates a new UpdateUserReq instance using the specified properties.
         * @function create
         * @memberof pb.UpdateUserReq
         * @static
         * @param {pb.IUpdateUserReq=} [properties] Properties to set
         * @returns {pb.UpdateUserReq} UpdateUserReq instance
         */
        UpdateUserReq.create = function create(properties) {
            return new UpdateUserReq(properties);
        };

        /**
         * Encodes the specified UpdateUserReq message. Does not implicitly {@link pb.UpdateUserReq.verify|verify} messages.
         * @function encode
         * @memberof pb.UpdateUserReq
         * @static
         * @param {pb.IUpdateUserReq} message UpdateUserReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sex);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatarUrl);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified UpdateUserReq message, length delimited. Does not implicitly {@link pb.UpdateUserReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UpdateUserReq
         * @static
         * @param {pb.IUpdateUserReq} message UpdateUserReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateUserReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UpdateUserReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UpdateUserReq} UpdateUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UpdateUserReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.nickname = reader.string();
                        break;
                    }
                case 2: {
                        message.sex = reader.int32();
                        break;
                    }
                case 3: {
                        message.avatarUrl = reader.string();
                        break;
                    }
                case 4: {
                        message.extra = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateUserReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UpdateUserReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UpdateUserReq} UpdateUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateUserReq message.
         * @function verify
         * @memberof pb.UpdateUserReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateUserReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates an UpdateUserReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UpdateUserReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UpdateUserReq} UpdateUserReq
         */
        UpdateUserReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UpdateUserReq)
                return object;
            var message = new $root.pb.UpdateUserReq();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from an UpdateUserReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UpdateUserReq
         * @static
         * @param {pb.UpdateUserReq} message UpdateUserReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateUserReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.nickname = "";
                object.sex = 0;
                object.avatarUrl = "";
                object.extra = "";
            }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this UpdateUserReq to JSON.
         * @function toJSON
         * @memberof pb.UpdateUserReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateUserReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateUserReq
         * @function getTypeUrl
         * @memberof pb.UpdateUserReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateUserReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.UpdateUserReq";
        };

        return UpdateUserReq;
    })();

    pb.SearchUserReq = (function() {

        /**
         * Properties of a SearchUserReq.
         * @memberof pb
         * @interface ISearchUserReq
         * @property {string|null} [key] SearchUserReq key
         */

        /**
         * Constructs a new SearchUserReq.
         * @memberof pb
         * @classdesc Represents a SearchUserReq.
         * @implements ISearchUserReq
         * @constructor
         * @param {pb.ISearchUserReq=} [properties] Properties to set
         */
        function SearchUserReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SearchUserReq key.
         * @member {string} key
         * @memberof pb.SearchUserReq
         * @instance
         */
        SearchUserReq.prototype.key = "";

        /**
         * Creates a new SearchUserReq instance using the specified properties.
         * @function create
         * @memberof pb.SearchUserReq
         * @static
         * @param {pb.ISearchUserReq=} [properties] Properties to set
         * @returns {pb.SearchUserReq} SearchUserReq instance
         */
        SearchUserReq.create = function create(properties) {
            return new SearchUserReq(properties);
        };

        /**
         * Encodes the specified SearchUserReq message. Does not implicitly {@link pb.SearchUserReq.verify|verify} messages.
         * @function encode
         * @memberof pb.SearchUserReq
         * @static
         * @param {pb.ISearchUserReq} message SearchUserReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchUserReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            return writer;
        };

        /**
         * Encodes the specified SearchUserReq message, length delimited. Does not implicitly {@link pb.SearchUserReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SearchUserReq
         * @static
         * @param {pb.ISearchUserReq} message SearchUserReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchUserReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchUserReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SearchUserReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SearchUserReq} SearchUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchUserReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SearchUserReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SearchUserReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SearchUserReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SearchUserReq} SearchUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchUserReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SearchUserReq message.
         * @function verify
         * @memberof pb.SearchUserReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchUserReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            return null;
        };

        /**
         * Creates a SearchUserReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SearchUserReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SearchUserReq} SearchUserReq
         */
        SearchUserReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SearchUserReq)
                return object;
            var message = new $root.pb.SearchUserReq();
            if (object.key != null)
                message.key = String(object.key);
            return message;
        };

        /**
         * Creates a plain object from a SearchUserReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SearchUserReq
         * @static
         * @param {pb.SearchUserReq} message SearchUserReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SearchUserReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.key = "";
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            return object;
        };

        /**
         * Converts this SearchUserReq to JSON.
         * @function toJSON
         * @memberof pb.SearchUserReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchUserReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SearchUserReq
         * @function getTypeUrl
         * @memberof pb.SearchUserReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SearchUserReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SearchUserReq";
        };

        return SearchUserReq;
    })();

    pb.SearchUserResp = (function() {

        /**
         * Properties of a SearchUserResp.
         * @memberof pb
         * @interface ISearchUserResp
         * @property {Array.<pb.IUser>|null} [users] SearchUserResp users
         */

        /**
         * Constructs a new SearchUserResp.
         * @memberof pb
         * @classdesc Represents a SearchUserResp.
         * @implements ISearchUserResp
         * @constructor
         * @param {pb.ISearchUserResp=} [properties] Properties to set
         */
        function SearchUserResp(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SearchUserResp users.
         * @member {Array.<pb.IUser>} users
         * @memberof pb.SearchUserResp
         * @instance
         */
        SearchUserResp.prototype.users = $util.emptyArray;

        /**
         * Creates a new SearchUserResp instance using the specified properties.
         * @function create
         * @memberof pb.SearchUserResp
         * @static
         * @param {pb.ISearchUserResp=} [properties] Properties to set
         * @returns {pb.SearchUserResp} SearchUserResp instance
         */
        SearchUserResp.create = function create(properties) {
            return new SearchUserResp(properties);
        };

        /**
         * Encodes the specified SearchUserResp message. Does not implicitly {@link pb.SearchUserResp.verify|verify} messages.
         * @function encode
         * @memberof pb.SearchUserResp
         * @static
         * @param {pb.ISearchUserResp} message SearchUserResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchUserResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.pb.User.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SearchUserResp message, length delimited. Does not implicitly {@link pb.SearchUserResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SearchUserResp
         * @static
         * @param {pb.ISearchUserResp} message SearchUserResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchUserResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchUserResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SearchUserResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SearchUserResp} SearchUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchUserResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SearchUserResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.users && message.users.length))
                            message.users = [];
                        message.users.push($root.pb.User.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SearchUserResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SearchUserResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SearchUserResp} SearchUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchUserResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SearchUserResp message.
         * @function verify
         * @memberof pb.SearchUserResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchUserResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.pb.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SearchUserResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SearchUserResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SearchUserResp} SearchUserResp
         */
        SearchUserResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SearchUserResp)
                return object;
            var message = new $root.pb.SearchUserResp();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".pb.SearchUserResp.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".pb.SearchUserResp.users: object expected");
                    message.users[i] = $root.pb.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SearchUserResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SearchUserResp
         * @static
         * @param {pb.SearchUserResp} message SearchUserResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SearchUserResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.pb.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this SearchUserResp to JSON.
         * @function toJSON
         * @memberof pb.SearchUserResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchUserResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SearchUserResp
         * @function getTypeUrl
         * @memberof pb.SearchUserResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SearchUserResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SearchUserResp";
        };

        return SearchUserResp;
    })();

    pb.TwitterAuthorizeURLResp = (function() {

        /**
         * Properties of a TwitterAuthorizeURLResp.
         * @memberof pb
         * @interface ITwitterAuthorizeURLResp
         * @property {string|null} [url] TwitterAuthorizeURLResp url
         */

        /**
         * Constructs a new TwitterAuthorizeURLResp.
         * @memberof pb
         * @classdesc Represents a TwitterAuthorizeURLResp.
         * @implements ITwitterAuthorizeURLResp
         * @constructor
         * @param {pb.ITwitterAuthorizeURLResp=} [properties] Properties to set
         */
        function TwitterAuthorizeURLResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TwitterAuthorizeURLResp url.
         * @member {string} url
         * @memberof pb.TwitterAuthorizeURLResp
         * @instance
         */
        TwitterAuthorizeURLResp.prototype.url = "";

        /**
         * Creates a new TwitterAuthorizeURLResp instance using the specified properties.
         * @function create
         * @memberof pb.TwitterAuthorizeURLResp
         * @static
         * @param {pb.ITwitterAuthorizeURLResp=} [properties] Properties to set
         * @returns {pb.TwitterAuthorizeURLResp} TwitterAuthorizeURLResp instance
         */
        TwitterAuthorizeURLResp.create = function create(properties) {
            return new TwitterAuthorizeURLResp(properties);
        };

        /**
         * Encodes the specified TwitterAuthorizeURLResp message. Does not implicitly {@link pb.TwitterAuthorizeURLResp.verify|verify} messages.
         * @function encode
         * @memberof pb.TwitterAuthorizeURLResp
         * @static
         * @param {pb.ITwitterAuthorizeURLResp} message TwitterAuthorizeURLResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TwitterAuthorizeURLResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified TwitterAuthorizeURLResp message, length delimited. Does not implicitly {@link pb.TwitterAuthorizeURLResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.TwitterAuthorizeURLResp
         * @static
         * @param {pb.ITwitterAuthorizeURLResp} message TwitterAuthorizeURLResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TwitterAuthorizeURLResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TwitterAuthorizeURLResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.TwitterAuthorizeURLResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.TwitterAuthorizeURLResp} TwitterAuthorizeURLResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TwitterAuthorizeURLResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.TwitterAuthorizeURLResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.url = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TwitterAuthorizeURLResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.TwitterAuthorizeURLResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.TwitterAuthorizeURLResp} TwitterAuthorizeURLResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TwitterAuthorizeURLResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TwitterAuthorizeURLResp message.
         * @function verify
         * @memberof pb.TwitterAuthorizeURLResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TwitterAuthorizeURLResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a TwitterAuthorizeURLResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.TwitterAuthorizeURLResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.TwitterAuthorizeURLResp} TwitterAuthorizeURLResp
         */
        TwitterAuthorizeURLResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.TwitterAuthorizeURLResp)
                return object;
            var message = new $root.pb.TwitterAuthorizeURLResp();
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a TwitterAuthorizeURLResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.TwitterAuthorizeURLResp
         * @static
         * @param {pb.TwitterAuthorizeURLResp} message TwitterAuthorizeURLResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TwitterAuthorizeURLResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.url = "";
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this TwitterAuthorizeURLResp to JSON.
         * @function toJSON
         * @memberof pb.TwitterAuthorizeURLResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TwitterAuthorizeURLResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TwitterAuthorizeURLResp
         * @function getTypeUrl
         * @memberof pb.TwitterAuthorizeURLResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TwitterAuthorizeURLResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.TwitterAuthorizeURLResp";
        };

        return TwitterAuthorizeURLResp;
    })();

    pb.TwitterSignInReq = (function() {

        /**
         * Properties of a TwitterSignInReq.
         * @memberof pb
         * @interface ITwitterSignInReq
         * @property {string|null} [authorizationCode] TwitterSignInReq authorizationCode
         * @property {string|null} [state] TwitterSignInReq state
         */

        /**
         * Constructs a new TwitterSignInReq.
         * @memberof pb
         * @classdesc Represents a TwitterSignInReq.
         * @implements ITwitterSignInReq
         * @constructor
         * @param {pb.ITwitterSignInReq=} [properties] Properties to set
         */
        function TwitterSignInReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TwitterSignInReq authorizationCode.
         * @member {string} authorizationCode
         * @memberof pb.TwitterSignInReq
         * @instance
         */
        TwitterSignInReq.prototype.authorizationCode = "";

        /**
         * TwitterSignInReq state.
         * @member {string} state
         * @memberof pb.TwitterSignInReq
         * @instance
         */
        TwitterSignInReq.prototype.state = "";

        /**
         * Creates a new TwitterSignInReq instance using the specified properties.
         * @function create
         * @memberof pb.TwitterSignInReq
         * @static
         * @param {pb.ITwitterSignInReq=} [properties] Properties to set
         * @returns {pb.TwitterSignInReq} TwitterSignInReq instance
         */
        TwitterSignInReq.create = function create(properties) {
            return new TwitterSignInReq(properties);
        };

        /**
         * Encodes the specified TwitterSignInReq message. Does not implicitly {@link pb.TwitterSignInReq.verify|verify} messages.
         * @function encode
         * @memberof pb.TwitterSignInReq
         * @static
         * @param {pb.ITwitterSignInReq} message TwitterSignInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TwitterSignInReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.authorizationCode != null && Object.hasOwnProperty.call(message, "authorizationCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.authorizationCode);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.state);
            return writer;
        };

        /**
         * Encodes the specified TwitterSignInReq message, length delimited. Does not implicitly {@link pb.TwitterSignInReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.TwitterSignInReq
         * @static
         * @param {pb.ITwitterSignInReq} message TwitterSignInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TwitterSignInReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TwitterSignInReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.TwitterSignInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.TwitterSignInReq} TwitterSignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TwitterSignInReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.TwitterSignInReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.authorizationCode = reader.string();
                        break;
                    }
                case 2: {
                        message.state = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TwitterSignInReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.TwitterSignInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.TwitterSignInReq} TwitterSignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TwitterSignInReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TwitterSignInReq message.
         * @function verify
         * @memberof pb.TwitterSignInReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TwitterSignInReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.authorizationCode != null && message.hasOwnProperty("authorizationCode"))
                if (!$util.isString(message.authorizationCode))
                    return "authorizationCode: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isString(message.state))
                    return "state: string expected";
            return null;
        };

        /**
         * Creates a TwitterSignInReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.TwitterSignInReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.TwitterSignInReq} TwitterSignInReq
         */
        TwitterSignInReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.TwitterSignInReq)
                return object;
            var message = new $root.pb.TwitterSignInReq();
            if (object.authorizationCode != null)
                message.authorizationCode = String(object.authorizationCode);
            if (object.state != null)
                message.state = String(object.state);
            return message;
        };

        /**
         * Creates a plain object from a TwitterSignInReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.TwitterSignInReq
         * @static
         * @param {pb.TwitterSignInReq} message TwitterSignInReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TwitterSignInReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.authorizationCode = "";
                object.state = "";
            }
            if (message.authorizationCode != null && message.hasOwnProperty("authorizationCode"))
                object.authorizationCode = message.authorizationCode;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            return object;
        };

        /**
         * Converts this TwitterSignInReq to JSON.
         * @function toJSON
         * @memberof pb.TwitterSignInReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TwitterSignInReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TwitterSignInReq
         * @function getTypeUrl
         * @memberof pb.TwitterSignInReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TwitterSignInReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.TwitterSignInReq";
        };

        return TwitterSignInReq;
    })();

    pb.TwitterSignInResp = (function() {

        /**
         * Properties of a TwitterSignInResp.
         * @memberof pb
         * @interface ITwitterSignInResp
         * @property {boolean|null} [isNew] TwitterSignInResp isNew
         * @property {number|Long|null} [userId] TwitterSignInResp userId
         * @property {string|null} [token] TwitterSignInResp token
         * @property {pb.IUser|null} [userInfo] TwitterSignInResp userInfo
         */

        /**
         * Constructs a new TwitterSignInResp.
         * @memberof pb
         * @classdesc Represents a TwitterSignInResp.
         * @implements ITwitterSignInResp
         * @constructor
         * @param {pb.ITwitterSignInResp=} [properties] Properties to set
         */
        function TwitterSignInResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TwitterSignInResp isNew.
         * @member {boolean} isNew
         * @memberof pb.TwitterSignInResp
         * @instance
         */
        TwitterSignInResp.prototype.isNew = false;

        /**
         * TwitterSignInResp userId.
         * @member {number|Long} userId
         * @memberof pb.TwitterSignInResp
         * @instance
         */
        TwitterSignInResp.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TwitterSignInResp token.
         * @member {string} token
         * @memberof pb.TwitterSignInResp
         * @instance
         */
        TwitterSignInResp.prototype.token = "";

        /**
         * TwitterSignInResp userInfo.
         * @member {pb.IUser|null|undefined} userInfo
         * @memberof pb.TwitterSignInResp
         * @instance
         */
        TwitterSignInResp.prototype.userInfo = null;

        /**
         * Creates a new TwitterSignInResp instance using the specified properties.
         * @function create
         * @memberof pb.TwitterSignInResp
         * @static
         * @param {pb.ITwitterSignInResp=} [properties] Properties to set
         * @returns {pb.TwitterSignInResp} TwitterSignInResp instance
         */
        TwitterSignInResp.create = function create(properties) {
            return new TwitterSignInResp(properties);
        };

        /**
         * Encodes the specified TwitterSignInResp message. Does not implicitly {@link pb.TwitterSignInResp.verify|verify} messages.
         * @function encode
         * @memberof pb.TwitterSignInResp
         * @static
         * @param {pb.ITwitterSignInResp} message TwitterSignInResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TwitterSignInResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isNew != null && Object.hasOwnProperty.call(message, "isNew"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isNew);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
            if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                $root.pb.User.encode(message.userInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TwitterSignInResp message, length delimited. Does not implicitly {@link pb.TwitterSignInResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.TwitterSignInResp
         * @static
         * @param {pb.ITwitterSignInResp} message TwitterSignInResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TwitterSignInResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TwitterSignInResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.TwitterSignInResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.TwitterSignInResp} TwitterSignInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TwitterSignInResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.TwitterSignInResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.isNew = reader.bool();
                        break;
                    }
                case 2: {
                        message.userId = reader.int64();
                        break;
                    }
                case 3: {
                        message.token = reader.string();
                        break;
                    }
                case 4: {
                        message.userInfo = $root.pb.User.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TwitterSignInResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.TwitterSignInResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.TwitterSignInResp} TwitterSignInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TwitterSignInResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TwitterSignInResp message.
         * @function verify
         * @memberof pb.TwitterSignInResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TwitterSignInResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isNew != null && message.hasOwnProperty("isNew"))
                if (typeof message.isNew !== "boolean")
                    return "isNew: boolean expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                var error = $root.pb.User.verify(message.userInfo);
                if (error)
                    return "userInfo." + error;
            }
            return null;
        };

        /**
         * Creates a TwitterSignInResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.TwitterSignInResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.TwitterSignInResp} TwitterSignInResp
         */
        TwitterSignInResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.TwitterSignInResp)
                return object;
            var message = new $root.pb.TwitterSignInResp();
            if (object.isNew != null)
                message.isNew = Boolean(object.isNew);
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.token != null)
                message.token = String(object.token);
            if (object.userInfo != null) {
                if (typeof object.userInfo !== "object")
                    throw TypeError(".pb.TwitterSignInResp.userInfo: object expected");
                message.userInfo = $root.pb.User.fromObject(object.userInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a TwitterSignInResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.TwitterSignInResp
         * @static
         * @param {pb.TwitterSignInResp} message TwitterSignInResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TwitterSignInResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isNew = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.token = "";
                object.userInfo = null;
            }
            if (message.isNew != null && message.hasOwnProperty("isNew"))
                object.isNew = message.isNew;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = $root.pb.User.toObject(message.userInfo, options);
            return object;
        };

        /**
         * Converts this TwitterSignInResp to JSON.
         * @function toJSON
         * @memberof pb.TwitterSignInResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TwitterSignInResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TwitterSignInResp
         * @function getTypeUrl
         * @memberof pb.TwitterSignInResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TwitterSignInResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.TwitterSignInResp";
        };

        return TwitterSignInResp;
    })();

    pb.DailySignInReq = (function() {

        /**
         * Properties of a DailySignInReq.
         * @memberof pb
         * @interface IDailySignInReq
         * @property {number|Long|null} [userId] DailySignInReq userId
         */

        /**
         * Constructs a new DailySignInReq.
         * @memberof pb
         * @classdesc Represents a DailySignInReq.
         * @implements IDailySignInReq
         * @constructor
         * @param {pb.IDailySignInReq=} [properties] Properties to set
         */
        function DailySignInReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DailySignInReq userId.
         * @member {number|Long} userId
         * @memberof pb.DailySignInReq
         * @instance
         */
        DailySignInReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DailySignInReq instance using the specified properties.
         * @function create
         * @memberof pb.DailySignInReq
         * @static
         * @param {pb.IDailySignInReq=} [properties] Properties to set
         * @returns {pb.DailySignInReq} DailySignInReq instance
         */
        DailySignInReq.create = function create(properties) {
            return new DailySignInReq(properties);
        };

        /**
         * Encodes the specified DailySignInReq message. Does not implicitly {@link pb.DailySignInReq.verify|verify} messages.
         * @function encode
         * @memberof pb.DailySignInReq
         * @static
         * @param {pb.IDailySignInReq} message DailySignInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailySignInReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified DailySignInReq message, length delimited. Does not implicitly {@link pb.DailySignInReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.DailySignInReq
         * @static
         * @param {pb.IDailySignInReq} message DailySignInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailySignInReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DailySignInReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.DailySignInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.DailySignInReq} DailySignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailySignInReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.DailySignInReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DailySignInReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.DailySignInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.DailySignInReq} DailySignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailySignInReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DailySignInReq message.
         * @function verify
         * @memberof pb.DailySignInReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DailySignInReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a DailySignInReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.DailySignInReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.DailySignInReq} DailySignInReq
         */
        DailySignInReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.DailySignInReq)
                return object;
            var message = new $root.pb.DailySignInReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DailySignInReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.DailySignInReq
         * @static
         * @param {pb.DailySignInReq} message DailySignInReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DailySignInReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            return object;
        };

        /**
         * Converts this DailySignInReq to JSON.
         * @function toJSON
         * @memberof pb.DailySignInReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DailySignInReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DailySignInReq
         * @function getTypeUrl
         * @memberof pb.DailySignInReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DailySignInReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.DailySignInReq";
        };

        return DailySignInReq;
    })();

    pb.DailySignInResp = (function() {

        /**
         * Properties of a DailySignInResp.
         * @memberof pb
         * @interface IDailySignInResp
         * @property {number|null} [rewardAmount] DailySignInResp rewardAmount
         * @property {string|null} [message] DailySignInResp message
         */

        /**
         * Constructs a new DailySignInResp.
         * @memberof pb
         * @classdesc Represents a DailySignInResp.
         * @implements IDailySignInResp
         * @constructor
         * @param {pb.IDailySignInResp=} [properties] Properties to set
         */
        function DailySignInResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DailySignInResp rewardAmount.
         * @member {number} rewardAmount
         * @memberof pb.DailySignInResp
         * @instance
         */
        DailySignInResp.prototype.rewardAmount = 0;

        /**
         * DailySignInResp message.
         * @member {string} message
         * @memberof pb.DailySignInResp
         * @instance
         */
        DailySignInResp.prototype.message = "";

        /**
         * Creates a new DailySignInResp instance using the specified properties.
         * @function create
         * @memberof pb.DailySignInResp
         * @static
         * @param {pb.IDailySignInResp=} [properties] Properties to set
         * @returns {pb.DailySignInResp} DailySignInResp instance
         */
        DailySignInResp.create = function create(properties) {
            return new DailySignInResp(properties);
        };

        /**
         * Encodes the specified DailySignInResp message. Does not implicitly {@link pb.DailySignInResp.verify|verify} messages.
         * @function encode
         * @memberof pb.DailySignInResp
         * @static
         * @param {pb.IDailySignInResp} message DailySignInResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailySignInResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rewardAmount != null && Object.hasOwnProperty.call(message, "rewardAmount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rewardAmount);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified DailySignInResp message, length delimited. Does not implicitly {@link pb.DailySignInResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.DailySignInResp
         * @static
         * @param {pb.IDailySignInResp} message DailySignInResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailySignInResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DailySignInResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.DailySignInResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.DailySignInResp} DailySignInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailySignInResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.DailySignInResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.rewardAmount = reader.int32();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DailySignInResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.DailySignInResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.DailySignInResp} DailySignInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailySignInResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DailySignInResp message.
         * @function verify
         * @memberof pb.DailySignInResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DailySignInResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rewardAmount != null && message.hasOwnProperty("rewardAmount"))
                if (!$util.isInteger(message.rewardAmount))
                    return "rewardAmount: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a DailySignInResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.DailySignInResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.DailySignInResp} DailySignInResp
         */
        DailySignInResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.DailySignInResp)
                return object;
            var message = new $root.pb.DailySignInResp();
            if (object.rewardAmount != null)
                message.rewardAmount = object.rewardAmount | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a DailySignInResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.DailySignInResp
         * @static
         * @param {pb.DailySignInResp} message DailySignInResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DailySignInResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rewardAmount = 0;
                object.message = "";
            }
            if (message.rewardAmount != null && message.hasOwnProperty("rewardAmount"))
                object.rewardAmount = message.rewardAmount;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this DailySignInResp to JSON.
         * @function toJSON
         * @memberof pb.DailySignInResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DailySignInResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DailySignInResp
         * @function getTypeUrl
         * @memberof pb.DailySignInResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DailySignInResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.DailySignInResp";
        };

        return DailySignInResp;
    })();

    pb.ClaimSevenDayRewardReq = (function() {

        /**
         * Properties of a ClaimSevenDayRewardReq.
         * @memberof pb
         * @interface IClaimSevenDayRewardReq
         * @property {number|Long|null} [userId] ClaimSevenDayRewardReq userId
         */

        /**
         * Constructs a new ClaimSevenDayRewardReq.
         * @memberof pb
         * @classdesc Represents a ClaimSevenDayRewardReq.
         * @implements IClaimSevenDayRewardReq
         * @constructor
         * @param {pb.IClaimSevenDayRewardReq=} [properties] Properties to set
         */
        function ClaimSevenDayRewardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClaimSevenDayRewardReq userId.
         * @member {number|Long} userId
         * @memberof pb.ClaimSevenDayRewardReq
         * @instance
         */
        ClaimSevenDayRewardReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ClaimSevenDayRewardReq instance using the specified properties.
         * @function create
         * @memberof pb.ClaimSevenDayRewardReq
         * @static
         * @param {pb.IClaimSevenDayRewardReq=} [properties] Properties to set
         * @returns {pb.ClaimSevenDayRewardReq} ClaimSevenDayRewardReq instance
         */
        ClaimSevenDayRewardReq.create = function create(properties) {
            return new ClaimSevenDayRewardReq(properties);
        };

        /**
         * Encodes the specified ClaimSevenDayRewardReq message. Does not implicitly {@link pb.ClaimSevenDayRewardReq.verify|verify} messages.
         * @function encode
         * @memberof pb.ClaimSevenDayRewardReq
         * @static
         * @param {pb.IClaimSevenDayRewardReq} message ClaimSevenDayRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClaimSevenDayRewardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified ClaimSevenDayRewardReq message, length delimited. Does not implicitly {@link pb.ClaimSevenDayRewardReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ClaimSevenDayRewardReq
         * @static
         * @param {pb.IClaimSevenDayRewardReq} message ClaimSevenDayRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClaimSevenDayRewardReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClaimSevenDayRewardReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ClaimSevenDayRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ClaimSevenDayRewardReq} ClaimSevenDayRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClaimSevenDayRewardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ClaimSevenDayRewardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClaimSevenDayRewardReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ClaimSevenDayRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ClaimSevenDayRewardReq} ClaimSevenDayRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClaimSevenDayRewardReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClaimSevenDayRewardReq message.
         * @function verify
         * @memberof pb.ClaimSevenDayRewardReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClaimSevenDayRewardReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a ClaimSevenDayRewardReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ClaimSevenDayRewardReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ClaimSevenDayRewardReq} ClaimSevenDayRewardReq
         */
        ClaimSevenDayRewardReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ClaimSevenDayRewardReq)
                return object;
            var message = new $root.pb.ClaimSevenDayRewardReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ClaimSevenDayRewardReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ClaimSevenDayRewardReq
         * @static
         * @param {pb.ClaimSevenDayRewardReq} message ClaimSevenDayRewardReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClaimSevenDayRewardReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            return object;
        };

        /**
         * Converts this ClaimSevenDayRewardReq to JSON.
         * @function toJSON
         * @memberof pb.ClaimSevenDayRewardReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClaimSevenDayRewardReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClaimSevenDayRewardReq
         * @function getTypeUrl
         * @memberof pb.ClaimSevenDayRewardReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClaimSevenDayRewardReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ClaimSevenDayRewardReq";
        };

        return ClaimSevenDayRewardReq;
    })();

    pb.ClaimSevenDayRewardResp = (function() {

        /**
         * Properties of a ClaimSevenDayRewardResp.
         * @memberof pb
         * @interface IClaimSevenDayRewardResp
         * @property {number|null} [rewardAmount] ClaimSevenDayRewardResp rewardAmount
         * @property {string|null} [message] ClaimSevenDayRewardResp message
         */

        /**
         * Constructs a new ClaimSevenDayRewardResp.
         * @memberof pb
         * @classdesc Represents a ClaimSevenDayRewardResp.
         * @implements IClaimSevenDayRewardResp
         * @constructor
         * @param {pb.IClaimSevenDayRewardResp=} [properties] Properties to set
         */
        function ClaimSevenDayRewardResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClaimSevenDayRewardResp rewardAmount.
         * @member {number} rewardAmount
         * @memberof pb.ClaimSevenDayRewardResp
         * @instance
         */
        ClaimSevenDayRewardResp.prototype.rewardAmount = 0;

        /**
         * ClaimSevenDayRewardResp message.
         * @member {string} message
         * @memberof pb.ClaimSevenDayRewardResp
         * @instance
         */
        ClaimSevenDayRewardResp.prototype.message = "";

        /**
         * Creates a new ClaimSevenDayRewardResp instance using the specified properties.
         * @function create
         * @memberof pb.ClaimSevenDayRewardResp
         * @static
         * @param {pb.IClaimSevenDayRewardResp=} [properties] Properties to set
         * @returns {pb.ClaimSevenDayRewardResp} ClaimSevenDayRewardResp instance
         */
        ClaimSevenDayRewardResp.create = function create(properties) {
            return new ClaimSevenDayRewardResp(properties);
        };

        /**
         * Encodes the specified ClaimSevenDayRewardResp message. Does not implicitly {@link pb.ClaimSevenDayRewardResp.verify|verify} messages.
         * @function encode
         * @memberof pb.ClaimSevenDayRewardResp
         * @static
         * @param {pb.IClaimSevenDayRewardResp} message ClaimSevenDayRewardResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClaimSevenDayRewardResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rewardAmount != null && Object.hasOwnProperty.call(message, "rewardAmount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rewardAmount);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified ClaimSevenDayRewardResp message, length delimited. Does not implicitly {@link pb.ClaimSevenDayRewardResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ClaimSevenDayRewardResp
         * @static
         * @param {pb.IClaimSevenDayRewardResp} message ClaimSevenDayRewardResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClaimSevenDayRewardResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClaimSevenDayRewardResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ClaimSevenDayRewardResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ClaimSevenDayRewardResp} ClaimSevenDayRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClaimSevenDayRewardResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ClaimSevenDayRewardResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.rewardAmount = reader.int32();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClaimSevenDayRewardResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ClaimSevenDayRewardResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ClaimSevenDayRewardResp} ClaimSevenDayRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClaimSevenDayRewardResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClaimSevenDayRewardResp message.
         * @function verify
         * @memberof pb.ClaimSevenDayRewardResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClaimSevenDayRewardResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rewardAmount != null && message.hasOwnProperty("rewardAmount"))
                if (!$util.isInteger(message.rewardAmount))
                    return "rewardAmount: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a ClaimSevenDayRewardResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ClaimSevenDayRewardResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ClaimSevenDayRewardResp} ClaimSevenDayRewardResp
         */
        ClaimSevenDayRewardResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ClaimSevenDayRewardResp)
                return object;
            var message = new $root.pb.ClaimSevenDayRewardResp();
            if (object.rewardAmount != null)
                message.rewardAmount = object.rewardAmount | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a ClaimSevenDayRewardResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ClaimSevenDayRewardResp
         * @static
         * @param {pb.ClaimSevenDayRewardResp} message ClaimSevenDayRewardResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClaimSevenDayRewardResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rewardAmount = 0;
                object.message = "";
            }
            if (message.rewardAmount != null && message.hasOwnProperty("rewardAmount"))
                object.rewardAmount = message.rewardAmount;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this ClaimSevenDayRewardResp to JSON.
         * @function toJSON
         * @memberof pb.ClaimSevenDayRewardResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClaimSevenDayRewardResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClaimSevenDayRewardResp
         * @function getTypeUrl
         * @memberof pb.ClaimSevenDayRewardResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClaimSevenDayRewardResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ClaimSevenDayRewardResp";
        };

        return ClaimSevenDayRewardResp;
    })();

    pb.BusinessInt = (function() {

        /**
         * Constructs a new BusinessInt service.
         * @memberof pb
         * @classdesc Represents a BusinessInt
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function BusinessInt(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (BusinessInt.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = BusinessInt;

        /**
         * Creates new BusinessInt service using the specified rpc implementation.
         * @function create
         * @memberof pb.BusinessInt
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {BusinessInt} RPC service. Useful where requests and/or responses are streamed.
         */
        BusinessInt.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pb.BusinessInt#auth}.
         * @memberof pb.BusinessInt
         * @typedef AuthCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls Auth.
         * @function auth
         * @memberof pb.BusinessInt
         * @instance
         * @param {pb.IAuthReq} request AuthReq message or plain object
         * @param {pb.BusinessInt.AuthCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(BusinessInt.prototype.auth = function auth(request, callback) {
            return this.rpcCall(auth, $root.pb.AuthReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "Auth" });

        /**
         * Calls Auth.
         * @function auth
         * @memberof pb.BusinessInt
         * @instance
         * @param {pb.IAuthReq} request AuthReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.BusinessInt#getUser}.
         * @memberof pb.BusinessInt
         * @typedef GetUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.GetUserResp} [response] GetUserResp
         */

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof pb.BusinessInt
         * @instance
         * @param {pb.IGetUserReq} request GetUserReq message or plain object
         * @param {pb.BusinessInt.GetUserCallback} callback Node-style callback called with the error, if any, and GetUserResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(BusinessInt.prototype.getUser = function getUser(request, callback) {
            return this.rpcCall(getUser, $root.pb.GetUserReq, $root.pb.GetUserResp, request, callback);
        }, "name", { value: "GetUser" });

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof pb.BusinessInt
         * @instance
         * @param {pb.IGetUserReq} request GetUserReq message or plain object
         * @returns {Promise<pb.GetUserResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.BusinessInt#getUsers}.
         * @memberof pb.BusinessInt
         * @typedef GetUsersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.GetUsersResp} [response] GetUsersResp
         */

        /**
         * Calls GetUsers.
         * @function getUsers
         * @memberof pb.BusinessInt
         * @instance
         * @param {pb.IGetUsersReq} request GetUsersReq message or plain object
         * @param {pb.BusinessInt.GetUsersCallback} callback Node-style callback called with the error, if any, and GetUsersResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(BusinessInt.prototype.getUsers = function getUsers(request, callback) {
            return this.rpcCall(getUsers, $root.pb.GetUsersReq, $root.pb.GetUsersResp, request, callback);
        }, "name", { value: "GetUsers" });

        /**
         * Calls GetUsers.
         * @function getUsers
         * @memberof pb.BusinessInt
         * @instance
         * @param {pb.IGetUsersReq} request GetUsersReq message or plain object
         * @returns {Promise<pb.GetUsersResp>} Promise
         * @variation 2
         */

        return BusinessInt;
    })();

    pb.AuthReq = (function() {

        /**
         * Properties of an AuthReq.
         * @memberof pb
         * @interface IAuthReq
         * @property {number|Long|null} [userId] AuthReq userId
         * @property {number|Long|null} [deviceId] AuthReq deviceId
         * @property {string|null} [token] AuthReq token
         */

        /**
         * Constructs a new AuthReq.
         * @memberof pb
         * @classdesc Represents an AuthReq.
         * @implements IAuthReq
         * @constructor
         * @param {pb.IAuthReq=} [properties] Properties to set
         */
        function AuthReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthReq userId.
         * @member {number|Long} userId
         * @memberof pb.AuthReq
         * @instance
         */
        AuthReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AuthReq deviceId.
         * @member {number|Long} deviceId
         * @memberof pb.AuthReq
         * @instance
         */
        AuthReq.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AuthReq token.
         * @member {string} token
         * @memberof pb.AuthReq
         * @instance
         */
        AuthReq.prototype.token = "";

        /**
         * Creates a new AuthReq instance using the specified properties.
         * @function create
         * @memberof pb.AuthReq
         * @static
         * @param {pb.IAuthReq=} [properties] Properties to set
         * @returns {pb.AuthReq} AuthReq instance
         */
        AuthReq.create = function create(properties) {
            return new AuthReq(properties);
        };

        /**
         * Encodes the specified AuthReq message. Does not implicitly {@link pb.AuthReq.verify|verify} messages.
         * @function encode
         * @memberof pb.AuthReq
         * @static
         * @param {pb.IAuthReq} message AuthReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.deviceId);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified AuthReq message, length delimited. Does not implicitly {@link pb.AuthReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AuthReq
         * @static
         * @param {pb.IAuthReq} message AuthReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AuthReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AuthReq} AuthReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AuthReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        message.deviceId = reader.int64();
                        break;
                    }
                case 3: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AuthReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AuthReq} AuthReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthReq message.
         * @function verify
         * @memberof pb.AuthReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                    return "deviceId: integer|Long expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates an AuthReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AuthReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AuthReq} AuthReq
         */
        AuthReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AuthReq)
                return object;
            var message = new $root.pb.AuthReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.deviceId != null)
                if ($util.Long)
                    (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = false;
                else if (typeof object.deviceId === "string")
                    message.deviceId = parseInt(object.deviceId, 10);
                else if (typeof object.deviceId === "number")
                    message.deviceId = object.deviceId;
                else if (typeof object.deviceId === "object")
                    message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from an AuthReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AuthReq
         * @static
         * @param {pb.AuthReq} message AuthReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceId = options.longs === String ? "0" : 0;
                object.token = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (typeof message.deviceId === "number")
                    object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
                else
                    object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber() : message.deviceId;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this AuthReq to JSON.
         * @function toJSON
         * @memberof pb.AuthReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthReq
         * @function getTypeUrl
         * @memberof pb.AuthReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.AuthReq";
        };

        return AuthReq;
    })();

    pb.GetUsersReq = (function() {

        /**
         * Properties of a GetUsersReq.
         * @memberof pb
         * @interface IGetUsersReq
         * @property {Object.<string,number>|null} [userIds] GetUsersReq userIds
         */

        /**
         * Constructs a new GetUsersReq.
         * @memberof pb
         * @classdesc Represents a GetUsersReq.
         * @implements IGetUsersReq
         * @constructor
         * @param {pb.IGetUsersReq=} [properties] Properties to set
         */
        function GetUsersReq(properties) {
            this.userIds = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUsersReq userIds.
         * @member {Object.<string,number>} userIds
         * @memberof pb.GetUsersReq
         * @instance
         */
        GetUsersReq.prototype.userIds = $util.emptyObject;

        /**
         * Creates a new GetUsersReq instance using the specified properties.
         * @function create
         * @memberof pb.GetUsersReq
         * @static
         * @param {pb.IGetUsersReq=} [properties] Properties to set
         * @returns {pb.GetUsersReq} GetUsersReq instance
         */
        GetUsersReq.create = function create(properties) {
            return new GetUsersReq(properties);
        };

        /**
         * Encodes the specified GetUsersReq message. Does not implicitly {@link pb.GetUsersReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GetUsersReq
         * @static
         * @param {pb.IGetUsersReq} message GetUsersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userIds != null && Object.hasOwnProperty.call(message, "userIds"))
                for (var keys = Object.keys(message.userIds), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.userIds[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetUsersReq message, length delimited. Does not implicitly {@link pb.GetUsersReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetUsersReq
         * @static
         * @param {pb.IGetUsersReq} message GetUsersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUsersReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetUsersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetUsersReq} GetUsersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetUsersReq(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.userIds === $util.emptyObject)
                            message.userIds = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int64();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.userIds[typeof key === "object" ? $util.longToHash(key) : key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUsersReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetUsersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetUsersReq} GetUsersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUsersReq message.
         * @function verify
         * @memberof pb.GetUsersReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUsersReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userIds != null && message.hasOwnProperty("userIds")) {
                if (!$util.isObject(message.userIds))
                    return "userIds: object expected";
                var key = Object.keys(message.userIds);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "userIds: integer|Long key{k:int64} expected";
                    if (!$util.isInteger(message.userIds[key[i]]))
                        return "userIds: integer{k:int64} expected";
                }
            }
            return null;
        };

        /**
         * Creates a GetUsersReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetUsersReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetUsersReq} GetUsersReq
         */
        GetUsersReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetUsersReq)
                return object;
            var message = new $root.pb.GetUsersReq();
            if (object.userIds) {
                if (typeof object.userIds !== "object")
                    throw TypeError(".pb.GetUsersReq.userIds: object expected");
                message.userIds = {};
                for (var keys = Object.keys(object.userIds), i = 0; i < keys.length; ++i)
                    message.userIds[keys[i]] = object.userIds[keys[i]] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUsersReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetUsersReq
         * @static
         * @param {pb.GetUsersReq} message GetUsersReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUsersReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.userIds = {};
            var keys2;
            if (message.userIds && (keys2 = Object.keys(message.userIds)).length) {
                object.userIds = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.userIds[keys2[j]] = message.userIds[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this GetUsersReq to JSON.
         * @function toJSON
         * @memberof pb.GetUsersReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUsersReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetUsersReq
         * @function getTypeUrl
         * @memberof pb.GetUsersReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetUsersReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GetUsersReq";
        };

        return GetUsersReq;
    })();

    pb.GetUsersResp = (function() {

        /**
         * Properties of a GetUsersResp.
         * @memberof pb
         * @interface IGetUsersResp
         * @property {Object.<string,pb.IUser>|null} [users] GetUsersResp users
         */

        /**
         * Constructs a new GetUsersResp.
         * @memberof pb
         * @classdesc Represents a GetUsersResp.
         * @implements IGetUsersResp
         * @constructor
         * @param {pb.IGetUsersResp=} [properties] Properties to set
         */
        function GetUsersResp(properties) {
            this.users = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUsersResp users.
         * @member {Object.<string,pb.IUser>} users
         * @memberof pb.GetUsersResp
         * @instance
         */
        GetUsersResp.prototype.users = $util.emptyObject;

        /**
         * Creates a new GetUsersResp instance using the specified properties.
         * @function create
         * @memberof pb.GetUsersResp
         * @static
         * @param {pb.IGetUsersResp=} [properties] Properties to set
         * @returns {pb.GetUsersResp} GetUsersResp instance
         */
        GetUsersResp.create = function create(properties) {
            return new GetUsersResp(properties);
        };

        /**
         * Encodes the specified GetUsersResp message. Does not implicitly {@link pb.GetUsersResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GetUsersResp
         * @static
         * @param {pb.IGetUsersResp} message GetUsersResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && Object.hasOwnProperty.call(message, "users"))
                for (var keys = Object.keys(message.users), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                    $root.pb.User.encode(message.users[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified GetUsersResp message, length delimited. Does not implicitly {@link pb.GetUsersResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetUsersResp
         * @static
         * @param {pb.IGetUsersResp} message GetUsersResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUsersResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetUsersResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetUsersResp} GetUsersResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetUsersResp(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.users === $util.emptyObject)
                            message.users = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int64();
                                break;
                            case 2:
                                value = $root.pb.User.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.users[typeof key === "object" ? $util.longToHash(key) : key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUsersResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetUsersResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetUsersResp} GetUsersResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUsersResp message.
         * @function verify
         * @memberof pb.GetUsersResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUsersResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!$util.isObject(message.users))
                    return "users: object expected";
                var key = Object.keys(message.users);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "users: integer|Long key{k:int64} expected";
                    {
                        var error = $root.pb.User.verify(message.users[key[i]]);
                        if (error)
                            return "users." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a GetUsersResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetUsersResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetUsersResp} GetUsersResp
         */
        GetUsersResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetUsersResp)
                return object;
            var message = new $root.pb.GetUsersResp();
            if (object.users) {
                if (typeof object.users !== "object")
                    throw TypeError(".pb.GetUsersResp.users: object expected");
                message.users = {};
                for (var keys = Object.keys(object.users), i = 0; i < keys.length; ++i) {
                    if (typeof object.users[keys[i]] !== "object")
                        throw TypeError(".pb.GetUsersResp.users: object expected");
                    message.users[keys[i]] = $root.pb.User.fromObject(object.users[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUsersResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetUsersResp
         * @static
         * @param {pb.GetUsersResp} message GetUsersResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUsersResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.users = {};
            var keys2;
            if (message.users && (keys2 = Object.keys(message.users)).length) {
                object.users = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.users[keys2[j]] = $root.pb.User.toObject(message.users[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this GetUsersResp to JSON.
         * @function toJSON
         * @memberof pb.GetUsersResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUsersResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetUsersResp
         * @function getTypeUrl
         * @memberof pb.GetUsersResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetUsersResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GetUsersResp";
        };

        return GetUsersResp;
    })();

    /**
     * PackageType enum.
     * @name pb.PackageType
     * @enum {number}
     * @property {number} PT_UNKNOWN=0 PT_UNKNOWN value
     * @property {number} PT_SIGN_IN=1 PT_SIGN_IN value
     * @property {number} PT_SYNC=2 PT_SYNC value
     * @property {number} PT_HEARTBEAT=3 PT_HEARTBEAT value
     * @property {number} PT_MESSAGE=4 PT_MESSAGE value
     * @property {number} PT_SUBSCRIBE_ROOM=5 PT_SUBSCRIBE_ROOM value
     */
    pb.PackageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PT_UNKNOWN"] = 0;
        values[valuesById[1] = "PT_SIGN_IN"] = 1;
        values[valuesById[2] = "PT_SYNC"] = 2;
        values[valuesById[3] = "PT_HEARTBEAT"] = 3;
        values[valuesById[4] = "PT_MESSAGE"] = 4;
        values[valuesById[5] = "PT_SUBSCRIBE_ROOM"] = 5;
        return values;
    })();

    pb.Input = (function() {

        /**
         * Properties of an Input.
         * @memberof pb
         * @interface IInput
         * @property {pb.PackageType|null} [type] Input type
         * @property {number|Long|null} [requestId] Input requestId
         * @property {Uint8Array|null} [data] Input data
         */

        /**
         * Constructs a new Input.
         * @memberof pb
         * @classdesc Represents an Input.
         * @implements IInput
         * @constructor
         * @param {pb.IInput=} [properties] Properties to set
         */
        function Input(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Input type.
         * @member {pb.PackageType} type
         * @memberof pb.Input
         * @instance
         */
        Input.prototype.type = 0;

        /**
         * Input requestId.
         * @member {number|Long} requestId
         * @memberof pb.Input
         * @instance
         */
        Input.prototype.requestId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Input data.
         * @member {Uint8Array} data
         * @memberof pb.Input
         * @instance
         */
        Input.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Input instance using the specified properties.
         * @function create
         * @memberof pb.Input
         * @static
         * @param {pb.IInput=} [properties] Properties to set
         * @returns {pb.Input} Input instance
         */
        Input.create = function create(properties) {
            return new Input(properties);
        };

        /**
         * Encodes the specified Input message. Does not implicitly {@link pb.Input.verify|verify} messages.
         * @function encode
         * @memberof pb.Input
         * @static
         * @param {pb.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.requestId);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link pb.Input.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Input
         * @static
         * @param {pb.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Input();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.requestId = reader.int64();
                        break;
                    }
                case 3: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Input message.
         * @function verify
         * @memberof pb.Input
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Input.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isInteger(message.requestId) && !(message.requestId && $util.isInteger(message.requestId.low) && $util.isInteger(message.requestId.high)))
                    return "requestId: integer|Long expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Input
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Input} Input
         */
        Input.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Input)
                return object;
            var message = new $root.pb.Input();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "PT_UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "PT_SIGN_IN":
            case 1:
                message.type = 1;
                break;
            case "PT_SYNC":
            case 2:
                message.type = 2;
                break;
            case "PT_HEARTBEAT":
            case 3:
                message.type = 3;
                break;
            case "PT_MESSAGE":
            case 4:
                message.type = 4;
                break;
            case "PT_SUBSCRIBE_ROOM":
            case 5:
                message.type = 5;
                break;
            }
            if (object.requestId != null)
                if ($util.Long)
                    (message.requestId = $util.Long.fromValue(object.requestId)).unsigned = false;
                else if (typeof object.requestId === "string")
                    message.requestId = parseInt(object.requestId, 10);
                else if (typeof object.requestId === "number")
                    message.requestId = object.requestId;
                else if (typeof object.requestId === "object")
                    message.requestId = new $util.LongBits(object.requestId.low >>> 0, object.requestId.high >>> 0).toNumber();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Input
         * @static
         * @param {pb.Input} message Input
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Input.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "PT_UNKNOWN" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.requestId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requestId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.pb.PackageType[message.type] === undefined ? message.type : $root.pb.PackageType[message.type] : message.type;
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (typeof message.requestId === "number")
                    object.requestId = options.longs === String ? String(message.requestId) : message.requestId;
                else
                    object.requestId = options.longs === String ? $util.Long.prototype.toString.call(message.requestId) : options.longs === Number ? new $util.LongBits(message.requestId.low >>> 0, message.requestId.high >>> 0).toNumber() : message.requestId;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Input to JSON.
         * @function toJSON
         * @memberof pb.Input
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Input.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Input
         * @function getTypeUrl
         * @memberof pb.Input
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Input.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Input";
        };

        return Input;
    })();

    pb.Output = (function() {

        /**
         * Properties of an Output.
         * @memberof pb
         * @interface IOutput
         * @property {pb.PackageType|null} [type] Output type
         * @property {number|Long|null} [requestId] Output requestId
         * @property {number|null} [code] Output code
         * @property {string|null} [message] Output message
         * @property {Uint8Array|null} [data] Output data
         */

        /**
         * Constructs a new Output.
         * @memberof pb
         * @classdesc Represents an Output.
         * @implements IOutput
         * @constructor
         * @param {pb.IOutput=} [properties] Properties to set
         */
        function Output(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Output type.
         * @member {pb.PackageType} type
         * @memberof pb.Output
         * @instance
         */
        Output.prototype.type = 0;

        /**
         * Output requestId.
         * @member {number|Long} requestId
         * @memberof pb.Output
         * @instance
         */
        Output.prototype.requestId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Output code.
         * @member {number} code
         * @memberof pb.Output
         * @instance
         */
        Output.prototype.code = 0;

        /**
         * Output message.
         * @member {string} message
         * @memberof pb.Output
         * @instance
         */
        Output.prototype.message = "";

        /**
         * Output data.
         * @member {Uint8Array} data
         * @memberof pb.Output
         * @instance
         */
        Output.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Output instance using the specified properties.
         * @function create
         * @memberof pb.Output
         * @static
         * @param {pb.IOutput=} [properties] Properties to set
         * @returns {pb.Output} Output instance
         */
        Output.create = function create(properties) {
            return new Output(properties);
        };

        /**
         * Encodes the specified Output message. Does not implicitly {@link pb.Output.verify|verify} messages.
         * @function encode
         * @memberof pb.Output
         * @static
         * @param {pb.IOutput} message Output message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Output.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.requestId);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Output message, length delimited. Does not implicitly {@link pb.Output.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Output
         * @static
         * @param {pb.IOutput} message Output message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Output.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Output
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Output} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Output.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Output();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.requestId = reader.int64();
                        break;
                    }
                case 3: {
                        message.code = reader.int32();
                        break;
                    }
                case 4: {
                        message.message = reader.string();
                        break;
                    }
                case 5: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Output message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Output
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Output} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Output.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Output message.
         * @function verify
         * @memberof pb.Output
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Output.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isInteger(message.requestId) && !(message.requestId && $util.isInteger(message.requestId.low) && $util.isInteger(message.requestId.high)))
                    return "requestId: integer|Long expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Output
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Output} Output
         */
        Output.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Output)
                return object;
            var message = new $root.pb.Output();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "PT_UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "PT_SIGN_IN":
            case 1:
                message.type = 1;
                break;
            case "PT_SYNC":
            case 2:
                message.type = 2;
                break;
            case "PT_HEARTBEAT":
            case 3:
                message.type = 3;
                break;
            case "PT_MESSAGE":
            case 4:
                message.type = 4;
                break;
            case "PT_SUBSCRIBE_ROOM":
            case 5:
                message.type = 5;
                break;
            }
            if (object.requestId != null)
                if ($util.Long)
                    (message.requestId = $util.Long.fromValue(object.requestId)).unsigned = false;
                else if (typeof object.requestId === "string")
                    message.requestId = parseInt(object.requestId, 10);
                else if (typeof object.requestId === "number")
                    message.requestId = object.requestId;
                else if (typeof object.requestId === "object")
                    message.requestId = new $util.LongBits(object.requestId.low >>> 0, object.requestId.high >>> 0).toNumber();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.message != null)
                message.message = String(object.message);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Output
         * @static
         * @param {pb.Output} message Output
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Output.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "PT_UNKNOWN" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.requestId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requestId = options.longs === String ? "0" : 0;
                object.code = 0;
                object.message = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.pb.PackageType[message.type] === undefined ? message.type : $root.pb.PackageType[message.type] : message.type;
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (typeof message.requestId === "number")
                    object.requestId = options.longs === String ? String(message.requestId) : message.requestId;
                else
                    object.requestId = options.longs === String ? $util.Long.prototype.toString.call(message.requestId) : options.longs === Number ? new $util.LongBits(message.requestId.low >>> 0, message.requestId.high >>> 0).toNumber() : message.requestId;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Output to JSON.
         * @function toJSON
         * @memberof pb.Output
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Output.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Output
         * @function getTypeUrl
         * @memberof pb.Output
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Output.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Output";
        };

        return Output;
    })();

    pb.SignInInput = (function() {

        /**
         * Properties of a SignInInput.
         * @memberof pb
         * @interface ISignInInput
         * @property {number|Long|null} [deviceId] SignInInput deviceId
         * @property {number|Long|null} [userId] SignInInput userId
         * @property {string|null} [token] SignInInput token
         */

        /**
         * Constructs a new SignInInput.
         * @memberof pb
         * @classdesc Represents a SignInInput.
         * @implements ISignInInput
         * @constructor
         * @param {pb.ISignInInput=} [properties] Properties to set
         */
        function SignInInput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignInInput deviceId.
         * @member {number|Long} deviceId
         * @memberof pb.SignInInput
         * @instance
         */
        SignInInput.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SignInInput userId.
         * @member {number|Long} userId
         * @memberof pb.SignInInput
         * @instance
         */
        SignInInput.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SignInInput token.
         * @member {string} token
         * @memberof pb.SignInInput
         * @instance
         */
        SignInInput.prototype.token = "";

        /**
         * Creates a new SignInInput instance using the specified properties.
         * @function create
         * @memberof pb.SignInInput
         * @static
         * @param {pb.ISignInInput=} [properties] Properties to set
         * @returns {pb.SignInInput} SignInInput instance
         */
        SignInInput.create = function create(properties) {
            return new SignInInput(properties);
        };

        /**
         * Encodes the specified SignInInput message. Does not implicitly {@link pb.SignInInput.verify|verify} messages.
         * @function encode
         * @memberof pb.SignInInput
         * @static
         * @param {pb.ISignInInput} message SignInInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.deviceId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified SignInInput message, length delimited. Does not implicitly {@link pb.SignInInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SignInInput
         * @static
         * @param {pb.ISignInInput} message SignInInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignInInput message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SignInInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SignInInput} SignInInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SignInInput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deviceId = reader.int64();
                        break;
                    }
                case 2: {
                        message.userId = reader.int64();
                        break;
                    }
                case 3: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignInInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SignInInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SignInInput} SignInInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignInInput message.
         * @function verify
         * @memberof pb.SignInInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignInInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                    return "deviceId: integer|Long expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a SignInInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SignInInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SignInInput} SignInInput
         */
        SignInInput.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SignInInput)
                return object;
            var message = new $root.pb.SignInInput();
            if (object.deviceId != null)
                if ($util.Long)
                    (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = false;
                else if (typeof object.deviceId === "string")
                    message.deviceId = parseInt(object.deviceId, 10);
                else if (typeof object.deviceId === "number")
                    message.deviceId = object.deviceId;
                else if (typeof object.deviceId === "object")
                    message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a SignInInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SignInInput
         * @static
         * @param {pb.SignInInput} message SignInInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignInInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.token = "";
            }
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (typeof message.deviceId === "number")
                    object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
                else
                    object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber() : message.deviceId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this SignInInput to JSON.
         * @function toJSON
         * @memberof pb.SignInInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignInInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignInInput
         * @function getTypeUrl
         * @memberof pb.SignInInput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignInInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SignInInput";
        };

        return SignInInput;
    })();

    pb.SyncInput = (function() {

        /**
         * Properties of a SyncInput.
         * @memberof pb
         * @interface ISyncInput
         * @property {number|Long|null} [seq] SyncInput seq
         */

        /**
         * Constructs a new SyncInput.
         * @memberof pb
         * @classdesc Represents a SyncInput.
         * @implements ISyncInput
         * @constructor
         * @param {pb.ISyncInput=} [properties] Properties to set
         */
        function SyncInput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncInput seq.
         * @member {number|Long} seq
         * @memberof pb.SyncInput
         * @instance
         */
        SyncInput.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SyncInput instance using the specified properties.
         * @function create
         * @memberof pb.SyncInput
         * @static
         * @param {pb.ISyncInput=} [properties] Properties to set
         * @returns {pb.SyncInput} SyncInput instance
         */
        SyncInput.create = function create(properties) {
            return new SyncInput(properties);
        };

        /**
         * Encodes the specified SyncInput message. Does not implicitly {@link pb.SyncInput.verify|verify} messages.
         * @function encode
         * @memberof pb.SyncInput
         * @static
         * @param {pb.ISyncInput} message SyncInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seq);
            return writer;
        };

        /**
         * Encodes the specified SyncInput message, length delimited. Does not implicitly {@link pb.SyncInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SyncInput
         * @static
         * @param {pb.ISyncInput} message SyncInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncInput message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SyncInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SyncInput} SyncInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SyncInput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.seq = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SyncInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SyncInput} SyncInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncInput message.
         * @function verify
         * @memberof pb.SyncInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            return null;
        };

        /**
         * Creates a SyncInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SyncInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SyncInput} SyncInput
         */
        SyncInput.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SyncInput)
                return object;
            var message = new $root.pb.SyncInput();
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SyncInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SyncInput
         * @static
         * @param {pb.SyncInput} message SyncInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            return object;
        };

        /**
         * Converts this SyncInput to JSON.
         * @function toJSON
         * @memberof pb.SyncInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncInput
         * @function getTypeUrl
         * @memberof pb.SyncInput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SyncInput";
        };

        return SyncInput;
    })();

    pb.SyncOutput = (function() {

        /**
         * Properties of a SyncOutput.
         * @memberof pb
         * @interface ISyncOutput
         * @property {Array.<pb.IMessage>|null} [messages] SyncOutput messages
         * @property {boolean|null} [hasMore] SyncOutput hasMore
         */

        /**
         * Constructs a new SyncOutput.
         * @memberof pb
         * @classdesc Represents a SyncOutput.
         * @implements ISyncOutput
         * @constructor
         * @param {pb.ISyncOutput=} [properties] Properties to set
         */
        function SyncOutput(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncOutput messages.
         * @member {Array.<pb.IMessage>} messages
         * @memberof pb.SyncOutput
         * @instance
         */
        SyncOutput.prototype.messages = $util.emptyArray;

        /**
         * SyncOutput hasMore.
         * @member {boolean} hasMore
         * @memberof pb.SyncOutput
         * @instance
         */
        SyncOutput.prototype.hasMore = false;

        /**
         * Creates a new SyncOutput instance using the specified properties.
         * @function create
         * @memberof pb.SyncOutput
         * @static
         * @param {pb.ISyncOutput=} [properties] Properties to set
         * @returns {pb.SyncOutput} SyncOutput instance
         */
        SyncOutput.create = function create(properties) {
            return new SyncOutput(properties);
        };

        /**
         * Encodes the specified SyncOutput message. Does not implicitly {@link pb.SyncOutput.verify|verify} messages.
         * @function encode
         * @memberof pb.SyncOutput
         * @static
         * @param {pb.ISyncOutput} message SyncOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncOutput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.pb.Message.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.hasMore != null && Object.hasOwnProperty.call(message, "hasMore"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasMore);
            return writer;
        };

        /**
         * Encodes the specified SyncOutput message, length delimited. Does not implicitly {@link pb.SyncOutput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SyncOutput
         * @static
         * @param {pb.ISyncOutput} message SyncOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncOutput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncOutput message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SyncOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SyncOutput} SyncOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncOutput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SyncOutput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        message.messages.push($root.pb.Message.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.hasMore = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncOutput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SyncOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SyncOutput} SyncOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncOutput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncOutput message.
         * @function verify
         * @memberof pb.SyncOutput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncOutput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.pb.Message.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            if (message.hasMore != null && message.hasOwnProperty("hasMore"))
                if (typeof message.hasMore !== "boolean")
                    return "hasMore: boolean expected";
            return null;
        };

        /**
         * Creates a SyncOutput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SyncOutput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SyncOutput} SyncOutput
         */
        SyncOutput.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SyncOutput)
                return object;
            var message = new $root.pb.SyncOutput();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".pb.SyncOutput.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".pb.SyncOutput.messages: object expected");
                    message.messages[i] = $root.pb.Message.fromObject(object.messages[i]);
                }
            }
            if (object.hasMore != null)
                message.hasMore = Boolean(object.hasMore);
            return message;
        };

        /**
         * Creates a plain object from a SyncOutput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SyncOutput
         * @static
         * @param {pb.SyncOutput} message SyncOutput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncOutput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (options.defaults)
                object.hasMore = false;
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.pb.Message.toObject(message.messages[j], options);
            }
            if (message.hasMore != null && message.hasOwnProperty("hasMore"))
                object.hasMore = message.hasMore;
            return object;
        };

        /**
         * Converts this SyncOutput to JSON.
         * @function toJSON
         * @memberof pb.SyncOutput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncOutput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncOutput
         * @function getTypeUrl
         * @memberof pb.SyncOutput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SyncOutput";
        };

        return SyncOutput;
    })();

    pb.SubscribeRoomInput = (function() {

        /**
         * Properties of a SubscribeRoomInput.
         * @memberof pb
         * @interface ISubscribeRoomInput
         * @property {number|Long|null} [roomId] SubscribeRoomInput roomId
         * @property {number|Long|null} [seq] SubscribeRoomInput seq
         */

        /**
         * Constructs a new SubscribeRoomInput.
         * @memberof pb
         * @classdesc Represents a SubscribeRoomInput.
         * @implements ISubscribeRoomInput
         * @constructor
         * @param {pb.ISubscribeRoomInput=} [properties] Properties to set
         */
        function SubscribeRoomInput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubscribeRoomInput roomId.
         * @member {number|Long} roomId
         * @memberof pb.SubscribeRoomInput
         * @instance
         */
        SubscribeRoomInput.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SubscribeRoomInput seq.
         * @member {number|Long} seq
         * @memberof pb.SubscribeRoomInput
         * @instance
         */
        SubscribeRoomInput.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SubscribeRoomInput instance using the specified properties.
         * @function create
         * @memberof pb.SubscribeRoomInput
         * @static
         * @param {pb.ISubscribeRoomInput=} [properties] Properties to set
         * @returns {pb.SubscribeRoomInput} SubscribeRoomInput instance
         */
        SubscribeRoomInput.create = function create(properties) {
            return new SubscribeRoomInput(properties);
        };

        /**
         * Encodes the specified SubscribeRoomInput message. Does not implicitly {@link pb.SubscribeRoomInput.verify|verify} messages.
         * @function encode
         * @memberof pb.SubscribeRoomInput
         * @static
         * @param {pb.ISubscribeRoomInput} message SubscribeRoomInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeRoomInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.seq);
            return writer;
        };

        /**
         * Encodes the specified SubscribeRoomInput message, length delimited. Does not implicitly {@link pb.SubscribeRoomInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SubscribeRoomInput
         * @static
         * @param {pb.ISubscribeRoomInput} message SubscribeRoomInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeRoomInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubscribeRoomInput message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SubscribeRoomInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SubscribeRoomInput} SubscribeRoomInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeRoomInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SubscribeRoomInput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.int64();
                        break;
                    }
                case 2: {
                        message.seq = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubscribeRoomInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SubscribeRoomInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SubscribeRoomInput} SubscribeRoomInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeRoomInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubscribeRoomInput message.
         * @function verify
         * @memberof pb.SubscribeRoomInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubscribeRoomInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            return null;
        };

        /**
         * Creates a SubscribeRoomInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SubscribeRoomInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SubscribeRoomInput} SubscribeRoomInput
         */
        SubscribeRoomInput.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SubscribeRoomInput)
                return object;
            var message = new $root.pb.SubscribeRoomInput();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SubscribeRoomInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SubscribeRoomInput
         * @static
         * @param {pb.SubscribeRoomInput} message SubscribeRoomInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubscribeRoomInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            return object;
        };

        /**
         * Converts this SubscribeRoomInput to JSON.
         * @function toJSON
         * @memberof pb.SubscribeRoomInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubscribeRoomInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SubscribeRoomInput
         * @function getTypeUrl
         * @memberof pb.SubscribeRoomInput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SubscribeRoomInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SubscribeRoomInput";
        };

        return SubscribeRoomInput;
    })();

    pb.MessageACK = (function() {

        /**
         * Properties of a MessageACK.
         * @memberof pb
         * @interface IMessageACK
         * @property {number|Long|null} [deviceAck] MessageACK deviceAck
         * @property {number|Long|null} [receiveTime] MessageACK receiveTime
         */

        /**
         * Constructs a new MessageACK.
         * @memberof pb
         * @classdesc Represents a MessageACK.
         * @implements IMessageACK
         * @constructor
         * @param {pb.IMessageACK=} [properties] Properties to set
         */
        function MessageACK(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageACK deviceAck.
         * @member {number|Long} deviceAck
         * @memberof pb.MessageACK
         * @instance
         */
        MessageACK.prototype.deviceAck = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageACK receiveTime.
         * @member {number|Long} receiveTime
         * @memberof pb.MessageACK
         * @instance
         */
        MessageACK.prototype.receiveTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new MessageACK instance using the specified properties.
         * @function create
         * @memberof pb.MessageACK
         * @static
         * @param {pb.IMessageACK=} [properties] Properties to set
         * @returns {pb.MessageACK} MessageACK instance
         */
        MessageACK.create = function create(properties) {
            return new MessageACK(properties);
        };

        /**
         * Encodes the specified MessageACK message. Does not implicitly {@link pb.MessageACK.verify|verify} messages.
         * @function encode
         * @memberof pb.MessageACK
         * @static
         * @param {pb.IMessageACK} message MessageACK message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageACK.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceAck != null && Object.hasOwnProperty.call(message, "deviceAck"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.deviceAck);
            if (message.receiveTime != null && Object.hasOwnProperty.call(message, "receiveTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.receiveTime);
            return writer;
        };

        /**
         * Encodes the specified MessageACK message, length delimited. Does not implicitly {@link pb.MessageACK.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MessageACK
         * @static
         * @param {pb.IMessageACK} message MessageACK message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageACK.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageACK message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MessageACK
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MessageACK} MessageACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageACK.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MessageACK();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.deviceAck = reader.int64();
                        break;
                    }
                case 3: {
                        message.receiveTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageACK message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MessageACK
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MessageACK} MessageACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageACK.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageACK message.
         * @function verify
         * @memberof pb.MessageACK
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageACK.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceAck != null && message.hasOwnProperty("deviceAck"))
                if (!$util.isInteger(message.deviceAck) && !(message.deviceAck && $util.isInteger(message.deviceAck.low) && $util.isInteger(message.deviceAck.high)))
                    return "deviceAck: integer|Long expected";
            if (message.receiveTime != null && message.hasOwnProperty("receiveTime"))
                if (!$util.isInteger(message.receiveTime) && !(message.receiveTime && $util.isInteger(message.receiveTime.low) && $util.isInteger(message.receiveTime.high)))
                    return "receiveTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a MessageACK message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MessageACK
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MessageACK} MessageACK
         */
        MessageACK.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MessageACK)
                return object;
            var message = new $root.pb.MessageACK();
            if (object.deviceAck != null)
                if ($util.Long)
                    (message.deviceAck = $util.Long.fromValue(object.deviceAck)).unsigned = false;
                else if (typeof object.deviceAck === "string")
                    message.deviceAck = parseInt(object.deviceAck, 10);
                else if (typeof object.deviceAck === "number")
                    message.deviceAck = object.deviceAck;
                else if (typeof object.deviceAck === "object")
                    message.deviceAck = new $util.LongBits(object.deviceAck.low >>> 0, object.deviceAck.high >>> 0).toNumber();
            if (object.receiveTime != null)
                if ($util.Long)
                    (message.receiveTime = $util.Long.fromValue(object.receiveTime)).unsigned = false;
                else if (typeof object.receiveTime === "string")
                    message.receiveTime = parseInt(object.receiveTime, 10);
                else if (typeof object.receiveTime === "number")
                    message.receiveTime = object.receiveTime;
                else if (typeof object.receiveTime === "object")
                    message.receiveTime = new $util.LongBits(object.receiveTime.low >>> 0, object.receiveTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a MessageACK message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MessageACK
         * @static
         * @param {pb.MessageACK} message MessageACK
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageACK.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceAck = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceAck = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.receiveTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.receiveTime = options.longs === String ? "0" : 0;
            }
            if (message.deviceAck != null && message.hasOwnProperty("deviceAck"))
                if (typeof message.deviceAck === "number")
                    object.deviceAck = options.longs === String ? String(message.deviceAck) : message.deviceAck;
                else
                    object.deviceAck = options.longs === String ? $util.Long.prototype.toString.call(message.deviceAck) : options.longs === Number ? new $util.LongBits(message.deviceAck.low >>> 0, message.deviceAck.high >>> 0).toNumber() : message.deviceAck;
            if (message.receiveTime != null && message.hasOwnProperty("receiveTime"))
                if (typeof message.receiveTime === "number")
                    object.receiveTime = options.longs === String ? String(message.receiveTime) : message.receiveTime;
                else
                    object.receiveTime = options.longs === String ? $util.Long.prototype.toString.call(message.receiveTime) : options.longs === Number ? new $util.LongBits(message.receiveTime.low >>> 0, message.receiveTime.high >>> 0).toNumber() : message.receiveTime;
            return object;
        };

        /**
         * Converts this MessageACK to JSON.
         * @function toJSON
         * @memberof pb.MessageACK
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageACK.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageACK
         * @function getTypeUrl
         * @memberof pb.MessageACK
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageACK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.MessageACK";
        };

        return MessageACK;
    })();

    pb.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof pb
         * @interface IMessage
         * @property {number|null} [code] Message code
         * @property {Uint8Array|null} [content] Message content
         * @property {number|Long|null} [seq] Message seq
         * @property {number|Long|null} [sendTime] Message sendTime
         * @property {pb.MessageStatus|null} [status] Message status
         */

        /**
         * Constructs a new Message.
         * @memberof pb
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {pb.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message code.
         * @member {number} code
         * @memberof pb.Message
         * @instance
         */
        Message.prototype.code = 0;

        /**
         * Message content.
         * @member {Uint8Array} content
         * @memberof pb.Message
         * @instance
         */
        Message.prototype.content = $util.newBuffer([]);

        /**
         * Message seq.
         * @member {number|Long} seq
         * @memberof pb.Message
         * @instance
         */
        Message.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message sendTime.
         * @member {number|Long} sendTime
         * @memberof pb.Message
         * @instance
         */
        Message.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message status.
         * @member {pb.MessageStatus} status
         * @memberof pb.Message
         * @instance
         */
        Message.prototype.status = 0;

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof pb.Message
         * @static
         * @param {pb.IMessage=} [properties] Properties to set
         * @returns {pb.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link pb.Message.verify|verify} messages.
         * @function encode
         * @memberof pb.Message
         * @static
         * @param {pb.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.content);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.seq);
            if (message.sendTime != null && Object.hasOwnProperty.call(message, "sendTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.sendTime);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link pb.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Message
         * @static
         * @param {pb.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.content = reader.bytes();
                        break;
                    }
                case 3: {
                        message.seq = reader.int64();
                        break;
                    }
                case 4: {
                        message.sendTime = reader.int64();
                        break;
                    }
                case 5: {
                        message.status = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof pb.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                    return "content: buffer expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (!$util.isInteger(message.sendTime) && !(message.sendTime && $util.isInteger(message.sendTime.low) && $util.isInteger(message.sendTime.high)))
                    return "sendTime: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Message)
                return object;
            var message = new $root.pb.Message();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.content != null)
                if (typeof object.content === "string")
                    $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
                else if (object.content.length >= 0)
                    message.content = object.content;
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            if (object.sendTime != null)
                if ($util.Long)
                    (message.sendTime = $util.Long.fromValue(object.sendTime)).unsigned = false;
                else if (typeof object.sendTime === "string")
                    message.sendTime = parseInt(object.sendTime, 10);
                else if (typeof object.sendTime === "number")
                    message.sendTime = object.sendTime;
                else if (typeof object.sendTime === "object")
                    message.sendTime = new $util.LongBits(object.sendTime.low >>> 0, object.sendTime.high >>> 0).toNumber();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "MS_NORMAL":
            case 0:
                message.status = 0;
                break;
            case "MS_RECALL":
            case 1:
                message.status = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Message
         * @static
         * @param {pb.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                if (options.bytes === String)
                    object.content = "";
                else {
                    object.content = [];
                    if (options.bytes !== Array)
                        object.content = $util.newBuffer(object.content);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sendTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendTime = options.longs === String ? "0" : 0;
                object.status = options.enums === String ? "MS_NORMAL" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (typeof message.sendTime === "number")
                    object.sendTime = options.longs === String ? String(message.sendTime) : message.sendTime;
                else
                    object.sendTime = options.longs === String ? $util.Long.prototype.toString.call(message.sendTime) : options.longs === Number ? new $util.LongBits(message.sendTime.low >>> 0, message.sendTime.high >>> 0).toNumber() : message.sendTime;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.pb.MessageStatus[message.status] === undefined ? message.status : $root.pb.MessageStatus[message.status] : message.status;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof pb.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Message
         * @function getTypeUrl
         * @memberof pb.Message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Message";
        };

        return Message;
    })();

    /**
     * MessageStatus enum.
     * @name pb.MessageStatus
     * @enum {number}
     * @property {number} MS_NORMAL=0 MS_NORMAL value
     * @property {number} MS_RECALL=1 MS_RECALL value
     */
    pb.MessageStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MS_NORMAL"] = 0;
        values[valuesById[1] = "MS_RECALL"] = 1;
        return values;
    })();

    pb.ConnectInt = (function() {

        /**
         * Constructs a new ConnectInt service.
         * @memberof pb
         * @classdesc Represents a ConnectInt
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ConnectInt(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ConnectInt.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ConnectInt;

        /**
         * Creates new ConnectInt service using the specified rpc implementation.
         * @function create
         * @memberof pb.ConnectInt
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ConnectInt} RPC service. Useful where requests and/or responses are streamed.
         */
        ConnectInt.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pb.ConnectInt#deliverMessage}.
         * @memberof pb.ConnectInt
         * @typedef DeliverMessageCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls DeliverMessage.
         * @function deliverMessage
         * @memberof pb.ConnectInt
         * @instance
         * @param {pb.IDeliverMessageReq} request DeliverMessageReq message or plain object
         * @param {pb.ConnectInt.DeliverMessageCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ConnectInt.prototype.deliverMessage = function deliverMessage(request, callback) {
            return this.rpcCall(deliverMessage, $root.pb.DeliverMessageReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "DeliverMessage" });

        /**
         * Calls DeliverMessage.
         * @function deliverMessage
         * @memberof pb.ConnectInt
         * @instance
         * @param {pb.IDeliverMessageReq} request DeliverMessageReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        return ConnectInt;
    })();

    pb.DeliverMessageReq = (function() {

        /**
         * Properties of a DeliverMessageReq.
         * @memberof pb
         * @interface IDeliverMessageReq
         * @property {number|Long|null} [deviceId] DeliverMessageReq deviceId
         * @property {pb.IMessage|null} [message] DeliverMessageReq message
         */

        /**
         * Constructs a new DeliverMessageReq.
         * @memberof pb
         * @classdesc Represents a DeliverMessageReq.
         * @implements IDeliverMessageReq
         * @constructor
         * @param {pb.IDeliverMessageReq=} [properties] Properties to set
         */
        function DeliverMessageReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeliverMessageReq deviceId.
         * @member {number|Long} deviceId
         * @memberof pb.DeliverMessageReq
         * @instance
         */
        DeliverMessageReq.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DeliverMessageReq message.
         * @member {pb.IMessage|null|undefined} message
         * @memberof pb.DeliverMessageReq
         * @instance
         */
        DeliverMessageReq.prototype.message = null;

        /**
         * Creates a new DeliverMessageReq instance using the specified properties.
         * @function create
         * @memberof pb.DeliverMessageReq
         * @static
         * @param {pb.IDeliverMessageReq=} [properties] Properties to set
         * @returns {pb.DeliverMessageReq} DeliverMessageReq instance
         */
        DeliverMessageReq.create = function create(properties) {
            return new DeliverMessageReq(properties);
        };

        /**
         * Encodes the specified DeliverMessageReq message. Does not implicitly {@link pb.DeliverMessageReq.verify|verify} messages.
         * @function encode
         * @memberof pb.DeliverMessageReq
         * @static
         * @param {pb.IDeliverMessageReq} message DeliverMessageReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeliverMessageReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.deviceId);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                $root.pb.Message.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DeliverMessageReq message, length delimited. Does not implicitly {@link pb.DeliverMessageReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.DeliverMessageReq
         * @static
         * @param {pb.IDeliverMessageReq} message DeliverMessageReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeliverMessageReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeliverMessageReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.DeliverMessageReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.DeliverMessageReq} DeliverMessageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeliverMessageReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.DeliverMessageReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deviceId = reader.int64();
                        break;
                    }
                case 2: {
                        message.message = $root.pb.Message.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeliverMessageReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.DeliverMessageReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.DeliverMessageReq} DeliverMessageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeliverMessageReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeliverMessageReq message.
         * @function verify
         * @memberof pb.DeliverMessageReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeliverMessageReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                    return "deviceId: integer|Long expected";
            if (message.message != null && message.hasOwnProperty("message")) {
                var error = $root.pb.Message.verify(message.message);
                if (error)
                    return "message." + error;
            }
            return null;
        };

        /**
         * Creates a DeliverMessageReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.DeliverMessageReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.DeliverMessageReq} DeliverMessageReq
         */
        DeliverMessageReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.DeliverMessageReq)
                return object;
            var message = new $root.pb.DeliverMessageReq();
            if (object.deviceId != null)
                if ($util.Long)
                    (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = false;
                else if (typeof object.deviceId === "string")
                    message.deviceId = parseInt(object.deviceId, 10);
                else if (typeof object.deviceId === "number")
                    message.deviceId = object.deviceId;
                else if (typeof object.deviceId === "object")
                    message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber();
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".pb.DeliverMessageReq.message: object expected");
                message.message = $root.pb.Message.fromObject(object.message);
            }
            return message;
        };

        /**
         * Creates a plain object from a DeliverMessageReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.DeliverMessageReq
         * @static
         * @param {pb.DeliverMessageReq} message DeliverMessageReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeliverMessageReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceId = options.longs === String ? "0" : 0;
                object.message = null;
            }
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (typeof message.deviceId === "number")
                    object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
                else
                    object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber() : message.deviceId;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.pb.Message.toObject(message.message, options);
            return object;
        };

        /**
         * Converts this DeliverMessageReq to JSON.
         * @function toJSON
         * @memberof pb.DeliverMessageReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeliverMessageReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeliverMessageReq
         * @function getTypeUrl
         * @memberof pb.DeliverMessageReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeliverMessageReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.DeliverMessageReq";
        };

        return DeliverMessageReq;
    })();

    pb.PushRoomMsg = (function() {

        /**
         * Properties of a PushRoomMsg.
         * @memberof pb
         * @interface IPushRoomMsg
         * @property {number|Long|null} [roomId] PushRoomMsg roomId
         * @property {pb.IMessage|null} [message] PushRoomMsg message
         */

        /**
         * Constructs a new PushRoomMsg.
         * @memberof pb
         * @classdesc Represents a PushRoomMsg.
         * @implements IPushRoomMsg
         * @constructor
         * @param {pb.IPushRoomMsg=} [properties] Properties to set
         */
        function PushRoomMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushRoomMsg roomId.
         * @member {number|Long} roomId
         * @memberof pb.PushRoomMsg
         * @instance
         */
        PushRoomMsg.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PushRoomMsg message.
         * @member {pb.IMessage|null|undefined} message
         * @memberof pb.PushRoomMsg
         * @instance
         */
        PushRoomMsg.prototype.message = null;

        /**
         * Creates a new PushRoomMsg instance using the specified properties.
         * @function create
         * @memberof pb.PushRoomMsg
         * @static
         * @param {pb.IPushRoomMsg=} [properties] Properties to set
         * @returns {pb.PushRoomMsg} PushRoomMsg instance
         */
        PushRoomMsg.create = function create(properties) {
            return new PushRoomMsg(properties);
        };

        /**
         * Encodes the specified PushRoomMsg message. Does not implicitly {@link pb.PushRoomMsg.verify|verify} messages.
         * @function encode
         * @memberof pb.PushRoomMsg
         * @static
         * @param {pb.IPushRoomMsg} message PushRoomMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushRoomMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                $root.pb.Message.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PushRoomMsg message, length delimited. Does not implicitly {@link pb.PushRoomMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PushRoomMsg
         * @static
         * @param {pb.IPushRoomMsg} message PushRoomMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushRoomMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushRoomMsg message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PushRoomMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PushRoomMsg} PushRoomMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushRoomMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PushRoomMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.int64();
                        break;
                    }
                case 2: {
                        message.message = $root.pb.Message.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushRoomMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PushRoomMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PushRoomMsg} PushRoomMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushRoomMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushRoomMsg message.
         * @function verify
         * @memberof pb.PushRoomMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushRoomMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.message != null && message.hasOwnProperty("message")) {
                var error = $root.pb.Message.verify(message.message);
                if (error)
                    return "message." + error;
            }
            return null;
        };

        /**
         * Creates a PushRoomMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PushRoomMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PushRoomMsg} PushRoomMsg
         */
        PushRoomMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PushRoomMsg)
                return object;
            var message = new $root.pb.PushRoomMsg();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".pb.PushRoomMsg.message: object expected");
                message.message = $root.pb.Message.fromObject(object.message);
            }
            return message;
        };

        /**
         * Creates a plain object from a PushRoomMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PushRoomMsg
         * @static
         * @param {pb.PushRoomMsg} message PushRoomMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushRoomMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                object.message = null;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.pb.Message.toObject(message.message, options);
            return object;
        };

        /**
         * Converts this PushRoomMsg to JSON.
         * @function toJSON
         * @memberof pb.PushRoomMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushRoomMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PushRoomMsg
         * @function getTypeUrl
         * @memberof pb.PushRoomMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PushRoomMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PushRoomMsg";
        };

        return PushRoomMsg;
    })();

    pb.PushAllMsg = (function() {

        /**
         * Properties of a PushAllMsg.
         * @memberof pb
         * @interface IPushAllMsg
         * @property {pb.IMessage|null} [message] PushAllMsg message
         */

        /**
         * Constructs a new PushAllMsg.
         * @memberof pb
         * @classdesc Represents a PushAllMsg.
         * @implements IPushAllMsg
         * @constructor
         * @param {pb.IPushAllMsg=} [properties] Properties to set
         */
        function PushAllMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushAllMsg message.
         * @member {pb.IMessage|null|undefined} message
         * @memberof pb.PushAllMsg
         * @instance
         */
        PushAllMsg.prototype.message = null;

        /**
         * Creates a new PushAllMsg instance using the specified properties.
         * @function create
         * @memberof pb.PushAllMsg
         * @static
         * @param {pb.IPushAllMsg=} [properties] Properties to set
         * @returns {pb.PushAllMsg} PushAllMsg instance
         */
        PushAllMsg.create = function create(properties) {
            return new PushAllMsg(properties);
        };

        /**
         * Encodes the specified PushAllMsg message. Does not implicitly {@link pb.PushAllMsg.verify|verify} messages.
         * @function encode
         * @memberof pb.PushAllMsg
         * @static
         * @param {pb.IPushAllMsg} message PushAllMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushAllMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                $root.pb.Message.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PushAllMsg message, length delimited. Does not implicitly {@link pb.PushAllMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PushAllMsg
         * @static
         * @param {pb.IPushAllMsg} message PushAllMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushAllMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushAllMsg message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PushAllMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PushAllMsg} PushAllMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushAllMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PushAllMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.message = $root.pb.Message.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushAllMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PushAllMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PushAllMsg} PushAllMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushAllMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushAllMsg message.
         * @function verify
         * @memberof pb.PushAllMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushAllMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message")) {
                var error = $root.pb.Message.verify(message.message);
                if (error)
                    return "message." + error;
            }
            return null;
        };

        /**
         * Creates a PushAllMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PushAllMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PushAllMsg} PushAllMsg
         */
        PushAllMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PushAllMsg)
                return object;
            var message = new $root.pb.PushAllMsg();
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".pb.PushAllMsg.message: object expected");
                message.message = $root.pb.Message.fromObject(object.message);
            }
            return message;
        };

        /**
         * Creates a plain object from a PushAllMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PushAllMsg
         * @static
         * @param {pb.PushAllMsg} message PushAllMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushAllMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = null;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.pb.Message.toObject(message.message, options);
            return object;
        };

        /**
         * Converts this PushAllMsg to JSON.
         * @function toJSON
         * @memberof pb.PushAllMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushAllMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PushAllMsg
         * @function getTypeUrl
         * @memberof pb.PushAllMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PushAllMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PushAllMsg";
        };

        return PushAllMsg;
    })();

    pb.LogicExt = (function() {

        /**
         * Constructs a new LogicExt service.
         * @memberof pb
         * @classdesc Represents a LogicExt
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function LogicExt(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (LogicExt.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = LogicExt;

        /**
         * Creates new LogicExt service using the specified rpc implementation.
         * @function create
         * @memberof pb.LogicExt
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {LogicExt} RPC service. Useful where requests and/or responses are streamed.
         */
        LogicExt.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pb.LogicExt#registerDevice}.
         * @memberof pb.LogicExt
         * @typedef RegisterDeviceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.RegisterDeviceResp} [response] RegisterDeviceResp
         */

        /**
         * Calls RegisterDevice.
         * @function registerDevice
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IRegisterDeviceReq} request RegisterDeviceReq message or plain object
         * @param {pb.LogicExt.RegisterDeviceCallback} callback Node-style callback called with the error, if any, and RegisterDeviceResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.registerDevice = function registerDevice(request, callback) {
            return this.rpcCall(registerDevice, $root.pb.RegisterDeviceReq, $root.pb.RegisterDeviceResp, request, callback);
        }, "name", { value: "RegisterDevice" });

        /**
         * Calls RegisterDevice.
         * @function registerDevice
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IRegisterDeviceReq} request RegisterDeviceReq message or plain object
         * @returns {Promise<pb.RegisterDeviceResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#pushRoom}.
         * @memberof pb.LogicExt
         * @typedef PushRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls PushRoom.
         * @function pushRoom
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IPushRoomReq} request PushRoomReq message or plain object
         * @param {pb.LogicExt.PushRoomCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.pushRoom = function pushRoom(request, callback) {
            return this.rpcCall(pushRoom, $root.pb.PushRoomReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "PushRoom" });

        /**
         * Calls PushRoom.
         * @function pushRoom
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IPushRoomReq} request PushRoomReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#sendMessageToFriend}.
         * @memberof pb.LogicExt
         * @typedef SendMessageToFriendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.SendMessageResp} [response] SendMessageResp
         */

        /**
         * Calls SendMessageToFriend.
         * @function sendMessageToFriend
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.ISendMessageReq} request SendMessageReq message or plain object
         * @param {pb.LogicExt.SendMessageToFriendCallback} callback Node-style callback called with the error, if any, and SendMessageResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.sendMessageToFriend = function sendMessageToFriend(request, callback) {
            return this.rpcCall(sendMessageToFriend, $root.pb.SendMessageReq, $root.pb.SendMessageResp, request, callback);
        }, "name", { value: "SendMessageToFriend" });

        /**
         * Calls SendMessageToFriend.
         * @function sendMessageToFriend
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.ISendMessageReq} request SendMessageReq message or plain object
         * @returns {Promise<pb.SendMessageResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#addFriend}.
         * @memberof pb.LogicExt
         * @typedef AddFriendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls AddFriend.
         * @function addFriend
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IAddFriendReq} request AddFriendReq message or plain object
         * @param {pb.LogicExt.AddFriendCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.addFriend = function addFriend(request, callback) {
            return this.rpcCall(addFriend, $root.pb.AddFriendReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "AddFriend" });

        /**
         * Calls AddFriend.
         * @function addFriend
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IAddFriendReq} request AddFriendReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#agreeAddFriend}.
         * @memberof pb.LogicExt
         * @typedef AgreeAddFriendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls AgreeAddFriend.
         * @function agreeAddFriend
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IAgreeAddFriendReq} request AgreeAddFriendReq message or plain object
         * @param {pb.LogicExt.AgreeAddFriendCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.agreeAddFriend = function agreeAddFriend(request, callback) {
            return this.rpcCall(agreeAddFriend, $root.pb.AgreeAddFriendReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "AgreeAddFriend" });

        /**
         * Calls AgreeAddFriend.
         * @function agreeAddFriend
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IAgreeAddFriendReq} request AgreeAddFriendReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#setFriend}.
         * @memberof pb.LogicExt
         * @typedef SetFriendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.SetFriendResp} [response] SetFriendResp
         */

        /**
         * Calls SetFriend.
         * @function setFriend
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.ISetFriendReq} request SetFriendReq message or plain object
         * @param {pb.LogicExt.SetFriendCallback} callback Node-style callback called with the error, if any, and SetFriendResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.setFriend = function setFriend(request, callback) {
            return this.rpcCall(setFriend, $root.pb.SetFriendReq, $root.pb.SetFriendResp, request, callback);
        }, "name", { value: "SetFriend" });

        /**
         * Calls SetFriend.
         * @function setFriend
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.ISetFriendReq} request SetFriendReq message or plain object
         * @returns {Promise<pb.SetFriendResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#getFriends}.
         * @memberof pb.LogicExt
         * @typedef GetFriendsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.GetFriendsResp} [response] GetFriendsResp
         */

        /**
         * Calls GetFriends.
         * @function getFriends
         * @memberof pb.LogicExt
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {pb.LogicExt.GetFriendsCallback} callback Node-style callback called with the error, if any, and GetFriendsResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.getFriends = function getFriends(request, callback) {
            return this.rpcCall(getFriends, $root.google.protobuf.Empty, $root.pb.GetFriendsResp, request, callback);
        }, "name", { value: "GetFriends" });

        /**
         * Calls GetFriends.
         * @function getFriends
         * @memberof pb.LogicExt
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<pb.GetFriendsResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#sendMessageToGroup}.
         * @memberof pb.LogicExt
         * @typedef SendMessageToGroupCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.SendMessageResp} [response] SendMessageResp
         */

        /**
         * Calls SendMessageToGroup.
         * @function sendMessageToGroup
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.ISendMessageReq} request SendMessageReq message or plain object
         * @param {pb.LogicExt.SendMessageToGroupCallback} callback Node-style callback called with the error, if any, and SendMessageResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.sendMessageToGroup = function sendMessageToGroup(request, callback) {
            return this.rpcCall(sendMessageToGroup, $root.pb.SendMessageReq, $root.pb.SendMessageResp, request, callback);
        }, "name", { value: "SendMessageToGroup" });

        /**
         * Calls SendMessageToGroup.
         * @function sendMessageToGroup
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.ISendMessageReq} request SendMessageReq message or plain object
         * @returns {Promise<pb.SendMessageResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#createGroup}.
         * @memberof pb.LogicExt
         * @typedef CreateGroupCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.CreateGroupResp} [response] CreateGroupResp
         */

        /**
         * Calls CreateGroup.
         * @function createGroup
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.ICreateGroupReq} request CreateGroupReq message or plain object
         * @param {pb.LogicExt.CreateGroupCallback} callback Node-style callback called with the error, if any, and CreateGroupResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.createGroup = function createGroup(request, callback) {
            return this.rpcCall(createGroup, $root.pb.CreateGroupReq, $root.pb.CreateGroupResp, request, callback);
        }, "name", { value: "CreateGroup" });

        /**
         * Calls CreateGroup.
         * @function createGroup
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.ICreateGroupReq} request CreateGroupReq message or plain object
         * @returns {Promise<pb.CreateGroupResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#updateGroup}.
         * @memberof pb.LogicExt
         * @typedef UpdateGroupCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls UpdateGroup.
         * @function updateGroup
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IUpdateGroupReq} request UpdateGroupReq message or plain object
         * @param {pb.LogicExt.UpdateGroupCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.updateGroup = function updateGroup(request, callback) {
            return this.rpcCall(updateGroup, $root.pb.UpdateGroupReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "UpdateGroup" });

        /**
         * Calls UpdateGroup.
         * @function updateGroup
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IUpdateGroupReq} request UpdateGroupReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#getGroup}.
         * @memberof pb.LogicExt
         * @typedef GetGroupCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.GetGroupResp} [response] GetGroupResp
         */

        /**
         * Calls GetGroup.
         * @function getGroup
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IGetGroupReq} request GetGroupReq message or plain object
         * @param {pb.LogicExt.GetGroupCallback} callback Node-style callback called with the error, if any, and GetGroupResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.getGroup = function getGroup(request, callback) {
            return this.rpcCall(getGroup, $root.pb.GetGroupReq, $root.pb.GetGroupResp, request, callback);
        }, "name", { value: "GetGroup" });

        /**
         * Calls GetGroup.
         * @function getGroup
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IGetGroupReq} request GetGroupReq message or plain object
         * @returns {Promise<pb.GetGroupResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#getGroups}.
         * @memberof pb.LogicExt
         * @typedef GetGroupsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.GetGroupsResp} [response] GetGroupsResp
         */

        /**
         * Calls GetGroups.
         * @function getGroups
         * @memberof pb.LogicExt
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {pb.LogicExt.GetGroupsCallback} callback Node-style callback called with the error, if any, and GetGroupsResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.getGroups = function getGroups(request, callback) {
            return this.rpcCall(getGroups, $root.google.protobuf.Empty, $root.pb.GetGroupsResp, request, callback);
        }, "name", { value: "GetGroups" });

        /**
         * Calls GetGroups.
         * @function getGroups
         * @memberof pb.LogicExt
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<pb.GetGroupsResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#addGroupMembers}.
         * @memberof pb.LogicExt
         * @typedef AddGroupMembersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.AddGroupMembersResp} [response] AddGroupMembersResp
         */

        /**
         * Calls AddGroupMembers.
         * @function addGroupMembers
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IAddGroupMembersReq} request AddGroupMembersReq message or plain object
         * @param {pb.LogicExt.AddGroupMembersCallback} callback Node-style callback called with the error, if any, and AddGroupMembersResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.addGroupMembers = function addGroupMembers(request, callback) {
            return this.rpcCall(addGroupMembers, $root.pb.AddGroupMembersReq, $root.pb.AddGroupMembersResp, request, callback);
        }, "name", { value: "AddGroupMembers" });

        /**
         * Calls AddGroupMembers.
         * @function addGroupMembers
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IAddGroupMembersReq} request AddGroupMembersReq message or plain object
         * @returns {Promise<pb.AddGroupMembersResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#updateGroupMember}.
         * @memberof pb.LogicExt
         * @typedef UpdateGroupMemberCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls UpdateGroupMember.
         * @function updateGroupMember
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IUpdateGroupMemberReq} request UpdateGroupMemberReq message or plain object
         * @param {pb.LogicExt.UpdateGroupMemberCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.updateGroupMember = function updateGroupMember(request, callback) {
            return this.rpcCall(updateGroupMember, $root.pb.UpdateGroupMemberReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "UpdateGroupMember" });

        /**
         * Calls UpdateGroupMember.
         * @function updateGroupMember
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IUpdateGroupMemberReq} request UpdateGroupMemberReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#deleteGroupMember}.
         * @memberof pb.LogicExt
         * @typedef DeleteGroupMemberCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls DeleteGroupMember.
         * @function deleteGroupMember
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IDeleteGroupMemberReq} request DeleteGroupMemberReq message or plain object
         * @param {pb.LogicExt.DeleteGroupMemberCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.deleteGroupMember = function deleteGroupMember(request, callback) {
            return this.rpcCall(deleteGroupMember, $root.pb.DeleteGroupMemberReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "DeleteGroupMember" });

        /**
         * Calls DeleteGroupMember.
         * @function deleteGroupMember
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IDeleteGroupMemberReq} request DeleteGroupMemberReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicExt#getGroupMembers}.
         * @memberof pb.LogicExt
         * @typedef GetGroupMembersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.GetGroupMembersResp} [response] GetGroupMembersResp
         */

        /**
         * Calls GetGroupMembers.
         * @function getGroupMembers
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IGetGroupMembersReq} request GetGroupMembersReq message or plain object
         * @param {pb.LogicExt.GetGroupMembersCallback} callback Node-style callback called with the error, if any, and GetGroupMembersResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicExt.prototype.getGroupMembers = function getGroupMembers(request, callback) {
            return this.rpcCall(getGroupMembers, $root.pb.GetGroupMembersReq, $root.pb.GetGroupMembersResp, request, callback);
        }, "name", { value: "GetGroupMembers" });

        /**
         * Calls GetGroupMembers.
         * @function getGroupMembers
         * @memberof pb.LogicExt
         * @instance
         * @param {pb.IGetGroupMembersReq} request GetGroupMembersReq message or plain object
         * @returns {Promise<pb.GetGroupMembersResp>} Promise
         * @variation 2
         */

        return LogicExt;
    })();

    pb.RegisterDeviceReq = (function() {

        /**
         * Properties of a RegisterDeviceReq.
         * @memberof pb
         * @interface IRegisterDeviceReq
         * @property {number|null} [type] RegisterDeviceReq type
         * @property {string|null} [brand] RegisterDeviceReq brand
         * @property {string|null} [model] RegisterDeviceReq model
         * @property {string|null} [systemVersion] RegisterDeviceReq systemVersion
         * @property {string|null} [sdkVersion] RegisterDeviceReq sdkVersion
         */

        /**
         * Constructs a new RegisterDeviceReq.
         * @memberof pb
         * @classdesc Represents a RegisterDeviceReq.
         * @implements IRegisterDeviceReq
         * @constructor
         * @param {pb.IRegisterDeviceReq=} [properties] Properties to set
         */
        function RegisterDeviceReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterDeviceReq type.
         * @member {number} type
         * @memberof pb.RegisterDeviceReq
         * @instance
         */
        RegisterDeviceReq.prototype.type = 0;

        /**
         * RegisterDeviceReq brand.
         * @member {string} brand
         * @memberof pb.RegisterDeviceReq
         * @instance
         */
        RegisterDeviceReq.prototype.brand = "";

        /**
         * RegisterDeviceReq model.
         * @member {string} model
         * @memberof pb.RegisterDeviceReq
         * @instance
         */
        RegisterDeviceReq.prototype.model = "";

        /**
         * RegisterDeviceReq systemVersion.
         * @member {string} systemVersion
         * @memberof pb.RegisterDeviceReq
         * @instance
         */
        RegisterDeviceReq.prototype.systemVersion = "";

        /**
         * RegisterDeviceReq sdkVersion.
         * @member {string} sdkVersion
         * @memberof pb.RegisterDeviceReq
         * @instance
         */
        RegisterDeviceReq.prototype.sdkVersion = "";

        /**
         * Creates a new RegisterDeviceReq instance using the specified properties.
         * @function create
         * @memberof pb.RegisterDeviceReq
         * @static
         * @param {pb.IRegisterDeviceReq=} [properties] Properties to set
         * @returns {pb.RegisterDeviceReq} RegisterDeviceReq instance
         */
        RegisterDeviceReq.create = function create(properties) {
            return new RegisterDeviceReq(properties);
        };

        /**
         * Encodes the specified RegisterDeviceReq message. Does not implicitly {@link pb.RegisterDeviceReq.verify|verify} messages.
         * @function encode
         * @memberof pb.RegisterDeviceReq
         * @static
         * @param {pb.IRegisterDeviceReq} message RegisterDeviceReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterDeviceReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.brand != null && Object.hasOwnProperty.call(message, "brand"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.brand);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.model);
            if (message.systemVersion != null && Object.hasOwnProperty.call(message, "systemVersion"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.systemVersion);
            if (message.sdkVersion != null && Object.hasOwnProperty.call(message, "sdkVersion"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.sdkVersion);
            return writer;
        };

        /**
         * Encodes the specified RegisterDeviceReq message, length delimited. Does not implicitly {@link pb.RegisterDeviceReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RegisterDeviceReq
         * @static
         * @param {pb.IRegisterDeviceReq} message RegisterDeviceReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterDeviceReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterDeviceReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RegisterDeviceReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RegisterDeviceReq} RegisterDeviceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterDeviceReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RegisterDeviceReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                case 3: {
                        message.brand = reader.string();
                        break;
                    }
                case 4: {
                        message.model = reader.string();
                        break;
                    }
                case 5: {
                        message.systemVersion = reader.string();
                        break;
                    }
                case 6: {
                        message.sdkVersion = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterDeviceReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RegisterDeviceReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RegisterDeviceReq} RegisterDeviceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterDeviceReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterDeviceReq message.
         * @function verify
         * @memberof pb.RegisterDeviceReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterDeviceReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.brand != null && message.hasOwnProperty("brand"))
                if (!$util.isString(message.brand))
                    return "brand: string expected";
            if (message.model != null && message.hasOwnProperty("model"))
                if (!$util.isString(message.model))
                    return "model: string expected";
            if (message.systemVersion != null && message.hasOwnProperty("systemVersion"))
                if (!$util.isString(message.systemVersion))
                    return "systemVersion: string expected";
            if (message.sdkVersion != null && message.hasOwnProperty("sdkVersion"))
                if (!$util.isString(message.sdkVersion))
                    return "sdkVersion: string expected";
            return null;
        };

        /**
         * Creates a RegisterDeviceReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RegisterDeviceReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RegisterDeviceReq} RegisterDeviceReq
         */
        RegisterDeviceReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RegisterDeviceReq)
                return object;
            var message = new $root.pb.RegisterDeviceReq();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.brand != null)
                message.brand = String(object.brand);
            if (object.model != null)
                message.model = String(object.model);
            if (object.systemVersion != null)
                message.systemVersion = String(object.systemVersion);
            if (object.sdkVersion != null)
                message.sdkVersion = String(object.sdkVersion);
            return message;
        };

        /**
         * Creates a plain object from a RegisterDeviceReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RegisterDeviceReq
         * @static
         * @param {pb.RegisterDeviceReq} message RegisterDeviceReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterDeviceReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.brand = "";
                object.model = "";
                object.systemVersion = "";
                object.sdkVersion = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.brand != null && message.hasOwnProperty("brand"))
                object.brand = message.brand;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = message.model;
            if (message.systemVersion != null && message.hasOwnProperty("systemVersion"))
                object.systemVersion = message.systemVersion;
            if (message.sdkVersion != null && message.hasOwnProperty("sdkVersion"))
                object.sdkVersion = message.sdkVersion;
            return object;
        };

        /**
         * Converts this RegisterDeviceReq to JSON.
         * @function toJSON
         * @memberof pb.RegisterDeviceReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterDeviceReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterDeviceReq
         * @function getTypeUrl
         * @memberof pb.RegisterDeviceReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterDeviceReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.RegisterDeviceReq";
        };

        return RegisterDeviceReq;
    })();

    pb.RegisterDeviceResp = (function() {

        /**
         * Properties of a RegisterDeviceResp.
         * @memberof pb
         * @interface IRegisterDeviceResp
         * @property {number|Long|null} [deviceId] RegisterDeviceResp deviceId
         */

        /**
         * Constructs a new RegisterDeviceResp.
         * @memberof pb
         * @classdesc Represents a RegisterDeviceResp.
         * @implements IRegisterDeviceResp
         * @constructor
         * @param {pb.IRegisterDeviceResp=} [properties] Properties to set
         */
        function RegisterDeviceResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterDeviceResp deviceId.
         * @member {number|Long} deviceId
         * @memberof pb.RegisterDeviceResp
         * @instance
         */
        RegisterDeviceResp.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RegisterDeviceResp instance using the specified properties.
         * @function create
         * @memberof pb.RegisterDeviceResp
         * @static
         * @param {pb.IRegisterDeviceResp=} [properties] Properties to set
         * @returns {pb.RegisterDeviceResp} RegisterDeviceResp instance
         */
        RegisterDeviceResp.create = function create(properties) {
            return new RegisterDeviceResp(properties);
        };

        /**
         * Encodes the specified RegisterDeviceResp message. Does not implicitly {@link pb.RegisterDeviceResp.verify|verify} messages.
         * @function encode
         * @memberof pb.RegisterDeviceResp
         * @static
         * @param {pb.IRegisterDeviceResp} message RegisterDeviceResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterDeviceResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.deviceId);
            return writer;
        };

        /**
         * Encodes the specified RegisterDeviceResp message, length delimited. Does not implicitly {@link pb.RegisterDeviceResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RegisterDeviceResp
         * @static
         * @param {pb.IRegisterDeviceResp} message RegisterDeviceResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterDeviceResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterDeviceResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RegisterDeviceResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RegisterDeviceResp} RegisterDeviceResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterDeviceResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RegisterDeviceResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deviceId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterDeviceResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RegisterDeviceResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RegisterDeviceResp} RegisterDeviceResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterDeviceResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterDeviceResp message.
         * @function verify
         * @memberof pb.RegisterDeviceResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterDeviceResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                    return "deviceId: integer|Long expected";
            return null;
        };

        /**
         * Creates a RegisterDeviceResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RegisterDeviceResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RegisterDeviceResp} RegisterDeviceResp
         */
        RegisterDeviceResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RegisterDeviceResp)
                return object;
            var message = new $root.pb.RegisterDeviceResp();
            if (object.deviceId != null)
                if ($util.Long)
                    (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = false;
                else if (typeof object.deviceId === "string")
                    message.deviceId = parseInt(object.deviceId, 10);
                else if (typeof object.deviceId === "number")
                    message.deviceId = object.deviceId;
                else if (typeof object.deviceId === "object")
                    message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RegisterDeviceResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RegisterDeviceResp
         * @static
         * @param {pb.RegisterDeviceResp} message RegisterDeviceResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterDeviceResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceId = options.longs === String ? "0" : 0;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (typeof message.deviceId === "number")
                    object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
                else
                    object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber() : message.deviceId;
            return object;
        };

        /**
         * Converts this RegisterDeviceResp to JSON.
         * @function toJSON
         * @memberof pb.RegisterDeviceResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterDeviceResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterDeviceResp
         * @function getTypeUrl
         * @memberof pb.RegisterDeviceResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterDeviceResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.RegisterDeviceResp";
        };

        return RegisterDeviceResp;
    })();

    pb.SendMessageReq = (function() {

        /**
         * Properties of a SendMessageReq.
         * @memberof pb
         * @interface ISendMessageReq
         * @property {number|Long|null} [receiverId] SendMessageReq receiverId
         * @property {Uint8Array|null} [content] SendMessageReq content
         * @property {number|Long|null} [sendTime] SendMessageReq sendTime
         */

        /**
         * Constructs a new SendMessageReq.
         * @memberof pb
         * @classdesc Represents a SendMessageReq.
         * @implements ISendMessageReq
         * @constructor
         * @param {pb.ISendMessageReq=} [properties] Properties to set
         */
        function SendMessageReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendMessageReq receiverId.
         * @member {number|Long} receiverId
         * @memberof pb.SendMessageReq
         * @instance
         */
        SendMessageReq.prototype.receiverId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SendMessageReq content.
         * @member {Uint8Array} content
         * @memberof pb.SendMessageReq
         * @instance
         */
        SendMessageReq.prototype.content = $util.newBuffer([]);

        /**
         * SendMessageReq sendTime.
         * @member {number|Long} sendTime
         * @memberof pb.SendMessageReq
         * @instance
         */
        SendMessageReq.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SendMessageReq instance using the specified properties.
         * @function create
         * @memberof pb.SendMessageReq
         * @static
         * @param {pb.ISendMessageReq=} [properties] Properties to set
         * @returns {pb.SendMessageReq} SendMessageReq instance
         */
        SendMessageReq.create = function create(properties) {
            return new SendMessageReq(properties);
        };

        /**
         * Encodes the specified SendMessageReq message. Does not implicitly {@link pb.SendMessageReq.verify|verify} messages.
         * @function encode
         * @memberof pb.SendMessageReq
         * @static
         * @param {pb.ISendMessageReq} message SendMessageReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.receiverId);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.content);
            if (message.sendTime != null && Object.hasOwnProperty.call(message, "sendTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.sendTime);
            return writer;
        };

        /**
         * Encodes the specified SendMessageReq message, length delimited. Does not implicitly {@link pb.SendMessageReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SendMessageReq
         * @static
         * @param {pb.ISendMessageReq} message SendMessageReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendMessageReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SendMessageReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SendMessageReq} SendMessageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SendMessageReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.receiverId = reader.int64();
                        break;
                    }
                case 2: {
                        message.content = reader.bytes();
                        break;
                    }
                case 3: {
                        message.sendTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendMessageReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SendMessageReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SendMessageReq} SendMessageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendMessageReq message.
         * @function verify
         * @memberof pb.SendMessageReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMessageReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                if (!$util.isInteger(message.receiverId) && !(message.receiverId && $util.isInteger(message.receiverId.low) && $util.isInteger(message.receiverId.high)))
                    return "receiverId: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                    return "content: buffer expected";
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (!$util.isInteger(message.sendTime) && !(message.sendTime && $util.isInteger(message.sendTime.low) && $util.isInteger(message.sendTime.high)))
                    return "sendTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a SendMessageReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SendMessageReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SendMessageReq} SendMessageReq
         */
        SendMessageReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SendMessageReq)
                return object;
            var message = new $root.pb.SendMessageReq();
            if (object.receiverId != null)
                if ($util.Long)
                    (message.receiverId = $util.Long.fromValue(object.receiverId)).unsigned = false;
                else if (typeof object.receiverId === "string")
                    message.receiverId = parseInt(object.receiverId, 10);
                else if (typeof object.receiverId === "number")
                    message.receiverId = object.receiverId;
                else if (typeof object.receiverId === "object")
                    message.receiverId = new $util.LongBits(object.receiverId.low >>> 0, object.receiverId.high >>> 0).toNumber();
            if (object.content != null)
                if (typeof object.content === "string")
                    $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
                else if (object.content.length >= 0)
                    message.content = object.content;
            if (object.sendTime != null)
                if ($util.Long)
                    (message.sendTime = $util.Long.fromValue(object.sendTime)).unsigned = false;
                else if (typeof object.sendTime === "string")
                    message.sendTime = parseInt(object.sendTime, 10);
                else if (typeof object.sendTime === "number")
                    message.sendTime = object.sendTime;
                else if (typeof object.sendTime === "object")
                    message.sendTime = new $util.LongBits(object.sendTime.low >>> 0, object.sendTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SendMessageReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SendMessageReq
         * @static
         * @param {pb.SendMessageReq} message SendMessageReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMessageReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.receiverId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.receiverId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.content = "";
                else {
                    object.content = [];
                    if (options.bytes !== Array)
                        object.content = $util.newBuffer(object.content);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sendTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendTime = options.longs === String ? "0" : 0;
            }
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                if (typeof message.receiverId === "number")
                    object.receiverId = options.longs === String ? String(message.receiverId) : message.receiverId;
                else
                    object.receiverId = options.longs === String ? $util.Long.prototype.toString.call(message.receiverId) : options.longs === Number ? new $util.LongBits(message.receiverId.low >>> 0, message.receiverId.high >>> 0).toNumber() : message.receiverId;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (typeof message.sendTime === "number")
                    object.sendTime = options.longs === String ? String(message.sendTime) : message.sendTime;
                else
                    object.sendTime = options.longs === String ? $util.Long.prototype.toString.call(message.sendTime) : options.longs === Number ? new $util.LongBits(message.sendTime.low >>> 0, message.sendTime.high >>> 0).toNumber() : message.sendTime;
            return object;
        };

        /**
         * Converts this SendMessageReq to JSON.
         * @function toJSON
         * @memberof pb.SendMessageReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMessageReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendMessageReq
         * @function getTypeUrl
         * @memberof pb.SendMessageReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendMessageReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SendMessageReq";
        };

        return SendMessageReq;
    })();

    pb.SendMessageResp = (function() {

        /**
         * Properties of a SendMessageResp.
         * @memberof pb
         * @interface ISendMessageResp
         * @property {number|Long|null} [seq] SendMessageResp seq
         */

        /**
         * Constructs a new SendMessageResp.
         * @memberof pb
         * @classdesc Represents a SendMessageResp.
         * @implements ISendMessageResp
         * @constructor
         * @param {pb.ISendMessageResp=} [properties] Properties to set
         */
        function SendMessageResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendMessageResp seq.
         * @member {number|Long} seq
         * @memberof pb.SendMessageResp
         * @instance
         */
        SendMessageResp.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SendMessageResp instance using the specified properties.
         * @function create
         * @memberof pb.SendMessageResp
         * @static
         * @param {pb.ISendMessageResp=} [properties] Properties to set
         * @returns {pb.SendMessageResp} SendMessageResp instance
         */
        SendMessageResp.create = function create(properties) {
            return new SendMessageResp(properties);
        };

        /**
         * Encodes the specified SendMessageResp message. Does not implicitly {@link pb.SendMessageResp.verify|verify} messages.
         * @function encode
         * @memberof pb.SendMessageResp
         * @static
         * @param {pb.ISendMessageResp} message SendMessageResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seq);
            return writer;
        };

        /**
         * Encodes the specified SendMessageResp message, length delimited. Does not implicitly {@link pb.SendMessageResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SendMessageResp
         * @static
         * @param {pb.ISendMessageResp} message SendMessageResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendMessageResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SendMessageResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SendMessageResp} SendMessageResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SendMessageResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.seq = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendMessageResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SendMessageResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SendMessageResp} SendMessageResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendMessageResp message.
         * @function verify
         * @memberof pb.SendMessageResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMessageResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            return null;
        };

        /**
         * Creates a SendMessageResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SendMessageResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SendMessageResp} SendMessageResp
         */
        SendMessageResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SendMessageResp)
                return object;
            var message = new $root.pb.SendMessageResp();
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SendMessageResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SendMessageResp
         * @static
         * @param {pb.SendMessageResp} message SendMessageResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMessageResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            return object;
        };

        /**
         * Converts this SendMessageResp to JSON.
         * @function toJSON
         * @memberof pb.SendMessageResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMessageResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendMessageResp
         * @function getTypeUrl
         * @memberof pb.SendMessageResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendMessageResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SendMessageResp";
        };

        return SendMessageResp;
    })();

    pb.PushRoomReq = (function() {

        /**
         * Properties of a PushRoomReq.
         * @memberof pb
         * @interface IPushRoomReq
         * @property {number|Long|null} [roomId] PushRoomReq roomId
         * @property {number|null} [code] PushRoomReq code
         * @property {Uint8Array|null} [content] PushRoomReq content
         * @property {number|Long|null} [sendTime] PushRoomReq sendTime
         * @property {boolean|null} [isPersist] PushRoomReq isPersist
         * @property {boolean|null} [isPriority] PushRoomReq isPriority
         */

        /**
         * Constructs a new PushRoomReq.
         * @memberof pb
         * @classdesc Represents a PushRoomReq.
         * @implements IPushRoomReq
         * @constructor
         * @param {pb.IPushRoomReq=} [properties] Properties to set
         */
        function PushRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushRoomReq roomId.
         * @member {number|Long} roomId
         * @memberof pb.PushRoomReq
         * @instance
         */
        PushRoomReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PushRoomReq code.
         * @member {number} code
         * @memberof pb.PushRoomReq
         * @instance
         */
        PushRoomReq.prototype.code = 0;

        /**
         * PushRoomReq content.
         * @member {Uint8Array} content
         * @memberof pb.PushRoomReq
         * @instance
         */
        PushRoomReq.prototype.content = $util.newBuffer([]);

        /**
         * PushRoomReq sendTime.
         * @member {number|Long} sendTime
         * @memberof pb.PushRoomReq
         * @instance
         */
        PushRoomReq.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PushRoomReq isPersist.
         * @member {boolean} isPersist
         * @memberof pb.PushRoomReq
         * @instance
         */
        PushRoomReq.prototype.isPersist = false;

        /**
         * PushRoomReq isPriority.
         * @member {boolean} isPriority
         * @memberof pb.PushRoomReq
         * @instance
         */
        PushRoomReq.prototype.isPriority = false;

        /**
         * Creates a new PushRoomReq instance using the specified properties.
         * @function create
         * @memberof pb.PushRoomReq
         * @static
         * @param {pb.IPushRoomReq=} [properties] Properties to set
         * @returns {pb.PushRoomReq} PushRoomReq instance
         */
        PushRoomReq.create = function create(properties) {
            return new PushRoomReq(properties);
        };

        /**
         * Encodes the specified PushRoomReq message. Does not implicitly {@link pb.PushRoomReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PushRoomReq
         * @static
         * @param {pb.IPushRoomReq} message PushRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.content);
            if (message.sendTime != null && Object.hasOwnProperty.call(message, "sendTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.sendTime);
            if (message.isPersist != null && Object.hasOwnProperty.call(message, "isPersist"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isPersist);
            if (message.isPriority != null && Object.hasOwnProperty.call(message, "isPriority"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isPriority);
            return writer;
        };

        /**
         * Encodes the specified PushRoomReq message, length delimited. Does not implicitly {@link pb.PushRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PushRoomReq
         * @static
         * @param {pb.IPushRoomReq} message PushRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PushRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PushRoomReq} PushRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PushRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.int64();
                        break;
                    }
                case 2: {
                        message.code = reader.int32();
                        break;
                    }
                case 3: {
                        message.content = reader.bytes();
                        break;
                    }
                case 4: {
                        message.sendTime = reader.int64();
                        break;
                    }
                case 5: {
                        message.isPersist = reader.bool();
                        break;
                    }
                case 6: {
                        message.isPriority = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PushRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PushRoomReq} PushRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushRoomReq message.
         * @function verify
         * @memberof pb.PushRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                    return "content: buffer expected";
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (!$util.isInteger(message.sendTime) && !(message.sendTime && $util.isInteger(message.sendTime.low) && $util.isInteger(message.sendTime.high)))
                    return "sendTime: integer|Long expected";
            if (message.isPersist != null && message.hasOwnProperty("isPersist"))
                if (typeof message.isPersist !== "boolean")
                    return "isPersist: boolean expected";
            if (message.isPriority != null && message.hasOwnProperty("isPriority"))
                if (typeof message.isPriority !== "boolean")
                    return "isPriority: boolean expected";
            return null;
        };

        /**
         * Creates a PushRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PushRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PushRoomReq} PushRoomReq
         */
        PushRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PushRoomReq)
                return object;
            var message = new $root.pb.PushRoomReq();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.content != null)
                if (typeof object.content === "string")
                    $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
                else if (object.content.length >= 0)
                    message.content = object.content;
            if (object.sendTime != null)
                if ($util.Long)
                    (message.sendTime = $util.Long.fromValue(object.sendTime)).unsigned = false;
                else if (typeof object.sendTime === "string")
                    message.sendTime = parseInt(object.sendTime, 10);
                else if (typeof object.sendTime === "number")
                    message.sendTime = object.sendTime;
                else if (typeof object.sendTime === "object")
                    message.sendTime = new $util.LongBits(object.sendTime.low >>> 0, object.sendTime.high >>> 0).toNumber();
            if (object.isPersist != null)
                message.isPersist = Boolean(object.isPersist);
            if (object.isPriority != null)
                message.isPriority = Boolean(object.isPriority);
            return message;
        };

        /**
         * Creates a plain object from a PushRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PushRoomReq
         * @static
         * @param {pb.PushRoomReq} message PushRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                object.code = 0;
                if (options.bytes === String)
                    object.content = "";
                else {
                    object.content = [];
                    if (options.bytes !== Array)
                        object.content = $util.newBuffer(object.content);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sendTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendTime = options.longs === String ? "0" : 0;
                object.isPersist = false;
                object.isPriority = false;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (typeof message.sendTime === "number")
                    object.sendTime = options.longs === String ? String(message.sendTime) : message.sendTime;
                else
                    object.sendTime = options.longs === String ? $util.Long.prototype.toString.call(message.sendTime) : options.longs === Number ? new $util.LongBits(message.sendTime.low >>> 0, message.sendTime.high >>> 0).toNumber() : message.sendTime;
            if (message.isPersist != null && message.hasOwnProperty("isPersist"))
                object.isPersist = message.isPersist;
            if (message.isPriority != null && message.hasOwnProperty("isPriority"))
                object.isPriority = message.isPriority;
            return object;
        };

        /**
         * Converts this PushRoomReq to JSON.
         * @function toJSON
         * @memberof pb.PushRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PushRoomReq
         * @function getTypeUrl
         * @memberof pb.PushRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PushRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PushRoomReq";
        };

        return PushRoomReq;
    })();

    pb.AddFriendReq = (function() {

        /**
         * Properties of an AddFriendReq.
         * @memberof pb
         * @interface IAddFriendReq
         * @property {number|Long|null} [friendId] AddFriendReq friendId
         * @property {string|null} [remarks] AddFriendReq remarks
         * @property {string|null} [description] AddFriendReq description
         */

        /**
         * Constructs a new AddFriendReq.
         * @memberof pb
         * @classdesc Represents an AddFriendReq.
         * @implements IAddFriendReq
         * @constructor
         * @param {pb.IAddFriendReq=} [properties] Properties to set
         */
        function AddFriendReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddFriendReq friendId.
         * @member {number|Long} friendId
         * @memberof pb.AddFriendReq
         * @instance
         */
        AddFriendReq.prototype.friendId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AddFriendReq remarks.
         * @member {string} remarks
         * @memberof pb.AddFriendReq
         * @instance
         */
        AddFriendReq.prototype.remarks = "";

        /**
         * AddFriendReq description.
         * @member {string} description
         * @memberof pb.AddFriendReq
         * @instance
         */
        AddFriendReq.prototype.description = "";

        /**
         * Creates a new AddFriendReq instance using the specified properties.
         * @function create
         * @memberof pb.AddFriendReq
         * @static
         * @param {pb.IAddFriendReq=} [properties] Properties to set
         * @returns {pb.AddFriendReq} AddFriendReq instance
         */
        AddFriendReq.create = function create(properties) {
            return new AddFriendReq(properties);
        };

        /**
         * Encodes the specified AddFriendReq message. Does not implicitly {@link pb.AddFriendReq.verify|verify} messages.
         * @function encode
         * @memberof pb.AddFriendReq
         * @static
         * @param {pb.IAddFriendReq} message AddFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddFriendReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friendId != null && Object.hasOwnProperty.call(message, "friendId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.friendId);
            if (message.remarks != null && Object.hasOwnProperty.call(message, "remarks"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.remarks);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified AddFriendReq message, length delimited. Does not implicitly {@link pb.AddFriendReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AddFriendReq
         * @static
         * @param {pb.IAddFriendReq} message AddFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddFriendReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddFriendReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AddFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AddFriendReq} AddFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddFriendReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AddFriendReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.friendId = reader.int64();
                        break;
                    }
                case 2: {
                        message.remarks = reader.string();
                        break;
                    }
                case 3: {
                        message.description = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddFriendReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AddFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AddFriendReq} AddFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddFriendReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddFriendReq message.
         * @function verify
         * @memberof pb.AddFriendReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddFriendReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (!$util.isInteger(message.friendId) && !(message.friendId && $util.isInteger(message.friendId.low) && $util.isInteger(message.friendId.high)))
                    return "friendId: integer|Long expected";
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                if (!$util.isString(message.remarks))
                    return "remarks: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates an AddFriendReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AddFriendReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AddFriendReq} AddFriendReq
         */
        AddFriendReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AddFriendReq)
                return object;
            var message = new $root.pb.AddFriendReq();
            if (object.friendId != null)
                if ($util.Long)
                    (message.friendId = $util.Long.fromValue(object.friendId)).unsigned = false;
                else if (typeof object.friendId === "string")
                    message.friendId = parseInt(object.friendId, 10);
                else if (typeof object.friendId === "number")
                    message.friendId = object.friendId;
                else if (typeof object.friendId === "object")
                    message.friendId = new $util.LongBits(object.friendId.low >>> 0, object.friendId.high >>> 0).toNumber();
            if (object.remarks != null)
                message.remarks = String(object.remarks);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from an AddFriendReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AddFriendReq
         * @static
         * @param {pb.AddFriendReq} message AddFriendReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddFriendReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.friendId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.friendId = options.longs === String ? "0" : 0;
                object.remarks = "";
                object.description = "";
            }
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (typeof message.friendId === "number")
                    object.friendId = options.longs === String ? String(message.friendId) : message.friendId;
                else
                    object.friendId = options.longs === String ? $util.Long.prototype.toString.call(message.friendId) : options.longs === Number ? new $util.LongBits(message.friendId.low >>> 0, message.friendId.high >>> 0).toNumber() : message.friendId;
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                object.remarks = message.remarks;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this AddFriendReq to JSON.
         * @function toJSON
         * @memberof pb.AddFriendReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddFriendReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddFriendReq
         * @function getTypeUrl
         * @memberof pb.AddFriendReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddFriendReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.AddFriendReq";
        };

        return AddFriendReq;
    })();

    pb.AgreeAddFriendReq = (function() {

        /**
         * Properties of an AgreeAddFriendReq.
         * @memberof pb
         * @interface IAgreeAddFriendReq
         * @property {number|Long|null} [userId] AgreeAddFriendReq userId
         * @property {string|null} [remarks] AgreeAddFriendReq remarks
         */

        /**
         * Constructs a new AgreeAddFriendReq.
         * @memberof pb
         * @classdesc Represents an AgreeAddFriendReq.
         * @implements IAgreeAddFriendReq
         * @constructor
         * @param {pb.IAgreeAddFriendReq=} [properties] Properties to set
         */
        function AgreeAddFriendReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AgreeAddFriendReq userId.
         * @member {number|Long} userId
         * @memberof pb.AgreeAddFriendReq
         * @instance
         */
        AgreeAddFriendReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AgreeAddFriendReq remarks.
         * @member {string} remarks
         * @memberof pb.AgreeAddFriendReq
         * @instance
         */
        AgreeAddFriendReq.prototype.remarks = "";

        /**
         * Creates a new AgreeAddFriendReq instance using the specified properties.
         * @function create
         * @memberof pb.AgreeAddFriendReq
         * @static
         * @param {pb.IAgreeAddFriendReq=} [properties] Properties to set
         * @returns {pb.AgreeAddFriendReq} AgreeAddFriendReq instance
         */
        AgreeAddFriendReq.create = function create(properties) {
            return new AgreeAddFriendReq(properties);
        };

        /**
         * Encodes the specified AgreeAddFriendReq message. Does not implicitly {@link pb.AgreeAddFriendReq.verify|verify} messages.
         * @function encode
         * @memberof pb.AgreeAddFriendReq
         * @static
         * @param {pb.IAgreeAddFriendReq} message AgreeAddFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgreeAddFriendReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.remarks != null && Object.hasOwnProperty.call(message, "remarks"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.remarks);
            return writer;
        };

        /**
         * Encodes the specified AgreeAddFriendReq message, length delimited. Does not implicitly {@link pb.AgreeAddFriendReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AgreeAddFriendReq
         * @static
         * @param {pb.IAgreeAddFriendReq} message AgreeAddFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgreeAddFriendReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AgreeAddFriendReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AgreeAddFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AgreeAddFriendReq} AgreeAddFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgreeAddFriendReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AgreeAddFriendReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        message.remarks = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AgreeAddFriendReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AgreeAddFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AgreeAddFriendReq} AgreeAddFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgreeAddFriendReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AgreeAddFriendReq message.
         * @function verify
         * @memberof pb.AgreeAddFriendReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AgreeAddFriendReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                if (!$util.isString(message.remarks))
                    return "remarks: string expected";
            return null;
        };

        /**
         * Creates an AgreeAddFriendReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AgreeAddFriendReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AgreeAddFriendReq} AgreeAddFriendReq
         */
        AgreeAddFriendReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AgreeAddFriendReq)
                return object;
            var message = new $root.pb.AgreeAddFriendReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.remarks != null)
                message.remarks = String(object.remarks);
            return message;
        };

        /**
         * Creates a plain object from an AgreeAddFriendReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AgreeAddFriendReq
         * @static
         * @param {pb.AgreeAddFriendReq} message AgreeAddFriendReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AgreeAddFriendReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.remarks = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                object.remarks = message.remarks;
            return object;
        };

        /**
         * Converts this AgreeAddFriendReq to JSON.
         * @function toJSON
         * @memberof pb.AgreeAddFriendReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AgreeAddFriendReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AgreeAddFriendReq
         * @function getTypeUrl
         * @memberof pb.AgreeAddFriendReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AgreeAddFriendReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.AgreeAddFriendReq";
        };

        return AgreeAddFriendReq;
    })();

    pb.SetFriendReq = (function() {

        /**
         * Properties of a SetFriendReq.
         * @memberof pb
         * @interface ISetFriendReq
         * @property {number|Long|null} [friendId] SetFriendReq friendId
         * @property {string|null} [remarks] SetFriendReq remarks
         * @property {string|null} [extra] SetFriendReq extra
         */

        /**
         * Constructs a new SetFriendReq.
         * @memberof pb
         * @classdesc Represents a SetFriendReq.
         * @implements ISetFriendReq
         * @constructor
         * @param {pb.ISetFriendReq=} [properties] Properties to set
         */
        function SetFriendReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetFriendReq friendId.
         * @member {number|Long} friendId
         * @memberof pb.SetFriendReq
         * @instance
         */
        SetFriendReq.prototype.friendId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SetFriendReq remarks.
         * @member {string} remarks
         * @memberof pb.SetFriendReq
         * @instance
         */
        SetFriendReq.prototype.remarks = "";

        /**
         * SetFriendReq extra.
         * @member {string} extra
         * @memberof pb.SetFriendReq
         * @instance
         */
        SetFriendReq.prototype.extra = "";

        /**
         * Creates a new SetFriendReq instance using the specified properties.
         * @function create
         * @memberof pb.SetFriendReq
         * @static
         * @param {pb.ISetFriendReq=} [properties] Properties to set
         * @returns {pb.SetFriendReq} SetFriendReq instance
         */
        SetFriendReq.create = function create(properties) {
            return new SetFriendReq(properties);
        };

        /**
         * Encodes the specified SetFriendReq message. Does not implicitly {@link pb.SetFriendReq.verify|verify} messages.
         * @function encode
         * @memberof pb.SetFriendReq
         * @static
         * @param {pb.ISetFriendReq} message SetFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetFriendReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friendId != null && Object.hasOwnProperty.call(message, "friendId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.friendId);
            if (message.remarks != null && Object.hasOwnProperty.call(message, "remarks"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.remarks);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified SetFriendReq message, length delimited. Does not implicitly {@link pb.SetFriendReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SetFriendReq
         * @static
         * @param {pb.ISetFriendReq} message SetFriendReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetFriendReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetFriendReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SetFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SetFriendReq} SetFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetFriendReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SetFriendReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.friendId = reader.int64();
                        break;
                    }
                case 2: {
                        message.remarks = reader.string();
                        break;
                    }
                case 8: {
                        message.extra = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetFriendReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SetFriendReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SetFriendReq} SetFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetFriendReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetFriendReq message.
         * @function verify
         * @memberof pb.SetFriendReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetFriendReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (!$util.isInteger(message.friendId) && !(message.friendId && $util.isInteger(message.friendId.low) && $util.isInteger(message.friendId.high)))
                    return "friendId: integer|Long expected";
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                if (!$util.isString(message.remarks))
                    return "remarks: string expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates a SetFriendReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SetFriendReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SetFriendReq} SetFriendReq
         */
        SetFriendReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SetFriendReq)
                return object;
            var message = new $root.pb.SetFriendReq();
            if (object.friendId != null)
                if ($util.Long)
                    (message.friendId = $util.Long.fromValue(object.friendId)).unsigned = false;
                else if (typeof object.friendId === "string")
                    message.friendId = parseInt(object.friendId, 10);
                else if (typeof object.friendId === "number")
                    message.friendId = object.friendId;
                else if (typeof object.friendId === "object")
                    message.friendId = new $util.LongBits(object.friendId.low >>> 0, object.friendId.high >>> 0).toNumber();
            if (object.remarks != null)
                message.remarks = String(object.remarks);
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from a SetFriendReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SetFriendReq
         * @static
         * @param {pb.SetFriendReq} message SetFriendReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetFriendReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.friendId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.friendId = options.longs === String ? "0" : 0;
                object.remarks = "";
                object.extra = "";
            }
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (typeof message.friendId === "number")
                    object.friendId = options.longs === String ? String(message.friendId) : message.friendId;
                else
                    object.friendId = options.longs === String ? $util.Long.prototype.toString.call(message.friendId) : options.longs === Number ? new $util.LongBits(message.friendId.low >>> 0, message.friendId.high >>> 0).toNumber() : message.friendId;
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                object.remarks = message.remarks;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this SetFriendReq to JSON.
         * @function toJSON
         * @memberof pb.SetFriendReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetFriendReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetFriendReq
         * @function getTypeUrl
         * @memberof pb.SetFriendReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetFriendReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SetFriendReq";
        };

        return SetFriendReq;
    })();

    pb.SetFriendResp = (function() {

        /**
         * Properties of a SetFriendResp.
         * @memberof pb
         * @interface ISetFriendResp
         * @property {number|Long|null} [friendId] SetFriendResp friendId
         * @property {string|null} [remarks] SetFriendResp remarks
         * @property {string|null} [extra] SetFriendResp extra
         */

        /**
         * Constructs a new SetFriendResp.
         * @memberof pb
         * @classdesc Represents a SetFriendResp.
         * @implements ISetFriendResp
         * @constructor
         * @param {pb.ISetFriendResp=} [properties] Properties to set
         */
        function SetFriendResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetFriendResp friendId.
         * @member {number|Long} friendId
         * @memberof pb.SetFriendResp
         * @instance
         */
        SetFriendResp.prototype.friendId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SetFriendResp remarks.
         * @member {string} remarks
         * @memberof pb.SetFriendResp
         * @instance
         */
        SetFriendResp.prototype.remarks = "";

        /**
         * SetFriendResp extra.
         * @member {string} extra
         * @memberof pb.SetFriendResp
         * @instance
         */
        SetFriendResp.prototype.extra = "";

        /**
         * Creates a new SetFriendResp instance using the specified properties.
         * @function create
         * @memberof pb.SetFriendResp
         * @static
         * @param {pb.ISetFriendResp=} [properties] Properties to set
         * @returns {pb.SetFriendResp} SetFriendResp instance
         */
        SetFriendResp.create = function create(properties) {
            return new SetFriendResp(properties);
        };

        /**
         * Encodes the specified SetFriendResp message. Does not implicitly {@link pb.SetFriendResp.verify|verify} messages.
         * @function encode
         * @memberof pb.SetFriendResp
         * @static
         * @param {pb.ISetFriendResp} message SetFriendResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetFriendResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friendId != null && Object.hasOwnProperty.call(message, "friendId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.friendId);
            if (message.remarks != null && Object.hasOwnProperty.call(message, "remarks"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.remarks);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified SetFriendResp message, length delimited. Does not implicitly {@link pb.SetFriendResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SetFriendResp
         * @static
         * @param {pb.ISetFriendResp} message SetFriendResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetFriendResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetFriendResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SetFriendResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SetFriendResp} SetFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetFriendResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SetFriendResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.friendId = reader.int64();
                        break;
                    }
                case 2: {
                        message.remarks = reader.string();
                        break;
                    }
                case 8: {
                        message.extra = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetFriendResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SetFriendResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SetFriendResp} SetFriendResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetFriendResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetFriendResp message.
         * @function verify
         * @memberof pb.SetFriendResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetFriendResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (!$util.isInteger(message.friendId) && !(message.friendId && $util.isInteger(message.friendId.low) && $util.isInteger(message.friendId.high)))
                    return "friendId: integer|Long expected";
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                if (!$util.isString(message.remarks))
                    return "remarks: string expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates a SetFriendResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SetFriendResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SetFriendResp} SetFriendResp
         */
        SetFriendResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SetFriendResp)
                return object;
            var message = new $root.pb.SetFriendResp();
            if (object.friendId != null)
                if ($util.Long)
                    (message.friendId = $util.Long.fromValue(object.friendId)).unsigned = false;
                else if (typeof object.friendId === "string")
                    message.friendId = parseInt(object.friendId, 10);
                else if (typeof object.friendId === "number")
                    message.friendId = object.friendId;
                else if (typeof object.friendId === "object")
                    message.friendId = new $util.LongBits(object.friendId.low >>> 0, object.friendId.high >>> 0).toNumber();
            if (object.remarks != null)
                message.remarks = String(object.remarks);
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from a SetFriendResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SetFriendResp
         * @static
         * @param {pb.SetFriendResp} message SetFriendResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetFriendResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.friendId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.friendId = options.longs === String ? "0" : 0;
                object.remarks = "";
                object.extra = "";
            }
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (typeof message.friendId === "number")
                    object.friendId = options.longs === String ? String(message.friendId) : message.friendId;
                else
                    object.friendId = options.longs === String ? $util.Long.prototype.toString.call(message.friendId) : options.longs === Number ? new $util.LongBits(message.friendId.low >>> 0, message.friendId.high >>> 0).toNumber() : message.friendId;
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                object.remarks = message.remarks;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this SetFriendResp to JSON.
         * @function toJSON
         * @memberof pb.SetFriendResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetFriendResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetFriendResp
         * @function getTypeUrl
         * @memberof pb.SetFriendResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetFriendResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SetFriendResp";
        };

        return SetFriendResp;
    })();

    pb.Friend = (function() {

        /**
         * Properties of a Friend.
         * @memberof pb
         * @interface IFriend
         * @property {number|Long|null} [userId] Friend userId
         * @property {string|null} [phoneNumber] Friend phoneNumber
         * @property {string|null} [nickname] Friend nickname
         * @property {number|null} [sex] Friend sex
         * @property {string|null} [avatarUrl] Friend avatarUrl
         * @property {string|null} [userExtra] Friend userExtra
         * @property {string|null} [remarks] Friend remarks
         * @property {string|null} [extra] Friend extra
         */

        /**
         * Constructs a new Friend.
         * @memberof pb
         * @classdesc Represents a Friend.
         * @implements IFriend
         * @constructor
         * @param {pb.IFriend=} [properties] Properties to set
         */
        function Friend(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Friend userId.
         * @member {number|Long} userId
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Friend phoneNumber.
         * @member {string} phoneNumber
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.phoneNumber = "";

        /**
         * Friend nickname.
         * @member {string} nickname
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.nickname = "";

        /**
         * Friend sex.
         * @member {number} sex
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.sex = 0;

        /**
         * Friend avatarUrl.
         * @member {string} avatarUrl
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.avatarUrl = "";

        /**
         * Friend userExtra.
         * @member {string} userExtra
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.userExtra = "";

        /**
         * Friend remarks.
         * @member {string} remarks
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.remarks = "";

        /**
         * Friend extra.
         * @member {string} extra
         * @memberof pb.Friend
         * @instance
         */
        Friend.prototype.extra = "";

        /**
         * Creates a new Friend instance using the specified properties.
         * @function create
         * @memberof pb.Friend
         * @static
         * @param {pb.IFriend=} [properties] Properties to set
         * @returns {pb.Friend} Friend instance
         */
        Friend.create = function create(properties) {
            return new Friend(properties);
        };

        /**
         * Encodes the specified Friend message. Does not implicitly {@link pb.Friend.verify|verify} messages.
         * @function encode
         * @memberof pb.Friend
         * @static
         * @param {pb.IFriend} message Friend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Friend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.phoneNumber);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sex);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.avatarUrl);
            if (message.userExtra != null && Object.hasOwnProperty.call(message, "userExtra"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.userExtra);
            if (message.remarks != null && Object.hasOwnProperty.call(message, "remarks"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.remarks);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified Friend message, length delimited. Does not implicitly {@link pb.Friend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Friend
         * @static
         * @param {pb.IFriend} message Friend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Friend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Friend message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Friend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Friend} Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Friend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Friend();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        message.phoneNumber = reader.string();
                        break;
                    }
                case 3: {
                        message.nickname = reader.string();
                        break;
                    }
                case 4: {
                        message.sex = reader.int32();
                        break;
                    }
                case 5: {
                        message.avatarUrl = reader.string();
                        break;
                    }
                case 6: {
                        message.userExtra = reader.string();
                        break;
                    }
                case 7: {
                        message.remarks = reader.string();
                        break;
                    }
                case 8: {
                        message.extra = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Friend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Friend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Friend} Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Friend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Friend message.
         * @function verify
         * @memberof pb.Friend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Friend.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (!$util.isString(message.phoneNumber))
                    return "phoneNumber: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.userExtra != null && message.hasOwnProperty("userExtra"))
                if (!$util.isString(message.userExtra))
                    return "userExtra: string expected";
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                if (!$util.isString(message.remarks))
                    return "remarks: string expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates a Friend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Friend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Friend} Friend
         */
        Friend.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Friend)
                return object;
            var message = new $root.pb.Friend();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.phoneNumber != null)
                message.phoneNumber = String(object.phoneNumber);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.userExtra != null)
                message.userExtra = String(object.userExtra);
            if (object.remarks != null)
                message.remarks = String(object.remarks);
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from a Friend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Friend
         * @static
         * @param {pb.Friend} message Friend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Friend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.phoneNumber = "";
                object.nickname = "";
                object.sex = 0;
                object.avatarUrl = "";
                object.userExtra = "";
                object.remarks = "";
                object.extra = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                object.phoneNumber = message.phoneNumber;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.userExtra != null && message.hasOwnProperty("userExtra"))
                object.userExtra = message.userExtra;
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                object.remarks = message.remarks;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this Friend to JSON.
         * @function toJSON
         * @memberof pb.Friend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Friend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Friend
         * @function getTypeUrl
         * @memberof pb.Friend
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Friend.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Friend";
        };

        return Friend;
    })();

    pb.GetFriendsResp = (function() {

        /**
         * Properties of a GetFriendsResp.
         * @memberof pb
         * @interface IGetFriendsResp
         * @property {Array.<pb.IFriend>|null} [friends] GetFriendsResp friends
         */

        /**
         * Constructs a new GetFriendsResp.
         * @memberof pb
         * @classdesc Represents a GetFriendsResp.
         * @implements IGetFriendsResp
         * @constructor
         * @param {pb.IGetFriendsResp=} [properties] Properties to set
         */
        function GetFriendsResp(properties) {
            this.friends = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetFriendsResp friends.
         * @member {Array.<pb.IFriend>} friends
         * @memberof pb.GetFriendsResp
         * @instance
         */
        GetFriendsResp.prototype.friends = $util.emptyArray;

        /**
         * Creates a new GetFriendsResp instance using the specified properties.
         * @function create
         * @memberof pb.GetFriendsResp
         * @static
         * @param {pb.IGetFriendsResp=} [properties] Properties to set
         * @returns {pb.GetFriendsResp} GetFriendsResp instance
         */
        GetFriendsResp.create = function create(properties) {
            return new GetFriendsResp(properties);
        };

        /**
         * Encodes the specified GetFriendsResp message. Does not implicitly {@link pb.GetFriendsResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GetFriendsResp
         * @static
         * @param {pb.IGetFriendsResp} message GetFriendsResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFriendsResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friends != null && message.friends.length)
                for (var i = 0; i < message.friends.length; ++i)
                    $root.pb.Friend.encode(message.friends[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetFriendsResp message, length delimited. Does not implicitly {@link pb.GetFriendsResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetFriendsResp
         * @static
         * @param {pb.IGetFriendsResp} message GetFriendsResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFriendsResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFriendsResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetFriendsResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetFriendsResp} GetFriendsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFriendsResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetFriendsResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.friends && message.friends.length))
                            message.friends = [];
                        message.friends.push($root.pb.Friend.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetFriendsResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetFriendsResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetFriendsResp} GetFriendsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFriendsResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFriendsResp message.
         * @function verify
         * @memberof pb.GetFriendsResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFriendsResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friends != null && message.hasOwnProperty("friends")) {
                if (!Array.isArray(message.friends))
                    return "friends: array expected";
                for (var i = 0; i < message.friends.length; ++i) {
                    var error = $root.pb.Friend.verify(message.friends[i]);
                    if (error)
                        return "friends." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetFriendsResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetFriendsResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetFriendsResp} GetFriendsResp
         */
        GetFriendsResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetFriendsResp)
                return object;
            var message = new $root.pb.GetFriendsResp();
            if (object.friends) {
                if (!Array.isArray(object.friends))
                    throw TypeError(".pb.GetFriendsResp.friends: array expected");
                message.friends = [];
                for (var i = 0; i < object.friends.length; ++i) {
                    if (typeof object.friends[i] !== "object")
                        throw TypeError(".pb.GetFriendsResp.friends: object expected");
                    message.friends[i] = $root.pb.Friend.fromObject(object.friends[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetFriendsResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetFriendsResp
         * @static
         * @param {pb.GetFriendsResp} message GetFriendsResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetFriendsResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.friends = [];
            if (message.friends && message.friends.length) {
                object.friends = [];
                for (var j = 0; j < message.friends.length; ++j)
                    object.friends[j] = $root.pb.Friend.toObject(message.friends[j], options);
            }
            return object;
        };

        /**
         * Converts this GetFriendsResp to JSON.
         * @function toJSON
         * @memberof pb.GetFriendsResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetFriendsResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetFriendsResp
         * @function getTypeUrl
         * @memberof pb.GetFriendsResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetFriendsResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GetFriendsResp";
        };

        return GetFriendsResp;
    })();

    pb.CreateGroupReq = (function() {

        /**
         * Properties of a CreateGroupReq.
         * @memberof pb
         * @interface ICreateGroupReq
         * @property {string|null} [name] CreateGroupReq name
         * @property {string|null} [avatarUrl] CreateGroupReq avatarUrl
         * @property {string|null} [introduction] CreateGroupReq introduction
         * @property {string|null} [extra] CreateGroupReq extra
         * @property {Array.<number|Long>|null} [memberIds] CreateGroupReq memberIds
         */

        /**
         * Constructs a new CreateGroupReq.
         * @memberof pb
         * @classdesc Represents a CreateGroupReq.
         * @implements ICreateGroupReq
         * @constructor
         * @param {pb.ICreateGroupReq=} [properties] Properties to set
         */
        function CreateGroupReq(properties) {
            this.memberIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateGroupReq name.
         * @member {string} name
         * @memberof pb.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.name = "";

        /**
         * CreateGroupReq avatarUrl.
         * @member {string} avatarUrl
         * @memberof pb.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.avatarUrl = "";

        /**
         * CreateGroupReq introduction.
         * @member {string} introduction
         * @memberof pb.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.introduction = "";

        /**
         * CreateGroupReq extra.
         * @member {string} extra
         * @memberof pb.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.extra = "";

        /**
         * CreateGroupReq memberIds.
         * @member {Array.<number|Long>} memberIds
         * @memberof pb.CreateGroupReq
         * @instance
         */
        CreateGroupReq.prototype.memberIds = $util.emptyArray;

        /**
         * Creates a new CreateGroupReq instance using the specified properties.
         * @function create
         * @memberof pb.CreateGroupReq
         * @static
         * @param {pb.ICreateGroupReq=} [properties] Properties to set
         * @returns {pb.CreateGroupReq} CreateGroupReq instance
         */
        CreateGroupReq.create = function create(properties) {
            return new CreateGroupReq(properties);
        };

        /**
         * Encodes the specified CreateGroupReq message. Does not implicitly {@link pb.CreateGroupReq.verify|verify} messages.
         * @function encode
         * @memberof pb.CreateGroupReq
         * @static
         * @param {pb.ICreateGroupReq} message CreateGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.avatarUrl);
            if (message.introduction != null && Object.hasOwnProperty.call(message, "introduction"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.introduction);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.extra);
            if (message.memberIds != null && message.memberIds.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.memberIds.length; ++i)
                    writer.int64(message.memberIds[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified CreateGroupReq message, length delimited. Does not implicitly {@link pb.CreateGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.CreateGroupReq
         * @static
         * @param {pb.ICreateGroupReq} message CreateGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CreateGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.CreateGroupReq} CreateGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.CreateGroupReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.avatarUrl = reader.string();
                        break;
                    }
                case 3: {
                        message.introduction = reader.string();
                        break;
                    }
                case 4: {
                        message.extra = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.memberIds && message.memberIds.length))
                            message.memberIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.memberIds.push(reader.int64());
                        } else
                            message.memberIds.push(reader.int64());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateGroupReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.CreateGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.CreateGroupReq} CreateGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateGroupReq message.
         * @function verify
         * @memberof pb.CreateGroupReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateGroupReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.introduction != null && message.hasOwnProperty("introduction"))
                if (!$util.isString(message.introduction))
                    return "introduction: string expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            if (message.memberIds != null && message.hasOwnProperty("memberIds")) {
                if (!Array.isArray(message.memberIds))
                    return "memberIds: array expected";
                for (var i = 0; i < message.memberIds.length; ++i)
                    if (!$util.isInteger(message.memberIds[i]) && !(message.memberIds[i] && $util.isInteger(message.memberIds[i].low) && $util.isInteger(message.memberIds[i].high)))
                        return "memberIds: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a CreateGroupReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.CreateGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.CreateGroupReq} CreateGroupReq
         */
        CreateGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.CreateGroupReq)
                return object;
            var message = new $root.pb.CreateGroupReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.introduction != null)
                message.introduction = String(object.introduction);
            if (object.extra != null)
                message.extra = String(object.extra);
            if (object.memberIds) {
                if (!Array.isArray(object.memberIds))
                    throw TypeError(".pb.CreateGroupReq.memberIds: array expected");
                message.memberIds = [];
                for (var i = 0; i < object.memberIds.length; ++i)
                    if ($util.Long)
                        (message.memberIds[i] = $util.Long.fromValue(object.memberIds[i])).unsigned = false;
                    else if (typeof object.memberIds[i] === "string")
                        message.memberIds[i] = parseInt(object.memberIds[i], 10);
                    else if (typeof object.memberIds[i] === "number")
                        message.memberIds[i] = object.memberIds[i];
                    else if (typeof object.memberIds[i] === "object")
                        message.memberIds[i] = new $util.LongBits(object.memberIds[i].low >>> 0, object.memberIds[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.CreateGroupReq
         * @static
         * @param {pb.CreateGroupReq} message CreateGroupReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateGroupReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.memberIds = [];
            if (options.defaults) {
                object.name = "";
                object.avatarUrl = "";
                object.introduction = "";
                object.extra = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.introduction != null && message.hasOwnProperty("introduction"))
                object.introduction = message.introduction;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            if (message.memberIds && message.memberIds.length) {
                object.memberIds = [];
                for (var j = 0; j < message.memberIds.length; ++j)
                    if (typeof message.memberIds[j] === "number")
                        object.memberIds[j] = options.longs === String ? String(message.memberIds[j]) : message.memberIds[j];
                    else
                        object.memberIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.memberIds[j]) : options.longs === Number ? new $util.LongBits(message.memberIds[j].low >>> 0, message.memberIds[j].high >>> 0).toNumber() : message.memberIds[j];
            }
            return object;
        };

        /**
         * Converts this CreateGroupReq to JSON.
         * @function toJSON
         * @memberof pb.CreateGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateGroupReq
         * @function getTypeUrl
         * @memberof pb.CreateGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.CreateGroupReq";
        };

        return CreateGroupReq;
    })();

    pb.CreateGroupResp = (function() {

        /**
         * Properties of a CreateGroupResp.
         * @memberof pb
         * @interface ICreateGroupResp
         * @property {number|Long|null} [groupId] CreateGroupResp groupId
         */

        /**
         * Constructs a new CreateGroupResp.
         * @memberof pb
         * @classdesc Represents a CreateGroupResp.
         * @implements ICreateGroupResp
         * @constructor
         * @param {pb.ICreateGroupResp=} [properties] Properties to set
         */
        function CreateGroupResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateGroupResp groupId.
         * @member {number|Long} groupId
         * @memberof pb.CreateGroupResp
         * @instance
         */
        CreateGroupResp.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CreateGroupResp instance using the specified properties.
         * @function create
         * @memberof pb.CreateGroupResp
         * @static
         * @param {pb.ICreateGroupResp=} [properties] Properties to set
         * @returns {pb.CreateGroupResp} CreateGroupResp instance
         */
        CreateGroupResp.create = function create(properties) {
            return new CreateGroupResp(properties);
        };

        /**
         * Encodes the specified CreateGroupResp message. Does not implicitly {@link pb.CreateGroupResp.verify|verify} messages.
         * @function encode
         * @memberof pb.CreateGroupResp
         * @static
         * @param {pb.ICreateGroupResp} message CreateGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
            return writer;
        };

        /**
         * Encodes the specified CreateGroupResp message, length delimited. Does not implicitly {@link pb.CreateGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.CreateGroupResp
         * @static
         * @param {pb.ICreateGroupResp} message CreateGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CreateGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.CreateGroupResp} CreateGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.CreateGroupResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateGroupResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.CreateGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.CreateGroupResp} CreateGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGroupResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateGroupResp message.
         * @function verify
         * @memberof pb.CreateGroupResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateGroupResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isInteger(message.groupId) && !(message.groupId && $util.isInteger(message.groupId.low) && $util.isInteger(message.groupId.high)))
                    return "groupId: integer|Long expected";
            return null;
        };

        /**
         * Creates a CreateGroupResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.CreateGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.CreateGroupResp} CreateGroupResp
         */
        CreateGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.CreateGroupResp)
                return object;
            var message = new $root.pb.CreateGroupResp();
            if (object.groupId != null)
                if ($util.Long)
                    (message.groupId = $util.Long.fromValue(object.groupId)).unsigned = false;
                else if (typeof object.groupId === "string")
                    message.groupId = parseInt(object.groupId, 10);
                else if (typeof object.groupId === "number")
                    message.groupId = object.groupId;
                else if (typeof object.groupId === "object")
                    message.groupId = new $util.LongBits(object.groupId.low >>> 0, object.groupId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a CreateGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.CreateGroupResp
         * @static
         * @param {pb.CreateGroupResp} message CreateGroupResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateGroupResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.groupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.groupId = options.longs === String ? "0" : 0;
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (typeof message.groupId === "number")
                    object.groupId = options.longs === String ? String(message.groupId) : message.groupId;
                else
                    object.groupId = options.longs === String ? $util.Long.prototype.toString.call(message.groupId) : options.longs === Number ? new $util.LongBits(message.groupId.low >>> 0, message.groupId.high >>> 0).toNumber() : message.groupId;
            return object;
        };

        /**
         * Converts this CreateGroupResp to JSON.
         * @function toJSON
         * @memberof pb.CreateGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateGroupResp
         * @function getTypeUrl
         * @memberof pb.CreateGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.CreateGroupResp";
        };

        return CreateGroupResp;
    })();

    pb.UpdateGroupReq = (function() {

        /**
         * Properties of an UpdateGroupReq.
         * @memberof pb
         * @interface IUpdateGroupReq
         * @property {number|Long|null} [groupId] UpdateGroupReq groupId
         * @property {string|null} [avatarUrl] UpdateGroupReq avatarUrl
         * @property {string|null} [name] UpdateGroupReq name
         * @property {string|null} [introduction] UpdateGroupReq introduction
         * @property {string|null} [extra] UpdateGroupReq extra
         */

        /**
         * Constructs a new UpdateGroupReq.
         * @memberof pb
         * @classdesc Represents an UpdateGroupReq.
         * @implements IUpdateGroupReq
         * @constructor
         * @param {pb.IUpdateGroupReq=} [properties] Properties to set
         */
        function UpdateGroupReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateGroupReq groupId.
         * @member {number|Long} groupId
         * @memberof pb.UpdateGroupReq
         * @instance
         */
        UpdateGroupReq.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdateGroupReq avatarUrl.
         * @member {string} avatarUrl
         * @memberof pb.UpdateGroupReq
         * @instance
         */
        UpdateGroupReq.prototype.avatarUrl = "";

        /**
         * UpdateGroupReq name.
         * @member {string} name
         * @memberof pb.UpdateGroupReq
         * @instance
         */
        UpdateGroupReq.prototype.name = "";

        /**
         * UpdateGroupReq introduction.
         * @member {string} introduction
         * @memberof pb.UpdateGroupReq
         * @instance
         */
        UpdateGroupReq.prototype.introduction = "";

        /**
         * UpdateGroupReq extra.
         * @member {string} extra
         * @memberof pb.UpdateGroupReq
         * @instance
         */
        UpdateGroupReq.prototype.extra = "";

        /**
         * Creates a new UpdateGroupReq instance using the specified properties.
         * @function create
         * @memberof pb.UpdateGroupReq
         * @static
         * @param {pb.IUpdateGroupReq=} [properties] Properties to set
         * @returns {pb.UpdateGroupReq} UpdateGroupReq instance
         */
        UpdateGroupReq.create = function create(properties) {
            return new UpdateGroupReq(properties);
        };

        /**
         * Encodes the specified UpdateGroupReq message. Does not implicitly {@link pb.UpdateGroupReq.verify|verify} messages.
         * @function encode
         * @memberof pb.UpdateGroupReq
         * @static
         * @param {pb.IUpdateGroupReq} message UpdateGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGroupReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.avatarUrl);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.introduction != null && Object.hasOwnProperty.call(message, "introduction"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.introduction);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified UpdateGroupReq message, length delimited. Does not implicitly {@link pb.UpdateGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UpdateGroupReq
         * @static
         * @param {pb.IUpdateGroupReq} message UpdateGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UpdateGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UpdateGroupReq} UpdateGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGroupReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UpdateGroupReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.int64();
                        break;
                    }
                case 2: {
                        message.avatarUrl = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.introduction = reader.string();
                        break;
                    }
                case 5: {
                        message.extra = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateGroupReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UpdateGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UpdateGroupReq} UpdateGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGroupReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateGroupReq message.
         * @function verify
         * @memberof pb.UpdateGroupReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateGroupReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isInteger(message.groupId) && !(message.groupId && $util.isInteger(message.groupId.low) && $util.isInteger(message.groupId.high)))
                    return "groupId: integer|Long expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.introduction != null && message.hasOwnProperty("introduction"))
                if (!$util.isString(message.introduction))
                    return "introduction: string expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates an UpdateGroupReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UpdateGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UpdateGroupReq} UpdateGroupReq
         */
        UpdateGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UpdateGroupReq)
                return object;
            var message = new $root.pb.UpdateGroupReq();
            if (object.groupId != null)
                if ($util.Long)
                    (message.groupId = $util.Long.fromValue(object.groupId)).unsigned = false;
                else if (typeof object.groupId === "string")
                    message.groupId = parseInt(object.groupId, 10);
                else if (typeof object.groupId === "number")
                    message.groupId = object.groupId;
                else if (typeof object.groupId === "object")
                    message.groupId = new $util.LongBits(object.groupId.low >>> 0, object.groupId.high >>> 0).toNumber();
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.name != null)
                message.name = String(object.name);
            if (object.introduction != null)
                message.introduction = String(object.introduction);
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from an UpdateGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UpdateGroupReq
         * @static
         * @param {pb.UpdateGroupReq} message UpdateGroupReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateGroupReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.groupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.groupId = options.longs === String ? "0" : 0;
                object.avatarUrl = "";
                object.name = "";
                object.introduction = "";
                object.extra = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (typeof message.groupId === "number")
                    object.groupId = options.longs === String ? String(message.groupId) : message.groupId;
                else
                    object.groupId = options.longs === String ? $util.Long.prototype.toString.call(message.groupId) : options.longs === Number ? new $util.LongBits(message.groupId.low >>> 0, message.groupId.high >>> 0).toNumber() : message.groupId;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.introduction != null && message.hasOwnProperty("introduction"))
                object.introduction = message.introduction;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this UpdateGroupReq to JSON.
         * @function toJSON
         * @memberof pb.UpdateGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateGroupReq
         * @function getTypeUrl
         * @memberof pb.UpdateGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.UpdateGroupReq";
        };

        return UpdateGroupReq;
    })();

    pb.GetGroupReq = (function() {

        /**
         * Properties of a GetGroupReq.
         * @memberof pb
         * @interface IGetGroupReq
         * @property {number|Long|null} [groupId] GetGroupReq groupId
         */

        /**
         * Constructs a new GetGroupReq.
         * @memberof pb
         * @classdesc Represents a GetGroupReq.
         * @implements IGetGroupReq
         * @constructor
         * @param {pb.IGetGroupReq=} [properties] Properties to set
         */
        function GetGroupReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGroupReq groupId.
         * @member {number|Long} groupId
         * @memberof pb.GetGroupReq
         * @instance
         */
        GetGroupReq.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetGroupReq instance using the specified properties.
         * @function create
         * @memberof pb.GetGroupReq
         * @static
         * @param {pb.IGetGroupReq=} [properties] Properties to set
         * @returns {pb.GetGroupReq} GetGroupReq instance
         */
        GetGroupReq.create = function create(properties) {
            return new GetGroupReq(properties);
        };

        /**
         * Encodes the specified GetGroupReq message. Does not implicitly {@link pb.GetGroupReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GetGroupReq
         * @static
         * @param {pb.IGetGroupReq} message GetGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
            return writer;
        };

        /**
         * Encodes the specified GetGroupReq message, length delimited. Does not implicitly {@link pb.GetGroupReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetGroupReq
         * @static
         * @param {pb.IGetGroupReq} message GetGroupReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGroupReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetGroupReq} GetGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetGroupReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGroupReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetGroupReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetGroupReq} GetGroupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGroupReq message.
         * @function verify
         * @memberof pb.GetGroupReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGroupReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isInteger(message.groupId) && !(message.groupId && $util.isInteger(message.groupId.low) && $util.isInteger(message.groupId.high)))
                    return "groupId: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetGroupReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetGroupReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetGroupReq} GetGroupReq
         */
        GetGroupReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetGroupReq)
                return object;
            var message = new $root.pb.GetGroupReq();
            if (object.groupId != null)
                if ($util.Long)
                    (message.groupId = $util.Long.fromValue(object.groupId)).unsigned = false;
                else if (typeof object.groupId === "string")
                    message.groupId = parseInt(object.groupId, 10);
                else if (typeof object.groupId === "number")
                    message.groupId = object.groupId;
                else if (typeof object.groupId === "object")
                    message.groupId = new $util.LongBits(object.groupId.low >>> 0, object.groupId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetGroupReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetGroupReq
         * @static
         * @param {pb.GetGroupReq} message GetGroupReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGroupReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.groupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.groupId = options.longs === String ? "0" : 0;
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (typeof message.groupId === "number")
                    object.groupId = options.longs === String ? String(message.groupId) : message.groupId;
                else
                    object.groupId = options.longs === String ? $util.Long.prototype.toString.call(message.groupId) : options.longs === Number ? new $util.LongBits(message.groupId.low >>> 0, message.groupId.high >>> 0).toNumber() : message.groupId;
            return object;
        };

        /**
         * Converts this GetGroupReq to JSON.
         * @function toJSON
         * @memberof pb.GetGroupReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGroupReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetGroupReq
         * @function getTypeUrl
         * @memberof pb.GetGroupReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetGroupReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GetGroupReq";
        };

        return GetGroupReq;
    })();

    pb.GetGroupResp = (function() {

        /**
         * Properties of a GetGroupResp.
         * @memberof pb
         * @interface IGetGroupResp
         * @property {pb.IGroup|null} [group] GetGroupResp group
         */

        /**
         * Constructs a new GetGroupResp.
         * @memberof pb
         * @classdesc Represents a GetGroupResp.
         * @implements IGetGroupResp
         * @constructor
         * @param {pb.IGetGroupResp=} [properties] Properties to set
         */
        function GetGroupResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGroupResp group.
         * @member {pb.IGroup|null|undefined} group
         * @memberof pb.GetGroupResp
         * @instance
         */
        GetGroupResp.prototype.group = null;

        /**
         * Creates a new GetGroupResp instance using the specified properties.
         * @function create
         * @memberof pb.GetGroupResp
         * @static
         * @param {pb.IGetGroupResp=} [properties] Properties to set
         * @returns {pb.GetGroupResp} GetGroupResp instance
         */
        GetGroupResp.create = function create(properties) {
            return new GetGroupResp(properties);
        };

        /**
         * Encodes the specified GetGroupResp message. Does not implicitly {@link pb.GetGroupResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GetGroupResp
         * @static
         * @param {pb.IGetGroupResp} message GetGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                $root.pb.Group.encode(message.group, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetGroupResp message, length delimited. Does not implicitly {@link pb.GetGroupResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetGroupResp
         * @static
         * @param {pb.IGetGroupResp} message GetGroupResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGroupResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetGroupResp} GetGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetGroupResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.group = $root.pb.Group.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGroupResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetGroupResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetGroupResp} GetGroupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGroupResp message.
         * @function verify
         * @memberof pb.GetGroupResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGroupResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.group != null && message.hasOwnProperty("group")) {
                var error = $root.pb.Group.verify(message.group);
                if (error)
                    return "group." + error;
            }
            return null;
        };

        /**
         * Creates a GetGroupResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetGroupResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetGroupResp} GetGroupResp
         */
        GetGroupResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetGroupResp)
                return object;
            var message = new $root.pb.GetGroupResp();
            if (object.group != null) {
                if (typeof object.group !== "object")
                    throw TypeError(".pb.GetGroupResp.group: object expected");
                message.group = $root.pb.Group.fromObject(object.group);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetGroupResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetGroupResp
         * @static
         * @param {pb.GetGroupResp} message GetGroupResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGroupResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.group = null;
            if (message.group != null && message.hasOwnProperty("group"))
                object.group = $root.pb.Group.toObject(message.group, options);
            return object;
        };

        /**
         * Converts this GetGroupResp to JSON.
         * @function toJSON
         * @memberof pb.GetGroupResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGroupResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetGroupResp
         * @function getTypeUrl
         * @memberof pb.GetGroupResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetGroupResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GetGroupResp";
        };

        return GetGroupResp;
    })();

    pb.Group = (function() {

        /**
         * Properties of a Group.
         * @memberof pb
         * @interface IGroup
         * @property {number|Long|null} [groupId] Group groupId
         * @property {string|null} [name] Group name
         * @property {string|null} [avatarUrl] Group avatarUrl
         * @property {string|null} [introduction] Group introduction
         * @property {number|null} [userMum] Group userMum
         * @property {string|null} [extra] Group extra
         * @property {number|Long|null} [createTime] Group createTime
         * @property {number|Long|null} [updateTime] Group updateTime
         */

        /**
         * Constructs a new Group.
         * @memberof pb
         * @classdesc Represents a Group.
         * @implements IGroup
         * @constructor
         * @param {pb.IGroup=} [properties] Properties to set
         */
        function Group(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Group groupId.
         * @member {number|Long} groupId
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Group name.
         * @member {string} name
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.name = "";

        /**
         * Group avatarUrl.
         * @member {string} avatarUrl
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.avatarUrl = "";

        /**
         * Group introduction.
         * @member {string} introduction
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.introduction = "";

        /**
         * Group userMum.
         * @member {number} userMum
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.userMum = 0;

        /**
         * Group extra.
         * @member {string} extra
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.extra = "";

        /**
         * Group createTime.
         * @member {number|Long} createTime
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Group updateTime.
         * @member {number|Long} updateTime
         * @memberof pb.Group
         * @instance
         */
        Group.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Group instance using the specified properties.
         * @function create
         * @memberof pb.Group
         * @static
         * @param {pb.IGroup=} [properties] Properties to set
         * @returns {pb.Group} Group instance
         */
        Group.create = function create(properties) {
            return new Group(properties);
        };

        /**
         * Encodes the specified Group message. Does not implicitly {@link pb.Group.verify|verify} messages.
         * @function encode
         * @memberof pb.Group
         * @static
         * @param {pb.IGroup} message Group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Group.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatarUrl);
            if (message.introduction != null && Object.hasOwnProperty.call(message, "introduction"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.introduction);
            if (message.userMum != null && Object.hasOwnProperty.call(message, "userMum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.userMum);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.extra);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.createTime);
            if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.updateTime);
            return writer;
        };

        /**
         * Encodes the specified Group message, length delimited. Does not implicitly {@link pb.Group.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Group
         * @static
         * @param {pb.IGroup} message Group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Group.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Group message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Group} Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Group.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Group();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.int64();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.avatarUrl = reader.string();
                        break;
                    }
                case 4: {
                        message.introduction = reader.string();
                        break;
                    }
                case 5: {
                        message.userMum = reader.int32();
                        break;
                    }
                case 6: {
                        message.extra = reader.string();
                        break;
                    }
                case 7: {
                        message.createTime = reader.int64();
                        break;
                    }
                case 8: {
                        message.updateTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Group message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Group} Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Group.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Group message.
         * @function verify
         * @memberof pb.Group
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Group.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isInteger(message.groupId) && !(message.groupId && $util.isInteger(message.groupId.low) && $util.isInteger(message.groupId.high)))
                    return "groupId: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.introduction != null && message.hasOwnProperty("introduction"))
                if (!$util.isString(message.introduction))
                    return "introduction: string expected";
            if (message.userMum != null && message.hasOwnProperty("userMum"))
                if (!$util.isInteger(message.userMum))
                    return "userMum: integer expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                    return "updateTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a Group message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Group
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Group} Group
         */
        Group.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Group)
                return object;
            var message = new $root.pb.Group();
            if (object.groupId != null)
                if ($util.Long)
                    (message.groupId = $util.Long.fromValue(object.groupId)).unsigned = false;
                else if (typeof object.groupId === "string")
                    message.groupId = parseInt(object.groupId, 10);
                else if (typeof object.groupId === "number")
                    message.groupId = object.groupId;
                else if (typeof object.groupId === "object")
                    message.groupId = new $util.LongBits(object.groupId.low >>> 0, object.groupId.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.introduction != null)
                message.introduction = String(object.introduction);
            if (object.userMum != null)
                message.userMum = object.userMum | 0;
            if (object.extra != null)
                message.extra = String(object.extra);
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
            if (object.updateTime != null)
                if ($util.Long)
                    (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = false;
                else if (typeof object.updateTime === "string")
                    message.updateTime = parseInt(object.updateTime, 10);
                else if (typeof object.updateTime === "number")
                    message.updateTime = object.updateTime;
                else if (typeof object.updateTime === "object")
                    message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Group message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Group
         * @static
         * @param {pb.Group} message Group
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Group.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.groupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.groupId = options.longs === String ? "0" : 0;
                object.name = "";
                object.avatarUrl = "";
                object.introduction = "";
                object.userMum = 0;
                object.extra = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updateTime = options.longs === String ? "0" : 0;
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (typeof message.groupId === "number")
                    object.groupId = options.longs === String ? String(message.groupId) : message.groupId;
                else
                    object.groupId = options.longs === String ? $util.Long.prototype.toString.call(message.groupId) : options.longs === Number ? new $util.LongBits(message.groupId.low >>> 0, message.groupId.high >>> 0).toNumber() : message.groupId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.introduction != null && message.hasOwnProperty("introduction"))
                object.introduction = message.introduction;
            if (message.userMum != null && message.hasOwnProperty("userMum"))
                object.userMum = message.userMum;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (typeof message.updateTime === "number")
                    object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
                else
                    object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber() : message.updateTime;
            return object;
        };

        /**
         * Converts this Group to JSON.
         * @function toJSON
         * @memberof pb.Group
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Group.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Group
         * @function getTypeUrl
         * @memberof pb.Group
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Group.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Group";
        };

        return Group;
    })();

    pb.GetGroupsResp = (function() {

        /**
         * Properties of a GetGroupsResp.
         * @memberof pb
         * @interface IGetGroupsResp
         * @property {Array.<pb.IGroup>|null} [groups] GetGroupsResp groups
         */

        /**
         * Constructs a new GetGroupsResp.
         * @memberof pb
         * @classdesc Represents a GetGroupsResp.
         * @implements IGetGroupsResp
         * @constructor
         * @param {pb.IGetGroupsResp=} [properties] Properties to set
         */
        function GetGroupsResp(properties) {
            this.groups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGroupsResp groups.
         * @member {Array.<pb.IGroup>} groups
         * @memberof pb.GetGroupsResp
         * @instance
         */
        GetGroupsResp.prototype.groups = $util.emptyArray;

        /**
         * Creates a new GetGroupsResp instance using the specified properties.
         * @function create
         * @memberof pb.GetGroupsResp
         * @static
         * @param {pb.IGetGroupsResp=} [properties] Properties to set
         * @returns {pb.GetGroupsResp} GetGroupsResp instance
         */
        GetGroupsResp.create = function create(properties) {
            return new GetGroupsResp(properties);
        };

        /**
         * Encodes the specified GetGroupsResp message. Does not implicitly {@link pb.GetGroupsResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GetGroupsResp
         * @static
         * @param {pb.IGetGroupsResp} message GetGroupsResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupsResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groups != null && message.groups.length)
                for (var i = 0; i < message.groups.length; ++i)
                    $root.pb.Group.encode(message.groups[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetGroupsResp message, length delimited. Does not implicitly {@link pb.GetGroupsResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetGroupsResp
         * @static
         * @param {pb.IGetGroupsResp} message GetGroupsResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupsResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGroupsResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetGroupsResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetGroupsResp} GetGroupsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupsResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetGroupsResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.groups && message.groups.length))
                            message.groups = [];
                        message.groups.push($root.pb.Group.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGroupsResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetGroupsResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetGroupsResp} GetGroupsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupsResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGroupsResp message.
         * @function verify
         * @memberof pb.GetGroupsResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGroupsResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groups != null && message.hasOwnProperty("groups")) {
                if (!Array.isArray(message.groups))
                    return "groups: array expected";
                for (var i = 0; i < message.groups.length; ++i) {
                    var error = $root.pb.Group.verify(message.groups[i]);
                    if (error)
                        return "groups." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetGroupsResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetGroupsResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetGroupsResp} GetGroupsResp
         */
        GetGroupsResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetGroupsResp)
                return object;
            var message = new $root.pb.GetGroupsResp();
            if (object.groups) {
                if (!Array.isArray(object.groups))
                    throw TypeError(".pb.GetGroupsResp.groups: array expected");
                message.groups = [];
                for (var i = 0; i < object.groups.length; ++i) {
                    if (typeof object.groups[i] !== "object")
                        throw TypeError(".pb.GetGroupsResp.groups: object expected");
                    message.groups[i] = $root.pb.Group.fromObject(object.groups[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetGroupsResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetGroupsResp
         * @static
         * @param {pb.GetGroupsResp} message GetGroupsResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGroupsResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.groups = [];
            if (message.groups && message.groups.length) {
                object.groups = [];
                for (var j = 0; j < message.groups.length; ++j)
                    object.groups[j] = $root.pb.Group.toObject(message.groups[j], options);
            }
            return object;
        };

        /**
         * Converts this GetGroupsResp to JSON.
         * @function toJSON
         * @memberof pb.GetGroupsResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGroupsResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetGroupsResp
         * @function getTypeUrl
         * @memberof pb.GetGroupsResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetGroupsResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GetGroupsResp";
        };

        return GetGroupsResp;
    })();

    pb.AddGroupMembersReq = (function() {

        /**
         * Properties of an AddGroupMembersReq.
         * @memberof pb
         * @interface IAddGroupMembersReq
         * @property {number|Long|null} [groupId] AddGroupMembersReq groupId
         * @property {Array.<number|Long>|null} [userIds] AddGroupMembersReq userIds
         */

        /**
         * Constructs a new AddGroupMembersReq.
         * @memberof pb
         * @classdesc Represents an AddGroupMembersReq.
         * @implements IAddGroupMembersReq
         * @constructor
         * @param {pb.IAddGroupMembersReq=} [properties] Properties to set
         */
        function AddGroupMembersReq(properties) {
            this.userIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddGroupMembersReq groupId.
         * @member {number|Long} groupId
         * @memberof pb.AddGroupMembersReq
         * @instance
         */
        AddGroupMembersReq.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AddGroupMembersReq userIds.
         * @member {Array.<number|Long>} userIds
         * @memberof pb.AddGroupMembersReq
         * @instance
         */
        AddGroupMembersReq.prototype.userIds = $util.emptyArray;

        /**
         * Creates a new AddGroupMembersReq instance using the specified properties.
         * @function create
         * @memberof pb.AddGroupMembersReq
         * @static
         * @param {pb.IAddGroupMembersReq=} [properties] Properties to set
         * @returns {pb.AddGroupMembersReq} AddGroupMembersReq instance
         */
        AddGroupMembersReq.create = function create(properties) {
            return new AddGroupMembersReq(properties);
        };

        /**
         * Encodes the specified AddGroupMembersReq message. Does not implicitly {@link pb.AddGroupMembersReq.verify|verify} messages.
         * @function encode
         * @memberof pb.AddGroupMembersReq
         * @static
         * @param {pb.IAddGroupMembersReq} message AddGroupMembersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddGroupMembersReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
            if (message.userIds != null && message.userIds.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.userIds.length; ++i)
                    writer.int64(message.userIds[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified AddGroupMembersReq message, length delimited. Does not implicitly {@link pb.AddGroupMembersReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AddGroupMembersReq
         * @static
         * @param {pb.IAddGroupMembersReq} message AddGroupMembersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddGroupMembersReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddGroupMembersReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AddGroupMembersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AddGroupMembersReq} AddGroupMembersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddGroupMembersReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AddGroupMembersReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.int64();
                        break;
                    }
                case 2: {
                        if (!(message.userIds && message.userIds.length))
                            message.userIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.userIds.push(reader.int64());
                        } else
                            message.userIds.push(reader.int64());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddGroupMembersReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AddGroupMembersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AddGroupMembersReq} AddGroupMembersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddGroupMembersReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddGroupMembersReq message.
         * @function verify
         * @memberof pb.AddGroupMembersReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddGroupMembersReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isInteger(message.groupId) && !(message.groupId && $util.isInteger(message.groupId.low) && $util.isInteger(message.groupId.high)))
                    return "groupId: integer|Long expected";
            if (message.userIds != null && message.hasOwnProperty("userIds")) {
                if (!Array.isArray(message.userIds))
                    return "userIds: array expected";
                for (var i = 0; i < message.userIds.length; ++i)
                    if (!$util.isInteger(message.userIds[i]) && !(message.userIds[i] && $util.isInteger(message.userIds[i].low) && $util.isInteger(message.userIds[i].high)))
                        return "userIds: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates an AddGroupMembersReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AddGroupMembersReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AddGroupMembersReq} AddGroupMembersReq
         */
        AddGroupMembersReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AddGroupMembersReq)
                return object;
            var message = new $root.pb.AddGroupMembersReq();
            if (object.groupId != null)
                if ($util.Long)
                    (message.groupId = $util.Long.fromValue(object.groupId)).unsigned = false;
                else if (typeof object.groupId === "string")
                    message.groupId = parseInt(object.groupId, 10);
                else if (typeof object.groupId === "number")
                    message.groupId = object.groupId;
                else if (typeof object.groupId === "object")
                    message.groupId = new $util.LongBits(object.groupId.low >>> 0, object.groupId.high >>> 0).toNumber();
            if (object.userIds) {
                if (!Array.isArray(object.userIds))
                    throw TypeError(".pb.AddGroupMembersReq.userIds: array expected");
                message.userIds = [];
                for (var i = 0; i < object.userIds.length; ++i)
                    if ($util.Long)
                        (message.userIds[i] = $util.Long.fromValue(object.userIds[i])).unsigned = false;
                    else if (typeof object.userIds[i] === "string")
                        message.userIds[i] = parseInt(object.userIds[i], 10);
                    else if (typeof object.userIds[i] === "number")
                        message.userIds[i] = object.userIds[i];
                    else if (typeof object.userIds[i] === "object")
                        message.userIds[i] = new $util.LongBits(object.userIds[i].low >>> 0, object.userIds[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from an AddGroupMembersReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AddGroupMembersReq
         * @static
         * @param {pb.AddGroupMembersReq} message AddGroupMembersReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddGroupMembersReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userIds = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.groupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.groupId = options.longs === String ? "0" : 0;
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (typeof message.groupId === "number")
                    object.groupId = options.longs === String ? String(message.groupId) : message.groupId;
                else
                    object.groupId = options.longs === String ? $util.Long.prototype.toString.call(message.groupId) : options.longs === Number ? new $util.LongBits(message.groupId.low >>> 0, message.groupId.high >>> 0).toNumber() : message.groupId;
            if (message.userIds && message.userIds.length) {
                object.userIds = [];
                for (var j = 0; j < message.userIds.length; ++j)
                    if (typeof message.userIds[j] === "number")
                        object.userIds[j] = options.longs === String ? String(message.userIds[j]) : message.userIds[j];
                    else
                        object.userIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.userIds[j]) : options.longs === Number ? new $util.LongBits(message.userIds[j].low >>> 0, message.userIds[j].high >>> 0).toNumber() : message.userIds[j];
            }
            return object;
        };

        /**
         * Converts this AddGroupMembersReq to JSON.
         * @function toJSON
         * @memberof pb.AddGroupMembersReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddGroupMembersReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddGroupMembersReq
         * @function getTypeUrl
         * @memberof pb.AddGroupMembersReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddGroupMembersReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.AddGroupMembersReq";
        };

        return AddGroupMembersReq;
    })();

    pb.AddGroupMembersResp = (function() {

        /**
         * Properties of an AddGroupMembersResp.
         * @memberof pb
         * @interface IAddGroupMembersResp
         * @property {Array.<number|Long>|null} [userIds] AddGroupMembersResp userIds
         */

        /**
         * Constructs a new AddGroupMembersResp.
         * @memberof pb
         * @classdesc Represents an AddGroupMembersResp.
         * @implements IAddGroupMembersResp
         * @constructor
         * @param {pb.IAddGroupMembersResp=} [properties] Properties to set
         */
        function AddGroupMembersResp(properties) {
            this.userIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddGroupMembersResp userIds.
         * @member {Array.<number|Long>} userIds
         * @memberof pb.AddGroupMembersResp
         * @instance
         */
        AddGroupMembersResp.prototype.userIds = $util.emptyArray;

        /**
         * Creates a new AddGroupMembersResp instance using the specified properties.
         * @function create
         * @memberof pb.AddGroupMembersResp
         * @static
         * @param {pb.IAddGroupMembersResp=} [properties] Properties to set
         * @returns {pb.AddGroupMembersResp} AddGroupMembersResp instance
         */
        AddGroupMembersResp.create = function create(properties) {
            return new AddGroupMembersResp(properties);
        };

        /**
         * Encodes the specified AddGroupMembersResp message. Does not implicitly {@link pb.AddGroupMembersResp.verify|verify} messages.
         * @function encode
         * @memberof pb.AddGroupMembersResp
         * @static
         * @param {pb.IAddGroupMembersResp} message AddGroupMembersResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddGroupMembersResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userIds != null && message.userIds.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.userIds.length; ++i)
                    writer.int64(message.userIds[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified AddGroupMembersResp message, length delimited. Does not implicitly {@link pb.AddGroupMembersResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AddGroupMembersResp
         * @static
         * @param {pb.IAddGroupMembersResp} message AddGroupMembersResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddGroupMembersResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddGroupMembersResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AddGroupMembersResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AddGroupMembersResp} AddGroupMembersResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddGroupMembersResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AddGroupMembersResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.userIds && message.userIds.length))
                            message.userIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.userIds.push(reader.int64());
                        } else
                            message.userIds.push(reader.int64());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddGroupMembersResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AddGroupMembersResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AddGroupMembersResp} AddGroupMembersResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddGroupMembersResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddGroupMembersResp message.
         * @function verify
         * @memberof pb.AddGroupMembersResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddGroupMembersResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userIds != null && message.hasOwnProperty("userIds")) {
                if (!Array.isArray(message.userIds))
                    return "userIds: array expected";
                for (var i = 0; i < message.userIds.length; ++i)
                    if (!$util.isInteger(message.userIds[i]) && !(message.userIds[i] && $util.isInteger(message.userIds[i].low) && $util.isInteger(message.userIds[i].high)))
                        return "userIds: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates an AddGroupMembersResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AddGroupMembersResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AddGroupMembersResp} AddGroupMembersResp
         */
        AddGroupMembersResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AddGroupMembersResp)
                return object;
            var message = new $root.pb.AddGroupMembersResp();
            if (object.userIds) {
                if (!Array.isArray(object.userIds))
                    throw TypeError(".pb.AddGroupMembersResp.userIds: array expected");
                message.userIds = [];
                for (var i = 0; i < object.userIds.length; ++i)
                    if ($util.Long)
                        (message.userIds[i] = $util.Long.fromValue(object.userIds[i])).unsigned = false;
                    else if (typeof object.userIds[i] === "string")
                        message.userIds[i] = parseInt(object.userIds[i], 10);
                    else if (typeof object.userIds[i] === "number")
                        message.userIds[i] = object.userIds[i];
                    else if (typeof object.userIds[i] === "object")
                        message.userIds[i] = new $util.LongBits(object.userIds[i].low >>> 0, object.userIds[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from an AddGroupMembersResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AddGroupMembersResp
         * @static
         * @param {pb.AddGroupMembersResp} message AddGroupMembersResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddGroupMembersResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userIds = [];
            if (message.userIds && message.userIds.length) {
                object.userIds = [];
                for (var j = 0; j < message.userIds.length; ++j)
                    if (typeof message.userIds[j] === "number")
                        object.userIds[j] = options.longs === String ? String(message.userIds[j]) : message.userIds[j];
                    else
                        object.userIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.userIds[j]) : options.longs === Number ? new $util.LongBits(message.userIds[j].low >>> 0, message.userIds[j].high >>> 0).toNumber() : message.userIds[j];
            }
            return object;
        };

        /**
         * Converts this AddGroupMembersResp to JSON.
         * @function toJSON
         * @memberof pb.AddGroupMembersResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddGroupMembersResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddGroupMembersResp
         * @function getTypeUrl
         * @memberof pb.AddGroupMembersResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddGroupMembersResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.AddGroupMembersResp";
        };

        return AddGroupMembersResp;
    })();

    /**
     * MemberType enum.
     * @name pb.MemberType
     * @enum {number}
     * @property {number} GMT_UNKNOWN=0 GMT_UNKNOWN value
     * @property {number} GMT_ADMIN=1 GMT_ADMIN value
     * @property {number} GMT_MEMBER=2 GMT_MEMBER value
     */
    pb.MemberType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GMT_UNKNOWN"] = 0;
        values[valuesById[1] = "GMT_ADMIN"] = 1;
        values[valuesById[2] = "GMT_MEMBER"] = 2;
        return values;
    })();

    pb.UpdateGroupMemberReq = (function() {

        /**
         * Properties of an UpdateGroupMemberReq.
         * @memberof pb
         * @interface IUpdateGroupMemberReq
         * @property {number|Long|null} [groupId] UpdateGroupMemberReq groupId
         * @property {number|Long|null} [userId] UpdateGroupMemberReq userId
         * @property {pb.MemberType|null} [memberType] UpdateGroupMemberReq memberType
         * @property {string|null} [remarks] UpdateGroupMemberReq remarks
         * @property {string|null} [extra] UpdateGroupMemberReq extra
         */

        /**
         * Constructs a new UpdateGroupMemberReq.
         * @memberof pb
         * @classdesc Represents an UpdateGroupMemberReq.
         * @implements IUpdateGroupMemberReq
         * @constructor
         * @param {pb.IUpdateGroupMemberReq=} [properties] Properties to set
         */
        function UpdateGroupMemberReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateGroupMemberReq groupId.
         * @member {number|Long} groupId
         * @memberof pb.UpdateGroupMemberReq
         * @instance
         */
        UpdateGroupMemberReq.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdateGroupMemberReq userId.
         * @member {number|Long} userId
         * @memberof pb.UpdateGroupMemberReq
         * @instance
         */
        UpdateGroupMemberReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdateGroupMemberReq memberType.
         * @member {pb.MemberType} memberType
         * @memberof pb.UpdateGroupMemberReq
         * @instance
         */
        UpdateGroupMemberReq.prototype.memberType = 0;

        /**
         * UpdateGroupMemberReq remarks.
         * @member {string} remarks
         * @memberof pb.UpdateGroupMemberReq
         * @instance
         */
        UpdateGroupMemberReq.prototype.remarks = "";

        /**
         * UpdateGroupMemberReq extra.
         * @member {string} extra
         * @memberof pb.UpdateGroupMemberReq
         * @instance
         */
        UpdateGroupMemberReq.prototype.extra = "";

        /**
         * Creates a new UpdateGroupMemberReq instance using the specified properties.
         * @function create
         * @memberof pb.UpdateGroupMemberReq
         * @static
         * @param {pb.IUpdateGroupMemberReq=} [properties] Properties to set
         * @returns {pb.UpdateGroupMemberReq} UpdateGroupMemberReq instance
         */
        UpdateGroupMemberReq.create = function create(properties) {
            return new UpdateGroupMemberReq(properties);
        };

        /**
         * Encodes the specified UpdateGroupMemberReq message. Does not implicitly {@link pb.UpdateGroupMemberReq.verify|verify} messages.
         * @function encode
         * @memberof pb.UpdateGroupMemberReq
         * @static
         * @param {pb.IUpdateGroupMemberReq} message UpdateGroupMemberReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGroupMemberReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.memberType != null && Object.hasOwnProperty.call(message, "memberType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.memberType);
            if (message.remarks != null && Object.hasOwnProperty.call(message, "remarks"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.remarks);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified UpdateGroupMemberReq message, length delimited. Does not implicitly {@link pb.UpdateGroupMemberReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UpdateGroupMemberReq
         * @static
         * @param {pb.IUpdateGroupMemberReq} message UpdateGroupMemberReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGroupMemberReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateGroupMemberReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UpdateGroupMemberReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UpdateGroupMemberReq} UpdateGroupMemberReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGroupMemberReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UpdateGroupMemberReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.int64();
                        break;
                    }
                case 2: {
                        message.userId = reader.int64();
                        break;
                    }
                case 3: {
                        message.memberType = reader.int32();
                        break;
                    }
                case 4: {
                        message.remarks = reader.string();
                        break;
                    }
                case 5: {
                        message.extra = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateGroupMemberReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UpdateGroupMemberReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UpdateGroupMemberReq} UpdateGroupMemberReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGroupMemberReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateGroupMemberReq message.
         * @function verify
         * @memberof pb.UpdateGroupMemberReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateGroupMemberReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isInteger(message.groupId) && !(message.groupId && $util.isInteger(message.groupId.low) && $util.isInteger(message.groupId.high)))
                    return "groupId: integer|Long expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.memberType != null && message.hasOwnProperty("memberType"))
                switch (message.memberType) {
                default:
                    return "memberType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                if (!$util.isString(message.remarks))
                    return "remarks: string expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates an UpdateGroupMemberReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UpdateGroupMemberReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UpdateGroupMemberReq} UpdateGroupMemberReq
         */
        UpdateGroupMemberReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UpdateGroupMemberReq)
                return object;
            var message = new $root.pb.UpdateGroupMemberReq();
            if (object.groupId != null)
                if ($util.Long)
                    (message.groupId = $util.Long.fromValue(object.groupId)).unsigned = false;
                else if (typeof object.groupId === "string")
                    message.groupId = parseInt(object.groupId, 10);
                else if (typeof object.groupId === "number")
                    message.groupId = object.groupId;
                else if (typeof object.groupId === "object")
                    message.groupId = new $util.LongBits(object.groupId.low >>> 0, object.groupId.high >>> 0).toNumber();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            switch (object.memberType) {
            default:
                if (typeof object.memberType === "number") {
                    message.memberType = object.memberType;
                    break;
                }
                break;
            case "GMT_UNKNOWN":
            case 0:
                message.memberType = 0;
                break;
            case "GMT_ADMIN":
            case 1:
                message.memberType = 1;
                break;
            case "GMT_MEMBER":
            case 2:
                message.memberType = 2;
                break;
            }
            if (object.remarks != null)
                message.remarks = String(object.remarks);
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from an UpdateGroupMemberReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UpdateGroupMemberReq
         * @static
         * @param {pb.UpdateGroupMemberReq} message UpdateGroupMemberReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateGroupMemberReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.groupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.groupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.memberType = options.enums === String ? "GMT_UNKNOWN" : 0;
                object.remarks = "";
                object.extra = "";
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (typeof message.groupId === "number")
                    object.groupId = options.longs === String ? String(message.groupId) : message.groupId;
                else
                    object.groupId = options.longs === String ? $util.Long.prototype.toString.call(message.groupId) : options.longs === Number ? new $util.LongBits(message.groupId.low >>> 0, message.groupId.high >>> 0).toNumber() : message.groupId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.memberType != null && message.hasOwnProperty("memberType"))
                object.memberType = options.enums === String ? $root.pb.MemberType[message.memberType] === undefined ? message.memberType : $root.pb.MemberType[message.memberType] : message.memberType;
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                object.remarks = message.remarks;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this UpdateGroupMemberReq to JSON.
         * @function toJSON
         * @memberof pb.UpdateGroupMemberReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateGroupMemberReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateGroupMemberReq
         * @function getTypeUrl
         * @memberof pb.UpdateGroupMemberReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateGroupMemberReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.UpdateGroupMemberReq";
        };

        return UpdateGroupMemberReq;
    })();

    pb.DeleteGroupMemberReq = (function() {

        /**
         * Properties of a DeleteGroupMemberReq.
         * @memberof pb
         * @interface IDeleteGroupMemberReq
         * @property {number|Long|null} [groupId] DeleteGroupMemberReq groupId
         * @property {number|Long|null} [userId] DeleteGroupMemberReq userId
         */

        /**
         * Constructs a new DeleteGroupMemberReq.
         * @memberof pb
         * @classdesc Represents a DeleteGroupMemberReq.
         * @implements IDeleteGroupMemberReq
         * @constructor
         * @param {pb.IDeleteGroupMemberReq=} [properties] Properties to set
         */
        function DeleteGroupMemberReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteGroupMemberReq groupId.
         * @member {number|Long} groupId
         * @memberof pb.DeleteGroupMemberReq
         * @instance
         */
        DeleteGroupMemberReq.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DeleteGroupMemberReq userId.
         * @member {number|Long} userId
         * @memberof pb.DeleteGroupMemberReq
         * @instance
         */
        DeleteGroupMemberReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DeleteGroupMemberReq instance using the specified properties.
         * @function create
         * @memberof pb.DeleteGroupMemberReq
         * @static
         * @param {pb.IDeleteGroupMemberReq=} [properties] Properties to set
         * @returns {pb.DeleteGroupMemberReq} DeleteGroupMemberReq instance
         */
        DeleteGroupMemberReq.create = function create(properties) {
            return new DeleteGroupMemberReq(properties);
        };

        /**
         * Encodes the specified DeleteGroupMemberReq message. Does not implicitly {@link pb.DeleteGroupMemberReq.verify|verify} messages.
         * @function encode
         * @memberof pb.DeleteGroupMemberReq
         * @static
         * @param {pb.IDeleteGroupMemberReq} message DeleteGroupMemberReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteGroupMemberReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified DeleteGroupMemberReq message, length delimited. Does not implicitly {@link pb.DeleteGroupMemberReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.DeleteGroupMemberReq
         * @static
         * @param {pb.IDeleteGroupMemberReq} message DeleteGroupMemberReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteGroupMemberReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteGroupMemberReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.DeleteGroupMemberReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.DeleteGroupMemberReq} DeleteGroupMemberReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteGroupMemberReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.DeleteGroupMemberReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.int64();
                        break;
                    }
                case 2: {
                        message.userId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteGroupMemberReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.DeleteGroupMemberReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.DeleteGroupMemberReq} DeleteGroupMemberReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteGroupMemberReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteGroupMemberReq message.
         * @function verify
         * @memberof pb.DeleteGroupMemberReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteGroupMemberReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isInteger(message.groupId) && !(message.groupId && $util.isInteger(message.groupId.low) && $util.isInteger(message.groupId.high)))
                    return "groupId: integer|Long expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a DeleteGroupMemberReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.DeleteGroupMemberReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.DeleteGroupMemberReq} DeleteGroupMemberReq
         */
        DeleteGroupMemberReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.DeleteGroupMemberReq)
                return object;
            var message = new $root.pb.DeleteGroupMemberReq();
            if (object.groupId != null)
                if ($util.Long)
                    (message.groupId = $util.Long.fromValue(object.groupId)).unsigned = false;
                else if (typeof object.groupId === "string")
                    message.groupId = parseInt(object.groupId, 10);
                else if (typeof object.groupId === "number")
                    message.groupId = object.groupId;
                else if (typeof object.groupId === "object")
                    message.groupId = new $util.LongBits(object.groupId.low >>> 0, object.groupId.high >>> 0).toNumber();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DeleteGroupMemberReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.DeleteGroupMemberReq
         * @static
         * @param {pb.DeleteGroupMemberReq} message DeleteGroupMemberReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteGroupMemberReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.groupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.groupId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            }
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (typeof message.groupId === "number")
                    object.groupId = options.longs === String ? String(message.groupId) : message.groupId;
                else
                    object.groupId = options.longs === String ? $util.Long.prototype.toString.call(message.groupId) : options.longs === Number ? new $util.LongBits(message.groupId.low >>> 0, message.groupId.high >>> 0).toNumber() : message.groupId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            return object;
        };

        /**
         * Converts this DeleteGroupMemberReq to JSON.
         * @function toJSON
         * @memberof pb.DeleteGroupMemberReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteGroupMemberReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteGroupMemberReq
         * @function getTypeUrl
         * @memberof pb.DeleteGroupMemberReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteGroupMemberReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.DeleteGroupMemberReq";
        };

        return DeleteGroupMemberReq;
    })();

    pb.GetGroupMembersReq = (function() {

        /**
         * Properties of a GetGroupMembersReq.
         * @memberof pb
         * @interface IGetGroupMembersReq
         * @property {number|Long|null} [groupId] GetGroupMembersReq groupId
         */

        /**
         * Constructs a new GetGroupMembersReq.
         * @memberof pb
         * @classdesc Represents a GetGroupMembersReq.
         * @implements IGetGroupMembersReq
         * @constructor
         * @param {pb.IGetGroupMembersReq=} [properties] Properties to set
         */
        function GetGroupMembersReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGroupMembersReq groupId.
         * @member {number|Long} groupId
         * @memberof pb.GetGroupMembersReq
         * @instance
         */
        GetGroupMembersReq.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetGroupMembersReq instance using the specified properties.
         * @function create
         * @memberof pb.GetGroupMembersReq
         * @static
         * @param {pb.IGetGroupMembersReq=} [properties] Properties to set
         * @returns {pb.GetGroupMembersReq} GetGroupMembersReq instance
         */
        GetGroupMembersReq.create = function create(properties) {
            return new GetGroupMembersReq(properties);
        };

        /**
         * Encodes the specified GetGroupMembersReq message. Does not implicitly {@link pb.GetGroupMembersReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GetGroupMembersReq
         * @static
         * @param {pb.IGetGroupMembersReq} message GetGroupMembersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupMembersReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.groupId);
            return writer;
        };

        /**
         * Encodes the specified GetGroupMembersReq message, length delimited. Does not implicitly {@link pb.GetGroupMembersReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetGroupMembersReq
         * @static
         * @param {pb.IGetGroupMembersReq} message GetGroupMembersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupMembersReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGroupMembersReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetGroupMembersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetGroupMembersReq} GetGroupMembersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupMembersReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetGroupMembersReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.groupId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGroupMembersReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetGroupMembersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetGroupMembersReq} GetGroupMembersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupMembersReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGroupMembersReq message.
         * @function verify
         * @memberof pb.GetGroupMembersReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGroupMembersReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isInteger(message.groupId) && !(message.groupId && $util.isInteger(message.groupId.low) && $util.isInteger(message.groupId.high)))
                    return "groupId: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetGroupMembersReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetGroupMembersReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetGroupMembersReq} GetGroupMembersReq
         */
        GetGroupMembersReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetGroupMembersReq)
                return object;
            var message = new $root.pb.GetGroupMembersReq();
            if (object.groupId != null)
                if ($util.Long)
                    (message.groupId = $util.Long.fromValue(object.groupId)).unsigned = false;
                else if (typeof object.groupId === "string")
                    message.groupId = parseInt(object.groupId, 10);
                else if (typeof object.groupId === "number")
                    message.groupId = object.groupId;
                else if (typeof object.groupId === "object")
                    message.groupId = new $util.LongBits(object.groupId.low >>> 0, object.groupId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetGroupMembersReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetGroupMembersReq
         * @static
         * @param {pb.GetGroupMembersReq} message GetGroupMembersReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGroupMembersReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.groupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.groupId = options.longs === String ? "0" : 0;
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (typeof message.groupId === "number")
                    object.groupId = options.longs === String ? String(message.groupId) : message.groupId;
                else
                    object.groupId = options.longs === String ? $util.Long.prototype.toString.call(message.groupId) : options.longs === Number ? new $util.LongBits(message.groupId.low >>> 0, message.groupId.high >>> 0).toNumber() : message.groupId;
            return object;
        };

        /**
         * Converts this GetGroupMembersReq to JSON.
         * @function toJSON
         * @memberof pb.GetGroupMembersReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGroupMembersReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetGroupMembersReq
         * @function getTypeUrl
         * @memberof pb.GetGroupMembersReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetGroupMembersReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GetGroupMembersReq";
        };

        return GetGroupMembersReq;
    })();

    pb.GetGroupMembersResp = (function() {

        /**
         * Properties of a GetGroupMembersResp.
         * @memberof pb
         * @interface IGetGroupMembersResp
         * @property {Array.<pb.IGroupMember>|null} [members] GetGroupMembersResp members
         */

        /**
         * Constructs a new GetGroupMembersResp.
         * @memberof pb
         * @classdesc Represents a GetGroupMembersResp.
         * @implements IGetGroupMembersResp
         * @constructor
         * @param {pb.IGetGroupMembersResp=} [properties] Properties to set
         */
        function GetGroupMembersResp(properties) {
            this.members = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGroupMembersResp members.
         * @member {Array.<pb.IGroupMember>} members
         * @memberof pb.GetGroupMembersResp
         * @instance
         */
        GetGroupMembersResp.prototype.members = $util.emptyArray;

        /**
         * Creates a new GetGroupMembersResp instance using the specified properties.
         * @function create
         * @memberof pb.GetGroupMembersResp
         * @static
         * @param {pb.IGetGroupMembersResp=} [properties] Properties to set
         * @returns {pb.GetGroupMembersResp} GetGroupMembersResp instance
         */
        GetGroupMembersResp.create = function create(properties) {
            return new GetGroupMembersResp(properties);
        };

        /**
         * Encodes the specified GetGroupMembersResp message. Does not implicitly {@link pb.GetGroupMembersResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GetGroupMembersResp
         * @static
         * @param {pb.IGetGroupMembersResp} message GetGroupMembersResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupMembersResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.members != null && message.members.length)
                for (var i = 0; i < message.members.length; ++i)
                    $root.pb.GroupMember.encode(message.members[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetGroupMembersResp message, length delimited. Does not implicitly {@link pb.GetGroupMembersResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetGroupMembersResp
         * @static
         * @param {pb.IGetGroupMembersResp} message GetGroupMembersResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGroupMembersResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGroupMembersResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetGroupMembersResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetGroupMembersResp} GetGroupMembersResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupMembersResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetGroupMembersResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.members && message.members.length))
                            message.members = [];
                        message.members.push($root.pb.GroupMember.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGroupMembersResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetGroupMembersResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetGroupMembersResp} GetGroupMembersResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGroupMembersResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGroupMembersResp message.
         * @function verify
         * @memberof pb.GetGroupMembersResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGroupMembersResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.members != null && message.hasOwnProperty("members")) {
                if (!Array.isArray(message.members))
                    return "members: array expected";
                for (var i = 0; i < message.members.length; ++i) {
                    var error = $root.pb.GroupMember.verify(message.members[i]);
                    if (error)
                        return "members." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetGroupMembersResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetGroupMembersResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetGroupMembersResp} GetGroupMembersResp
         */
        GetGroupMembersResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetGroupMembersResp)
                return object;
            var message = new $root.pb.GetGroupMembersResp();
            if (object.members) {
                if (!Array.isArray(object.members))
                    throw TypeError(".pb.GetGroupMembersResp.members: array expected");
                message.members = [];
                for (var i = 0; i < object.members.length; ++i) {
                    if (typeof object.members[i] !== "object")
                        throw TypeError(".pb.GetGroupMembersResp.members: object expected");
                    message.members[i] = $root.pb.GroupMember.fromObject(object.members[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetGroupMembersResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetGroupMembersResp
         * @static
         * @param {pb.GetGroupMembersResp} message GetGroupMembersResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGroupMembersResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.members = [];
            if (message.members && message.members.length) {
                object.members = [];
                for (var j = 0; j < message.members.length; ++j)
                    object.members[j] = $root.pb.GroupMember.toObject(message.members[j], options);
            }
            return object;
        };

        /**
         * Converts this GetGroupMembersResp to JSON.
         * @function toJSON
         * @memberof pb.GetGroupMembersResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGroupMembersResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetGroupMembersResp
         * @function getTypeUrl
         * @memberof pb.GetGroupMembersResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetGroupMembersResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GetGroupMembersResp";
        };

        return GetGroupMembersResp;
    })();

    pb.GroupMember = (function() {

        /**
         * Properties of a GroupMember.
         * @memberof pb
         * @interface IGroupMember
         * @property {number|Long|null} [userId] GroupMember userId
         * @property {string|null} [nickname] GroupMember nickname
         * @property {number|null} [sex] GroupMember sex
         * @property {string|null} [avatarUrl] GroupMember avatarUrl
         * @property {string|null} [userExtra] GroupMember userExtra
         * @property {pb.MemberType|null} [memberType] GroupMember memberType
         * @property {string|null} [remarks] GroupMember remarks
         * @property {string|null} [extra] GroupMember extra
         */

        /**
         * Constructs a new GroupMember.
         * @memberof pb
         * @classdesc Represents a GroupMember.
         * @implements IGroupMember
         * @constructor
         * @param {pb.IGroupMember=} [properties] Properties to set
         */
        function GroupMember(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupMember userId.
         * @member {number|Long} userId
         * @memberof pb.GroupMember
         * @instance
         */
        GroupMember.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GroupMember nickname.
         * @member {string} nickname
         * @memberof pb.GroupMember
         * @instance
         */
        GroupMember.prototype.nickname = "";

        /**
         * GroupMember sex.
         * @member {number} sex
         * @memberof pb.GroupMember
         * @instance
         */
        GroupMember.prototype.sex = 0;

        /**
         * GroupMember avatarUrl.
         * @member {string} avatarUrl
         * @memberof pb.GroupMember
         * @instance
         */
        GroupMember.prototype.avatarUrl = "";

        /**
         * GroupMember userExtra.
         * @member {string} userExtra
         * @memberof pb.GroupMember
         * @instance
         */
        GroupMember.prototype.userExtra = "";

        /**
         * GroupMember memberType.
         * @member {pb.MemberType} memberType
         * @memberof pb.GroupMember
         * @instance
         */
        GroupMember.prototype.memberType = 0;

        /**
         * GroupMember remarks.
         * @member {string} remarks
         * @memberof pb.GroupMember
         * @instance
         */
        GroupMember.prototype.remarks = "";

        /**
         * GroupMember extra.
         * @member {string} extra
         * @memberof pb.GroupMember
         * @instance
         */
        GroupMember.prototype.extra = "";

        /**
         * Creates a new GroupMember instance using the specified properties.
         * @function create
         * @memberof pb.GroupMember
         * @static
         * @param {pb.IGroupMember=} [properties] Properties to set
         * @returns {pb.GroupMember} GroupMember instance
         */
        GroupMember.create = function create(properties) {
            return new GroupMember(properties);
        };

        /**
         * Encodes the specified GroupMember message. Does not implicitly {@link pb.GroupMember.verify|verify} messages.
         * @function encode
         * @memberof pb.GroupMember
         * @static
         * @param {pb.IGroupMember} message GroupMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMember.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sex);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatarUrl);
            if (message.userExtra != null && Object.hasOwnProperty.call(message, "userExtra"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.userExtra);
            if (message.memberType != null && Object.hasOwnProperty.call(message, "memberType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.memberType);
            if (message.remarks != null && Object.hasOwnProperty.call(message, "remarks"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.remarks);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified GroupMember message, length delimited. Does not implicitly {@link pb.GroupMember.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GroupMember
         * @static
         * @param {pb.IGroupMember} message GroupMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupMember.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupMember message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GroupMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GroupMember} GroupMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMember.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GroupMember();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        message.nickname = reader.string();
                        break;
                    }
                case 3: {
                        message.sex = reader.int32();
                        break;
                    }
                case 4: {
                        message.avatarUrl = reader.string();
                        break;
                    }
                case 5: {
                        message.userExtra = reader.string();
                        break;
                    }
                case 6: {
                        message.memberType = reader.int32();
                        break;
                    }
                case 7: {
                        message.remarks = reader.string();
                        break;
                    }
                case 8: {
                        message.extra = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupMember message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GroupMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GroupMember} GroupMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupMember.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupMember message.
         * @function verify
         * @memberof pb.GroupMember
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupMember.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.userExtra != null && message.hasOwnProperty("userExtra"))
                if (!$util.isString(message.userExtra))
                    return "userExtra: string expected";
            if (message.memberType != null && message.hasOwnProperty("memberType"))
                switch (message.memberType) {
                default:
                    return "memberType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                if (!$util.isString(message.remarks))
                    return "remarks: string expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates a GroupMember message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GroupMember
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GroupMember} GroupMember
         */
        GroupMember.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GroupMember)
                return object;
            var message = new $root.pb.GroupMember();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.userExtra != null)
                message.userExtra = String(object.userExtra);
            switch (object.memberType) {
            default:
                if (typeof object.memberType === "number") {
                    message.memberType = object.memberType;
                    break;
                }
                break;
            case "GMT_UNKNOWN":
            case 0:
                message.memberType = 0;
                break;
            case "GMT_ADMIN":
            case 1:
                message.memberType = 1;
                break;
            case "GMT_MEMBER":
            case 2:
                message.memberType = 2;
                break;
            }
            if (object.remarks != null)
                message.remarks = String(object.remarks);
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from a GroupMember message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GroupMember
         * @static
         * @param {pb.GroupMember} message GroupMember
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupMember.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.sex = 0;
                object.avatarUrl = "";
                object.userExtra = "";
                object.memberType = options.enums === String ? "GMT_UNKNOWN" : 0;
                object.remarks = "";
                object.extra = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.userExtra != null && message.hasOwnProperty("userExtra"))
                object.userExtra = message.userExtra;
            if (message.memberType != null && message.hasOwnProperty("memberType"))
                object.memberType = options.enums === String ? $root.pb.MemberType[message.memberType] === undefined ? message.memberType : $root.pb.MemberType[message.memberType] : message.memberType;
            if (message.remarks != null && message.hasOwnProperty("remarks"))
                object.remarks = message.remarks;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this GroupMember to JSON.
         * @function toJSON
         * @memberof pb.GroupMember
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupMember.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GroupMember
         * @function getTypeUrl
         * @memberof pb.GroupMember
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GroupMember.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GroupMember";
        };

        return GroupMember;
    })();

    pb.LogicInt = (function() {

        /**
         * Constructs a new LogicInt service.
         * @memberof pb
         * @classdesc Represents a LogicInt
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function LogicInt(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (LogicInt.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = LogicInt;

        /**
         * Creates new LogicInt service using the specified rpc implementation.
         * @function create
         * @memberof pb.LogicInt
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {LogicInt} RPC service. Useful where requests and/or responses are streamed.
         */
        LogicInt.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pb.LogicInt#connSignIn}.
         * @memberof pb.LogicInt
         * @typedef ConnSignInCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls ConnSignIn.
         * @function connSignIn
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IConnSignInReq} request ConnSignInReq message or plain object
         * @param {pb.LogicInt.ConnSignInCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicInt.prototype.connSignIn = function connSignIn(request, callback) {
            return this.rpcCall(connSignIn, $root.pb.ConnSignInReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "ConnSignIn" });

        /**
         * Calls ConnSignIn.
         * @function connSignIn
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IConnSignInReq} request ConnSignInReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicInt#sync}.
         * @memberof pb.LogicInt
         * @typedef SyncCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.SyncResp} [response] SyncResp
         */

        /**
         * Calls Sync.
         * @function sync
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.ISyncReq} request SyncReq message or plain object
         * @param {pb.LogicInt.SyncCallback} callback Node-style callback called with the error, if any, and SyncResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicInt.prototype.sync = function sync(request, callback) {
            return this.rpcCall(sync, $root.pb.SyncReq, $root.pb.SyncResp, request, callback);
        }, "name", { value: "Sync" });

        /**
         * Calls Sync.
         * @function sync
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.ISyncReq} request SyncReq message or plain object
         * @returns {Promise<pb.SyncResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicInt#messageACK}.
         * @memberof pb.LogicInt
         * @typedef MessageACKCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls MessageACK.
         * @function messageACK
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IMessageACKReq} request MessageACKReq message or plain object
         * @param {pb.LogicInt.MessageACKCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicInt.prototype.messageACK = function messageACK(request, callback) {
            return this.rpcCall(messageACK, $root.pb.MessageACKReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "MessageACK" });

        /**
         * Calls MessageACK.
         * @function messageACK
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IMessageACKReq} request MessageACKReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicInt#offline}.
         * @memberof pb.LogicInt
         * @typedef OfflineCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls Offline.
         * @function offline
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IOfflineReq} request OfflineReq message or plain object
         * @param {pb.LogicInt.OfflineCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicInt.prototype.offline = function offline(request, callback) {
            return this.rpcCall(offline, $root.pb.OfflineReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "Offline" });

        /**
         * Calls Offline.
         * @function offline
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IOfflineReq} request OfflineReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicInt#subscribeRoom}.
         * @memberof pb.LogicInt
         * @typedef SubscribeRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls SubscribeRoom.
         * @function subscribeRoom
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.ISubscribeRoomReq} request SubscribeRoomReq message or plain object
         * @param {pb.LogicInt.SubscribeRoomCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicInt.prototype.subscribeRoom = function subscribeRoom(request, callback) {
            return this.rpcCall(subscribeRoom, $root.pb.SubscribeRoomReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "SubscribeRoom" });

        /**
         * Calls SubscribeRoom.
         * @function subscribeRoom
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.ISubscribeRoomReq} request SubscribeRoomReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicInt#push}.
         * @memberof pb.LogicInt
         * @typedef PushCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.PushResp} [response] PushResp
         */

        /**
         * Calls Push.
         * @function push
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IPushReq} request PushReq message or plain object
         * @param {pb.LogicInt.PushCallback} callback Node-style callback called with the error, if any, and PushResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicInt.prototype.push = function push(request, callback) {
            return this.rpcCall(push, $root.pb.PushReq, $root.pb.PushResp, request, callback);
        }, "name", { value: "Push" });

        /**
         * Calls Push.
         * @function push
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IPushReq} request PushReq message or plain object
         * @returns {Promise<pb.PushResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicInt#pushRoom}.
         * @memberof pb.LogicInt
         * @typedef PushRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls PushRoom.
         * @function pushRoom
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IPushRoomReq} request PushRoomReq message or plain object
         * @param {pb.LogicInt.PushRoomCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicInt.prototype.pushRoom = function pushRoom(request, callback) {
            return this.rpcCall(pushRoom, $root.pb.PushRoomReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "PushRoom" });

        /**
         * Calls PushRoom.
         * @function pushRoom
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IPushRoomReq} request PushRoomReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicInt#pushAll}.
         * @memberof pb.LogicInt
         * @typedef PushAllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls PushAll.
         * @function pushAll
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IPushAllReq} request PushAllReq message or plain object
         * @param {pb.LogicInt.PushAllCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicInt.prototype.pushAll = function pushAll(request, callback) {
            return this.rpcCall(pushAll, $root.pb.PushAllReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "PushAll" });

        /**
         * Calls PushAll.
         * @function pushAll
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IPushAllReq} request PushAllReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicInt#getDevice}.
         * @memberof pb.LogicInt
         * @typedef GetDeviceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.GetDeviceResp} [response] GetDeviceResp
         */

        /**
         * Calls GetDevice.
         * @function getDevice
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IGetDeviceReq} request GetDeviceReq message or plain object
         * @param {pb.LogicInt.GetDeviceCallback} callback Node-style callback called with the error, if any, and GetDeviceResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicInt.prototype.getDevice = function getDevice(request, callback) {
            return this.rpcCall(getDevice, $root.pb.GetDeviceReq, $root.pb.GetDeviceResp, request, callback);
        }, "name", { value: "GetDevice" });

        /**
         * Calls GetDevice.
         * @function getDevice
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IGetDeviceReq} request GetDeviceReq message or plain object
         * @returns {Promise<pb.GetDeviceResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pb.LogicInt#serverStop}.
         * @memberof pb.LogicInt
         * @typedef ServerStopCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls ServerStop.
         * @function serverStop
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IServerStopReq} request ServerStopReq message or plain object
         * @param {pb.LogicInt.ServerStopCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LogicInt.prototype.serverStop = function serverStop(request, callback) {
            return this.rpcCall(serverStop, $root.pb.ServerStopReq, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "ServerStop" });

        /**
         * Calls ServerStop.
         * @function serverStop
         * @memberof pb.LogicInt
         * @instance
         * @param {pb.IServerStopReq} request ServerStopReq message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        return LogicInt;
    })();

    pb.ConnSignInReq = (function() {

        /**
         * Properties of a ConnSignInReq.
         * @memberof pb
         * @interface IConnSignInReq
         * @property {number|Long|null} [deviceId] ConnSignInReq deviceId
         * @property {number|Long|null} [userId] ConnSignInReq userId
         * @property {string|null} [token] ConnSignInReq token
         * @property {string|null} [connAddr] ConnSignInReq connAddr
         * @property {string|null} [clientAddr] ConnSignInReq clientAddr
         */

        /**
         * Constructs a new ConnSignInReq.
         * @memberof pb
         * @classdesc Represents a ConnSignInReq.
         * @implements IConnSignInReq
         * @constructor
         * @param {pb.IConnSignInReq=} [properties] Properties to set
         */
        function ConnSignInReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnSignInReq deviceId.
         * @member {number|Long} deviceId
         * @memberof pb.ConnSignInReq
         * @instance
         */
        ConnSignInReq.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ConnSignInReq userId.
         * @member {number|Long} userId
         * @memberof pb.ConnSignInReq
         * @instance
         */
        ConnSignInReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ConnSignInReq token.
         * @member {string} token
         * @memberof pb.ConnSignInReq
         * @instance
         */
        ConnSignInReq.prototype.token = "";

        /**
         * ConnSignInReq connAddr.
         * @member {string} connAddr
         * @memberof pb.ConnSignInReq
         * @instance
         */
        ConnSignInReq.prototype.connAddr = "";

        /**
         * ConnSignInReq clientAddr.
         * @member {string} clientAddr
         * @memberof pb.ConnSignInReq
         * @instance
         */
        ConnSignInReq.prototype.clientAddr = "";

        /**
         * Creates a new ConnSignInReq instance using the specified properties.
         * @function create
         * @memberof pb.ConnSignInReq
         * @static
         * @param {pb.IConnSignInReq=} [properties] Properties to set
         * @returns {pb.ConnSignInReq} ConnSignInReq instance
         */
        ConnSignInReq.create = function create(properties) {
            return new ConnSignInReq(properties);
        };

        /**
         * Encodes the specified ConnSignInReq message. Does not implicitly {@link pb.ConnSignInReq.verify|verify} messages.
         * @function encode
         * @memberof pb.ConnSignInReq
         * @static
         * @param {pb.IConnSignInReq} message ConnSignInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnSignInReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.deviceId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
            if (message.connAddr != null && Object.hasOwnProperty.call(message, "connAddr"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.connAddr);
            if (message.clientAddr != null && Object.hasOwnProperty.call(message, "clientAddr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.clientAddr);
            return writer;
        };

        /**
         * Encodes the specified ConnSignInReq message, length delimited. Does not implicitly {@link pb.ConnSignInReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ConnSignInReq
         * @static
         * @param {pb.IConnSignInReq} message ConnSignInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnSignInReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnSignInReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ConnSignInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ConnSignInReq} ConnSignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnSignInReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ConnSignInReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deviceId = reader.int64();
                        break;
                    }
                case 2: {
                        message.userId = reader.int64();
                        break;
                    }
                case 3: {
                        message.token = reader.string();
                        break;
                    }
                case 4: {
                        message.connAddr = reader.string();
                        break;
                    }
                case 5: {
                        message.clientAddr = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnSignInReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ConnSignInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ConnSignInReq} ConnSignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnSignInReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnSignInReq message.
         * @function verify
         * @memberof pb.ConnSignInReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnSignInReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                    return "deviceId: integer|Long expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.connAddr != null && message.hasOwnProperty("connAddr"))
                if (!$util.isString(message.connAddr))
                    return "connAddr: string expected";
            if (message.clientAddr != null && message.hasOwnProperty("clientAddr"))
                if (!$util.isString(message.clientAddr))
                    return "clientAddr: string expected";
            return null;
        };

        /**
         * Creates a ConnSignInReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ConnSignInReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ConnSignInReq} ConnSignInReq
         */
        ConnSignInReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ConnSignInReq)
                return object;
            var message = new $root.pb.ConnSignInReq();
            if (object.deviceId != null)
                if ($util.Long)
                    (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = false;
                else if (typeof object.deviceId === "string")
                    message.deviceId = parseInt(object.deviceId, 10);
                else if (typeof object.deviceId === "number")
                    message.deviceId = object.deviceId;
                else if (typeof object.deviceId === "object")
                    message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.token != null)
                message.token = String(object.token);
            if (object.connAddr != null)
                message.connAddr = String(object.connAddr);
            if (object.clientAddr != null)
                message.clientAddr = String(object.clientAddr);
            return message;
        };

        /**
         * Creates a plain object from a ConnSignInReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ConnSignInReq
         * @static
         * @param {pb.ConnSignInReq} message ConnSignInReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnSignInReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.token = "";
                object.connAddr = "";
                object.clientAddr = "";
            }
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (typeof message.deviceId === "number")
                    object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
                else
                    object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber() : message.deviceId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.connAddr != null && message.hasOwnProperty("connAddr"))
                object.connAddr = message.connAddr;
            if (message.clientAddr != null && message.hasOwnProperty("clientAddr"))
                object.clientAddr = message.clientAddr;
            return object;
        };

        /**
         * Converts this ConnSignInReq to JSON.
         * @function toJSON
         * @memberof pb.ConnSignInReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnSignInReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConnSignInReq
         * @function getTypeUrl
         * @memberof pb.ConnSignInReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConnSignInReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ConnSignInReq";
        };

        return ConnSignInReq;
    })();

    pb.SyncReq = (function() {

        /**
         * Properties of a SyncReq.
         * @memberof pb
         * @interface ISyncReq
         * @property {number|Long|null} [userId] SyncReq userId
         * @property {number|Long|null} [deviceId] SyncReq deviceId
         * @property {number|Long|null} [seq] SyncReq seq
         */

        /**
         * Constructs a new SyncReq.
         * @memberof pb
         * @classdesc Represents a SyncReq.
         * @implements ISyncReq
         * @constructor
         * @param {pb.ISyncReq=} [properties] Properties to set
         */
        function SyncReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncReq userId.
         * @member {number|Long} userId
         * @memberof pb.SyncReq
         * @instance
         */
        SyncReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SyncReq deviceId.
         * @member {number|Long} deviceId
         * @memberof pb.SyncReq
         * @instance
         */
        SyncReq.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SyncReq seq.
         * @member {number|Long} seq
         * @memberof pb.SyncReq
         * @instance
         */
        SyncReq.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SyncReq instance using the specified properties.
         * @function create
         * @memberof pb.SyncReq
         * @static
         * @param {pb.ISyncReq=} [properties] Properties to set
         * @returns {pb.SyncReq} SyncReq instance
         */
        SyncReq.create = function create(properties) {
            return new SyncReq(properties);
        };

        /**
         * Encodes the specified SyncReq message. Does not implicitly {@link pb.SyncReq.verify|verify} messages.
         * @function encode
         * @memberof pb.SyncReq
         * @static
         * @param {pb.ISyncReq} message SyncReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.deviceId);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.seq);
            return writer;
        };

        /**
         * Encodes the specified SyncReq message, length delimited. Does not implicitly {@link pb.SyncReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SyncReq
         * @static
         * @param {pb.ISyncReq} message SyncReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SyncReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SyncReq} SyncReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SyncReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        message.deviceId = reader.int64();
                        break;
                    }
                case 3: {
                        message.seq = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SyncReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SyncReq} SyncReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncReq message.
         * @function verify
         * @memberof pb.SyncReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                    return "deviceId: integer|Long expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            return null;
        };

        /**
         * Creates a SyncReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SyncReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SyncReq} SyncReq
         */
        SyncReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SyncReq)
                return object;
            var message = new $root.pb.SyncReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.deviceId != null)
                if ($util.Long)
                    (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = false;
                else if (typeof object.deviceId === "string")
                    message.deviceId = parseInt(object.deviceId, 10);
                else if (typeof object.deviceId === "number")
                    message.deviceId = object.deviceId;
                else if (typeof object.deviceId === "object")
                    message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber();
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SyncReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SyncReq
         * @static
         * @param {pb.SyncReq} message SyncReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (typeof message.deviceId === "number")
                    object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
                else
                    object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber() : message.deviceId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            return object;
        };

        /**
         * Converts this SyncReq to JSON.
         * @function toJSON
         * @memberof pb.SyncReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncReq
         * @function getTypeUrl
         * @memberof pb.SyncReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SyncReq";
        };

        return SyncReq;
    })();

    pb.SyncResp = (function() {

        /**
         * Properties of a SyncResp.
         * @memberof pb
         * @interface ISyncResp
         * @property {Array.<pb.IMessage>|null} [messages] SyncResp messages
         * @property {boolean|null} [hasMore] SyncResp hasMore
         */

        /**
         * Constructs a new SyncResp.
         * @memberof pb
         * @classdesc Represents a SyncResp.
         * @implements ISyncResp
         * @constructor
         * @param {pb.ISyncResp=} [properties] Properties to set
         */
        function SyncResp(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncResp messages.
         * @member {Array.<pb.IMessage>} messages
         * @memberof pb.SyncResp
         * @instance
         */
        SyncResp.prototype.messages = $util.emptyArray;

        /**
         * SyncResp hasMore.
         * @member {boolean} hasMore
         * @memberof pb.SyncResp
         * @instance
         */
        SyncResp.prototype.hasMore = false;

        /**
         * Creates a new SyncResp instance using the specified properties.
         * @function create
         * @memberof pb.SyncResp
         * @static
         * @param {pb.ISyncResp=} [properties] Properties to set
         * @returns {pb.SyncResp} SyncResp instance
         */
        SyncResp.create = function create(properties) {
            return new SyncResp(properties);
        };

        /**
         * Encodes the specified SyncResp message. Does not implicitly {@link pb.SyncResp.verify|verify} messages.
         * @function encode
         * @memberof pb.SyncResp
         * @static
         * @param {pb.ISyncResp} message SyncResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.pb.Message.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.hasMore != null && Object.hasOwnProperty.call(message, "hasMore"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasMore);
            return writer;
        };

        /**
         * Encodes the specified SyncResp message, length delimited. Does not implicitly {@link pb.SyncResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SyncResp
         * @static
         * @param {pb.ISyncResp} message SyncResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SyncResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SyncResp} SyncResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SyncResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        message.messages.push($root.pb.Message.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.hasMore = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SyncResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SyncResp} SyncResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncResp message.
         * @function verify
         * @memberof pb.SyncResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.pb.Message.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            if (message.hasMore != null && message.hasOwnProperty("hasMore"))
                if (typeof message.hasMore !== "boolean")
                    return "hasMore: boolean expected";
            return null;
        };

        /**
         * Creates a SyncResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SyncResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SyncResp} SyncResp
         */
        SyncResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SyncResp)
                return object;
            var message = new $root.pb.SyncResp();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".pb.SyncResp.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".pb.SyncResp.messages: object expected");
                    message.messages[i] = $root.pb.Message.fromObject(object.messages[i]);
                }
            }
            if (object.hasMore != null)
                message.hasMore = Boolean(object.hasMore);
            return message;
        };

        /**
         * Creates a plain object from a SyncResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SyncResp
         * @static
         * @param {pb.SyncResp} message SyncResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (options.defaults)
                object.hasMore = false;
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.pb.Message.toObject(message.messages[j], options);
            }
            if (message.hasMore != null && message.hasOwnProperty("hasMore"))
                object.hasMore = message.hasMore;
            return object;
        };

        /**
         * Converts this SyncResp to JSON.
         * @function toJSON
         * @memberof pb.SyncResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncResp
         * @function getTypeUrl
         * @memberof pb.SyncResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SyncResp";
        };

        return SyncResp;
    })();

    pb.MessageACKReq = (function() {

        /**
         * Properties of a MessageACKReq.
         * @memberof pb
         * @interface IMessageACKReq
         * @property {number|Long|null} [userId] MessageACKReq userId
         * @property {number|Long|null} [deviceId] MessageACKReq deviceId
         * @property {number|Long|null} [deviceAck] MessageACKReq deviceAck
         * @property {number|Long|null} [receiveTime] MessageACKReq receiveTime
         */

        /**
         * Constructs a new MessageACKReq.
         * @memberof pb
         * @classdesc Represents a MessageACKReq.
         * @implements IMessageACKReq
         * @constructor
         * @param {pb.IMessageACKReq=} [properties] Properties to set
         */
        function MessageACKReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageACKReq userId.
         * @member {number|Long} userId
         * @memberof pb.MessageACKReq
         * @instance
         */
        MessageACKReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageACKReq deviceId.
         * @member {number|Long} deviceId
         * @memberof pb.MessageACKReq
         * @instance
         */
        MessageACKReq.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageACKReq deviceAck.
         * @member {number|Long} deviceAck
         * @memberof pb.MessageACKReq
         * @instance
         */
        MessageACKReq.prototype.deviceAck = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageACKReq receiveTime.
         * @member {number|Long} receiveTime
         * @memberof pb.MessageACKReq
         * @instance
         */
        MessageACKReq.prototype.receiveTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new MessageACKReq instance using the specified properties.
         * @function create
         * @memberof pb.MessageACKReq
         * @static
         * @param {pb.IMessageACKReq=} [properties] Properties to set
         * @returns {pb.MessageACKReq} MessageACKReq instance
         */
        MessageACKReq.create = function create(properties) {
            return new MessageACKReq(properties);
        };

        /**
         * Encodes the specified MessageACKReq message. Does not implicitly {@link pb.MessageACKReq.verify|verify} messages.
         * @function encode
         * @memberof pb.MessageACKReq
         * @static
         * @param {pb.IMessageACKReq} message MessageACKReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageACKReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.deviceId);
            if (message.deviceAck != null && Object.hasOwnProperty.call(message, "deviceAck"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.deviceAck);
            if (message.receiveTime != null && Object.hasOwnProperty.call(message, "receiveTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.receiveTime);
            return writer;
        };

        /**
         * Encodes the specified MessageACKReq message, length delimited. Does not implicitly {@link pb.MessageACKReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MessageACKReq
         * @static
         * @param {pb.IMessageACKReq} message MessageACKReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageACKReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageACKReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MessageACKReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MessageACKReq} MessageACKReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageACKReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MessageACKReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        message.deviceId = reader.int64();
                        break;
                    }
                case 3: {
                        message.deviceAck = reader.int64();
                        break;
                    }
                case 4: {
                        message.receiveTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageACKReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MessageACKReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MessageACKReq} MessageACKReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageACKReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageACKReq message.
         * @function verify
         * @memberof pb.MessageACKReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageACKReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                    return "deviceId: integer|Long expected";
            if (message.deviceAck != null && message.hasOwnProperty("deviceAck"))
                if (!$util.isInteger(message.deviceAck) && !(message.deviceAck && $util.isInteger(message.deviceAck.low) && $util.isInteger(message.deviceAck.high)))
                    return "deviceAck: integer|Long expected";
            if (message.receiveTime != null && message.hasOwnProperty("receiveTime"))
                if (!$util.isInteger(message.receiveTime) && !(message.receiveTime && $util.isInteger(message.receiveTime.low) && $util.isInteger(message.receiveTime.high)))
                    return "receiveTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a MessageACKReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MessageACKReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MessageACKReq} MessageACKReq
         */
        MessageACKReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MessageACKReq)
                return object;
            var message = new $root.pb.MessageACKReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.deviceId != null)
                if ($util.Long)
                    (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = false;
                else if (typeof object.deviceId === "string")
                    message.deviceId = parseInt(object.deviceId, 10);
                else if (typeof object.deviceId === "number")
                    message.deviceId = object.deviceId;
                else if (typeof object.deviceId === "object")
                    message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber();
            if (object.deviceAck != null)
                if ($util.Long)
                    (message.deviceAck = $util.Long.fromValue(object.deviceAck)).unsigned = false;
                else if (typeof object.deviceAck === "string")
                    message.deviceAck = parseInt(object.deviceAck, 10);
                else if (typeof object.deviceAck === "number")
                    message.deviceAck = object.deviceAck;
                else if (typeof object.deviceAck === "object")
                    message.deviceAck = new $util.LongBits(object.deviceAck.low >>> 0, object.deviceAck.high >>> 0).toNumber();
            if (object.receiveTime != null)
                if ($util.Long)
                    (message.receiveTime = $util.Long.fromValue(object.receiveTime)).unsigned = false;
                else if (typeof object.receiveTime === "string")
                    message.receiveTime = parseInt(object.receiveTime, 10);
                else if (typeof object.receiveTime === "number")
                    message.receiveTime = object.receiveTime;
                else if (typeof object.receiveTime === "object")
                    message.receiveTime = new $util.LongBits(object.receiveTime.low >>> 0, object.receiveTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a MessageACKReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MessageACKReq
         * @static
         * @param {pb.MessageACKReq} message MessageACKReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageACKReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceAck = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceAck = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.receiveTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.receiveTime = options.longs === String ? "0" : 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (typeof message.deviceId === "number")
                    object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
                else
                    object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber() : message.deviceId;
            if (message.deviceAck != null && message.hasOwnProperty("deviceAck"))
                if (typeof message.deviceAck === "number")
                    object.deviceAck = options.longs === String ? String(message.deviceAck) : message.deviceAck;
                else
                    object.deviceAck = options.longs === String ? $util.Long.prototype.toString.call(message.deviceAck) : options.longs === Number ? new $util.LongBits(message.deviceAck.low >>> 0, message.deviceAck.high >>> 0).toNumber() : message.deviceAck;
            if (message.receiveTime != null && message.hasOwnProperty("receiveTime"))
                if (typeof message.receiveTime === "number")
                    object.receiveTime = options.longs === String ? String(message.receiveTime) : message.receiveTime;
                else
                    object.receiveTime = options.longs === String ? $util.Long.prototype.toString.call(message.receiveTime) : options.longs === Number ? new $util.LongBits(message.receiveTime.low >>> 0, message.receiveTime.high >>> 0).toNumber() : message.receiveTime;
            return object;
        };

        /**
         * Converts this MessageACKReq to JSON.
         * @function toJSON
         * @memberof pb.MessageACKReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageACKReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageACKReq
         * @function getTypeUrl
         * @memberof pb.MessageACKReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageACKReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.MessageACKReq";
        };

        return MessageACKReq;
    })();

    pb.OfflineReq = (function() {

        /**
         * Properties of an OfflineReq.
         * @memberof pb
         * @interface IOfflineReq
         * @property {number|Long|null} [userId] OfflineReq userId
         * @property {number|Long|null} [deviceId] OfflineReq deviceId
         * @property {string|null} [clientAddr] OfflineReq clientAddr
         */

        /**
         * Constructs a new OfflineReq.
         * @memberof pb
         * @classdesc Represents an OfflineReq.
         * @implements IOfflineReq
         * @constructor
         * @param {pb.IOfflineReq=} [properties] Properties to set
         */
        function OfflineReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OfflineReq userId.
         * @member {number|Long} userId
         * @memberof pb.OfflineReq
         * @instance
         */
        OfflineReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * OfflineReq deviceId.
         * @member {number|Long} deviceId
         * @memberof pb.OfflineReq
         * @instance
         */
        OfflineReq.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * OfflineReq clientAddr.
         * @member {string} clientAddr
         * @memberof pb.OfflineReq
         * @instance
         */
        OfflineReq.prototype.clientAddr = "";

        /**
         * Creates a new OfflineReq instance using the specified properties.
         * @function create
         * @memberof pb.OfflineReq
         * @static
         * @param {pb.IOfflineReq=} [properties] Properties to set
         * @returns {pb.OfflineReq} OfflineReq instance
         */
        OfflineReq.create = function create(properties) {
            return new OfflineReq(properties);
        };

        /**
         * Encodes the specified OfflineReq message. Does not implicitly {@link pb.OfflineReq.verify|verify} messages.
         * @function encode
         * @memberof pb.OfflineReq
         * @static
         * @param {pb.IOfflineReq} message OfflineReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfflineReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.deviceId);
            if (message.clientAddr != null && Object.hasOwnProperty.call(message, "clientAddr"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.clientAddr);
            return writer;
        };

        /**
         * Encodes the specified OfflineReq message, length delimited. Does not implicitly {@link pb.OfflineReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.OfflineReq
         * @static
         * @param {pb.IOfflineReq} message OfflineReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfflineReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OfflineReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.OfflineReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.OfflineReq} OfflineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfflineReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.OfflineReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        message.deviceId = reader.int64();
                        break;
                    }
                case 3: {
                        message.clientAddr = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OfflineReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.OfflineReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.OfflineReq} OfflineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfflineReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OfflineReq message.
         * @function verify
         * @memberof pb.OfflineReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OfflineReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                    return "deviceId: integer|Long expected";
            if (message.clientAddr != null && message.hasOwnProperty("clientAddr"))
                if (!$util.isString(message.clientAddr))
                    return "clientAddr: string expected";
            return null;
        };

        /**
         * Creates an OfflineReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.OfflineReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.OfflineReq} OfflineReq
         */
        OfflineReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.OfflineReq)
                return object;
            var message = new $root.pb.OfflineReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.deviceId != null)
                if ($util.Long)
                    (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = false;
                else if (typeof object.deviceId === "string")
                    message.deviceId = parseInt(object.deviceId, 10);
                else if (typeof object.deviceId === "number")
                    message.deviceId = object.deviceId;
                else if (typeof object.deviceId === "object")
                    message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber();
            if (object.clientAddr != null)
                message.clientAddr = String(object.clientAddr);
            return message;
        };

        /**
         * Creates a plain object from an OfflineReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.OfflineReq
         * @static
         * @param {pb.OfflineReq} message OfflineReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OfflineReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceId = options.longs === String ? "0" : 0;
                object.clientAddr = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (typeof message.deviceId === "number")
                    object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
                else
                    object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber() : message.deviceId;
            if (message.clientAddr != null && message.hasOwnProperty("clientAddr"))
                object.clientAddr = message.clientAddr;
            return object;
        };

        /**
         * Converts this OfflineReq to JSON.
         * @function toJSON
         * @memberof pb.OfflineReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OfflineReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OfflineReq
         * @function getTypeUrl
         * @memberof pb.OfflineReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OfflineReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.OfflineReq";
        };

        return OfflineReq;
    })();

    pb.SubscribeRoomReq = (function() {

        /**
         * Properties of a SubscribeRoomReq.
         * @memberof pb
         * @interface ISubscribeRoomReq
         * @property {number|Long|null} [userId] SubscribeRoomReq userId
         * @property {number|Long|null} [deviceId] SubscribeRoomReq deviceId
         * @property {number|Long|null} [roomId] SubscribeRoomReq roomId
         * @property {number|Long|null} [seq] SubscribeRoomReq seq
         * @property {string|null} [connAddr] SubscribeRoomReq connAddr
         */

        /**
         * Constructs a new SubscribeRoomReq.
         * @memberof pb
         * @classdesc Represents a SubscribeRoomReq.
         * @implements ISubscribeRoomReq
         * @constructor
         * @param {pb.ISubscribeRoomReq=} [properties] Properties to set
         */
        function SubscribeRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubscribeRoomReq userId.
         * @member {number|Long} userId
         * @memberof pb.SubscribeRoomReq
         * @instance
         */
        SubscribeRoomReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SubscribeRoomReq deviceId.
         * @member {number|Long} deviceId
         * @memberof pb.SubscribeRoomReq
         * @instance
         */
        SubscribeRoomReq.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SubscribeRoomReq roomId.
         * @member {number|Long} roomId
         * @memberof pb.SubscribeRoomReq
         * @instance
         */
        SubscribeRoomReq.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SubscribeRoomReq seq.
         * @member {number|Long} seq
         * @memberof pb.SubscribeRoomReq
         * @instance
         */
        SubscribeRoomReq.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SubscribeRoomReq connAddr.
         * @member {string} connAddr
         * @memberof pb.SubscribeRoomReq
         * @instance
         */
        SubscribeRoomReq.prototype.connAddr = "";

        /**
         * Creates a new SubscribeRoomReq instance using the specified properties.
         * @function create
         * @memberof pb.SubscribeRoomReq
         * @static
         * @param {pb.ISubscribeRoomReq=} [properties] Properties to set
         * @returns {pb.SubscribeRoomReq} SubscribeRoomReq instance
         */
        SubscribeRoomReq.create = function create(properties) {
            return new SubscribeRoomReq(properties);
        };

        /**
         * Encodes the specified SubscribeRoomReq message. Does not implicitly {@link pb.SubscribeRoomReq.verify|verify} messages.
         * @function encode
         * @memberof pb.SubscribeRoomReq
         * @static
         * @param {pb.ISubscribeRoomReq} message SubscribeRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.deviceId);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.roomId);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.seq);
            if (message.connAddr != null && Object.hasOwnProperty.call(message, "connAddr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.connAddr);
            return writer;
        };

        /**
         * Encodes the specified SubscribeRoomReq message, length delimited. Does not implicitly {@link pb.SubscribeRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SubscribeRoomReq
         * @static
         * @param {pb.ISubscribeRoomReq} message SubscribeRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubscribeRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SubscribeRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SubscribeRoomReq} SubscribeRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SubscribeRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        message.deviceId = reader.int64();
                        break;
                    }
                case 3: {
                        message.roomId = reader.int64();
                        break;
                    }
                case 4: {
                        message.seq = reader.int64();
                        break;
                    }
                case 5: {
                        message.connAddr = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubscribeRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SubscribeRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SubscribeRoomReq} SubscribeRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubscribeRoomReq message.
         * @function verify
         * @memberof pb.SubscribeRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubscribeRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                    return "deviceId: integer|Long expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            if (message.connAddr != null && message.hasOwnProperty("connAddr"))
                if (!$util.isString(message.connAddr))
                    return "connAddr: string expected";
            return null;
        };

        /**
         * Creates a SubscribeRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SubscribeRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SubscribeRoomReq} SubscribeRoomReq
         */
        SubscribeRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SubscribeRoomReq)
                return object;
            var message = new $root.pb.SubscribeRoomReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.deviceId != null)
                if ($util.Long)
                    (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = false;
                else if (typeof object.deviceId === "string")
                    message.deviceId = parseInt(object.deviceId, 10);
                else if (typeof object.deviceId === "number")
                    message.deviceId = object.deviceId;
                else if (typeof object.deviceId === "object")
                    message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            if (object.connAddr != null)
                message.connAddr = String(object.connAddr);
            return message;
        };

        /**
         * Creates a plain object from a SubscribeRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SubscribeRoomReq
         * @static
         * @param {pb.SubscribeRoomReq} message SubscribeRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubscribeRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
                object.connAddr = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (typeof message.deviceId === "number")
                    object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
                else
                    object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber() : message.deviceId;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            if (message.connAddr != null && message.hasOwnProperty("connAddr"))
                object.connAddr = message.connAddr;
            return object;
        };

        /**
         * Converts this SubscribeRoomReq to JSON.
         * @function toJSON
         * @memberof pb.SubscribeRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubscribeRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SubscribeRoomReq
         * @function getTypeUrl
         * @memberof pb.SubscribeRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SubscribeRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SubscribeRoomReq";
        };

        return SubscribeRoomReq;
    })();

    pb.PushReq = (function() {

        /**
         * Properties of a PushReq.
         * @memberof pb
         * @interface IPushReq
         * @property {number|Long|null} [userId] PushReq userId
         * @property {number|null} [code] PushReq code
         * @property {Uint8Array|null} [content] PushReq content
         * @property {boolean|null} [isPersist] PushReq isPersist
         */

        /**
         * Constructs a new PushReq.
         * @memberof pb
         * @classdesc Represents a PushReq.
         * @implements IPushReq
         * @constructor
         * @param {pb.IPushReq=} [properties] Properties to set
         */
        function PushReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushReq userId.
         * @member {number|Long} userId
         * @memberof pb.PushReq
         * @instance
         */
        PushReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PushReq code.
         * @member {number} code
         * @memberof pb.PushReq
         * @instance
         */
        PushReq.prototype.code = 0;

        /**
         * PushReq content.
         * @member {Uint8Array} content
         * @memberof pb.PushReq
         * @instance
         */
        PushReq.prototype.content = $util.newBuffer([]);

        /**
         * PushReq isPersist.
         * @member {boolean} isPersist
         * @memberof pb.PushReq
         * @instance
         */
        PushReq.prototype.isPersist = false;

        /**
         * Creates a new PushReq instance using the specified properties.
         * @function create
         * @memberof pb.PushReq
         * @static
         * @param {pb.IPushReq=} [properties] Properties to set
         * @returns {pb.PushReq} PushReq instance
         */
        PushReq.create = function create(properties) {
            return new PushReq(properties);
        };

        /**
         * Encodes the specified PushReq message. Does not implicitly {@link pb.PushReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PushReq
         * @static
         * @param {pb.IPushReq} message PushReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.content);
            if (message.isPersist != null && Object.hasOwnProperty.call(message, "isPersist"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isPersist);
            return writer;
        };

        /**
         * Encodes the specified PushReq message, length delimited. Does not implicitly {@link pb.PushReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PushReq
         * @static
         * @param {pb.IPushReq} message PushReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PushReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PushReq} PushReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PushReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        message.code = reader.int32();
                        break;
                    }
                case 3: {
                        message.content = reader.bytes();
                        break;
                    }
                case 4: {
                        message.isPersist = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PushReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PushReq} PushReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushReq message.
         * @function verify
         * @memberof pb.PushReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                    return "content: buffer expected";
            if (message.isPersist != null && message.hasOwnProperty("isPersist"))
                if (typeof message.isPersist !== "boolean")
                    return "isPersist: boolean expected";
            return null;
        };

        /**
         * Creates a PushReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PushReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PushReq} PushReq
         */
        PushReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PushReq)
                return object;
            var message = new $root.pb.PushReq();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.content != null)
                if (typeof object.content === "string")
                    $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
                else if (object.content.length >= 0)
                    message.content = object.content;
            if (object.isPersist != null)
                message.isPersist = Boolean(object.isPersist);
            return message;
        };

        /**
         * Creates a plain object from a PushReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PushReq
         * @static
         * @param {pb.PushReq} message PushReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.code = 0;
                if (options.bytes === String)
                    object.content = "";
                else {
                    object.content = [];
                    if (options.bytes !== Array)
                        object.content = $util.newBuffer(object.content);
                }
                object.isPersist = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
            if (message.isPersist != null && message.hasOwnProperty("isPersist"))
                object.isPersist = message.isPersist;
            return object;
        };

        /**
         * Converts this PushReq to JSON.
         * @function toJSON
         * @memberof pb.PushReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PushReq
         * @function getTypeUrl
         * @memberof pb.PushReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PushReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PushReq";
        };

        return PushReq;
    })();

    pb.PushResp = (function() {

        /**
         * Properties of a PushResp.
         * @memberof pb
         * @interface IPushResp
         * @property {number|Long|null} [seq] PushResp seq
         */

        /**
         * Constructs a new PushResp.
         * @memberof pb
         * @classdesc Represents a PushResp.
         * @implements IPushResp
         * @constructor
         * @param {pb.IPushResp=} [properties] Properties to set
         */
        function PushResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushResp seq.
         * @member {number|Long} seq
         * @memberof pb.PushResp
         * @instance
         */
        PushResp.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PushResp instance using the specified properties.
         * @function create
         * @memberof pb.PushResp
         * @static
         * @param {pb.IPushResp=} [properties] Properties to set
         * @returns {pb.PushResp} PushResp instance
         */
        PushResp.create = function create(properties) {
            return new PushResp(properties);
        };

        /**
         * Encodes the specified PushResp message. Does not implicitly {@link pb.PushResp.verify|verify} messages.
         * @function encode
         * @memberof pb.PushResp
         * @static
         * @param {pb.IPushResp} message PushResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seq);
            return writer;
        };

        /**
         * Encodes the specified PushResp message, length delimited. Does not implicitly {@link pb.PushResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PushResp
         * @static
         * @param {pb.IPushResp} message PushResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PushResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PushResp} PushResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PushResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.seq = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PushResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PushResp} PushResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushResp message.
         * @function verify
         * @memberof pb.PushResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            return null;
        };

        /**
         * Creates a PushResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PushResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PushResp} PushResp
         */
        PushResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PushResp)
                return object;
            var message = new $root.pb.PushResp();
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PushResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PushResp
         * @static
         * @param {pb.PushResp} message PushResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            return object;
        };

        /**
         * Converts this PushResp to JSON.
         * @function toJSON
         * @memberof pb.PushResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PushResp
         * @function getTypeUrl
         * @memberof pb.PushResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PushResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PushResp";
        };

        return PushResp;
    })();

    pb.PushAllReq = (function() {

        /**
         * Properties of a PushAllReq.
         * @memberof pb
         * @interface IPushAllReq
         * @property {number|null} [code] PushAllReq code
         * @property {Uint8Array|null} [content] PushAllReq content
         */

        /**
         * Constructs a new PushAllReq.
         * @memberof pb
         * @classdesc Represents a PushAllReq.
         * @implements IPushAllReq
         * @constructor
         * @param {pb.IPushAllReq=} [properties] Properties to set
         */
        function PushAllReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushAllReq code.
         * @member {number} code
         * @memberof pb.PushAllReq
         * @instance
         */
        PushAllReq.prototype.code = 0;

        /**
         * PushAllReq content.
         * @member {Uint8Array} content
         * @memberof pb.PushAllReq
         * @instance
         */
        PushAllReq.prototype.content = $util.newBuffer([]);

        /**
         * Creates a new PushAllReq instance using the specified properties.
         * @function create
         * @memberof pb.PushAllReq
         * @static
         * @param {pb.IPushAllReq=} [properties] Properties to set
         * @returns {pb.PushAllReq} PushAllReq instance
         */
        PushAllReq.create = function create(properties) {
            return new PushAllReq(properties);
        };

        /**
         * Encodes the specified PushAllReq message. Does not implicitly {@link pb.PushAllReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PushAllReq
         * @static
         * @param {pb.IPushAllReq} message PushAllReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushAllReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.content);
            return writer;
        };

        /**
         * Encodes the specified PushAllReq message, length delimited. Does not implicitly {@link pb.PushAllReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PushAllReq
         * @static
         * @param {pb.IPushAllReq} message PushAllReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushAllReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushAllReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PushAllReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PushAllReq} PushAllReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushAllReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PushAllReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.content = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushAllReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PushAllReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PushAllReq} PushAllReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushAllReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushAllReq message.
         * @function verify
         * @memberof pb.PushAllReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushAllReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                    return "content: buffer expected";
            return null;
        };

        /**
         * Creates a PushAllReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PushAllReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PushAllReq} PushAllReq
         */
        PushAllReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PushAllReq)
                return object;
            var message = new $root.pb.PushAllReq();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.content != null)
                if (typeof object.content === "string")
                    $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
                else if (object.content.length >= 0)
                    message.content = object.content;
            return message;
        };

        /**
         * Creates a plain object from a PushAllReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PushAllReq
         * @static
         * @param {pb.PushAllReq} message PushAllReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushAllReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                if (options.bytes === String)
                    object.content = "";
                else {
                    object.content = [];
                    if (options.bytes !== Array)
                        object.content = $util.newBuffer(object.content);
                }
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
            return object;
        };

        /**
         * Converts this PushAllReq to JSON.
         * @function toJSON
         * @memberof pb.PushAllReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushAllReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PushAllReq
         * @function getTypeUrl
         * @memberof pb.PushAllReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PushAllReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PushAllReq";
        };

        return PushAllReq;
    })();

    pb.GetDeviceReq = (function() {

        /**
         * Properties of a GetDeviceReq.
         * @memberof pb
         * @interface IGetDeviceReq
         * @property {number|Long|null} [deviceId] GetDeviceReq deviceId
         */

        /**
         * Constructs a new GetDeviceReq.
         * @memberof pb
         * @classdesc Represents a GetDeviceReq.
         * @implements IGetDeviceReq
         * @constructor
         * @param {pb.IGetDeviceReq=} [properties] Properties to set
         */
        function GetDeviceReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetDeviceReq deviceId.
         * @member {number|Long} deviceId
         * @memberof pb.GetDeviceReq
         * @instance
         */
        GetDeviceReq.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetDeviceReq instance using the specified properties.
         * @function create
         * @memberof pb.GetDeviceReq
         * @static
         * @param {pb.IGetDeviceReq=} [properties] Properties to set
         * @returns {pb.GetDeviceReq} GetDeviceReq instance
         */
        GetDeviceReq.create = function create(properties) {
            return new GetDeviceReq(properties);
        };

        /**
         * Encodes the specified GetDeviceReq message. Does not implicitly {@link pb.GetDeviceReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GetDeviceReq
         * @static
         * @param {pb.IGetDeviceReq} message GetDeviceReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDeviceReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.deviceId);
            return writer;
        };

        /**
         * Encodes the specified GetDeviceReq message, length delimited. Does not implicitly {@link pb.GetDeviceReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetDeviceReq
         * @static
         * @param {pb.IGetDeviceReq} message GetDeviceReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDeviceReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetDeviceReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetDeviceReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetDeviceReq} GetDeviceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDeviceReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetDeviceReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deviceId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetDeviceReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetDeviceReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetDeviceReq} GetDeviceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDeviceReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetDeviceReq message.
         * @function verify
         * @memberof pb.GetDeviceReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetDeviceReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                    return "deviceId: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetDeviceReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetDeviceReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetDeviceReq} GetDeviceReq
         */
        GetDeviceReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetDeviceReq)
                return object;
            var message = new $root.pb.GetDeviceReq();
            if (object.deviceId != null)
                if ($util.Long)
                    (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = false;
                else if (typeof object.deviceId === "string")
                    message.deviceId = parseInt(object.deviceId, 10);
                else if (typeof object.deviceId === "number")
                    message.deviceId = object.deviceId;
                else if (typeof object.deviceId === "object")
                    message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetDeviceReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetDeviceReq
         * @static
         * @param {pb.GetDeviceReq} message GetDeviceReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetDeviceReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceId = options.longs === String ? "0" : 0;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (typeof message.deviceId === "number")
                    object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
                else
                    object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber() : message.deviceId;
            return object;
        };

        /**
         * Converts this GetDeviceReq to JSON.
         * @function toJSON
         * @memberof pb.GetDeviceReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetDeviceReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetDeviceReq
         * @function getTypeUrl
         * @memberof pb.GetDeviceReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetDeviceReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GetDeviceReq";
        };

        return GetDeviceReq;
    })();

    pb.GetDeviceResp = (function() {

        /**
         * Properties of a GetDeviceResp.
         * @memberof pb
         * @interface IGetDeviceResp
         * @property {pb.IDevice|null} [device] GetDeviceResp device
         */

        /**
         * Constructs a new GetDeviceResp.
         * @memberof pb
         * @classdesc Represents a GetDeviceResp.
         * @implements IGetDeviceResp
         * @constructor
         * @param {pb.IGetDeviceResp=} [properties] Properties to set
         */
        function GetDeviceResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetDeviceResp device.
         * @member {pb.IDevice|null|undefined} device
         * @memberof pb.GetDeviceResp
         * @instance
         */
        GetDeviceResp.prototype.device = null;

        /**
         * Creates a new GetDeviceResp instance using the specified properties.
         * @function create
         * @memberof pb.GetDeviceResp
         * @static
         * @param {pb.IGetDeviceResp=} [properties] Properties to set
         * @returns {pb.GetDeviceResp} GetDeviceResp instance
         */
        GetDeviceResp.create = function create(properties) {
            return new GetDeviceResp(properties);
        };

        /**
         * Encodes the specified GetDeviceResp message. Does not implicitly {@link pb.GetDeviceResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GetDeviceResp
         * @static
         * @param {pb.IGetDeviceResp} message GetDeviceResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDeviceResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.device != null && Object.hasOwnProperty.call(message, "device"))
                $root.pb.Device.encode(message.device, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetDeviceResp message, length delimited. Does not implicitly {@link pb.GetDeviceResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GetDeviceResp
         * @static
         * @param {pb.IGetDeviceResp} message GetDeviceResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDeviceResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetDeviceResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GetDeviceResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GetDeviceResp} GetDeviceResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDeviceResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GetDeviceResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.device = $root.pb.Device.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetDeviceResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GetDeviceResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GetDeviceResp} GetDeviceResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDeviceResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetDeviceResp message.
         * @function verify
         * @memberof pb.GetDeviceResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetDeviceResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.device != null && message.hasOwnProperty("device")) {
                var error = $root.pb.Device.verify(message.device);
                if (error)
                    return "device." + error;
            }
            return null;
        };

        /**
         * Creates a GetDeviceResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GetDeviceResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GetDeviceResp} GetDeviceResp
         */
        GetDeviceResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GetDeviceResp)
                return object;
            var message = new $root.pb.GetDeviceResp();
            if (object.device != null) {
                if (typeof object.device !== "object")
                    throw TypeError(".pb.GetDeviceResp.device: object expected");
                message.device = $root.pb.Device.fromObject(object.device);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetDeviceResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GetDeviceResp
         * @static
         * @param {pb.GetDeviceResp} message GetDeviceResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetDeviceResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.device = null;
            if (message.device != null && message.hasOwnProperty("device"))
                object.device = $root.pb.Device.toObject(message.device, options);
            return object;
        };

        /**
         * Converts this GetDeviceResp to JSON.
         * @function toJSON
         * @memberof pb.GetDeviceResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetDeviceResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetDeviceResp
         * @function getTypeUrl
         * @memberof pb.GetDeviceResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetDeviceResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GetDeviceResp";
        };

        return GetDeviceResp;
    })();

    pb.Device = (function() {

        /**
         * Properties of a Device.
         * @memberof pb
         * @interface IDevice
         * @property {number|Long|null} [deviceId] Device deviceId
         * @property {number|Long|null} [userId] Device userId
         * @property {number|null} [type] Device type
         * @property {string|null} [brand] Device brand
         * @property {string|null} [model] Device model
         * @property {string|null} [systemVersion] Device systemVersion
         * @property {string|null} [sdkVersion] Device sdkVersion
         * @property {number|null} [status] Device status
         * @property {string|null} [connAddr] Device connAddr
         * @property {string|null} [clientAddr] Device clientAddr
         * @property {number|Long|null} [createTime] Device createTime
         * @property {number|Long|null} [updateTime] Device updateTime
         */

        /**
         * Constructs a new Device.
         * @memberof pb
         * @classdesc Represents a Device.
         * @implements IDevice
         * @constructor
         * @param {pb.IDevice=} [properties] Properties to set
         */
        function Device(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Device deviceId.
         * @member {number|Long} deviceId
         * @memberof pb.Device
         * @instance
         */
        Device.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Device userId.
         * @member {number|Long} userId
         * @memberof pb.Device
         * @instance
         */
        Device.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Device type.
         * @member {number} type
         * @memberof pb.Device
         * @instance
         */
        Device.prototype.type = 0;

        /**
         * Device brand.
         * @member {string} brand
         * @memberof pb.Device
         * @instance
         */
        Device.prototype.brand = "";

        /**
         * Device model.
         * @member {string} model
         * @memberof pb.Device
         * @instance
         */
        Device.prototype.model = "";

        /**
         * Device systemVersion.
         * @member {string} systemVersion
         * @memberof pb.Device
         * @instance
         */
        Device.prototype.systemVersion = "";

        /**
         * Device sdkVersion.
         * @member {string} sdkVersion
         * @memberof pb.Device
         * @instance
         */
        Device.prototype.sdkVersion = "";

        /**
         * Device status.
         * @member {number} status
         * @memberof pb.Device
         * @instance
         */
        Device.prototype.status = 0;

        /**
         * Device connAddr.
         * @member {string} connAddr
         * @memberof pb.Device
         * @instance
         */
        Device.prototype.connAddr = "";

        /**
         * Device clientAddr.
         * @member {string} clientAddr
         * @memberof pb.Device
         * @instance
         */
        Device.prototype.clientAddr = "";

        /**
         * Device createTime.
         * @member {number|Long} createTime
         * @memberof pb.Device
         * @instance
         */
        Device.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Device updateTime.
         * @member {number|Long} updateTime
         * @memberof pb.Device
         * @instance
         */
        Device.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Device instance using the specified properties.
         * @function create
         * @memberof pb.Device
         * @static
         * @param {pb.IDevice=} [properties] Properties to set
         * @returns {pb.Device} Device instance
         */
        Device.create = function create(properties) {
            return new Device(properties);
        };

        /**
         * Encodes the specified Device message. Does not implicitly {@link pb.Device.verify|verify} messages.
         * @function encode
         * @memberof pb.Device
         * @static
         * @param {pb.IDevice} message Device message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Device.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.deviceId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.brand != null && Object.hasOwnProperty.call(message, "brand"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.brand);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.model);
            if (message.systemVersion != null && Object.hasOwnProperty.call(message, "systemVersion"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.systemVersion);
            if (message.sdkVersion != null && Object.hasOwnProperty.call(message, "sdkVersion"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.sdkVersion);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.status);
            if (message.connAddr != null && Object.hasOwnProperty.call(message, "connAddr"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.connAddr);
            if (message.clientAddr != null && Object.hasOwnProperty.call(message, "clientAddr"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.clientAddr);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.createTime);
            if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.updateTime);
            return writer;
        };

        /**
         * Encodes the specified Device message, length delimited. Does not implicitly {@link pb.Device.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Device
         * @static
         * @param {pb.IDevice} message Device message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Device.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Device message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Device
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Device} Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Device.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Device();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deviceId = reader.int64();
                        break;
                    }
                case 2: {
                        message.userId = reader.int64();
                        break;
                    }
                case 3: {
                        message.type = reader.int32();
                        break;
                    }
                case 4: {
                        message.brand = reader.string();
                        break;
                    }
                case 5: {
                        message.model = reader.string();
                        break;
                    }
                case 6: {
                        message.systemVersion = reader.string();
                        break;
                    }
                case 7: {
                        message.sdkVersion = reader.string();
                        break;
                    }
                case 8: {
                        message.status = reader.int32();
                        break;
                    }
                case 9: {
                        message.connAddr = reader.string();
                        break;
                    }
                case 10: {
                        message.clientAddr = reader.string();
                        break;
                    }
                case 11: {
                        message.createTime = reader.int64();
                        break;
                    }
                case 12: {
                        message.updateTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Device message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Device
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Device} Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Device.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Device message.
         * @function verify
         * @memberof pb.Device
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Device.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                    return "deviceId: integer|Long expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.brand != null && message.hasOwnProperty("brand"))
                if (!$util.isString(message.brand))
                    return "brand: string expected";
            if (message.model != null && message.hasOwnProperty("model"))
                if (!$util.isString(message.model))
                    return "model: string expected";
            if (message.systemVersion != null && message.hasOwnProperty("systemVersion"))
                if (!$util.isString(message.systemVersion))
                    return "systemVersion: string expected";
            if (message.sdkVersion != null && message.hasOwnProperty("sdkVersion"))
                if (!$util.isString(message.sdkVersion))
                    return "sdkVersion: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.connAddr != null && message.hasOwnProperty("connAddr"))
                if (!$util.isString(message.connAddr))
                    return "connAddr: string expected";
            if (message.clientAddr != null && message.hasOwnProperty("clientAddr"))
                if (!$util.isString(message.clientAddr))
                    return "clientAddr: string expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                    return "updateTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a Device message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Device
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Device} Device
         */
        Device.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Device)
                return object;
            var message = new $root.pb.Device();
            if (object.deviceId != null)
                if ($util.Long)
                    (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = false;
                else if (typeof object.deviceId === "string")
                    message.deviceId = parseInt(object.deviceId, 10);
                else if (typeof object.deviceId === "number")
                    message.deviceId = object.deviceId;
                else if (typeof object.deviceId === "object")
                    message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.brand != null)
                message.brand = String(object.brand);
            if (object.model != null)
                message.model = String(object.model);
            if (object.systemVersion != null)
                message.systemVersion = String(object.systemVersion);
            if (object.sdkVersion != null)
                message.sdkVersion = String(object.sdkVersion);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.connAddr != null)
                message.connAddr = String(object.connAddr);
            if (object.clientAddr != null)
                message.clientAddr = String(object.clientAddr);
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
            if (object.updateTime != null)
                if ($util.Long)
                    (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = false;
                else if (typeof object.updateTime === "string")
                    message.updateTime = parseInt(object.updateTime, 10);
                else if (typeof object.updateTime === "number")
                    message.updateTime = object.updateTime;
                else if (typeof object.updateTime === "object")
                    message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Device message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Device
         * @static
         * @param {pb.Device} message Device
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Device.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.type = 0;
                object.brand = "";
                object.model = "";
                object.systemVersion = "";
                object.sdkVersion = "";
                object.status = 0;
                object.connAddr = "";
                object.clientAddr = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updateTime = options.longs === String ? "0" : 0;
            }
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (typeof message.deviceId === "number")
                    object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
                else
                    object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber() : message.deviceId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.brand != null && message.hasOwnProperty("brand"))
                object.brand = message.brand;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = message.model;
            if (message.systemVersion != null && message.hasOwnProperty("systemVersion"))
                object.systemVersion = message.systemVersion;
            if (message.sdkVersion != null && message.hasOwnProperty("sdkVersion"))
                object.sdkVersion = message.sdkVersion;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.connAddr != null && message.hasOwnProperty("connAddr"))
                object.connAddr = message.connAddr;
            if (message.clientAddr != null && message.hasOwnProperty("clientAddr"))
                object.clientAddr = message.clientAddr;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (typeof message.updateTime === "number")
                    object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
                else
                    object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber() : message.updateTime;
            return object;
        };

        /**
         * Converts this Device to JSON.
         * @function toJSON
         * @memberof pb.Device
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Device.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Device
         * @function getTypeUrl
         * @memberof pb.Device
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Device.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Device";
        };

        return Device;
    })();

    pb.ServerStopReq = (function() {

        /**
         * Properties of a ServerStopReq.
         * @memberof pb
         * @interface IServerStopReq
         * @property {string|null} [connAddr] ServerStopReq connAddr
         */

        /**
         * Constructs a new ServerStopReq.
         * @memberof pb
         * @classdesc Represents a ServerStopReq.
         * @implements IServerStopReq
         * @constructor
         * @param {pb.IServerStopReq=} [properties] Properties to set
         */
        function ServerStopReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerStopReq connAddr.
         * @member {string} connAddr
         * @memberof pb.ServerStopReq
         * @instance
         */
        ServerStopReq.prototype.connAddr = "";

        /**
         * Creates a new ServerStopReq instance using the specified properties.
         * @function create
         * @memberof pb.ServerStopReq
         * @static
         * @param {pb.IServerStopReq=} [properties] Properties to set
         * @returns {pb.ServerStopReq} ServerStopReq instance
         */
        ServerStopReq.create = function create(properties) {
            return new ServerStopReq(properties);
        };

        /**
         * Encodes the specified ServerStopReq message. Does not implicitly {@link pb.ServerStopReq.verify|verify} messages.
         * @function encode
         * @memberof pb.ServerStopReq
         * @static
         * @param {pb.IServerStopReq} message ServerStopReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStopReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connAddr != null && Object.hasOwnProperty.call(message, "connAddr"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.connAddr);
            return writer;
        };

        /**
         * Encodes the specified ServerStopReq message, length delimited. Does not implicitly {@link pb.ServerStopReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ServerStopReq
         * @static
         * @param {pb.IServerStopReq} message ServerStopReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStopReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerStopReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ServerStopReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ServerStopReq} ServerStopReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStopReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ServerStopReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.connAddr = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerStopReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ServerStopReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ServerStopReq} ServerStopReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStopReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerStopReq message.
         * @function verify
         * @memberof pb.ServerStopReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerStopReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connAddr != null && message.hasOwnProperty("connAddr"))
                if (!$util.isString(message.connAddr))
                    return "connAddr: string expected";
            return null;
        };

        /**
         * Creates a ServerStopReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ServerStopReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ServerStopReq} ServerStopReq
         */
        ServerStopReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ServerStopReq)
                return object;
            var message = new $root.pb.ServerStopReq();
            if (object.connAddr != null)
                message.connAddr = String(object.connAddr);
            return message;
        };

        /**
         * Creates a plain object from a ServerStopReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ServerStopReq
         * @static
         * @param {pb.ServerStopReq} message ServerStopReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerStopReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.connAddr = "";
            if (message.connAddr != null && message.hasOwnProperty("connAddr"))
                object.connAddr = message.connAddr;
            return object;
        };

        /**
         * Converts this ServerStopReq to JSON.
         * @function toJSON
         * @memberof pb.ServerStopReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerStopReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerStopReq
         * @function getTypeUrl
         * @memberof pb.ServerStopReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerStopReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ServerStopReq";
        };

        return ServerStopReq;
    })();

    /**
     * PushCode enum.
     * @name pb.PushCode
     * @enum {number}
     * @property {number} PC_ADD_DEFAULT=0 PC_ADD_DEFAULT value
     * @property {number} PC_USER_MESSAGE=100 PC_USER_MESSAGE value
     * @property {number} PC_GROUP_MESSAGE=101 PC_GROUP_MESSAGE value
     * @property {number} PC_ADD_FRIEND=110 PC_ADD_FRIEND value
     * @property {number} PC_AGREE_ADD_FRIEND=111 PC_AGREE_ADD_FRIEND value
     * @property {number} PC_UPDATE_GROUP=120 PC_UPDATE_GROUP value
     * @property {number} PC_ADD_GROUP_MEMBERS=121 PC_ADD_GROUP_MEMBERS value
     * @property {number} PC_REMOVE_GROUP_MEMBER=122 PC_REMOVE_GROUP_MEMBER value
     */
    pb.PushCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PC_ADD_DEFAULT"] = 0;
        values[valuesById[100] = "PC_USER_MESSAGE"] = 100;
        values[valuesById[101] = "PC_GROUP_MESSAGE"] = 101;
        values[valuesById[110] = "PC_ADD_FRIEND"] = 110;
        values[valuesById[111] = "PC_AGREE_ADD_FRIEND"] = 111;
        values[valuesById[120] = "PC_UPDATE_GROUP"] = 120;
        values[valuesById[121] = "PC_ADD_GROUP_MEMBERS"] = 121;
        values[valuesById[122] = "PC_REMOVE_GROUP_MEMBER"] = 122;
        return values;
    })();

    pb.Sender = (function() {

        /**
         * Properties of a Sender.
         * @memberof pb
         * @interface ISender
         * @property {number|Long|null} [userId] Sender userId
         * @property {number|Long|null} [deviceId] Sender deviceId
         * @property {string|null} [avatarUrl] Sender avatarUrl
         * @property {string|null} [nickname] Sender nickname
         * @property {string|null} [extra] Sender extra
         */

        /**
         * Constructs a new Sender.
         * @memberof pb
         * @classdesc Represents a Sender.
         * @implements ISender
         * @constructor
         * @param {pb.ISender=} [properties] Properties to set
         */
        function Sender(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sender userId.
         * @member {number|Long} userId
         * @memberof pb.Sender
         * @instance
         */
        Sender.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Sender deviceId.
         * @member {number|Long} deviceId
         * @memberof pb.Sender
         * @instance
         */
        Sender.prototype.deviceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Sender avatarUrl.
         * @member {string} avatarUrl
         * @memberof pb.Sender
         * @instance
         */
        Sender.prototype.avatarUrl = "";

        /**
         * Sender nickname.
         * @member {string} nickname
         * @memberof pb.Sender
         * @instance
         */
        Sender.prototype.nickname = "";

        /**
         * Sender extra.
         * @member {string} extra
         * @memberof pb.Sender
         * @instance
         */
        Sender.prototype.extra = "";

        /**
         * Creates a new Sender instance using the specified properties.
         * @function create
         * @memberof pb.Sender
         * @static
         * @param {pb.ISender=} [properties] Properties to set
         * @returns {pb.Sender} Sender instance
         */
        Sender.create = function create(properties) {
            return new Sender(properties);
        };

        /**
         * Encodes the specified Sender message. Does not implicitly {@link pb.Sender.verify|verify} messages.
         * @function encode
         * @memberof pb.Sender
         * @static
         * @param {pb.ISender} message Sender message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sender.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.deviceId);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatarUrl);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.nickname);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified Sender message, length delimited. Does not implicitly {@link pb.Sender.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Sender
         * @static
         * @param {pb.ISender} message Sender message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sender.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Sender message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Sender
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Sender} Sender
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sender.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Sender();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.userId = reader.int64();
                        break;
                    }
                case 3: {
                        message.deviceId = reader.int64();
                        break;
                    }
                case 4: {
                        message.avatarUrl = reader.string();
                        break;
                    }
                case 5: {
                        message.nickname = reader.string();
                        break;
                    }
                case 6: {
                        message.extra = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Sender message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Sender
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Sender} Sender
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sender.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Sender message.
         * @function verify
         * @memberof pb.Sender
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Sender.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isInteger(message.deviceId) && !(message.deviceId && $util.isInteger(message.deviceId.low) && $util.isInteger(message.deviceId.high)))
                    return "deviceId: integer|Long expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates a Sender message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Sender
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Sender} Sender
         */
        Sender.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Sender)
                return object;
            var message = new $root.pb.Sender();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.deviceId != null)
                if ($util.Long)
                    (message.deviceId = $util.Long.fromValue(object.deviceId)).unsigned = false;
                else if (typeof object.deviceId === "string")
                    message.deviceId = parseInt(object.deviceId, 10);
                else if (typeof object.deviceId === "number")
                    message.deviceId = object.deviceId;
                else if (typeof object.deviceId === "object")
                    message.deviceId = new $util.LongBits(object.deviceId.low >>> 0, object.deviceId.high >>> 0).toNumber();
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from a Sender message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Sender
         * @static
         * @param {pb.Sender} message Sender
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Sender.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceId = options.longs === String ? "0" : 0;
                object.avatarUrl = "";
                object.nickname = "";
                object.extra = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (typeof message.deviceId === "number")
                    object.deviceId = options.longs === String ? String(message.deviceId) : message.deviceId;
                else
                    object.deviceId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceId) : options.longs === Number ? new $util.LongBits(message.deviceId.low >>> 0, message.deviceId.high >>> 0).toNumber() : message.deviceId;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this Sender to JSON.
         * @function toJSON
         * @memberof pb.Sender
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Sender.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Sender
         * @function getTypeUrl
         * @memberof pb.Sender
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Sender.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Sender";
        };

        return Sender;
    })();

    pb.UserMessagePush = (function() {

        /**
         * Properties of a UserMessagePush.
         * @memberof pb
         * @interface IUserMessagePush
         * @property {pb.ISender|null} [sender] UserMessagePush sender
         * @property {number|Long|null} [receiverId] UserMessagePush receiverId
         * @property {Uint8Array|null} [content] UserMessagePush content
         */

        /**
         * Constructs a new UserMessagePush.
         * @memberof pb
         * @classdesc Represents a UserMessagePush.
         * @implements IUserMessagePush
         * @constructor
         * @param {pb.IUserMessagePush=} [properties] Properties to set
         */
        function UserMessagePush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserMessagePush sender.
         * @member {pb.ISender|null|undefined} sender
         * @memberof pb.UserMessagePush
         * @instance
         */
        UserMessagePush.prototype.sender = null;

        /**
         * UserMessagePush receiverId.
         * @member {number|Long} receiverId
         * @memberof pb.UserMessagePush
         * @instance
         */
        UserMessagePush.prototype.receiverId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserMessagePush content.
         * @member {Uint8Array} content
         * @memberof pb.UserMessagePush
         * @instance
         */
        UserMessagePush.prototype.content = $util.newBuffer([]);

        /**
         * Creates a new UserMessagePush instance using the specified properties.
         * @function create
         * @memberof pb.UserMessagePush
         * @static
         * @param {pb.IUserMessagePush=} [properties] Properties to set
         * @returns {pb.UserMessagePush} UserMessagePush instance
         */
        UserMessagePush.create = function create(properties) {
            return new UserMessagePush(properties);
        };

        /**
         * Encodes the specified UserMessagePush message. Does not implicitly {@link pb.UserMessagePush.verify|verify} messages.
         * @function encode
         * @memberof pb.UserMessagePush
         * @static
         * @param {pb.IUserMessagePush} message UserMessagePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessagePush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
                $root.pb.Sender.encode(message.sender, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.receiverId);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.content);
            return writer;
        };

        /**
         * Encodes the specified UserMessagePush message, length delimited. Does not implicitly {@link pb.UserMessagePush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UserMessagePush
         * @static
         * @param {pb.IUserMessagePush} message UserMessagePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessagePush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMessagePush message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UserMessagePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UserMessagePush} UserMessagePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessagePush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UserMessagePush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sender = $root.pb.Sender.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.receiverId = reader.int64();
                        break;
                    }
                case 3: {
                        message.content = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserMessagePush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UserMessagePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UserMessagePush} UserMessagePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessagePush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserMessagePush message.
         * @function verify
         * @memberof pb.UserMessagePush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMessagePush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sender != null && message.hasOwnProperty("sender")) {
                var error = $root.pb.Sender.verify(message.sender);
                if (error)
                    return "sender." + error;
            }
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                if (!$util.isInteger(message.receiverId) && !(message.receiverId && $util.isInteger(message.receiverId.low) && $util.isInteger(message.receiverId.high)))
                    return "receiverId: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                    return "content: buffer expected";
            return null;
        };

        /**
         * Creates a UserMessagePush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UserMessagePush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UserMessagePush} UserMessagePush
         */
        UserMessagePush.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UserMessagePush)
                return object;
            var message = new $root.pb.UserMessagePush();
            if (object.sender != null) {
                if (typeof object.sender !== "object")
                    throw TypeError(".pb.UserMessagePush.sender: object expected");
                message.sender = $root.pb.Sender.fromObject(object.sender);
            }
            if (object.receiverId != null)
                if ($util.Long)
                    (message.receiverId = $util.Long.fromValue(object.receiverId)).unsigned = false;
                else if (typeof object.receiverId === "string")
                    message.receiverId = parseInt(object.receiverId, 10);
                else if (typeof object.receiverId === "number")
                    message.receiverId = object.receiverId;
                else if (typeof object.receiverId === "object")
                    message.receiverId = new $util.LongBits(object.receiverId.low >>> 0, object.receiverId.high >>> 0).toNumber();
            if (object.content != null)
                if (typeof object.content === "string")
                    $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
                else if (object.content.length >= 0)
                    message.content = object.content;
            return message;
        };

        /**
         * Creates a plain object from a UserMessagePush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UserMessagePush
         * @static
         * @param {pb.UserMessagePush} message UserMessagePush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMessagePush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sender = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.receiverId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.receiverId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.content = "";
                else {
                    object.content = [];
                    if (options.bytes !== Array)
                        object.content = $util.newBuffer(object.content);
                }
            }
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = $root.pb.Sender.toObject(message.sender, options);
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                if (typeof message.receiverId === "number")
                    object.receiverId = options.longs === String ? String(message.receiverId) : message.receiverId;
                else
                    object.receiverId = options.longs === String ? $util.Long.prototype.toString.call(message.receiverId) : options.longs === Number ? new $util.LongBits(message.receiverId.low >>> 0, message.receiverId.high >>> 0).toNumber() : message.receiverId;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
            return object;
        };

        /**
         * Converts this UserMessagePush to JSON.
         * @function toJSON
         * @memberof pb.UserMessagePush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMessagePush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserMessagePush
         * @function getTypeUrl
         * @memberof pb.UserMessagePush
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserMessagePush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.UserMessagePush";
        };

        return UserMessagePush;
    })();

    pb.AddFriendPush = (function() {

        /**
         * Properties of an AddFriendPush.
         * @memberof pb
         * @interface IAddFriendPush
         * @property {number|Long|null} [friendId] AddFriendPush friendId
         * @property {string|null} [nickname] AddFriendPush nickname
         * @property {string|null} [avatarUrl] AddFriendPush avatarUrl
         * @property {string|null} [description] AddFriendPush description
         */

        /**
         * Constructs a new AddFriendPush.
         * @memberof pb
         * @classdesc Represents an AddFriendPush.
         * @implements IAddFriendPush
         * @constructor
         * @param {pb.IAddFriendPush=} [properties] Properties to set
         */
        function AddFriendPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddFriendPush friendId.
         * @member {number|Long} friendId
         * @memberof pb.AddFriendPush
         * @instance
         */
        AddFriendPush.prototype.friendId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AddFriendPush nickname.
         * @member {string} nickname
         * @memberof pb.AddFriendPush
         * @instance
         */
        AddFriendPush.prototype.nickname = "";

        /**
         * AddFriendPush avatarUrl.
         * @member {string} avatarUrl
         * @memberof pb.AddFriendPush
         * @instance
         */
        AddFriendPush.prototype.avatarUrl = "";

        /**
         * AddFriendPush description.
         * @member {string} description
         * @memberof pb.AddFriendPush
         * @instance
         */
        AddFriendPush.prototype.description = "";

        /**
         * Creates a new AddFriendPush instance using the specified properties.
         * @function create
         * @memberof pb.AddFriendPush
         * @static
         * @param {pb.IAddFriendPush=} [properties] Properties to set
         * @returns {pb.AddFriendPush} AddFriendPush instance
         */
        AddFriendPush.create = function create(properties) {
            return new AddFriendPush(properties);
        };

        /**
         * Encodes the specified AddFriendPush message. Does not implicitly {@link pb.AddFriendPush.verify|verify} messages.
         * @function encode
         * @memberof pb.AddFriendPush
         * @static
         * @param {pb.IAddFriendPush} message AddFriendPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddFriendPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friendId != null && Object.hasOwnProperty.call(message, "friendId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.friendId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatarUrl);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified AddFriendPush message, length delimited. Does not implicitly {@link pb.AddFriendPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AddFriendPush
         * @static
         * @param {pb.IAddFriendPush} message AddFriendPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddFriendPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddFriendPush message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AddFriendPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AddFriendPush} AddFriendPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddFriendPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AddFriendPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.friendId = reader.int64();
                        break;
                    }
                case 2: {
                        message.nickname = reader.string();
                        break;
                    }
                case 3: {
                        message.avatarUrl = reader.string();
                        break;
                    }
                case 4: {
                        message.description = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddFriendPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AddFriendPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AddFriendPush} AddFriendPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddFriendPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddFriendPush message.
         * @function verify
         * @memberof pb.AddFriendPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddFriendPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (!$util.isInteger(message.friendId) && !(message.friendId && $util.isInteger(message.friendId.low) && $util.isInteger(message.friendId.high)))
                    return "friendId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates an AddFriendPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AddFriendPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AddFriendPush} AddFriendPush
         */
        AddFriendPush.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AddFriendPush)
                return object;
            var message = new $root.pb.AddFriendPush();
            if (object.friendId != null)
                if ($util.Long)
                    (message.friendId = $util.Long.fromValue(object.friendId)).unsigned = false;
                else if (typeof object.friendId === "string")
                    message.friendId = parseInt(object.friendId, 10);
                else if (typeof object.friendId === "number")
                    message.friendId = object.friendId;
                else if (typeof object.friendId === "object")
                    message.friendId = new $util.LongBits(object.friendId.low >>> 0, object.friendId.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from an AddFriendPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AddFriendPush
         * @static
         * @param {pb.AddFriendPush} message AddFriendPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddFriendPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.friendId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.friendId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.avatarUrl = "";
                object.description = "";
            }
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (typeof message.friendId === "number")
                    object.friendId = options.longs === String ? String(message.friendId) : message.friendId;
                else
                    object.friendId = options.longs === String ? $util.Long.prototype.toString.call(message.friendId) : options.longs === Number ? new $util.LongBits(message.friendId.low >>> 0, message.friendId.high >>> 0).toNumber() : message.friendId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this AddFriendPush to JSON.
         * @function toJSON
         * @memberof pb.AddFriendPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddFriendPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddFriendPush
         * @function getTypeUrl
         * @memberof pb.AddFriendPush
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddFriendPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.AddFriendPush";
        };

        return AddFriendPush;
    })();

    pb.AgreeAddFriendPush = (function() {

        /**
         * Properties of an AgreeAddFriendPush.
         * @memberof pb
         * @interface IAgreeAddFriendPush
         * @property {number|Long|null} [friendId] AgreeAddFriendPush friendId
         * @property {string|null} [nickname] AgreeAddFriendPush nickname
         * @property {string|null} [avatarUrl] AgreeAddFriendPush avatarUrl
         */

        /**
         * Constructs a new AgreeAddFriendPush.
         * @memberof pb
         * @classdesc Represents an AgreeAddFriendPush.
         * @implements IAgreeAddFriendPush
         * @constructor
         * @param {pb.IAgreeAddFriendPush=} [properties] Properties to set
         */
        function AgreeAddFriendPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AgreeAddFriendPush friendId.
         * @member {number|Long} friendId
         * @memberof pb.AgreeAddFriendPush
         * @instance
         */
        AgreeAddFriendPush.prototype.friendId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AgreeAddFriendPush nickname.
         * @member {string} nickname
         * @memberof pb.AgreeAddFriendPush
         * @instance
         */
        AgreeAddFriendPush.prototype.nickname = "";

        /**
         * AgreeAddFriendPush avatarUrl.
         * @member {string} avatarUrl
         * @memberof pb.AgreeAddFriendPush
         * @instance
         */
        AgreeAddFriendPush.prototype.avatarUrl = "";

        /**
         * Creates a new AgreeAddFriendPush instance using the specified properties.
         * @function create
         * @memberof pb.AgreeAddFriendPush
         * @static
         * @param {pb.IAgreeAddFriendPush=} [properties] Properties to set
         * @returns {pb.AgreeAddFriendPush} AgreeAddFriendPush instance
         */
        AgreeAddFriendPush.create = function create(properties) {
            return new AgreeAddFriendPush(properties);
        };

        /**
         * Encodes the specified AgreeAddFriendPush message. Does not implicitly {@link pb.AgreeAddFriendPush.verify|verify} messages.
         * @function encode
         * @memberof pb.AgreeAddFriendPush
         * @static
         * @param {pb.IAgreeAddFriendPush} message AgreeAddFriendPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgreeAddFriendPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friendId != null && Object.hasOwnProperty.call(message, "friendId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.friendId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatarUrl);
            return writer;
        };

        /**
         * Encodes the specified AgreeAddFriendPush message, length delimited. Does not implicitly {@link pb.AgreeAddFriendPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AgreeAddFriendPush
         * @static
         * @param {pb.IAgreeAddFriendPush} message AgreeAddFriendPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgreeAddFriendPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AgreeAddFriendPush message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AgreeAddFriendPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AgreeAddFriendPush} AgreeAddFriendPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgreeAddFriendPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AgreeAddFriendPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.friendId = reader.int64();
                        break;
                    }
                case 2: {
                        message.nickname = reader.string();
                        break;
                    }
                case 3: {
                        message.avatarUrl = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AgreeAddFriendPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AgreeAddFriendPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AgreeAddFriendPush} AgreeAddFriendPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgreeAddFriendPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AgreeAddFriendPush message.
         * @function verify
         * @memberof pb.AgreeAddFriendPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AgreeAddFriendPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (!$util.isInteger(message.friendId) && !(message.friendId && $util.isInteger(message.friendId.low) && $util.isInteger(message.friendId.high)))
                    return "friendId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            return null;
        };

        /**
         * Creates an AgreeAddFriendPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AgreeAddFriendPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AgreeAddFriendPush} AgreeAddFriendPush
         */
        AgreeAddFriendPush.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AgreeAddFriendPush)
                return object;
            var message = new $root.pb.AgreeAddFriendPush();
            if (object.friendId != null)
                if ($util.Long)
                    (message.friendId = $util.Long.fromValue(object.friendId)).unsigned = false;
                else if (typeof object.friendId === "string")
                    message.friendId = parseInt(object.friendId, 10);
                else if (typeof object.friendId === "number")
                    message.friendId = object.friendId;
                else if (typeof object.friendId === "object")
                    message.friendId = new $util.LongBits(object.friendId.low >>> 0, object.friendId.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            return message;
        };

        /**
         * Creates a plain object from an AgreeAddFriendPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AgreeAddFriendPush
         * @static
         * @param {pb.AgreeAddFriendPush} message AgreeAddFriendPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AgreeAddFriendPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.friendId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.friendId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.avatarUrl = "";
            }
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                if (typeof message.friendId === "number")
                    object.friendId = options.longs === String ? String(message.friendId) : message.friendId;
                else
                    object.friendId = options.longs === String ? $util.Long.prototype.toString.call(message.friendId) : options.longs === Number ? new $util.LongBits(message.friendId.low >>> 0, message.friendId.high >>> 0).toNumber() : message.friendId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            return object;
        };

        /**
         * Converts this AgreeAddFriendPush to JSON.
         * @function toJSON
         * @memberof pb.AgreeAddFriendPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AgreeAddFriendPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AgreeAddFriendPush
         * @function getTypeUrl
         * @memberof pb.AgreeAddFriendPush
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AgreeAddFriendPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.AgreeAddFriendPush";
        };

        return AgreeAddFriendPush;
    })();

    pb.UpdateGroupPush = (function() {

        /**
         * Properties of an UpdateGroupPush.
         * @memberof pb
         * @interface IUpdateGroupPush
         * @property {number|Long|null} [optId] UpdateGroupPush optId
         * @property {string|null} [optName] UpdateGroupPush optName
         * @property {string|null} [name] UpdateGroupPush name
         * @property {string|null} [avatarUrl] UpdateGroupPush avatarUrl
         * @property {string|null} [introduction] UpdateGroupPush introduction
         * @property {string|null} [extra] UpdateGroupPush extra
         */

        /**
         * Constructs a new UpdateGroupPush.
         * @memberof pb
         * @classdesc Represents an UpdateGroupPush.
         * @implements IUpdateGroupPush
         * @constructor
         * @param {pb.IUpdateGroupPush=} [properties] Properties to set
         */
        function UpdateGroupPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateGroupPush optId.
         * @member {number|Long} optId
         * @memberof pb.UpdateGroupPush
         * @instance
         */
        UpdateGroupPush.prototype.optId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdateGroupPush optName.
         * @member {string} optName
         * @memberof pb.UpdateGroupPush
         * @instance
         */
        UpdateGroupPush.prototype.optName = "";

        /**
         * UpdateGroupPush name.
         * @member {string} name
         * @memberof pb.UpdateGroupPush
         * @instance
         */
        UpdateGroupPush.prototype.name = "";

        /**
         * UpdateGroupPush avatarUrl.
         * @member {string} avatarUrl
         * @memberof pb.UpdateGroupPush
         * @instance
         */
        UpdateGroupPush.prototype.avatarUrl = "";

        /**
         * UpdateGroupPush introduction.
         * @member {string} introduction
         * @memberof pb.UpdateGroupPush
         * @instance
         */
        UpdateGroupPush.prototype.introduction = "";

        /**
         * UpdateGroupPush extra.
         * @member {string} extra
         * @memberof pb.UpdateGroupPush
         * @instance
         */
        UpdateGroupPush.prototype.extra = "";

        /**
         * Creates a new UpdateGroupPush instance using the specified properties.
         * @function create
         * @memberof pb.UpdateGroupPush
         * @static
         * @param {pb.IUpdateGroupPush=} [properties] Properties to set
         * @returns {pb.UpdateGroupPush} UpdateGroupPush instance
         */
        UpdateGroupPush.create = function create(properties) {
            return new UpdateGroupPush(properties);
        };

        /**
         * Encodes the specified UpdateGroupPush message. Does not implicitly {@link pb.UpdateGroupPush.verify|verify} messages.
         * @function encode
         * @memberof pb.UpdateGroupPush
         * @static
         * @param {pb.IUpdateGroupPush} message UpdateGroupPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGroupPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.optId != null && Object.hasOwnProperty.call(message, "optId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.optId);
            if (message.optName != null && Object.hasOwnProperty.call(message, "optName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.optName);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatarUrl);
            if (message.introduction != null && Object.hasOwnProperty.call(message, "introduction"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.introduction);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified UpdateGroupPush message, length delimited. Does not implicitly {@link pb.UpdateGroupPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UpdateGroupPush
         * @static
         * @param {pb.IUpdateGroupPush} message UpdateGroupPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGroupPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateGroupPush message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UpdateGroupPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UpdateGroupPush} UpdateGroupPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGroupPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UpdateGroupPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.optId = reader.int64();
                        break;
                    }
                case 2: {
                        message.optName = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.avatarUrl = reader.string();
                        break;
                    }
                case 5: {
                        message.introduction = reader.string();
                        break;
                    }
                case 6: {
                        message.extra = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateGroupPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UpdateGroupPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UpdateGroupPush} UpdateGroupPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGroupPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateGroupPush message.
         * @function verify
         * @memberof pb.UpdateGroupPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateGroupPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.optId != null && message.hasOwnProperty("optId"))
                if (!$util.isInteger(message.optId) && !(message.optId && $util.isInteger(message.optId.low) && $util.isInteger(message.optId.high)))
                    return "optId: integer|Long expected";
            if (message.optName != null && message.hasOwnProperty("optName"))
                if (!$util.isString(message.optName))
                    return "optName: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.introduction != null && message.hasOwnProperty("introduction"))
                if (!$util.isString(message.introduction))
                    return "introduction: string expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates an UpdateGroupPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UpdateGroupPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UpdateGroupPush} UpdateGroupPush
         */
        UpdateGroupPush.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UpdateGroupPush)
                return object;
            var message = new $root.pb.UpdateGroupPush();
            if (object.optId != null)
                if ($util.Long)
                    (message.optId = $util.Long.fromValue(object.optId)).unsigned = false;
                else if (typeof object.optId === "string")
                    message.optId = parseInt(object.optId, 10);
                else if (typeof object.optId === "number")
                    message.optId = object.optId;
                else if (typeof object.optId === "object")
                    message.optId = new $util.LongBits(object.optId.low >>> 0, object.optId.high >>> 0).toNumber();
            if (object.optName != null)
                message.optName = String(object.optName);
            if (object.name != null)
                message.name = String(object.name);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.introduction != null)
                message.introduction = String(object.introduction);
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from an UpdateGroupPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UpdateGroupPush
         * @static
         * @param {pb.UpdateGroupPush} message UpdateGroupPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateGroupPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.optId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.optId = options.longs === String ? "0" : 0;
                object.optName = "";
                object.name = "";
                object.avatarUrl = "";
                object.introduction = "";
                object.extra = "";
            }
            if (message.optId != null && message.hasOwnProperty("optId"))
                if (typeof message.optId === "number")
                    object.optId = options.longs === String ? String(message.optId) : message.optId;
                else
                    object.optId = options.longs === String ? $util.Long.prototype.toString.call(message.optId) : options.longs === Number ? new $util.LongBits(message.optId.low >>> 0, message.optId.high >>> 0).toNumber() : message.optId;
            if (message.optName != null && message.hasOwnProperty("optName"))
                object.optName = message.optName;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.introduction != null && message.hasOwnProperty("introduction"))
                object.introduction = message.introduction;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this UpdateGroupPush to JSON.
         * @function toJSON
         * @memberof pb.UpdateGroupPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateGroupPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateGroupPush
         * @function getTypeUrl
         * @memberof pb.UpdateGroupPush
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateGroupPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.UpdateGroupPush";
        };

        return UpdateGroupPush;
    })();

    pb.AddGroupMembersPush = (function() {

        /**
         * Properties of an AddGroupMembersPush.
         * @memberof pb
         * @interface IAddGroupMembersPush
         * @property {number|Long|null} [optId] AddGroupMembersPush optId
         * @property {string|null} [optName] AddGroupMembersPush optName
         * @property {Array.<pb.IGroupMember>|null} [members] AddGroupMembersPush members
         */

        /**
         * Constructs a new AddGroupMembersPush.
         * @memberof pb
         * @classdesc Represents an AddGroupMembersPush.
         * @implements IAddGroupMembersPush
         * @constructor
         * @param {pb.IAddGroupMembersPush=} [properties] Properties to set
         */
        function AddGroupMembersPush(properties) {
            this.members = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddGroupMembersPush optId.
         * @member {number|Long} optId
         * @memberof pb.AddGroupMembersPush
         * @instance
         */
        AddGroupMembersPush.prototype.optId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AddGroupMembersPush optName.
         * @member {string} optName
         * @memberof pb.AddGroupMembersPush
         * @instance
         */
        AddGroupMembersPush.prototype.optName = "";

        /**
         * AddGroupMembersPush members.
         * @member {Array.<pb.IGroupMember>} members
         * @memberof pb.AddGroupMembersPush
         * @instance
         */
        AddGroupMembersPush.prototype.members = $util.emptyArray;

        /**
         * Creates a new AddGroupMembersPush instance using the specified properties.
         * @function create
         * @memberof pb.AddGroupMembersPush
         * @static
         * @param {pb.IAddGroupMembersPush=} [properties] Properties to set
         * @returns {pb.AddGroupMembersPush} AddGroupMembersPush instance
         */
        AddGroupMembersPush.create = function create(properties) {
            return new AddGroupMembersPush(properties);
        };

        /**
         * Encodes the specified AddGroupMembersPush message. Does not implicitly {@link pb.AddGroupMembersPush.verify|verify} messages.
         * @function encode
         * @memberof pb.AddGroupMembersPush
         * @static
         * @param {pb.IAddGroupMembersPush} message AddGroupMembersPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddGroupMembersPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.optId != null && Object.hasOwnProperty.call(message, "optId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.optId);
            if (message.optName != null && Object.hasOwnProperty.call(message, "optName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.optName);
            if (message.members != null && message.members.length)
                for (var i = 0; i < message.members.length; ++i)
                    $root.pb.GroupMember.encode(message.members[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddGroupMembersPush message, length delimited. Does not implicitly {@link pb.AddGroupMembersPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.AddGroupMembersPush
         * @static
         * @param {pb.IAddGroupMembersPush} message AddGroupMembersPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddGroupMembersPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddGroupMembersPush message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AddGroupMembersPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AddGroupMembersPush} AddGroupMembersPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddGroupMembersPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AddGroupMembersPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.optId = reader.int64();
                        break;
                    }
                case 2: {
                        message.optName = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.members && message.members.length))
                            message.members = [];
                        message.members.push($root.pb.GroupMember.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddGroupMembersPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.AddGroupMembersPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.AddGroupMembersPush} AddGroupMembersPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddGroupMembersPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddGroupMembersPush message.
         * @function verify
         * @memberof pb.AddGroupMembersPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddGroupMembersPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.optId != null && message.hasOwnProperty("optId"))
                if (!$util.isInteger(message.optId) && !(message.optId && $util.isInteger(message.optId.low) && $util.isInteger(message.optId.high)))
                    return "optId: integer|Long expected";
            if (message.optName != null && message.hasOwnProperty("optName"))
                if (!$util.isString(message.optName))
                    return "optName: string expected";
            if (message.members != null && message.hasOwnProperty("members")) {
                if (!Array.isArray(message.members))
                    return "members: array expected";
                for (var i = 0; i < message.members.length; ++i) {
                    var error = $root.pb.GroupMember.verify(message.members[i]);
                    if (error)
                        return "members." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AddGroupMembersPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.AddGroupMembersPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.AddGroupMembersPush} AddGroupMembersPush
         */
        AddGroupMembersPush.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.AddGroupMembersPush)
                return object;
            var message = new $root.pb.AddGroupMembersPush();
            if (object.optId != null)
                if ($util.Long)
                    (message.optId = $util.Long.fromValue(object.optId)).unsigned = false;
                else if (typeof object.optId === "string")
                    message.optId = parseInt(object.optId, 10);
                else if (typeof object.optId === "number")
                    message.optId = object.optId;
                else if (typeof object.optId === "object")
                    message.optId = new $util.LongBits(object.optId.low >>> 0, object.optId.high >>> 0).toNumber();
            if (object.optName != null)
                message.optName = String(object.optName);
            if (object.members) {
                if (!Array.isArray(object.members))
                    throw TypeError(".pb.AddGroupMembersPush.members: array expected");
                message.members = [];
                for (var i = 0; i < object.members.length; ++i) {
                    if (typeof object.members[i] !== "object")
                        throw TypeError(".pb.AddGroupMembersPush.members: object expected");
                    message.members[i] = $root.pb.GroupMember.fromObject(object.members[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AddGroupMembersPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.AddGroupMembersPush
         * @static
         * @param {pb.AddGroupMembersPush} message AddGroupMembersPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddGroupMembersPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.members = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.optId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.optId = options.longs === String ? "0" : 0;
                object.optName = "";
            }
            if (message.optId != null && message.hasOwnProperty("optId"))
                if (typeof message.optId === "number")
                    object.optId = options.longs === String ? String(message.optId) : message.optId;
                else
                    object.optId = options.longs === String ? $util.Long.prototype.toString.call(message.optId) : options.longs === Number ? new $util.LongBits(message.optId.low >>> 0, message.optId.high >>> 0).toNumber() : message.optId;
            if (message.optName != null && message.hasOwnProperty("optName"))
                object.optName = message.optName;
            if (message.members && message.members.length) {
                object.members = [];
                for (var j = 0; j < message.members.length; ++j)
                    object.members[j] = $root.pb.GroupMember.toObject(message.members[j], options);
            }
            return object;
        };

        /**
         * Converts this AddGroupMembersPush to JSON.
         * @function toJSON
         * @memberof pb.AddGroupMembersPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddGroupMembersPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddGroupMembersPush
         * @function getTypeUrl
         * @memberof pb.AddGroupMembersPush
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddGroupMembersPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.AddGroupMembersPush";
        };

        return AddGroupMembersPush;
    })();

    pb.RemoveGroupMemberPush = (function() {

        /**
         * Properties of a RemoveGroupMemberPush.
         * @memberof pb
         * @interface IRemoveGroupMemberPush
         * @property {number|Long|null} [optId] RemoveGroupMemberPush optId
         * @property {string|null} [optName] RemoveGroupMemberPush optName
         * @property {number|Long|null} [deletedUserId] RemoveGroupMemberPush deletedUserId
         */

        /**
         * Constructs a new RemoveGroupMemberPush.
         * @memberof pb
         * @classdesc Represents a RemoveGroupMemberPush.
         * @implements IRemoveGroupMemberPush
         * @constructor
         * @param {pb.IRemoveGroupMemberPush=} [properties] Properties to set
         */
        function RemoveGroupMemberPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveGroupMemberPush optId.
         * @member {number|Long} optId
         * @memberof pb.RemoveGroupMemberPush
         * @instance
         */
        RemoveGroupMemberPush.prototype.optId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RemoveGroupMemberPush optName.
         * @member {string} optName
         * @memberof pb.RemoveGroupMemberPush
         * @instance
         */
        RemoveGroupMemberPush.prototype.optName = "";

        /**
         * RemoveGroupMemberPush deletedUserId.
         * @member {number|Long} deletedUserId
         * @memberof pb.RemoveGroupMemberPush
         * @instance
         */
        RemoveGroupMemberPush.prototype.deletedUserId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RemoveGroupMemberPush instance using the specified properties.
         * @function create
         * @memberof pb.RemoveGroupMemberPush
         * @static
         * @param {pb.IRemoveGroupMemberPush=} [properties] Properties to set
         * @returns {pb.RemoveGroupMemberPush} RemoveGroupMemberPush instance
         */
        RemoveGroupMemberPush.create = function create(properties) {
            return new RemoveGroupMemberPush(properties);
        };

        /**
         * Encodes the specified RemoveGroupMemberPush message. Does not implicitly {@link pb.RemoveGroupMemberPush.verify|verify} messages.
         * @function encode
         * @memberof pb.RemoveGroupMemberPush
         * @static
         * @param {pb.IRemoveGroupMemberPush} message RemoveGroupMemberPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveGroupMemberPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.optId != null && Object.hasOwnProperty.call(message, "optId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.optId);
            if (message.optName != null && Object.hasOwnProperty.call(message, "optName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.optName);
            if (message.deletedUserId != null && Object.hasOwnProperty.call(message, "deletedUserId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.deletedUserId);
            return writer;
        };

        /**
         * Encodes the specified RemoveGroupMemberPush message, length delimited. Does not implicitly {@link pb.RemoveGroupMemberPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RemoveGroupMemberPush
         * @static
         * @param {pb.IRemoveGroupMemberPush} message RemoveGroupMemberPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveGroupMemberPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveGroupMemberPush message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RemoveGroupMemberPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RemoveGroupMemberPush} RemoveGroupMemberPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveGroupMemberPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RemoveGroupMemberPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.optId = reader.int64();
                        break;
                    }
                case 2: {
                        message.optName = reader.string();
                        break;
                    }
                case 3: {
                        message.deletedUserId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveGroupMemberPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RemoveGroupMemberPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RemoveGroupMemberPush} RemoveGroupMemberPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveGroupMemberPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveGroupMemberPush message.
         * @function verify
         * @memberof pb.RemoveGroupMemberPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveGroupMemberPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.optId != null && message.hasOwnProperty("optId"))
                if (!$util.isInteger(message.optId) && !(message.optId && $util.isInteger(message.optId.low) && $util.isInteger(message.optId.high)))
                    return "optId: integer|Long expected";
            if (message.optName != null && message.hasOwnProperty("optName"))
                if (!$util.isString(message.optName))
                    return "optName: string expected";
            if (message.deletedUserId != null && message.hasOwnProperty("deletedUserId"))
                if (!$util.isInteger(message.deletedUserId) && !(message.deletedUserId && $util.isInteger(message.deletedUserId.low) && $util.isInteger(message.deletedUserId.high)))
                    return "deletedUserId: integer|Long expected";
            return null;
        };

        /**
         * Creates a RemoveGroupMemberPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RemoveGroupMemberPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RemoveGroupMemberPush} RemoveGroupMemberPush
         */
        RemoveGroupMemberPush.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RemoveGroupMemberPush)
                return object;
            var message = new $root.pb.RemoveGroupMemberPush();
            if (object.optId != null)
                if ($util.Long)
                    (message.optId = $util.Long.fromValue(object.optId)).unsigned = false;
                else if (typeof object.optId === "string")
                    message.optId = parseInt(object.optId, 10);
                else if (typeof object.optId === "number")
                    message.optId = object.optId;
                else if (typeof object.optId === "object")
                    message.optId = new $util.LongBits(object.optId.low >>> 0, object.optId.high >>> 0).toNumber();
            if (object.optName != null)
                message.optName = String(object.optName);
            if (object.deletedUserId != null)
                if ($util.Long)
                    (message.deletedUserId = $util.Long.fromValue(object.deletedUserId)).unsigned = false;
                else if (typeof object.deletedUserId === "string")
                    message.deletedUserId = parseInt(object.deletedUserId, 10);
                else if (typeof object.deletedUserId === "number")
                    message.deletedUserId = object.deletedUserId;
                else if (typeof object.deletedUserId === "object")
                    message.deletedUserId = new $util.LongBits(object.deletedUserId.low >>> 0, object.deletedUserId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RemoveGroupMemberPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RemoveGroupMemberPush
         * @static
         * @param {pb.RemoveGroupMemberPush} message RemoveGroupMemberPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveGroupMemberPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.optId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.optId = options.longs === String ? "0" : 0;
                object.optName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deletedUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deletedUserId = options.longs === String ? "0" : 0;
            }
            if (message.optId != null && message.hasOwnProperty("optId"))
                if (typeof message.optId === "number")
                    object.optId = options.longs === String ? String(message.optId) : message.optId;
                else
                    object.optId = options.longs === String ? $util.Long.prototype.toString.call(message.optId) : options.longs === Number ? new $util.LongBits(message.optId.low >>> 0, message.optId.high >>> 0).toNumber() : message.optId;
            if (message.optName != null && message.hasOwnProperty("optName"))
                object.optName = message.optName;
            if (message.deletedUserId != null && message.hasOwnProperty("deletedUserId"))
                if (typeof message.deletedUserId === "number")
                    object.deletedUserId = options.longs === String ? String(message.deletedUserId) : message.deletedUserId;
                else
                    object.deletedUserId = options.longs === String ? $util.Long.prototype.toString.call(message.deletedUserId) : options.longs === Number ? new $util.LongBits(message.deletedUserId.low >>> 0, message.deletedUserId.high >>> 0).toNumber() : message.deletedUserId;
            return object;
        };

        /**
         * Converts this RemoveGroupMemberPush to JSON.
         * @function toJSON
         * @memberof pb.RemoveGroupMemberPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveGroupMemberPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RemoveGroupMemberPush
         * @function getTypeUrl
         * @memberof pb.RemoveGroupMemberPush
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RemoveGroupMemberPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.RemoveGroupMemberPush";
        };

        return RemoveGroupMemberPush;
    })();

    return pb;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Empty
             * @function getTypeUrl
             * @memberof google.protobuf.Empty
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Empty";
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
