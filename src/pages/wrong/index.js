// pages/index.js
global.XMLHttpRequest = require('xhr2');

import {grpc} from "@improbable-eng/grpc-web";
import {BusinessExt} from "./business.ext_grpc_web_pb";// 假设你生成的服务是 MyService
//import {MyRequest} from "./service_pb";  // 假设你有请求类型

//const { BusinessExtClient } = require('./business.ext_grpc_web_pb'); // 服务类
const { Empty } = require('google-protobuf/google/protobuf/empty_pb'); // 使用 google.protobuf.Empty


// const client = new BusinessExtClient('http://13.61.35.52:8020', null, null);
//const client = new BusinessExtClient('https://api.xchat.social/business-web', null, null);
// const client = new BusinessExt("https://api.xchat.social/business-web", {
//   transport: grpc.WebsocketTransport(), // 或 grpc.XhrTransport()
// });
const client = new BusinessExt('https://api.xchat.social/business-web', null, null);

// 创建空请求对象
const request = new Empty();

// 调用服务方法
client.getTwitterAuthorizeURL(request, {}, (err, response) => {
    if (err) {
        console.error('Error:', err.message);
    } else {
        console.log('2Response:', response.toObject());
    }
});


export default function Home() {
    return (
      <div>
        <h1>你好</h1>
      </div>
    );
  }