export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function truncateString(str: string, maxLength: number): string {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + "...";
    } else {
        return str;
    }
}

export function get_image_src(str:string):string {
    let image_tag = str.split("img")[1].split(" ")[2].split("=")[1].split("\"")
    console.log({image_tag})
    return image_tag[1]
}