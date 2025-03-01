/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  //好使： 但是twitter不允许
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '**.twimg.com', // 匹配所有子域名
  //       port: '',
  //       pathname: '/**', // 匹配所有路径
  //     },
  //   ],
  // },
  //不好使：
  // images: {
  //   domains: [
  //     'pbs.twimg.com', // 必须与报错域名完全一致
  //     'abs.twimg.com'  // Twitter 其他常用域名
  //   ],
  // },
}

export default nextConfig
