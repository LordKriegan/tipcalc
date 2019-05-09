const ERRORTEXT = "* Please enter a valid amount";
const setText = (text, elemId) => {
    getElem(elemId).innerText = text;
}
const getElem = (elem) => document.getElementById(elem)
const calcTip = () => {
    const bill = getElem("bill").value;
    const percentage = getElem("percentage").value;
    const splitNum = getElem("splitNum").value;
    if (
        !bill || isNaN(bill) || parseFloat(bill) <= 0 ||
        !percentage || isNaN(percentage) || parseFloat(percentage) < 1 ||
        !splitNum || isNaN(splitNum) ||  parseFloat(splitNum) < 1 || !Number.isInteger(parseFloat(splitNum))
        ) {
            return;
        }
    const totalTip = parseFloat(bill) * (parseFloat(percentage) / 100);
    const splitTotal = totalTip / parseFloat(splitNum);
    getElem("totalTip").innerText = "$" + ((splitNum > 1) ? splitTotal : totalTip).toFixed(2); 
}

getElem("bill").addEventListener("input", (e) => {
    if (e.target.value !== "" && (isNaN(e.target.value) || parseFloat(e.target.value) <= 0)) {
        setText(ERRORTEXT, "billError");
    } else {
        if (e.target.value === "") e.target.value = 0;
        setText("", "billError");
        calcTip();
    }
});

getElem("percentage").addEventListener("input", (e) => {
    if (e.target.value !== "" && (isNaN(e.target.value) || parseFloat(e.target.value) < 1)) {
        setText(ERRORTEXT, "percentageError");
    } else {
        if (e.target.value === "") e.target.value = 15;
        setText("", "percentageError");
        calcTip();
    }
});

getElem("splitNum").addEventListener("input", (e) => {
    if (e.target.value !== "" && (isNaN(e.target.value) || parseFloat(e.target.value) < 1 || !(Number.isInteger(parseFloat(e.target.value))))) {
        setText(ERRORTEXT, "splitError");
    } else {
        if (e.target.value === "") e.target.value = 1;
        if (parseFloat(e.target.value) > 1) {
            setText(`You are splitting this ${+ e.target.value} ways!`, "splitNumDisp");
        } else {
            setText("", "splitNumDisp");
        }
        setText("", "splitError");
        calcTip();
    }
});