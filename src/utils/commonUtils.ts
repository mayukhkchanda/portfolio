import JsonData from "constants/text.json";

export const getText = (id: string) : any => {
    const keys = id.split(".");
    let text: any = JsonData
    for (let k in keys) {
        text = text[keys[k]];
    }
    return text;
};

getText("experience.heading")