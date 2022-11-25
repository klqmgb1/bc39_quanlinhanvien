function DanhSachNhanVien(){
    this.arr = [];

    this.themNV = function(nv){
        this.arr.push(nv)
    };

    //tim vit tri
    this.timViTriNV = function(taiKhoan){
        var index = -1;
        for(i = 0; i< this.arr.length; i++){
            var nv = this.arr[i]
            if(nv.taiKhoan === taiKhoan){
                index = i;
                break
            }
        }
        return index
    }
    //xoa nhan vien
    this.xoaNV = function(taiKhoan){
        var index = this.timViTriNV(taiKhoan);
        if(index !== -1){
            this.arr.splice(index, 1)
        }
    }


    this.layChiTietNV = function(taiKhoan){
        var index = this.timViTriNV(taiKhoan);
        if(index !== -1){
            return this.arr[index];
        }
    }
    //cap nhat nhan vien
    this.capNhatNV = function(nv){
        var index = this.timViTriNV(nv.taiKhoan);

        if(index !== -1){
            this.arr[index] = nv;
        }
    };

    //tim kiem nhana vien
    this.timkiemNV = function(keyword){
        var mangTimKiem = [];
        for(i =0; i< this.arr.length; i++){
            var nv = this.arr[i]
            
            var tennvLowerCase = nv.hoTen.toLowerCase();
            var keywordLowerCase = keyword.toLowerCase();
            
            if(tennvLowerCase.indexOf(keywordLowerCase) !== -1){
                mangTimKiem.push(nv)
            }
        }
        return mangTimKiem;
    };
}