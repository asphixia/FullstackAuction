

 function clearToken(): void {
    window.localStorage.removeItem('token');

}
 function setToken(token: string): void {
    window.localStorage.setItem('token', token);
}

 function getToken(): string {
    const token = window.localStorage.getItem('token');
    if(!token){
        console.log('no token');
        return '';
    }
    return token;
}

function isLoggedIn(): boolean {
    const token = getToken();
    return window.localStorage.getItem('token') !== null;
}

export { clearToken, setToken, getToken, isLoggedIn };