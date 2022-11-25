function NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luong,
    _chucVu,
    _gioLam
    ){

        //Property
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luong = _luong;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";
    // Method
    this.TONGLUONG = function (){
        this.tongLuong = parseFloat(this.luong);
    }
    this.xepLOAI =  function(){
        
        if(this.gioLam >= 192){
            this.xepLoai = "Nhân viên xuất sắc"
        }else if(this.gioLam >= 176 && this.gioLam <192){
            this.xepLoai = "Nhân viên giỏi"
        }else if(this.gioLam >= 160 && this.gioLam <176){
            this.xepLoai = "Nhân viên khá"
        }else{
            this.xepLoai = "Nhân viên trung bình"
        }
    }
}