function pakhiBhai(callMeBack, patro, patri) {
    console.log('value of patro:', patro);

    if (patri) {
        // যদি patri থাকে তবে callback চালাও
        callMeBack(patro);
    } else {
        console.log('tor kopale biya nai');
    }
}

function callSomeOne(person) {
    console.log('calling', person);
}

// ব্যবহার
pakhiBhai(callSomeOne, 'jodu', 'modu');