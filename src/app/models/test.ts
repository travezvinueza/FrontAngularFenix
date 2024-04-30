export interface AvatarStringChangePasswordTrueCreatedAt20240430T225527519ZEmailStringID0PasswordStringRolesCreatedAt20240430T225527519ZID0NameROLEADMINPermissionsCreatedAt20240430T225527519ZID0NameStringStatusACTUpdatedAt20240430T225527519ZVersion0StatusACTUpdatedAt20240430T225527519ZVersion0StatusACTUpdatedAt20240430T225527519ZUsernameStringVersion0 {
    avatar:         string;
    changePassword: boolean;
    createdAt:      Date;
    email:          string;
    id:             number;
    password:       string;
    roles:          Role[];
    status:         string;
    updatedAt:      Date;
    username:       string;
    version:        number;
}

export interface Role {
    createdAt:    Date;
    id:           number;
    name:         string;
    permissions?: Role[];
    status:       string;
    updatedAt:    Date;
    version:      number;
}
