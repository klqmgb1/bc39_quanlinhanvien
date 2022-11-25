function Validation() {
    this.kiemTraRong = function(value, errorId, mess){
        if(value ===""){
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }

            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
    };

    this.doDaiKyTu = function(value, errorId, mess, min , max){
        if( min <= value.trim().length && value.trim().length <= max ){
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }

    this.kiemTraChuoi = function (value, errorId, mess){
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
        if(value.match(letter)){
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true
        }
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false
    }

    this.kiemTraEmail = function (value, errorId, mess){
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(value.match(letter)){
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true
        }
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false
    }
    this.kiemTraMatKhau = function (value, errorId, mess){
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/
        if(value.match(letter)){
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true
        }
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false
    }
    // this.kiemTraNgayLam = function(value, errorId, mess){
    //     var letter = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
    //     if(value.match(letter)){
    //         getEle(errorId).innerHTML = "";
    //         getEle(errorId).style.display = "none";
    //         return true
    //     }
    //     getEle(errorId).innerHTML = mess;
    //     getEle(errorId).style.display = "block";
    //     return false
    // }

    this.kiemTraLuong = function(value, errorId, mess, min , max){
        if( min <= value && value <= max ){
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }

    this.kiemTraChucVu = function(idSelect, errorId, mess){
        if(getEle(idSelect).selectedIndex !==0){
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }

    this.kiemTraTrungTaiKhoan = function(value, errorId, mess, data){
        var exist = false;
        for(i = 0; i< data.length; i++){
            var nv = data[i];
            if(nv.taiKhoan === value){
                exist = true;
                break;
            }
        }
        if(exist){
                getEle(errorId).innerHTML = mess;
                getEle(errorId).style.display = "block";
                return false
            }
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true
    }
}