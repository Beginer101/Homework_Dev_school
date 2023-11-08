function unpackSausages(truck) {
    const sausages = [];
    let counter = 0;

    for (const box of truck) {
        if (box.length > 0) {
            for (const item of box) {
                if (item.startsWith("[") && item.endsWith("]") && item.length === 6) {
                    if (item[1] === item[2] && item[2] === item[3] && item[3] === item[4]){
                        sausages.push(item[1] + " " + item[2] + " " + item[3] + " " + item[4]);
                        counter++;
                        if (counter % 5 === 0) {
                            sausages.pop();
                        }
                    }
                }
            }
        }
    }

    return sausages.join(" ");
}

const result = unpackSausages([
    ["(-)", "[IIII]", "[))))]"],
    ["IuI", "[llll]"],
    ["[@@@@]", "UwU", "[IlII]"],
    ["IuI", "[))))]", "x"],
    []
]);
console.log(result);
