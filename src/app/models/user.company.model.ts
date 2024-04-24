export interface UserCompanyModel {
    id?: number;
    avatar?: string;
    email: string;
    password: string;
    changePassword: boolean;
    createdAt?: string;
    updatedAt?: string;
    roles: RoleModel[];
    status?: string;
    username: string;
    version?: number;
  }
  
  export interface RoleModel {
    id: number;
    name: string;
    permissions: PermissionModel[];
    status?: string;
    createdAt?: string;
    updatedAt?: string;
    version?: number;
  }
  
  export interface PermissionModel {
    id: number;
    name: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
    version?: number;
  }
  