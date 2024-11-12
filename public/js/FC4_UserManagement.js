 
// Danh sách người dùng 
var admin = ["admin","123456"] 
var user1 = ["user1","1"] 
var user2 = ["user2","2"] 
// Chương trình con 
function login() 
{ 
    var a = document.getElementById("inputuser").value; 
    var b = document.getElementById("inputpass").value; 
    // Admin 
    if (a == admin[0] && b == admin[1]) 
    { 
        fn_ScreenChange('scr_Auto','scr_Manu','scr_mysql','scr_Dothi'); 
        document.getElementById('id01').style.display='none'; 
    } 
    // User 1 
    else if (a == user1[0] && b == user1[1]) 
    { 
        fn_ScreenChange('scr_Auto','scr_Manu','scr_mysql','scr_Dothi');  
        document.getElementById('id01').style.display='none'; 
        document.getElementById("scr_Manu").disabled = true; 
    } 
    // User 2 
    else if (a == user2[0] && b == user2[1]) 
    { 
        fn_ScreenChange('scr_Auto','scr_Manu','scr_mysql','scr_Dothi');  
        document.getElementById('id01').style.display='none'; 
        document.getElementById("btt_Screen_Main").disabled = true; 
        document.getElementById("scr_mysql").disabled = true; 
    } 
    else 
    { 
        window.location.href = ''; 
    } 
} 
function logout() // Ctrinh login 
{ 
    alert("Đăng xuất thành công"); 
    window.location.href = 'Dev_by_AnhHytoichoi.com_hot_line_0389075221'; 
} 