function superbowlWin(array){
   let win = array.find(s => s.result == "W");
	  if(win){
      return win.year;
    }
    else {
      return undefined;
    }
  // shorter version:
  // return win ? win.year : undefined
}
