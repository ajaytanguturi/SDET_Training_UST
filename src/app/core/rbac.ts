export function getRoleFromStorage(): string | null {
    try {
        const profileStr = localStorage.getItem('profile');
        if (!profileStr) return null;
        const profile = JSON.parse(profileStr);
        return profile?.designation || null;
    } catch {
        return null;
    }
}
