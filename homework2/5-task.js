function findProperty(obj, target) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            const result = findProperty(obj[key], target);
            if (result) {
                return key;
            }
        } else if (obj[key] === target) {
            return key;
        }
    }
    return null;
}

const object = {
        "r1n": {
            "mkg": {
                "zma": [21, 45, 66, 111],
                "mii": {
                    "ltf": [2, 5, 3, 9, 21]
                },
                "fv": [1, 3, 6, 9]
            },
            "rmk": {
                "amr": [50, 50, 100, 150, 250]
            }
        },
        "fik": {
            "er": [592, 92, 32, 13],
            "gp": [12, 34, 116, 29]
        }
    }

const result = findProperty(object, );

if (result) {
    console.log(result);
} else {
    console.log(null);
}