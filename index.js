function superbowlWin(record){
  let win = record.find(s => s.result == "W");
  // if(win){
  //   return win.year;
  // }
  // else {
  //   return undefined;
  // }
  return win ? win.year : undefined
}
