import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace pb. */
export namespace pb {

    /** Represents a BusinessExt */
    class BusinessExt extends $protobuf.rpc.Service {

        /**
         * Constructs a new BusinessExt service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new BusinessExt service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BusinessExt;

        /**
         * Calls SignIn.
         * @param request SignInReq message or plain object
         * @param callback Node-style callback called with the error, if any, and SignInResp
         */
        public signIn(request: pb.ISignInReq, callback: pb.BusinessExt.SignInCallback): void;

        /**
         * Calls SignIn.
         * @param request SignInReq message or plain object
         * @returns Promise
         */
        public signIn(request: pb.ISignInReq): Promise<pb.SignInResp>;

        /**
         * Calls GetUser.
         * @param request GetUserReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetUserResp
         */
        public getUser(request: pb.IGetUserReq, callback: pb.BusinessExt.GetUserCallback): void;

        /**
         * Calls GetUser.
         * @param request GetUserReq message or plain object
         * @returns Promise
         */
        public getUser(request: pb.IGetUserReq): Promise<pb.GetUserResp>;

        /**
         * Calls UpdateUser.
         * @param request UpdateUserReq message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public updateUser(request: pb.IUpdateUserReq, callback: pb.BusinessExt.UpdateUserCallback): void;

        /**
         * Calls UpdateUser.
         * @param request UpdateUserReq message or plain object
         * @returns Promise
         */
        public updateUser(request: pb.IUpdateUserReq): Promise<google.protobuf.Empty>;

        /**
         * Calls SearchUser.
         * @param request SearchUserReq message or plain object
         * @param callback Node-style callback called with the error, if any, and SearchUserResp
         */
        public searchUser(request: pb.ISearchUserReq, callback: pb.BusinessExt.SearchUserCallback): void;

        /**
         * Calls SearchUser.
         * @param request SearchUserReq message or plain object
         * @returns Promise
         */
        public searchUser(request: pb.ISearchUserReq): Promise<pb.SearchUserResp>;

        /**
         * Calls GetTwitterAuthorizeURL.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and TwitterAuthorizeURLResp
         */
        public getTwitterAuthorizeURL(request: google.protobuf.IEmpty, callback: pb.BusinessExt.GetTwitterAuthorizeURLCallback): void;

        /**
         * Calls GetTwitterAuthorizeURL.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getTwitterAuthorizeURL(request: google.protobuf.IEmpty): Promise<pb.TwitterAuthorizeURLResp>;

        /**
         * Calls TwitterSignIn.
         * @param request TwitterSignInReq message or plain object
         * @param callback Node-style callback called with the error, if any, and TwitterSignInResp
         */
        public twitterSignIn(request: pb.ITwitterSignInReq, callback: pb.BusinessExt.TwitterSignInCallback): void;

        /**
         * Calls TwitterSignIn.
         * @param request TwitterSignInReq message or plain object
         * @returns Promise
         */
        public twitterSignIn(request: pb.ITwitterSignInReq): Promise<pb.TwitterSignInResp>;

        /**
         * Calls DailySignIn.
         * @param request DailySignInReq message or plain object
         * @param callback Node-style callback called with the error, if any, and DailySignInResp
         */
        public dailySignIn(request: pb.IDailySignInReq, callback: pb.BusinessExt.DailySignInCallback): void;

        /**
         * Calls DailySignIn.
         * @param request DailySignInReq message or plain object
         * @returns Promise
         */
        public dailySignIn(request: pb.IDailySignInReq): Promise<pb.DailySignInResp>;

        /**
         * Calls ClaimSevenDayReward.
         * @param request ClaimSevenDayRewardReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ClaimSevenDayRewardResp
         */
        public claimSevenDayReward(request: pb.IClaimSevenDayRewardReq, callback: pb.BusinessExt.ClaimSevenDayRewardCallback): void;

        /**
         * Calls ClaimSevenDayReward.
         * @param request ClaimSevenDayRewardReq message or plain object
         * @returns Promise
         */
        public claimSevenDayReward(request: pb.IClaimSevenDayRewardReq): Promise<pb.ClaimSevenDayRewardResp>;

        /**
         * Calls ClaimTwitterFollowReward.
         * @param request ClaimTwitterFollowRewardReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ClaimTwitterFollowRewardResp
         */
        public claimTwitterFollowReward(request: pb.IClaimTwitterFollowRewardReq, callback: pb.BusinessExt.ClaimTwitterFollowRewardCallback): void;

        /**
         * Calls ClaimTwitterFollowReward.
         * @param request ClaimTwitterFollowRewardReq message or plain object
         * @returns Promise
         */
        public claimTwitterFollowReward(request: pb.IClaimTwitterFollowRewardReq): Promise<pb.ClaimTwitterFollowRewardResp>;
    }

    namespace BusinessExt {

        /**
         * Callback as used by {@link pb.BusinessExt#signIn}.
         * @param error Error, if any
         * @param [response] SignInResp
         */
        type SignInCallback = (error: (Error|null), response?: pb.SignInResp) => void;

        /**
         * Callback as used by {@link pb.BusinessExt#getUser}.
         * @param error Error, if any
         * @param [response] GetUserResp
         */
        type GetUserCallback = (error: (Error|null), response?: pb.GetUserResp) => void;

        /**
         * Callback as used by {@link pb.BusinessExt#updateUser}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type UpdateUserCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

        /**
         * Callback as used by {@link pb.BusinessExt#searchUser}.
         * @param error Error, if any
         * @param [response] SearchUserResp
         */
        type SearchUserCallback = (error: (Error|null), response?: pb.SearchUserResp) => void;

        /**
         * Callback as used by {@link pb.BusinessExt#getTwitterAuthorizeURL}.
         * @param error Error, if any
         * @param [response] TwitterAuthorizeURLResp
         */
        type GetTwitterAuthorizeURLCallback = (error: (Error|null), response?: pb.TwitterAuthorizeURLResp) => void;

        /**
         * Callback as used by {@link pb.BusinessExt#twitterSignIn}.
         * @param error Error, if any
         * @param [response] TwitterSignInResp
         */
        type TwitterSignInCallback = (error: (Error|null), response?: pb.TwitterSignInResp) => void;

        /**
         * Callback as used by {@link pb.BusinessExt#dailySignIn}.
         * @param error Error, if any
         * @param [response] DailySignInResp
         */
        type DailySignInCallback = (error: (Error|null), response?: pb.DailySignInResp) => void;

        /**
         * Callback as used by {@link pb.BusinessExt#claimSevenDayReward}.
         * @param error Error, if any
         * @param [response] ClaimSevenDayRewardResp
         */
        type ClaimSevenDayRewardCallback = (error: (Error|null), response?: pb.ClaimSevenDayRewardResp) => void;

        /**
         * Callback as used by {@link pb.BusinessExt#claimTwitterFollowReward}.
         * @param error Error, if any
         * @param [response] ClaimTwitterFollowRewardResp
         */
        type ClaimTwitterFollowRewardCallback = (error: (Error|null), response?: pb.ClaimTwitterFollowRewardResp) => void;
    }

    /** Properties of a SignInReq. */
    interface ISignInReq {

        /** SignInReq phoneNumber */
        phoneNumber?: (string|null);

        /** SignInReq code */
        code?: (string|null);

        /** SignInReq deviceId */
        deviceId?: (number|Long|null);
    }

    /** Represents a SignInReq. */
    class SignInReq implements ISignInReq {

        /**
         * Constructs a new SignInReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISignInReq);

        /** SignInReq phoneNumber. */
        public phoneNumber: string;

        /** SignInReq code. */
        public code: string;

        /** SignInReq deviceId. */
        public deviceId: (number|Long);

        /**
         * Creates a new SignInReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignInReq instance
         */
        public static create(properties?: pb.ISignInReq): pb.SignInReq;

        /**
         * Encodes the specified SignInReq message. Does not implicitly {@link pb.SignInReq.verify|verify} messages.
         * @param message SignInReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISignInReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignInReq message, length delimited. Does not implicitly {@link pb.SignInReq.verify|verify} messages.
         * @param message SignInReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISignInReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignInReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SignInReq;

        /**
         * Decodes a SignInReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SignInReq;

        /**
         * Verifies a SignInReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignInReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignInReq
         */
        public static fromObject(object: { [k: string]: any }): pb.SignInReq;

        /**
         * Creates a plain object from a SignInReq message. Also converts values to other types if specified.
         * @param message SignInReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SignInReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignInReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignInReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SignInResp. */
    interface ISignInResp {

        /** SignInResp isNew */
        isNew?: (boolean|null);

        /** SignInResp userId */
        userId?: (number|Long|null);

        /** SignInResp token */
        token?: (string|null);
    }

    /** Represents a SignInResp. */
    class SignInResp implements ISignInResp {

        /**
         * Constructs a new SignInResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISignInResp);

        /** SignInResp isNew. */
        public isNew: boolean;

        /** SignInResp userId. */
        public userId: (number|Long);

        /** SignInResp token. */
        public token: string;

        /**
         * Creates a new SignInResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignInResp instance
         */
        public static create(properties?: pb.ISignInResp): pb.SignInResp;

        /**
         * Encodes the specified SignInResp message. Does not implicitly {@link pb.SignInResp.verify|verify} messages.
         * @param message SignInResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISignInResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignInResp message, length delimited. Does not implicitly {@link pb.SignInResp.verify|verify} messages.
         * @param message SignInResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISignInResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignInResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SignInResp;

        /**
         * Decodes a SignInResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SignInResp;

        /**
         * Verifies a SignInResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignInResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignInResp
         */
        public static fromObject(object: { [k: string]: any }): pb.SignInResp;

        /**
         * Creates a plain object from a SignInResp message. Also converts values to other types if specified.
         * @param message SignInResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SignInResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignInResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignInResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a User. */
    interface IUser {

        /** User userId */
        userId?: (number|Long|null);

        /** User nickname */
        nickname?: (string|null);

        /** User sex */
        sex?: (number|null);

        /** User avatarUrl */
        avatarUrl?: (string|null);

        /** User extra */
        extra?: (string|null);

        /** User createTime */
        createTime?: (number|Long|null);

        /** User updateTime */
        updateTime?: (number|Long|null);

        /** User twitterId */
        twitterId?: (string|null);

        /** User twitterUsername */
        twitterUsername?: (string|null);

        /** User xpoint */
        xpoint?: (number|null);

        /** User followReward */
        followReward?: (number|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUser);

        /** User userId. */
        public userId: (number|Long);

        /** User nickname. */
        public nickname: string;

        /** User sex. */
        public sex: number;

        /** User avatarUrl. */
        public avatarUrl: string;

        /** User extra. */
        public extra: string;

        /** User createTime. */
        public createTime: (number|Long);

        /** User updateTime. */
        public updateTime: (number|Long);

        /** User twitterId. */
        public twitterId: string;

        /** User twitterUsername. */
        public twitterUsername: string;

        /** User xpoint. */
        public xpoint: number;

        /** User followReward. */
        public followReward: number;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: pb.IUser): pb.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link pb.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link pb.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): pb.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetUserReq. */
    interface IGetUserReq {

        /** GetUserReq userId */
        userId?: (number|Long|null);
    }

    /** Represents a GetUserReq. */
    class GetUserReq implements IGetUserReq {

        /**
         * Constructs a new GetUserReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetUserReq);

        /** GetUserReq userId. */
        public userId: (number|Long);

        /**
         * Creates a new GetUserReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserReq instance
         */
        public static create(properties?: pb.IGetUserReq): pb.GetUserReq;

        /**
         * Encodes the specified GetUserReq message. Does not implicitly {@link pb.GetUserReq.verify|verify} messages.
         * @param message GetUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserReq message, length delimited. Does not implicitly {@link pb.GetUserReq.verify|verify} messages.
         * @param message GetUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGetUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetUserReq;

        /**
         * Decodes a GetUserReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GetUserReq;

        /**
         * Verifies a GetUserReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserReq
         */
        public static fromObject(object: { [k: string]: any }): pb.GetUserReq;

        /**
         * Creates a plain object from a GetUserReq message. Also converts values to other types if specified.
         * @param message GetUserReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GetUserReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetUserReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetUserResp. */
    interface IGetUserResp {

        /** GetUserResp user */
        user?: (pb.IUser|null);
    }

    /** Represents a GetUserResp. */
    class GetUserResp implements IGetUserResp {

        /**
         * Constructs a new GetUserResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetUserResp);

        /** GetUserResp user. */
        public user?: (pb.IUser|null);

        /**
         * Creates a new GetUserResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserResp instance
         */
        public static create(properties?: pb.IGetUserResp): pb.GetUserResp;

        /**
         * Encodes the specified GetUserResp message. Does not implicitly {@link pb.GetUserResp.verify|verify} messages.
         * @param message GetUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserResp message, length delimited. Does not implicitly {@link pb.GetUserResp.verify|verify} messages.
         * @param message GetUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGetUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetUserResp;

        /**
         * Decodes a GetUserResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GetUserResp;

        /**
         * Verifies a GetUserResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserResp
         */
        public static fromObject(object: { [k: string]: any }): pb.GetUserResp;

        /**
         * Creates a plain object from a GetUserResp message. Also converts values to other types if specified.
         * @param message GetUserResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GetUserResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetUserResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateUserReq. */
    interface IUpdateUserReq {

        /** UpdateUserReq nickname */
        nickname?: (string|null);

        /** UpdateUserReq sex */
        sex?: (number|null);

        /** UpdateUserReq avatarUrl */
        avatarUrl?: (string|null);

        /** UpdateUserReq extra */
        extra?: (string|null);
    }

    /** Represents an UpdateUserReq. */
    class UpdateUserReq implements IUpdateUserReq {

        /**
         * Constructs a new UpdateUserReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUpdateUserReq);

        /** UpdateUserReq nickname. */
        public nickname: string;

        /** UpdateUserReq sex. */
        public sex: number;

        /** UpdateUserReq avatarUrl. */
        public avatarUrl: string;

        /** UpdateUserReq extra. */
        public extra: string;

        /**
         * Creates a new UpdateUserReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateUserReq instance
         */
        public static create(properties?: pb.IUpdateUserReq): pb.UpdateUserReq;

        /**
         * Encodes the specified UpdateUserReq message. Does not implicitly {@link pb.UpdateUserReq.verify|verify} messages.
         * @param message UpdateUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUpdateUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateUserReq message, length delimited. Does not implicitly {@link pb.UpdateUserReq.verify|verify} messages.
         * @param message UpdateUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IUpdateUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateUserReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UpdateUserReq;

        /**
         * Decodes an UpdateUserReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.UpdateUserReq;

        /**
         * Verifies an UpdateUserReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateUserReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateUserReq
         */
        public static fromObject(object: { [k: string]: any }): pb.UpdateUserReq;

        /**
         * Creates a plain object from an UpdateUserReq message. Also converts values to other types if specified.
         * @param message UpdateUserReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.UpdateUserReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateUserReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateUserReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SearchUserReq. */
    interface ISearchUserReq {

        /** SearchUserReq key */
        key?: (string|null);
    }

    /** Represents a SearchUserReq. */
    class SearchUserReq implements ISearchUserReq {

        /**
         * Constructs a new SearchUserReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISearchUserReq);

        /** SearchUserReq key. */
        public key: string;

        /**
         * Creates a new SearchUserReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchUserReq instance
         */
        public static create(properties?: pb.ISearchUserReq): pb.SearchUserReq;

        /**
         * Encodes the specified SearchUserReq message. Does not implicitly {@link pb.SearchUserReq.verify|verify} messages.
         * @param message SearchUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISearchUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchUserReq message, length delimited. Does not implicitly {@link pb.SearchUserReq.verify|verify} messages.
         * @param message SearchUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISearchUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchUserReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SearchUserReq;

        /**
         * Decodes a SearchUserReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SearchUserReq;

        /**
         * Verifies a SearchUserReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchUserReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchUserReq
         */
        public static fromObject(object: { [k: string]: any }): pb.SearchUserReq;

        /**
         * Creates a plain object from a SearchUserReq message. Also converts values to other types if specified.
         * @param message SearchUserReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SearchUserReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchUserReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SearchUserReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SearchUserResp. */
    interface ISearchUserResp {

        /** SearchUserResp users */
        users?: (pb.IUser[]|null);
    }

    /** Represents a SearchUserResp. */
    class SearchUserResp implements ISearchUserResp {

        /**
         * Constructs a new SearchUserResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISearchUserResp);

        /** SearchUserResp users. */
        public users: pb.IUser[];

        /**
         * Creates a new SearchUserResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchUserResp instance
         */
        public static create(properties?: pb.ISearchUserResp): pb.SearchUserResp;

        /**
         * Encodes the specified SearchUserResp message. Does not implicitly {@link pb.SearchUserResp.verify|verify} messages.
         * @param message SearchUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISearchUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchUserResp message, length delimited. Does not implicitly {@link pb.SearchUserResp.verify|verify} messages.
         * @param message SearchUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISearchUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchUserResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SearchUserResp;

        /**
         * Decodes a SearchUserResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SearchUserResp;

        /**
         * Verifies a SearchUserResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchUserResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchUserResp
         */
        public static fromObject(object: { [k: string]: any }): pb.SearchUserResp;

        /**
         * Creates a plain object from a SearchUserResp message. Also converts values to other types if specified.
         * @param message SearchUserResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SearchUserResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchUserResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SearchUserResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TwitterAuthorizeURLResp. */
    interface ITwitterAuthorizeURLResp {

        /** TwitterAuthorizeURLResp url */
        url?: (string|null);
    }

    /** Represents a TwitterAuthorizeURLResp. */
    class TwitterAuthorizeURLResp implements ITwitterAuthorizeURLResp {

        /**
         * Constructs a new TwitterAuthorizeURLResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITwitterAuthorizeURLResp);

        /** TwitterAuthorizeURLResp url. */
        public url: string;

        /**
         * Creates a new TwitterAuthorizeURLResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TwitterAuthorizeURLResp instance
         */
        public static create(properties?: pb.ITwitterAuthorizeURLResp): pb.TwitterAuthorizeURLResp;

        /**
         * Encodes the specified TwitterAuthorizeURLResp message. Does not implicitly {@link pb.TwitterAuthorizeURLResp.verify|verify} messages.
         * @param message TwitterAuthorizeURLResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITwitterAuthorizeURLResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TwitterAuthorizeURLResp message, length delimited. Does not implicitly {@link pb.TwitterAuthorizeURLResp.verify|verify} messages.
         * @param message TwitterAuthorizeURLResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ITwitterAuthorizeURLResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TwitterAuthorizeURLResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TwitterAuthorizeURLResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TwitterAuthorizeURLResp;

        /**
         * Decodes a TwitterAuthorizeURLResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TwitterAuthorizeURLResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.TwitterAuthorizeURLResp;

        /**
         * Verifies a TwitterAuthorizeURLResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TwitterAuthorizeURLResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TwitterAuthorizeURLResp
         */
        public static fromObject(object: { [k: string]: any }): pb.TwitterAuthorizeURLResp;

        /**
         * Creates a plain object from a TwitterAuthorizeURLResp message. Also converts values to other types if specified.
         * @param message TwitterAuthorizeURLResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.TwitterAuthorizeURLResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TwitterAuthorizeURLResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TwitterAuthorizeURLResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TwitterSignInReq. */
    interface ITwitterSignInReq {

        /** TwitterSignInReq authorizationCode */
        authorizationCode?: (string|null);

        /** TwitterSignInReq state */
        state?: (string|null);
    }

    /** Represents a TwitterSignInReq. */
    class TwitterSignInReq implements ITwitterSignInReq {

        /**
         * Constructs a new TwitterSignInReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITwitterSignInReq);

        /** TwitterSignInReq authorizationCode. */
        public authorizationCode: string;

        /** TwitterSignInReq state. */
        public state: string;

        /**
         * Creates a new TwitterSignInReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TwitterSignInReq instance
         */
        public static create(properties?: pb.ITwitterSignInReq): pb.TwitterSignInReq;

        /**
         * Encodes the specified TwitterSignInReq message. Does not implicitly {@link pb.TwitterSignInReq.verify|verify} messages.
         * @param message TwitterSignInReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITwitterSignInReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TwitterSignInReq message, length delimited. Does not implicitly {@link pb.TwitterSignInReq.verify|verify} messages.
         * @param message TwitterSignInReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ITwitterSignInReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TwitterSignInReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TwitterSignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TwitterSignInReq;

        /**
         * Decodes a TwitterSignInReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TwitterSignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.TwitterSignInReq;

        /**
         * Verifies a TwitterSignInReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TwitterSignInReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TwitterSignInReq
         */
        public static fromObject(object: { [k: string]: any }): pb.TwitterSignInReq;

        /**
         * Creates a plain object from a TwitterSignInReq message. Also converts values to other types if specified.
         * @param message TwitterSignInReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.TwitterSignInReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TwitterSignInReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TwitterSignInReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TwitterSignInResp. */
    interface ITwitterSignInResp {

        /** TwitterSignInResp isNew */
        isNew?: (boolean|null);

        /** TwitterSignInResp userId */
        userId?: (number|Long|null);

        /** TwitterSignInResp token */
        token?: (string|null);

        /** TwitterSignInResp userInfo */
        userInfo?: (pb.IUser|null);
    }

    /** Represents a TwitterSignInResp. */
    class TwitterSignInResp implements ITwitterSignInResp {

        /**
         * Constructs a new TwitterSignInResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITwitterSignInResp);

        /** TwitterSignInResp isNew. */
        public isNew: boolean;

        /** TwitterSignInResp userId. */
        public userId: (number|Long);

        /** TwitterSignInResp token. */
        public token: string;

        /** TwitterSignInResp userInfo. */
        public userInfo?: (pb.IUser|null);

        /**
         * Creates a new TwitterSignInResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TwitterSignInResp instance
         */
        public static create(properties?: pb.ITwitterSignInResp): pb.TwitterSignInResp;

        /**
         * Encodes the specified TwitterSignInResp message. Does not implicitly {@link pb.TwitterSignInResp.verify|verify} messages.
         * @param message TwitterSignInResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITwitterSignInResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TwitterSignInResp message, length delimited. Does not implicitly {@link pb.TwitterSignInResp.verify|verify} messages.
         * @param message TwitterSignInResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ITwitterSignInResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TwitterSignInResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TwitterSignInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TwitterSignInResp;

        /**
         * Decodes a TwitterSignInResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TwitterSignInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.TwitterSignInResp;

        /**
         * Verifies a TwitterSignInResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TwitterSignInResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TwitterSignInResp
         */
        public static fromObject(object: { [k: string]: any }): pb.TwitterSignInResp;

        /**
         * Creates a plain object from a TwitterSignInResp message. Also converts values to other types if specified.
         * @param message TwitterSignInResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.TwitterSignInResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TwitterSignInResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TwitterSignInResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DailySignInReq. */
    interface IDailySignInReq {

        /** DailySignInReq userId */
        userId?: (number|Long|null);
    }

    /** Represents a DailySignInReq. */
    class DailySignInReq implements IDailySignInReq {

        /**
         * Constructs a new DailySignInReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDailySignInReq);

        /** DailySignInReq userId. */
        public userId: (number|Long);

        /**
         * Creates a new DailySignInReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailySignInReq instance
         */
        public static create(properties?: pb.IDailySignInReq): pb.DailySignInReq;

        /**
         * Encodes the specified DailySignInReq message. Does not implicitly {@link pb.DailySignInReq.verify|verify} messages.
         * @param message DailySignInReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDailySignInReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailySignInReq message, length delimited. Does not implicitly {@link pb.DailySignInReq.verify|verify} messages.
         * @param message DailySignInReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IDailySignInReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailySignInReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailySignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DailySignInReq;

        /**
         * Decodes a DailySignInReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailySignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.DailySignInReq;

        /**
         * Verifies a DailySignInReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DailySignInReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DailySignInReq
         */
        public static fromObject(object: { [k: string]: any }): pb.DailySignInReq;

        /**
         * Creates a plain object from a DailySignInReq message. Also converts values to other types if specified.
         * @param message DailySignInReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.DailySignInReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DailySignInReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DailySignInReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DailySignInResp. */
    interface IDailySignInResp {

        /** DailySignInResp rewardAmount */
        rewardAmount?: (number|null);

        /** DailySignInResp message */
        message?: (string|null);
    }

    /** Represents a DailySignInResp. */
    class DailySignInResp implements IDailySignInResp {

        /**
         * Constructs a new DailySignInResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDailySignInResp);

        /** DailySignInResp rewardAmount. */
        public rewardAmount: number;

        /** DailySignInResp message. */
        public message: string;

        /**
         * Creates a new DailySignInResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailySignInResp instance
         */
        public static create(properties?: pb.IDailySignInResp): pb.DailySignInResp;

        /**
         * Encodes the specified DailySignInResp message. Does not implicitly {@link pb.DailySignInResp.verify|verify} messages.
         * @param message DailySignInResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDailySignInResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailySignInResp message, length delimited. Does not implicitly {@link pb.DailySignInResp.verify|verify} messages.
         * @param message DailySignInResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IDailySignInResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailySignInResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailySignInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DailySignInResp;

        /**
         * Decodes a DailySignInResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailySignInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.DailySignInResp;

        /**
         * Verifies a DailySignInResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DailySignInResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DailySignInResp
         */
        public static fromObject(object: { [k: string]: any }): pb.DailySignInResp;

        /**
         * Creates a plain object from a DailySignInResp message. Also converts values to other types if specified.
         * @param message DailySignInResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.DailySignInResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DailySignInResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DailySignInResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClaimSevenDayRewardReq. */
    interface IClaimSevenDayRewardReq {

        /** ClaimSevenDayRewardReq userId */
        userId?: (number|Long|null);
    }

    /** Represents a ClaimSevenDayRewardReq. */
    class ClaimSevenDayRewardReq implements IClaimSevenDayRewardReq {

        /**
         * Constructs a new ClaimSevenDayRewardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IClaimSevenDayRewardReq);

        /** ClaimSevenDayRewardReq userId. */
        public userId: (number|Long);

        /**
         * Creates a new ClaimSevenDayRewardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClaimSevenDayRewardReq instance
         */
        public static create(properties?: pb.IClaimSevenDayRewardReq): pb.ClaimSevenDayRewardReq;

        /**
         * Encodes the specified ClaimSevenDayRewardReq message. Does not implicitly {@link pb.ClaimSevenDayRewardReq.verify|verify} messages.
         * @param message ClaimSevenDayRewardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IClaimSevenDayRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClaimSevenDayRewardReq message, length delimited. Does not implicitly {@link pb.ClaimSevenDayRewardReq.verify|verify} messages.
         * @param message ClaimSevenDayRewardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IClaimSevenDayRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClaimSevenDayRewardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClaimSevenDayRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ClaimSevenDayRewardReq;

        /**
         * Decodes a ClaimSevenDayRewardReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClaimSevenDayRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ClaimSevenDayRewardReq;

        /**
         * Verifies a ClaimSevenDayRewardReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClaimSevenDayRewardReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClaimSevenDayRewardReq
         */
        public static fromObject(object: { [k: string]: any }): pb.ClaimSevenDayRewardReq;

        /**
         * Creates a plain object from a ClaimSevenDayRewardReq message. Also converts values to other types if specified.
         * @param message ClaimSevenDayRewardReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ClaimSevenDayRewardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClaimSevenDayRewardReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClaimSevenDayRewardReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClaimSevenDayRewardResp. */
    interface IClaimSevenDayRewardResp {

        /** ClaimSevenDayRewardResp rewardAmount */
        rewardAmount?: (number|null);

        /** ClaimSevenDayRewardResp message */
        message?: (string|null);
    }

    /** Represents a ClaimSevenDayRewardResp. */
    class ClaimSevenDayRewardResp implements IClaimSevenDayRewardResp {

        /**
         * Constructs a new ClaimSevenDayRewardResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IClaimSevenDayRewardResp);

        /** ClaimSevenDayRewardResp rewardAmount. */
        public rewardAmount: number;

        /** ClaimSevenDayRewardResp message. */
        public message: string;

        /**
         * Creates a new ClaimSevenDayRewardResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClaimSevenDayRewardResp instance
         */
        public static create(properties?: pb.IClaimSevenDayRewardResp): pb.ClaimSevenDayRewardResp;

        /**
         * Encodes the specified ClaimSevenDayRewardResp message. Does not implicitly {@link pb.ClaimSevenDayRewardResp.verify|verify} messages.
         * @param message ClaimSevenDayRewardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IClaimSevenDayRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClaimSevenDayRewardResp message, length delimited. Does not implicitly {@link pb.ClaimSevenDayRewardResp.verify|verify} messages.
         * @param message ClaimSevenDayRewardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IClaimSevenDayRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClaimSevenDayRewardResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClaimSevenDayRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ClaimSevenDayRewardResp;

        /**
         * Decodes a ClaimSevenDayRewardResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClaimSevenDayRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ClaimSevenDayRewardResp;

        /**
         * Verifies a ClaimSevenDayRewardResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClaimSevenDayRewardResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClaimSevenDayRewardResp
         */
        public static fromObject(object: { [k: string]: any }): pb.ClaimSevenDayRewardResp;

        /**
         * Creates a plain object from a ClaimSevenDayRewardResp message. Also converts values to other types if specified.
         * @param message ClaimSevenDayRewardResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ClaimSevenDayRewardResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClaimSevenDayRewardResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClaimSevenDayRewardResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClaimTwitterFollowRewardReq. */
    interface IClaimTwitterFollowRewardReq {

        /** ClaimTwitterFollowRewardReq userId */
        userId?: (number|Long|null);
    }

    /** Represents a ClaimTwitterFollowRewardReq. */
    class ClaimTwitterFollowRewardReq implements IClaimTwitterFollowRewardReq {

        /**
         * Constructs a new ClaimTwitterFollowRewardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IClaimTwitterFollowRewardReq);

        /** ClaimTwitterFollowRewardReq userId. */
        public userId: (number|Long);

        /**
         * Creates a new ClaimTwitterFollowRewardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClaimTwitterFollowRewardReq instance
         */
        public static create(properties?: pb.IClaimTwitterFollowRewardReq): pb.ClaimTwitterFollowRewardReq;

        /**
         * Encodes the specified ClaimTwitterFollowRewardReq message. Does not implicitly {@link pb.ClaimTwitterFollowRewardReq.verify|verify} messages.
         * @param message ClaimTwitterFollowRewardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IClaimTwitterFollowRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClaimTwitterFollowRewardReq message, length delimited. Does not implicitly {@link pb.ClaimTwitterFollowRewardReq.verify|verify} messages.
         * @param message ClaimTwitterFollowRewardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IClaimTwitterFollowRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClaimTwitterFollowRewardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClaimTwitterFollowRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ClaimTwitterFollowRewardReq;

        /**
         * Decodes a ClaimTwitterFollowRewardReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClaimTwitterFollowRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ClaimTwitterFollowRewardReq;

        /**
         * Verifies a ClaimTwitterFollowRewardReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClaimTwitterFollowRewardReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClaimTwitterFollowRewardReq
         */
        public static fromObject(object: { [k: string]: any }): pb.ClaimTwitterFollowRewardReq;

        /**
         * Creates a plain object from a ClaimTwitterFollowRewardReq message. Also converts values to other types if specified.
         * @param message ClaimTwitterFollowRewardReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ClaimTwitterFollowRewardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClaimTwitterFollowRewardReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClaimTwitterFollowRewardReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClaimTwitterFollowRewardResp. */
    interface IClaimTwitterFollowRewardResp {

        /** ClaimTwitterFollowRewardResp success */
        success?: (number|null);

        /** ClaimTwitterFollowRewardResp message */
        message?: (string|null);
    }

    /** Represents a ClaimTwitterFollowRewardResp. */
    class ClaimTwitterFollowRewardResp implements IClaimTwitterFollowRewardResp {

        /**
         * Constructs a new ClaimTwitterFollowRewardResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IClaimTwitterFollowRewardResp);

        /** ClaimTwitterFollowRewardResp success. */
        public success: number;

        /** ClaimTwitterFollowRewardResp message. */
        public message: string;

        /**
         * Creates a new ClaimTwitterFollowRewardResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClaimTwitterFollowRewardResp instance
         */
        public static create(properties?: pb.IClaimTwitterFollowRewardResp): pb.ClaimTwitterFollowRewardResp;

        /**
         * Encodes the specified ClaimTwitterFollowRewardResp message. Does not implicitly {@link pb.ClaimTwitterFollowRewardResp.verify|verify} messages.
         * @param message ClaimTwitterFollowRewardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IClaimTwitterFollowRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClaimTwitterFollowRewardResp message, length delimited. Does not implicitly {@link pb.ClaimTwitterFollowRewardResp.verify|verify} messages.
         * @param message ClaimTwitterFollowRewardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IClaimTwitterFollowRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClaimTwitterFollowRewardResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClaimTwitterFollowRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ClaimTwitterFollowRewardResp;

        /**
         * Decodes a ClaimTwitterFollowRewardResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClaimTwitterFollowRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ClaimTwitterFollowRewardResp;

        /**
         * Verifies a ClaimTwitterFollowRewardResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClaimTwitterFollowRewardResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClaimTwitterFollowRewardResp
         */
        public static fromObject(object: { [k: string]: any }): pb.ClaimTwitterFollowRewardResp;

        /**
         * Creates a plain object from a ClaimTwitterFollowRewardResp message. Also converts values to other types if specified.
         * @param message ClaimTwitterFollowRewardResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ClaimTwitterFollowRewardResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClaimTwitterFollowRewardResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClaimTwitterFollowRewardResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
