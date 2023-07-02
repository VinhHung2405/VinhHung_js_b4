
// Bài 1
function btn1() {
    var
        n1 = document.getElementById("n1"),
        n2 = document.getElementById("n2"),
        n3 = document.getElementById("n3"),
        num1 = document.getElementById("num1"),
        num2 = document.getElementById("num2"),
        num3 = document.getElementById("num3"),
        n;
    a = n1.value;
    b = n2.value;
    c = n3.value;
    n = a;
    if (Number(a) > Number(b)) {
        n = b;
        b = a;
        a = n;
    }
    if (Number(a) > Number(c)) {
        n = c;
        c = a;
        a = n;
    }
    if (Number(b) > Number(c)) {
        n = c;
        c = b;
        b = n;
    }
    num1.value = a;
    num2.value = b;
    num3.value = c;
    
}

// BÀI 2
function btn2() {
    var
        tv = document.getElementById("thanhvien"),
        tb = document.getElementById("thongbao"),
        LoiChao = document.getElementById("loichao");
    ;
    switch (tv.value) {
        case 'Bố':
            LoiChao.value = "Xin Chào 'Bố'";
            break;
        case 'Mẹ':
            LoiChao.value = "Xin Chào 'Mẹ'";
            break;
        case 'Anh':
            LoiChao.value = "Xin Chào 'Anh'";
            break;
        case 'Em':
            LoiChao.value = "Xin Chào 'Em'";
            break;
        default:
            LoiChao.value = " Vui Lòng Nhập Đúng Vd: Bố, Mẹ, Anh, Em";

    }
}

// BÀI 3
function btn3() {
    var
        n4 = document.getElementById("n4"),
        n5 = document.getElementById("n5"),
        n6 = document.getElementById("n6"),
        even = document.getElementById("even"),
        odd = document.getElementById("odd");
    even.value = 0;
    odd.value = 0;
    if (n4.value == "" || n5.value == "" || n6.value == "") {
    } else {
        if (Number(n4.value) % 2 == 0) {
            even.value = Number(even.value) + 1;
        } else {
            odd.value = Number(odd.value) + 1;
        }
        if (n5.value % 2 == 0) {
            even.value = Number(even.value) + 1;
        } else {
            odd.value = Number(odd.value) + 1;
        }
        if (n6.value % 2 == 0) {
            even.value = Number(even.value) + 1;
        } else {
            odd.value = Number(odd.value) + 1;
        }
    }
}

// BÀI 4
function btn4() {
    var
        n7 = document.getElementById("n7"),
        n8 = document.getElementById("n8"),
        n9 = document.getElementById("n9"),
        tamgiac = document.getElementById("tamgiac"),
        a = Number(n7.value),
        b = Number(n8.value),
        c = Number(n9.value);
    //kiểm tra ba cạnh của 1 tam giác.
    if (a < b + c && b < a + c && c < a + b) {
        // tam giác vuông (pitago)
        if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
            tamgiac.value = "Đây là tam giác vuông";
        }
        //tam giác đều (có ba cạnh bằng nhau)
        else {
            if (a == b && b == c) {
                tamgiac.value = "Đây là tam giác đều";
            }
        //tam giác cân (có 2 cạnh bằng nhau)
        else {
            if (a == b || a == c || b == c) {
                tamgiac.value = "Đây là tam giác cân";
            } else {
                tamgiac.value = "Đây là tam thường";
            }
        }
    }
    } else {
        tamgiac.value = "không phải là cạnh của một tam giác";
    }
}

