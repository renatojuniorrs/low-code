function processArray(arrayObjects) {

    const resultArray = arrayObjects.map(newObj => {
        return processObject(newObj);
    });
    return resultArray.join(" ");
}

function processObject(uniqueObject) {
    const elWritten = `<${uniqueObject.type}></${uniqueObject.type}>`;
    const newEl = $(elWritten);

    if (uniqueObject.id !== undefined)
        newEl.attr('id', uniqueObject.id);

    if (Array.isArray(uniqueObject.inner))
        newEl.append(processArray(uniqueObject.inner));
    else if (typeof uniqueObject.inner == 'object')
        newEl.append(processObject(uniqueObject.inner));
    else if (typeof uniqueObject.inner == 'string' || typeof uniqueObject.inner == 'number')
        newEl.append(uniqueObject.inner);

    if (Array.isArray(uniqueObject.class)) {
        newEl.attr('class', uniqueObject.class.join(' '));
    } else if (typeof uniqueObject.class === 'string') {
        newEl.attr('class', uniqueObject.class);
    }

    if (uniqueObject.placeholder !== undefined) {
        newEl.attr('placeholder', uniqueObject.placeholder);
    }

    if (uniqueObject.type === 'button') {
        newEl.attr('type', 'button');

        if (typeof uniqueObject.onclick === 'function') {
            console.log('hey');
            uniqueObject.onclick();
            newEl.click(() => {
                uniqueObject.onclick();
            });
        }
    }

    return newEl.prop('outerHTML');
}


function workEngine(jsonObject, parentObject = 'body') {
    let result;
    if (Array.isArray(jsonObject)) {
        result = processArray(jsonObject);
    } else if (typeof jsonObject == 'object') {
        result = processObject(jsonObject);
    }
    $(parentObject).html(result);
}