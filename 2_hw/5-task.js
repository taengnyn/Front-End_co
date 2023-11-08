function getRootProperty(obj, n) {
    const include = true;
    if (Array.isArray(obj)) {
      if (obj.includes(n)) {
        
        return include;
      } else {
        return !include;
      }
    } 
    else {

      for (let [key, value] of Object.entries(obj)) {
        let res = getRootProperty(value, n);
        if (typeof res === "string") {
          return res;
        } 
        else if (res) 
        {
          return key;
        }
      }
      return null;
    }
  }

object = {
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
console.log(getRootProperty(object, 250));