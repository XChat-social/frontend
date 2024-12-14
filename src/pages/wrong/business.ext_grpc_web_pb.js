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

        /**
         * Callback as used by {@link pb.BusinessExt#claimTwitterFollowReward}.
         * @memberof pb.BusinessExt
         * @typedef ClaimTwitterFollowRewardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pb.ClaimTwitterFollowRewardResp} [response] ClaimTwitterFollowRewardResp
         */

        /**
         * Calls ClaimTwitterFollowReward.
         * @function claimTwitterFollowReward
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.IClaimTwitterFollowRewardReq} request ClaimTwitterFollowRewardReq message or plain object
         * @param {pb.BusinessExt.ClaimTwitterFollowRewardCallback} callback Node-style callback called with the error, if any, and ClaimTwitterFollowRewardResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(BusinessExt.prototype.claimTwitterFollowReward = function claimTwitterFollowReward(request, callback) {
            return this.rpcCall(claimTwitterFollowReward, $root.pb.ClaimTwitterFollowRewardReq, $root.pb.ClaimTwitterFollowRewardResp, request, callback);
        }, "name", { value: "ClaimTwitterFollowReward" });

        /**
         * Calls ClaimTwitterFollowReward.
         * @function claimTwitterFollowReward
         * @memberof pb.BusinessExt
         * @instance
         * @param {pb.IClaimTwitterFollowRewardReq} request ClaimTwitterFollowRewardReq message or plain object
         * @returns {Promise<pb.ClaimTwitterFollowRewardResp>} Promise
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
                case 1:
                    message.phoneNumber = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.deviceId = reader.int64();
                    break;
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
                case 1:
                    message.isNew = reader.bool();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
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
         * @property {number|null} [followReward] User followReward
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
         * User followReward.
         * @member {number} followReward
         * @memberof pb.User
         * @instance
         */
        User.prototype.followReward = 0;

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
            if (message.followReward != null && Object.hasOwnProperty.call(message, "followReward"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.followReward);
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
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.sex = reader.int32();
                    break;
                case 4:
                    message.avatarUrl = reader.string();
                    break;
                case 5:
                    message.extra = reader.string();
                    break;
                case 6:
                    message.createTime = reader.int64();
                    break;
                case 7:
                    message.updateTime = reader.int64();
                    break;
                case 8:
                    message.twitterId = reader.string();
                    break;
                case 9:
                    message.twitterUsername = reader.string();
                    break;
                case 10:
                    message.xpoint = reader.int32();
                    break;
                case 11:
                    message.followReward = reader.int32();
                    break;
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
            if (message.followReward != null && message.hasOwnProperty("followReward"))
                if (!$util.isInteger(message.followReward))
                    return "followReward: integer expected";
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
            if (object.followReward != null)
                message.followReward = object.followReward | 0;
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
                object.followReward = 0;
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
            if (message.followReward != null && message.hasOwnProperty("followReward"))
                object.followReward = message.followReward;
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
                case 1:
                    message.userId = reader.int64();
                    break;
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
                case 1:
                    message.user = $root.pb.User.decode(reader, reader.uint32());
                    break;
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
                case 1:
                    message.nickname = reader.string();
                    break;
                case 2:
                    message.sex = reader.int32();
                    break;
                case 3:
                    message.avatarUrl = reader.string();
                    break;
                case 4:
                    message.extra = reader.string();
                    break;
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
                case 1:
                    message.key = reader.string();
                    break;
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
                case 1:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.pb.User.decode(reader, reader.uint32()));
                    break;
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
                case 1:
                    message.url = reader.string();
                    break;
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
                case 1:
                    message.authorizationCode = reader.string();
                    break;
                case 2:
                    message.state = reader.string();
                    break;
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
                case 1:
                    message.isNew = reader.bool();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
                    message.userInfo = $root.pb.User.decode(reader, reader.uint32());
                    break;
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
                case 1:
                    message.userId = reader.int64();
                    break;
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
                case 1:
                    message.rewardAmount = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
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
                case 1:
                    message.userId = reader.int64();
                    break;
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
                case 1:
                    message.rewardAmount = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
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

    pb.ClaimTwitterFollowRewardReq = (function() {

        /**
         * Properties of a ClaimTwitterFollowRewardReq.
         * @memberof pb
         * @interface IClaimTwitterFollowRewardReq
         * @property {number|Long|null} [userId] ClaimTwitterFollowRewardReq userId
         */

        /**
         * Constructs a new ClaimTwitterFollowRewardReq.
         * @memberof pb
         * @classdesc Represents a ClaimTwitterFollowRewardReq.
         * @implements IClaimTwitterFollowRewardReq
         * @constructor
         * @param {pb.IClaimTwitterFollowRewardReq=} [properties] Properties to set
         */
        function ClaimTwitterFollowRewardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClaimTwitterFollowRewardReq userId.
         * @member {number|Long} userId
         * @memberof pb.ClaimTwitterFollowRewardReq
         * @instance
         */
        ClaimTwitterFollowRewardReq.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ClaimTwitterFollowRewardReq instance using the specified properties.
         * @function create
         * @memberof pb.ClaimTwitterFollowRewardReq
         * @static
         * @param {pb.IClaimTwitterFollowRewardReq=} [properties] Properties to set
         * @returns {pb.ClaimTwitterFollowRewardReq} ClaimTwitterFollowRewardReq instance
         */
        ClaimTwitterFollowRewardReq.create = function create(properties) {
            return new ClaimTwitterFollowRewardReq(properties);
        };

        /**
         * Encodes the specified ClaimTwitterFollowRewardReq message. Does not implicitly {@link pb.ClaimTwitterFollowRewardReq.verify|verify} messages.
         * @function encode
         * @memberof pb.ClaimTwitterFollowRewardReq
         * @static
         * @param {pb.IClaimTwitterFollowRewardReq} message ClaimTwitterFollowRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClaimTwitterFollowRewardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified ClaimTwitterFollowRewardReq message, length delimited. Does not implicitly {@link pb.ClaimTwitterFollowRewardReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ClaimTwitterFollowRewardReq
         * @static
         * @param {pb.IClaimTwitterFollowRewardReq} message ClaimTwitterFollowRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClaimTwitterFollowRewardReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClaimTwitterFollowRewardReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ClaimTwitterFollowRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ClaimTwitterFollowRewardReq} ClaimTwitterFollowRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClaimTwitterFollowRewardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ClaimTwitterFollowRewardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClaimTwitterFollowRewardReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ClaimTwitterFollowRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ClaimTwitterFollowRewardReq} ClaimTwitterFollowRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClaimTwitterFollowRewardReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClaimTwitterFollowRewardReq message.
         * @function verify
         * @memberof pb.ClaimTwitterFollowRewardReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClaimTwitterFollowRewardReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a ClaimTwitterFollowRewardReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ClaimTwitterFollowRewardReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ClaimTwitterFollowRewardReq} ClaimTwitterFollowRewardReq
         */
        ClaimTwitterFollowRewardReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ClaimTwitterFollowRewardReq)
                return object;
            var message = new $root.pb.ClaimTwitterFollowRewardReq();
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
         * Creates a plain object from a ClaimTwitterFollowRewardReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ClaimTwitterFollowRewardReq
         * @static
         * @param {pb.ClaimTwitterFollowRewardReq} message ClaimTwitterFollowRewardReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClaimTwitterFollowRewardReq.toObject = function toObject(message, options) {
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
         * Converts this ClaimTwitterFollowRewardReq to JSON.
         * @function toJSON
         * @memberof pb.ClaimTwitterFollowRewardReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClaimTwitterFollowRewardReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClaimTwitterFollowRewardReq
         * @function getTypeUrl
         * @memberof pb.ClaimTwitterFollowRewardReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClaimTwitterFollowRewardReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ClaimTwitterFollowRewardReq";
        };

        return ClaimTwitterFollowRewardReq;
    })();

    pb.ClaimTwitterFollowRewardResp = (function() {

        /**
         * Properties of a ClaimTwitterFollowRewardResp.
         * @memberof pb
         * @interface IClaimTwitterFollowRewardResp
         * @property {number|null} [success] ClaimTwitterFollowRewardResp success
         * @property {string|null} [message] ClaimTwitterFollowRewardResp message
         */

        /**
         * Constructs a new ClaimTwitterFollowRewardResp.
         * @memberof pb
         * @classdesc Represents a ClaimTwitterFollowRewardResp.
         * @implements IClaimTwitterFollowRewardResp
         * @constructor
         * @param {pb.IClaimTwitterFollowRewardResp=} [properties] Properties to set
         */
        function ClaimTwitterFollowRewardResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClaimTwitterFollowRewardResp success.
         * @member {number} success
         * @memberof pb.ClaimTwitterFollowRewardResp
         * @instance
         */
        ClaimTwitterFollowRewardResp.prototype.success = 0;

        /**
         * ClaimTwitterFollowRewardResp message.
         * @member {string} message
         * @memberof pb.ClaimTwitterFollowRewardResp
         * @instance
         */
        ClaimTwitterFollowRewardResp.prototype.message = "";

        /**
         * Creates a new ClaimTwitterFollowRewardResp instance using the specified properties.
         * @function create
         * @memberof pb.ClaimTwitterFollowRewardResp
         * @static
         * @param {pb.IClaimTwitterFollowRewardResp=} [properties] Properties to set
         * @returns {pb.ClaimTwitterFollowRewardResp} ClaimTwitterFollowRewardResp instance
         */
        ClaimTwitterFollowRewardResp.create = function create(properties) {
            return new ClaimTwitterFollowRewardResp(properties);
        };

        /**
         * Encodes the specified ClaimTwitterFollowRewardResp message. Does not implicitly {@link pb.ClaimTwitterFollowRewardResp.verify|verify} messages.
         * @function encode
         * @memberof pb.ClaimTwitterFollowRewardResp
         * @static
         * @param {pb.IClaimTwitterFollowRewardResp} message ClaimTwitterFollowRewardResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClaimTwitterFollowRewardResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.success);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified ClaimTwitterFollowRewardResp message, length delimited. Does not implicitly {@link pb.ClaimTwitterFollowRewardResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ClaimTwitterFollowRewardResp
         * @static
         * @param {pb.IClaimTwitterFollowRewardResp} message ClaimTwitterFollowRewardResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClaimTwitterFollowRewardResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClaimTwitterFollowRewardResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ClaimTwitterFollowRewardResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ClaimTwitterFollowRewardResp} ClaimTwitterFollowRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClaimTwitterFollowRewardResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ClaimTwitterFollowRewardResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.success = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClaimTwitterFollowRewardResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ClaimTwitterFollowRewardResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ClaimTwitterFollowRewardResp} ClaimTwitterFollowRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClaimTwitterFollowRewardResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClaimTwitterFollowRewardResp message.
         * @function verify
         * @memberof pb.ClaimTwitterFollowRewardResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClaimTwitterFollowRewardResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (!$util.isInteger(message.success))
                    return "success: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a ClaimTwitterFollowRewardResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ClaimTwitterFollowRewardResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ClaimTwitterFollowRewardResp} ClaimTwitterFollowRewardResp
         */
        ClaimTwitterFollowRewardResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ClaimTwitterFollowRewardResp)
                return object;
            var message = new $root.pb.ClaimTwitterFollowRewardResp();
            if (object.success != null)
                message.success = object.success | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a ClaimTwitterFollowRewardResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ClaimTwitterFollowRewardResp
         * @static
         * @param {pb.ClaimTwitterFollowRewardResp} message ClaimTwitterFollowRewardResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClaimTwitterFollowRewardResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = 0;
                object.message = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this ClaimTwitterFollowRewardResp to JSON.
         * @function toJSON
         * @memberof pb.ClaimTwitterFollowRewardResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClaimTwitterFollowRewardResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClaimTwitterFollowRewardResp
         * @function getTypeUrl
         * @memberof pb.ClaimTwitterFollowRewardResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClaimTwitterFollowRewardResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ClaimTwitterFollowRewardResp";
        };

        return ClaimTwitterFollowRewardResp;
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
