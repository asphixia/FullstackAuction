

export function clearToken(): void {
    window.localStorage.removeItem('token');

}

export function setToken(token: string): void {
    window.localStorage.setItem('token', token);
}

export function getToken(): string {
    const token = window.localStorage.getItem('token');
    if(!token){
        return '';
    }
    return token;
}

export function isLoggedIn(): boolean {
    const token = getToken();
    return !!token;
}
