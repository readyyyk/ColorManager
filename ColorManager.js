/* * *  !!! GENERATED !!!  * * */
export const colorSet={white:"#ffffff",black:"#333333",gray:"#71717a",trueGray:"#737373",blueGray:"#64748b",coolGray:"#6b7280",warmGray:"#78716c",orange:"#f97316",amber:"#f59e0b",yellow:"#eab308",lime:"#84cc16",green:"#22c55e",emerald:"#10b981",teal:"#14b8a6",cyan:"#06b6d4",lightBlue:"#0ea5e9",blue:"#3b82f6",indigo:"#6366f1",violet:"#8b5cf6",purple:"#a855f7",fuchsia:"#d946ef",pink:"#ec4899",rose:"#f43f5e",red:"#ef4444"};
const shade=(t,n)=>{let r=parseInt(t.substring(1,3),16),g=parseInt(t.substring(3,5),16),o=parseInt(t.substring(5,7),16);return r=(r=parseInt(r*(100+n)/100))<255?r:255,g=(g=parseInt(g*(100+n)/100))<255?g:255,o=(o=parseInt(o*(100+n)/100))<255?o:255,r=Math.round(r),g=Math.round(g),o=Math.round(o),"#"+(1==r.toString(16).length?"0"+r.toString(16):r.toString(16))+(1==g.toString(16).length?"0"+g.toString(16):g.toString(16))+(1==o.toString(16).length?"0"+o.toString(16):o.toString(16))};
export const editColor=(color,editMode,percentage=50)=>{let d=color;return editMode&&(d=shade(d,"darken"===editMode?-percentage:percentage)),d};
class ColorManager {
    primaryColor = colorSet.blue;
    secondaryColor = colorSet.violet;
    textColor = colorSet.black;
    primary(editMode, percentage){return editColor(this.primaryColor, editMode, percentage);}
    secondary(editMode, percentage){return editColor(this.secondaryColor, editMode, percentage);}
    text(editMode, percentage){return editColor(this.textColor, editMode, percentage);}	white(editMode, percentage){return editColor(colorSet.white, editMode, percentage);}
	black(editMode, percentage){return editColor(colorSet.black, editMode, percentage);}
	gray(editMode, percentage){return editColor(colorSet.gray, editMode, percentage);}
	trueGray(editMode, percentage){return editColor(colorSet.trueGray, editMode, percentage);}
	blueGray(editMode, percentage){return editColor(colorSet.blueGray, editMode, percentage);}
	coolGray(editMode, percentage){return editColor(colorSet.coolGray, editMode, percentage);}
	warmGray(editMode, percentage){return editColor(colorSet.warmGray, editMode, percentage);}
	orange(editMode, percentage){return editColor(colorSet.orange, editMode, percentage);}
	amber(editMode, percentage){return editColor(colorSet.amber, editMode, percentage);}
	yellow(editMode, percentage){return editColor(colorSet.yellow, editMode, percentage);}
	lime(editMode, percentage){return editColor(colorSet.lime, editMode, percentage);}
	green(editMode, percentage){return editColor(colorSet.green, editMode, percentage);}
	emerald(editMode, percentage){return editColor(colorSet.emerald, editMode, percentage);}
	teal(editMode, percentage){return editColor(colorSet.teal, editMode, percentage);}
	cyan(editMode, percentage){return editColor(colorSet.cyan, editMode, percentage);}
	lightBlue(editMode, percentage){return editColor(colorSet.lightBlue, editMode, percentage);}
	blue(editMode, percentage){return editColor(colorSet.blue, editMode, percentage);}
	indigo(editMode, percentage){return editColor(colorSet.indigo, editMode, percentage);}
	violet(editMode, percentage){return editColor(colorSet.violet, editMode, percentage);}
	purple(editMode, percentage){return editColor(colorSet.purple, editMode, percentage);}
	fuchsia(editMode, percentage){return editColor(colorSet.fuchsia, editMode, percentage);}
	pink(editMode, percentage){return editColor(colorSet.pink, editMode, percentage);}
	rose(editMode, percentage){return editColor(colorSet.rose, editMode, percentage);}
	red(editMode, percentage){return editColor(colorSet.red, editMode, percentage);}
}
export default new ColorManager();
