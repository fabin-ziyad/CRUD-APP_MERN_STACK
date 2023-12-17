export const formatLetter = (string) => {
    if (string !== null && string !== undefined) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}