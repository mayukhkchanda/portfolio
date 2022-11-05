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

export const mapScrollPercentage = (input: number, scrollRange: number[]) => {
  let [input_start, input_end] = scrollRange; // the loweset lowest number of the range input.
  // The largest number of the range input.
  let output_start = 0; // The lowest number of the range output.
  let output_end = 100; // The largest number of the range output.
  let output =
    output_start +
    ((output_end - output_start) / (input_end - input_start)) *
      (input - input_start);
  return output;
};

 export  const setRootCssVars = (varName: string, newValue: string) => {
    const root = document.querySelector(":root") as any;
    root?.style?.setProperty(varName, newValue);
  }