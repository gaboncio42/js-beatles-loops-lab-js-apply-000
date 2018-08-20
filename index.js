// add solution here
const musicians = [
  "John Lennon", 
  "Paul McCartney", 
  "George Harrison",
  "Ringo Star"];
  
const instruments = [
    "Guitar",
    "Bass Guitar",
    "Lead Guitar",
    "Drums"];
    
    function theBeatlesPlay(musicians, instruments) {
      const array = [];
      for(let i = 0; i < musicians.length; i++) {
        array.push(musicians[i] + " plays " + instruments[i])
      }
      return array;
    }
    
    const facts = [
      "He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and a boy scout",
      "He hated the sound of his own voice"];
      
  
    
    function 