const colorSet = {
    white: '#ffffff',
    black: '#333333',
    gray: "#71717a",
    trueGray: "#737373",
    blueGray: "#64748b",
    coolGray: "#6b7280",
    warmGray: "#78716c",
    orange: "#f97316",
    amber: "#f59e0b",
    yellow: "#eab308",
    lime: "#84cc16",
    green: "#22c55e",
    emerald: "#10b981",
    teal: "#14b8a6",
    cyan: "#06b6d4",
    lightBlue: "#0ea5e9",
    blue: "#3b82f6",
    indigo: "#6366f1",
    violet: "#8b5cf6",
    purple: "#a855f7",
    fuchsia: "#d946ef",
    pink: "#ec4899",
    rose: "#f43f5e",
    red: "#ef4444",
};
const PRIMARY = "blue"
const SECONDARY = "violet"

let dataToWrite = `/* * *  !!! GENERATED !!!  * * */
export const colorSet={white:"#ffffff",black:"#333333",gray:"#71717a",trueGray:"#737373",blueGray:"#64748b",coolGray:"#6b7280",warmGray:"#78716c",orange:"#f97316",amber:"#f59e0b",yellow:"#eab308",lime:"#84cc16",green:"#22c55e",emerald:"#10b981",teal:"#14b8a6",cyan:"#06b6d4",lightBlue:"#0ea5e9",blue:"#3b82f6",indigo:"#6366f1",violet:"#8b5cf6",purple:"#a855f7",fuchsia:"#d946ef",pink:"#ec4899",rose:"#f43f5e",red:"#ef4444"};
const shade=(t,n)=>{let r=parseInt(t.substring(1,3),16),g=parseInt(t.substring(3,5),16),o=parseInt(t.substring(5,7),16);return r=(r=parseInt(r*(100+n)/100))<255?r:255,g=(g=parseInt(g*(100+n)/100))<255?g:255,o=(o=parseInt(o*(100+n)/100))<255?o:255,r=Math.round(r),g=Math.round(g),o=Math.round(o),"#"+(1==r.toString(16).length?"0"+r.toString(16):r.toString(16))+(1==g.toString(16).length?"0"+g.toString(16):g.toString(16))+(1==o.toString(16).length?"0"+o.toString(16):o.toString(16))};
export const editColor=(color,editMode,percentage=50)=>{let d=color;return editMode&&(d=shade(d,"darken"===editMode?-percentage:percentage)),d};
class ColorManager {
    primaryColor = colorSet.blue;
    secondaryColor = colorSet.violet;
    textColor = colorSet.black;
    primary(editMode, percentage){return editColor(this.primaryColor, editMode, percentage);}
    secondary(editMode, percentage){return editColor(this.secondaryColor, editMode, percentage);}
    text(editMode, percentage){return editColor(this.textColor, editMode, percentage);}`;
for(let color in colorSet){
    dataToWrite = dataToWrite +
        `\t${color}(editMode, percentage){return editColor(colorSet.${color}, editMode, percentage);}\n`;
}
dataToWrite = dataToWrite + `}
export default new ColorManager();
`;

import fs from 'fs';
fs.writeFile("./ColorManager.js", dataToWrite, err => {
    if (err) {
        console.error(err);
        return
    }
    console.info('\n $ File created (check ColorManager.js)\n');
})
