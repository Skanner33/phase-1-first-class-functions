function receivesAFunction(routine){
    routine();
  }
  
  
  function returnsANamedFunction(){
      let cash = () => console.log("doom");
      return cash;
  }
  
  function returnsAnAnonymousFunction(){
      return (() => console.log("day"))
  }