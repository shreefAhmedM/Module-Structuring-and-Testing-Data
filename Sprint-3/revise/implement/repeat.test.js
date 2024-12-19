// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
function repeatStr(str, count){
    if(count < 0){
       throw new Error("Count cannot be negative")
    }
    return str.repeat(count)
}

test("Implement a function takes tow parameters str and num and repeat the str ,nums times",()=> {
    expect(repeatStr("s",2)).toBe("ss");
    expect(repeatStr("abc", 3)).toBe("abcabcabc");
})
try{
    repeatStr("d", -2)
}catch(e){
    console.log(e.message)
}