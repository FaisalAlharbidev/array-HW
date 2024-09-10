const characters = [
    ["Luke Skywalker", 177, "male", 77, "brown"],
    ["Leia Organa", 160, "female", 56, "blue"],
    ["Han Solo", 180, "male", 80, "brown"],
    ["Chewie", 222, "male", 190, "black"],
    ["Kevien", 106, "male", 32.2, "red"]
  ];
  
   const characterData = characters.map(char => ({
    name: char[0],
    height: char[1],
    gender: char[2],
    mass: char[3],
    eyeColor: char[4]
  }));
  
  let  names = characterData.map(char => char.name);
  console.log("Characters' names:", names);
  
  let  heights = characterData.map(char => char.height);
  console.log("Characters' heights:", heights);
  
  let  totalHeight = characterData.reduce((sum, char) => sum + char.height, 0);
  console.log("Total height:", totalHeight);
  
  let  shortCharacters = characterData.filter(char => char.height < 200);
  console.log("Short characters:", shortCharacters);
  
  let  maleCharacters = characterData.filter(char => char.gender === "male");
  console.log("Male characters:", maleCharacters);
  
   characterData.sort((a, b) => a.mass - b.mass);
  console.log("Characters sorted by mass:", characterData);
  
   characterData.sort((a, b) => a.height - b.height);
  console.log("Characters sorted by height:", characterData);
  
  let  allHeavy = characterData.every(char => char.mass > 40);
  console.log("Are all characters heavy?", allHeavy);
  
  let  allShort = characterData.every(char => char.height < 200);
  console.log("Are all characters short?", allShort);
  
  let  hasBlueEyes = characterData.some(char => char.eyeColor === "blue");
  console.log("Does anyone have blue eyes?", hasBlueEyes);
  
   let  hasTallCharacter = characterData.some(char => char.height > 210);
  console.log("Is there a very tall character?", hasTallCharacter);