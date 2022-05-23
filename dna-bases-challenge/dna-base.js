// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * dnaBases.length)];
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  function pAequorFactory(id, array) {
      let pAequor = {

          specimemNum : id,
          dna : array,

          mutate() {
                console.log(`DNA BEFORE: ${this.dna}`);
            const randomBaseIndex = this.dna.indexOf(returnRandBase());
                console.log(`DNA INDEX TO BE CHANGED: ${randomBaseIndex}`);
            const originalBase = this.dna[randomBaseIndex];
                console.log(`DNA Original BASE: ${originalBase}`);

                let mutatedBase = returnRandBase();

                while (originalBase === mutatedBase) {
                    mutatedBase = returnRandBase();
                }
                console.log(`NEW BASE: ${mutatedBase}`);
            this.dna[randomBaseIndex] = mutatedBase;
                console.log(`DNA AFTER MUTATION: ${this.dna}`);
          }
      }
      return pAequor;
  }

  let batch = [];

  for (let i = 0; i < 20; i++) {
      batch.push(pAequorFactory(i, mockUpStrand()));
  }

  const displayIDs = batch.forEach(x => {
      x.mutate();
  });

  displayIDs;