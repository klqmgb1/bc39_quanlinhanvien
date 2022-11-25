var dsnv = new DanhSachNhanVien();
var validation = new Validation();

getLocalStorage();
function getEle(id){
    return document.getElementById(id);
}

function layThongTinNV(){
    var taiKhoan = getEle("tknv").value;
    var hoTen = getEle("name").value;
    var email = getEle("email").value;
    var matKhau = getEle("password").value;
    var ngayLam = getEle("datepicker").value;
    var luong = getEle("luongCB").value;
    var chucVu = getEle("chucvu").value;
    var gioLam = getEle("gioLam").value;
    //check validation
    //taikhoan

    var isValid = true;
    // kiem tra tk
    isValid &= validation.kiemTraRong(taiKhoan, "errorTaiKhoan", "(*)Vui lòng nhập tài khoản")
    && validation.doDaiKyTu(taiKhoan, "errorTaiKhoan", "(*)Vui lòng nhập từ 4-6 ký tự", 4, 6)
    && validation.kiemTraTrungTaiKhoan(taiKhoan, "errorTaiKhoan", "(*) Tài khoản đã tồn tại", dsnv.arr)
    //kiem tra ho ten
    isValid &= validation.kiemTraRong(hoTen, "errorHoTen", "(*) Vui lòng nhập tên nhân viên")
    && validation.kiemTraChuoi(hoTen, "errorHoTen", "(*) Vui lòng nhập chuỗi ký tự")
    //kiem tra email
    isValid &= validation.kiemTraRong(email, "errorEmail", "(*)Vui lòng nhập email")
    && validation.kiemTraEmail(email, "errorEmail", "(*) Vui lòng nhập email đúng định dạng")
    //kiem tra mat khau
    isValid &= validation.kiemTraRong(matKhau, "errorMatKhau", "(*)Vui lòng nhập mật khẩu")
    && validation.kiemTraMatKhau(matKhau, "errorMatKhau", "(*) Vui lòng nhập mật khẩu đúng định dạng")

    isValid &= validation.kiemTraRong(ngayLam, "errorNgayLam", "(*)Vui lòng nhập ngày làm")
    // && validation.kiemTraNgayLam(ngayLam, "errorNgayLam", "(*) Vui lòng nhập ngày làm")
    
    isValid &= validation.kiemTraRong(luong, "errorLuong", "(*)Vui lòng nhập lương")
    // && validation.kiemTraLuong(taiKhoan, "errorLuong", "(*)Vui lòng nhập đúng số lương", 1000000, 20000000)
    

    isValid &= validation.kiemTraRong(chucVu, "errorChucVu", "(*)Vui lòng nhập chức vụ")
    && validation.kiemTraChucVu("chucvu", "errorChucVu", "Vui lòng chọn chức vụ")

    isValid &= validation.kiemTraRong(gioLam, "errorGioLam", "(*)Vui lòng nhập giờ làm")




    if(!isValid) return;
//tao doi tuong nhan vien
    var nv = new NhanVien(
        taiKhoan,
        hoTen,
        email,
        matKhau,
        ngayLam,
        luong,
        chucVu,
        gioLam        
        );
        nv.TONGLUONG()
        nv.xepLOAI()
        return nv;
    }


// Thêm NV
getEle("btnThemNV").onclick = function (){
    var nv = layThongTinNV(true);
    if(nv){
        dsnv.themNV(nv)

        renderTable(dsnv.arr);
        setLocalStorage();
    }
};


function renderTable(data){
    var content = "";

    for(i = 0; i < data.length ; i++){
        var nv = data[i];
        content += `
        <tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xepLoai}</td>
            <td>
            <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editNV('${nv.taiKhoan}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteNV('${nv.taiKhoan}')">Delete</button>
            </td>
        </tr>
        `
    }
    getEle("tableDanhSach").innerHTML = content;
}
//delete nv
function deleteNV(taiKhoan){
    dsnv.xoaNV(taiKhoan)

    renderTable(dsnv.arr)
    setLocalStorage()
}

//edit nv
function editNV(taiKhoan){
    var nv = dsnv.layChiTietNV(taiKhoan);
    if(nv){
    getEle("tknv").value = nv.taiKhoan;
    getEle("tknv").disabled = true;
    getEle("name").value= nv.hoTen
    getEle("email").value= nv.email
    getEle("password").value= nv.matKhau
    getEle("datepicker").value= nv.ngayLam
    getEle("luongCB").value= nv.luong
    getEle("chucvu").value= nv.chucVu
    getEle("gioLam").value= nv.gioLam
    }
}
//upadte nhan vien
getEle("btnCapNhat").addEventListener("click", function(){
    var nv = layThongTinNV(false);
    dsnv.capNhatNV(nv)
    renderTable(dsnv.arr)
    setLocalStorage()
});

//Tim kiem nhan vien
getEle("searchName").addEventListener("keyup", function(){
    var keyword = getEle("searchName").value;
    var mangTimKiem= dsnv.timkiemNV(keyword)
    renderTable(mangTimKiem);
})



// localstorage
function setLocalStorage (){
    // convert json => string
    var dataString = JSON.stringify(dsnv.arr)
    //lưu xuống localstage
    localStorage.setItem("DSNV", dataString)
}

//
function getLocalStorage(){

    if(localStorage.getItem("DSNV")){
    // string => json
    var dataString = localStorage.getItem("DSNV")
    // convert string => json
    dsnv.arr = JSON.parse(dataString);
    //render lại table 
    renderTable(dsnv.arr)
    }
}