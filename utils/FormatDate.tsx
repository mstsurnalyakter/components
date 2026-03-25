
const FormatDate = (iso: string) => {
    try {
        return new Date(iso).toLocaleDateString();
    } catch (error) {
        return iso;
    }
}

export default FormatDate

