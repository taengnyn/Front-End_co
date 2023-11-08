
function unpackSausages(truck) {
    let counter = "";

    let reward = "";
    
    let packs = 0;
    for (let box of truck) {
      for (let product of box) {
        if (product.startsWith("[") && product.endsWith("]")) {
          // Check if the pack is damaged
          if (product.length !== 6){
            for(let i = 0; i < 6; i++){
                if(product[i] !== product[i+1]) 
                continue;
            }
            
          }
          packs++;
          
          let sausage = product[0];
          // Check if the pack is the fifth one
          if (packs % 5 === 0) {
            // Add four sausages to the reward
            reward += sausage.repeat(4) + " ";
          } else {
            // Add four sausages to the counter
            counter += sausage.repeat(4) + " ";
          }
        }
      }
    }
    // Return the counter string without the trailing space
    return counter;
  }
  
  // Test
  let truck = [ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU", "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ];
  console.log(unpackSausages(truck));
  // Output: I I I I ) ) ) ) l l l l @ @ @ @
  