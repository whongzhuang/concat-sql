let source = `101010	test	test2
101010	test	test2
101010	test	test2
101010	test	test2
101010	test	test2
101010	test	test2
`;
let sql = `update api_info_48 set id_no = '%0' where url =%1 and label_id=%2;`
let result = [];
let sourcean = source.split("\n");
for (let i = 0; i < sourcean.length; i++) {
    let line = sourcean[i];
    if (line == "") {
        continue;
    }
    line = line.split("\t");
    console.log(line);
    //匹配sql中的%0,%1,%2，比如为%0的时候，匹配到的是0，将0%替换为line[0]
    let reg = /%(\d)/g;
    let match = sql.match(reg);
    console.log(match);
    let sqltest = sql;
    for (let j = 0; j < match.length; j++) {
        console.log(match[j]);
        let index = match[j].replace("%", "");
        let replace = line[index];
        sqltest = sqltest.replace(match[j], replace);
    }
    result.push(sqltest);
}
result.forEach((item) => {
    console.log(item);
})