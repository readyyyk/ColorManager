import ColorManager, {
    colorSet,
    editColor
} from "./ColorManager.js";

let examples = [["Name", "Initial", "darken", "lighten", "10%", "25%", "80%"]];
examples.push(["primary", ColorManager.primary(), ColorManager.primary("darken"), ColorManager.primary("lighten"),
    ColorManager.primary("darken", 10), ColorManager.primary("lighten", 25), ColorManager.primary("darken", 80)])
examples.push(["secondary", ColorManager.secondary(), ColorManager.secondary("darken"), ColorManager.secondary("lighten"),
    ColorManager.secondary("darken", 10), ColorManager.secondary("lighten", 25), ColorManager.secondary("darken", 80)])
examples.push(["text", ColorManager.text(), ColorManager.text("darken"), ColorManager.text("lighten"),
    ColorManager.text("darken", 10), ColorManager.text("lighten", 25), ColorManager.text("darken", 80)])
for(let color in colorSet) {
    examples.push([color, ColorManager[color](), ColorManager[color]("darken"), ColorManager[color]("lighten"),
        ColorManager[color]("darken", 10), ColorManager[color]("lighten", 25), ColorManager[color]("darken", 80)])
}
console.table(examples);

// no args call
for(let color in colorSet) {
    if (colorSet[color] !== ColorManager[color]()){
        console.error(`X - Simple tests are not working:\n` +
            `X - expected: = ${colorSet[color]} = to be equal to = ${ColorManager[color]()} =\n\nFAILED\n`)
        process.exit(1);
    }
}

// lighten darken with default percentage
for(let color in colorSet) {
    if (editColor(colorSet[color], "darken") !== ColorManager[color]("darken")){
        console.error(`X - Tests with  "darken, default"  are not working:\n` +
            `x -- expected: = ${editColor(colorSet[color], "darken")} = to be equal to = ${ColorManager[color]("darken")} =\n\nFAILED\n`)
        process.exit(1);
    }
    if (editColor(colorSet[color], "lighten") !== ColorManager[color]("lighten")){
        console.error(`X - Tests with  "lighten, default"  are not working:\n` +
            `x -- expected: = ${editColor(colorSet[color], "lighten")} = to be equal to = ${ColorManager[color]("lighten")} =\n\nFAILED\n`)
        process.exit(1);
    }
}

// update primary, text
ColorManager.primaryColor = colorSet.amber
if (colorSet.amber !== ColorManager.primary()){
    console.error(`X - Tests with updating primary color are not working:\n` +
        `X - expected: = ${colorSet.amber} = to be equal to = ${ColorManager.primary()} =\n\nFAILED\n`)
    process.exit(1);
}

ColorManager.textColor = colorSet.white
if (colorSet.white !== ColorManager.text()){
    console.error(`X - Tests with updating text color are not working:\n` +
        `X - expected: = ${colorSet.white} = to be equal to = ${ColorManager.text()} =\n\nFAILED\n`)
    process.exit(1);
}

console.info('SUCCESS\n')
