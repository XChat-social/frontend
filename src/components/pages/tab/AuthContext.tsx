import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

/*
// 定义用户信息的类型
    //https://x.com/
    ?redirect=redirectx
    &token=6f8f7d9d74d8cb33971e0963a4342d2e
    &userId=6
    &nickname=Kurry
    &avatarUrl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1865723832775917568%2FDaTBV4Rh_normal.png
    &twitterUsername=Kurry_test

//https://x.com/?redirect=redirectx&token=6f8f7d9d74d8cb33971e0963a4342d2e&userId=6
&nickname=Kurry
&avatarUrl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1865723832775917568%2FDaTBV4Rh_normal.png
&twitterUsername=Kurry_test
    
//{code: 0, message: 'Wallet sign-in successful', isNew: false, 
            // userId: 13, token: '944bdd252e05d13d2c9540687a182649', 
            //userInfo :  
            //{avatarUrl: "", createTime : 0, extra :  "", followReward :  0 ,inviteCode : "FBz72SQA",
            //inviterCode :  "", nickname :  "",sex :  0 
            //twitterId : "", twitterUsername :  "",
            //updateTime : 0, userId :  13 , walletAddress :  "0xD1174C910bD9317CbD5f0F174f58d12b12b68cF1"
            //xpoint :  0
            //}}
*/
export type UserInfo = {
  nickname: string;
  avatarUrl: string;
  twitterUsername: string;
  inviteCode: string;
  walletAddress: string | null;
  extra?: string | null;
  inviterCode?: string | null;
  userId?: number | null;
  xpoint?: number | null;
  followReward?: number | null;
  sex?: number | null;
  createTime?: number | null;
  updateTime?: number | null;
} | null;
export type User = {
  userId: string;
  token: string;
  userInfo: UserInfo;
  code?: number | null;
  message?: string | null;
  isNew?: boolean | null;
} | null;

// 定义上下文类型
type AuthContextType = {
  user: User;
  login: (user: User) => void;
  logout: () => void;
};

// 创建上下文
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 提供者组件
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 自定义 Hook 用于访问 AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
