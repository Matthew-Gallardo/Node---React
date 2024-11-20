export function printMessage() {
    console.log("event print message")
}

export function printProfile(id, fullname, age) {
    console.log(id, fullname, age);
}

export function addNum(oper1, oper2, state) {
    state.total = oper1 + oper2;
    state.status ="OK";
}