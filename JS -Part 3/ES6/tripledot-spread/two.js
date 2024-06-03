let eids=[101,102,103,104]
//create new array based on existing array
let uids=[]

for( eid of eids){
    uids.push(eid)
}

console.log(eids)
uids[0] = 1001
console.log(uids)