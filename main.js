// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
const pAequorFactory = (specimenNum, dna) => { 
  return {
    _specimenNum: specimenNum,
    _dna: dna,
    mutate() {
      let i = Math.floor(Math.random() * this._dna.length);
      
        let randomBase = this._dna[i];
        let compareBase = returnRandBase();
      
      while (randomBase !== compareBase) {
        i = Math.floor(Math.random() * this._dna.length);
        randomBase = this._dna[i];
        compareBase = returnRandBase();
        this._dna.splice(i, 1, compareBase);
        
      }
      return this._dna
    },
    willLikelySurvive() {
      let CGincremeter = 0;
      for(let i = 0; i < this._dna.length; i++) {  
        
        if(this._dna[i] === 'C' || this._dna[i] == 'G') {
          CGincremeter ++
        }
      }
      console.log(CGincremeter);

      if(CGincremeter / this._dna.length * 100 >= 60) {
        return true;
      }else {
        return false;
      }
    }
  }
}
const bacteria1 = pAequorFactory(1, mockUpStrand());
console.log(bacteria1);
console.log(bacteria1.mutate());
console.log(bacteria1.willLikelySurvive());















