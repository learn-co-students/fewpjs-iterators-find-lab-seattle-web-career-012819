function superbowlWin(array){
let answer = array.find(record => record.result == "W")

return answer ? answer.year : undefined
}
