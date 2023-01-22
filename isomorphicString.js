function isIsomorphic(str1, str2) {

  if (str1.length !== str2.length) {
    return false
  }

  const map = new Map()

  const set = new Set();

  for( let i = 0; i < str1.length; i++){

    char1 = str1.charAt(i);
    char2 = str2.charAt(i);

    if(map.has(char1) == true) {

      if(map.get(char1) !==  char2){
        return false
      }
    }
    else {

      if(set.has(char2)) {
        return false
      }

      map.set(char1, char2)
      set.add(char2)
    }
    console.log("char1 ->", char1)
    console.log("char2 ->", char2)
    console.log(map)
    console.log(set)
  }
  return true
 
}

str1 = "ABCL"
str2 = "XYZG"
console.log(isIsomorphic(str1, str2))