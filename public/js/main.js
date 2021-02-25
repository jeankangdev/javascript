
let obj = {
  toString() {
    return "2";
  }
};

alert(obj * 2); // 4  ("2" * 2 => 2 * 2)
alert(obj + 2); // 22 ("2" + 2 => "2" + "2")