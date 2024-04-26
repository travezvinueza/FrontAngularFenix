export interface UserCompanyModel {
    avatar: string;
    changePassword: boolean;
    createdAt: Date;
    email: string;
    id: number;
    password: string;
    roles: UserRole[];
    status: string;
    updatedAt: Date;
    username: string;
    version: number;
  }
  
  export interface UserRole {
    createdAt: Date;
    id: number;
    name: string;
    permissions: UserPermission[];
    status: string;
    updatedAt: Date;
    version: number;
  }
  
  export interface UserPermission {
    createdAt: Date;
    id: number;
    name: string;
    status: string;
    updatedAt: Date;
    version: number;
  }
  