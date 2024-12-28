export interface UserCredentialsDTO {
    email: string;
    password: string;
}

export interface AuthenticationResponseDTO {
    token: string;
    expiration: Date;
}

export interface UserDTO {
    email: string;
}