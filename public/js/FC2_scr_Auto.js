///// HÀM CHỨC NĂNG NÚT NHẤN SỬA ////// 
// Tạo 1 tag tạm báo đang sửa dữ liệu 
var Auto_data_edditting = false; 
function fn_Auto_EditBtt(bttSaveID, bttEditID){ 
    // Cho hiển thị nút nhấn lưu 
    fn_DataEdit(bttSaveID, bttEditID); 
    // Cho tag báo đang sửa dữ liệu lên giá trị true 
    Auto_data_edditting = true; 
    // Kích hoạt chức năng sửa của các IO Field 
    document.getElementById("tbx_set_DC1").disabled = false; 
    document.getElementById("tbx_set_DC2").disabled = false;  
    document.getElementById("tbx_set_DC3").disabled = false;
    document.getElementById("tbx_set_DC4").disabled = false; 
    document.getElementById("tbx_set_DC5").disabled = false;  
    document.getElementById("tbx_set_DC6").disabled = false; 
    document.getElementById("tbx_set_DC7").disabled = false; 
    document.getElementById("tbx_set_DC8").disabled = false;  
    document.getElementById("tbx_set_DC9").disabled = false;
    document.getElementById("tbx_set_DC10").disabled = false;
      
}   
///// HÀM CHỨC NĂNG NÚT NHẤN LƯU ////// 
function fn_Auto_SaveBtt(bttSaveID, bttEditID){ 
    // Cho hiển thị nút nhấn sửa 
    fn_DataEdit(bttEditID, bttSaveID); 
    // Cho tag đang sửa dữ liệu về 0 
    Auto_data_edditting = false; 
                        // Gửi dữ liệu cần sửa xuống PLC 
    var data_edit_array =[document.getElementById('tbx_set_DC1').value,
                            document.getElementById('tbx_set_DC2').value,
                            document.getElementById('tbx_set_DC3').value,
                            document.getElementById('tbx_set_DC4').value,
                            document.getElementById('tbx_set_DC5').value,
                            document.getElementById('tbx_set_DC6').value,
                            document.getElementById('tbx_set_DC7').value,
                            document.getElementById('tbx_set_DC8').value,
                            document.getElementById('tbx_set_DC9').value,
                            document.getElementById('tbx_set_DC10').value,] ; 
    socket.emit('cmd_Auto_Edit_Data', data_edit_array); 
    alert('Dữ liệu đã được lưu!'); 
    // Vô hiệu hoá chức năng sửa của các IO Field 
    document.getElementById("tbx_set_DC1").disabled = true; 
    document.getElementById("tbx_set_DC2").disabled = true; 
    document.getElementById("tbx_set_DC3").disabled = true;
    document.getElementById("tbx_set_DC4").disabled = true; 
    document.getElementById("tbx_set_DC5").disabled = true; 
    document.getElementById("tbx_set_DC6").disabled = true;  
    document.getElementById("tbx_set_DC7").disabled = true; 
    document.getElementById("tbx_set_DC8").disabled = true; 
    document.getElementById("tbx_set_DC9").disabled = true;
    document.getElementById("tbx_set_DC10").disabled = true;  
} 
// Hàm chức năng đọc dữ liệu lên IO Field 
function fn_Auto_IOField_IO(tag, IOField, tofix) 
{ 
    socket.on(tag, function(data){ 
        console.log('Received data:', data);
        if (tofix == 0 && Auto_data_edditting != true) 
        { 
            document.getElementById(IOField).value = data; 
        } 
        else if(Auto_data_edditting != true) 
        { 
            document.getElementById(IOField).value = data.toFixed(tofix); 
        } 
    }); 
} 