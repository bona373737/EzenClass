const {
    a,
    b,
    ...rest
} = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
}
console.log(typeof rest)