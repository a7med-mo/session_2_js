


alert("") //تستخدم لطباعة رسالة للمستخدم عن طريق البروزرر
prompt("") // لادخال بينات من المستخدم عن دريق البروزر
confirm("") //لطباعة رسالة للمستخدم و الرجوع بقيمة true or false من المستخدم عن طريق البروزر

// ==========================================================================

var x = 10; //هو عبارة عن متغير يحفظ فية string or number or boolean  يمكن تسميت متغيرين بنفس الاسم 
let y = 10; //هو عبارة عن متغير يحفظ فية string or number or boolean ولا يمكن تسميت متغيرين بنفس الاسم
const z = 10;//هو عبارة عن سابت يحفظ فية string or number or boolean ولا يمكن تسميت سابتين بنفس الاسم 


function create() {
    var x = 10; // function scope
    let y = 10; // function scope
    const z = 10; // function scope
}

if ( 0 == 0) {
    var x = 10; // not plock scope
    let y = 10; // plock scope
    const z = 10; // plock scope
}

