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
*/
export type User = {
  userId: string;
  token: string;
  nickname: string;
  avatarUrl: string;
  twitterUsername: string;
  inviteCode: string;
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
