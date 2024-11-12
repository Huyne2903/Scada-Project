const axios = require('axios');
//////////////////////CẤU HÌNH KẾT NỐI KEPWARE//////////////////// 

const { TagBuilder, IotGateway } = require('kepserverex-js');
const tagBuilder = new TagBuilder({ namespace: 'Channel1.Device1' });
const iotGateway = new IotGateway({
    host: '127.0.0.1',
    port: 5000
});

/////////////HÀM ĐỌC/GHI DỮ LIỆU XUỐNG KEPWARE(PLC)////////////// 

//Đọc dữ liệu 
var tagArr = [];
function fn_tagRead() {
    iotGateway.read(TagList).then((data) => {
        var lodash = require('lodash');
        tagArr = lodash.map(data, (item) => item.v);
        console.log(tagArr);
    });
}

// Ghi dữ liệu 
function fn_Data_Write(tag, data) {
    tagBuilder.clean();
    const set_value = tagBuilder
        .write(tag, data)
        .get();
    iotGateway.write(set_value);

}

///////////////////////////ĐỊNH NGHĨA TAG//////////////////////// 

// Khai báo tag 
var btt_Auto = 'btt_Auto';
var btt_Manu = 'btt_Manu';
var btt_Auto_Confirm = 'btt_Auto_Confirm';
var btt_V1_Open = 'btt_V1_Open';
var btt_V1_Close = 'btt_V1_Close';
var btt_V2_Open = 'btt_V2_Open';
var btt_V2_Close = 'btt_V2_Close';
var btt_V3_Open = 'btt_V3_Open';
var btt_V3_Close = 'btt_V3_Close';
var btt_DC_Tron_Run = 'btt_DC_Tron_Run';
var btt_DC_Tron_Stop = 'btt_DC_Tron_Stop';
var sql_insert_Trigger = 'sql_insert_Trigger';
var Q_Lamp_Auto = 'Q_Lamp_Auto';
var Q_Lamp_Manu = 'Q_Lamp_Manu';
var status_Valve_1 = 'status_Valve_1';
var status_Valve_2 = 'status_Valve_2';
var status_Valve_3 = 'status_Valve_3';
var status_DC_Tron = 'status_DC_Tron';
var Setting_Time_Tron = 'Setting_Time_Tron';
var Act_Time_Tron = 'Act_Time_Tron';
var Setting_Weight_1 = 'Setting_Weight_1';
var Setting_Weight_2 = 'Setting_Weight_2';
var Act_Weight_1 = 'Act_Weight_1';
var Act_Weight_2 = 'Act_Weight_2';

var status_DC_2 = 'status_DC_2';
var status_DC_3 = 'status_DC_3';
var status_DC_4 = 'status_DC_4';
var status_DC_5 = 'status_DC_5';
var status_DC_6 = 'status_DC_6';
var status_DC_7 = 'status_DC_7';
var status_DC_8 = 'status_DC_8';
var status_DC_9 = 'status_DC_9';
var status_DC_10 = 'status_DC_10';

var Act_DC_1 = 'Act_DC_1';
var Act_DC_2 = 'Act_DC_2';
var Act_DC_3 = 'Act_DC_3';
var Act_DC_4 = 'Act_DC_4';
var Act_DC_5 = 'Act_DC_5';
var Act_DC_6 = 'Act_DC_6';
var Act_DC_7 = 'Act_DC_7';
var Act_DC_8 = 'Act_DC_8';
var Act_DC_9 = 'Act_DC_9';
var Act_DC_10 = 'Act_DC_10';

var Setting_DC_1 = 'Setting_DC_1';
var Setting_DC_2 = 'Setting_DC_2';
var Setting_DC_3 = 'Setting_DC_3';
var Setting_DC_4 = 'Setting_DC_4';
var Setting_DC_5 = 'Setting_DC_5';
var Setting_DC_6 = 'Setting_DC_6';
var Setting_DC_7 = 'Setting_DC_7';
var Setting_DC_8 = 'Setting_DC_8';
var Setting_DC_9 = 'Setting_DC_9';
var Setting_DC_10 = 'Setting_DC_10';

var btt_DC_Run = 'btt_DC_Run';
var btt_DC_Stop = 'btt_DC_Stop';
var btt_DC2_Run = 'btt_DC2_Run';
var btt_DC2_Stop = 'btt_DC2_Stop';
var btt_DC3_Run = 'btt_DC3_Run';
var btt_DC3_Stop = 'btt_DC3_Stop';
var btt_DC4_Run = 'btt_DC4_Run';
var btt_DC4_Stop = 'btt_DC4_Stop';
var btt_DC5_Run = 'btt_DC5_Run';
var btt_DC5_Stop = 'btt_DC5_Stop';
var btt_DC6_Run = 'btt_DC6_Run';
var btt_DC6_Stop = 'btt_DC6_Stop';
var btt_DC7_Run = 'btt_DC7_Run';
var btt_DC7_Stop = 'btt_DC7_Stop';
var btt_DC8_Run = 'btt_DC8_Run';
var btt_DC8_Stop = 'btt_DC8_Stop';
var btt_DC9_Run = 'btt_DC9_Run';
var btt_DC9_Stop = 'btt_DC9_Stop';
var btt_DC10_Run = 'btt_DC10_Run';
var btt_DC10_Stop = 'btt_DC10_Stop';

var status_CB_level = 'status_CB_level';
var status_CB_humidity = 'status_CB_humidity';
var status_CB_pressure = 'status_CB_pressure';

var Act_CB_level = 'Act_CB_level';
var Act_CB_humidity = 'Act_CB_humidity';
var Act_CB_pressure = 'Act_CB_pressure';

// Đọc dữ liệu 

const TagList = tagBuilder
    .read(btt_Auto)
    .read(btt_Manu)
    .read(btt_Auto_Confirm)
    .read(btt_V1_Open)
    .read(btt_V1_Close)
    .read(btt_V2_Open)
    .read(btt_V2_Close)
    .read(btt_V3_Open)
    .read(btt_V3_Close)
    .read(btt_DC_Tron_Run)
    .read(btt_DC_Tron_Stop)
    .read(sql_insert_Trigger)
    .read(Q_Lamp_Auto)
    .read(Q_Lamp_Manu)
    .read(status_Valve_1)
    .read(status_Valve_2)
    .read(status_Valve_3)
    .read(status_DC_Tron)
    .read(Setting_Time_Tron)
    .read(Act_Time_Tron)
    .read(Setting_Weight_1)
    .read(Setting_Weight_2)
    .read(Act_Weight_1)
    .read(Act_Weight_2)

    .read(status_DC_2)
    .read(status_DC_3)
    .read(status_DC_4)
    .read(status_DC_5)
    .read(status_DC_6)
    .read(status_DC_7)
    .read(status_DC_8)
    .read(status_DC_9)
    .read(status_DC_10)

    .read(Act_DC_1)
    .read(Act_DC_2)
    .read(Act_DC_3)
    .read(Act_DC_4)
    .read(Act_DC_5)
    .read(Act_DC_6)
    .read(Act_DC_7)
    .read(Act_DC_8)
    .read(Act_DC_9)
    .read(Act_DC_10)

    .read(Setting_DC_1)
    .read(Setting_DC_2)
    .read(Setting_DC_3)
    .read(Setting_DC_4)
    .read(Setting_DC_5)
    .read(Setting_DC_6)
    .read(Setting_DC_7)
    .read(Setting_DC_8)
    .read(Setting_DC_9)
    .read(Setting_DC_10)

    .read(btt_DC_Run)
    .read(btt_DC_Stop)
    .read(btt_DC2_Run)
    .read(btt_DC2_Stop)
    .read(btt_DC3_Run)
    .read(btt_DC3_Stop)
    .read(btt_DC4_Run)
    .read(btt_DC4_Stop)
    .read(btt_DC5_Run)
    .read(btt_DC5_Stop)
    .read(btt_DC6_Run)
    .read(btt_DC6_Stop)
    .read(btt_DC7_Run)
    .read(btt_DC7_Stop)
    .read(btt_DC8_Run)
    .read(btt_DC8_Stop)
    .read(btt_DC9_Run)
    .read(btt_DC9_Stop)
    .read(btt_DC10_Run)
    .read(btt_DC10_Stop)

    .read(status_CB_level)
    .read(status_CB_humidity)
    .read(status_CB_pressure)

    .read(Act_CB_level)
    .read(Act_CB_humidity)
    .read(Act_CB_pressure)
    .get();

///////////////////////////QUÉT DỮ LIỆU//////////////////////// 

// Tạo Timer quét dữ liệu 
setInterval(
    () => fn_read_data_scan(),
    1000 //100ms = 1s 
);

// Quét dữ liệu 
function fn_read_data_scan() {
    fn_tagRead();   // Đọc giá trị tag
    fn_sql_insert(); // Ghi dữ liệu vào SQL 
}
/ /////////////////////////THIẾT LẬP KẾT NỐI WEB///////////////////////// 

var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);
// Home calling 

app.get("/", function (req, res) {
    res.render("home")

});
/ ///////////LẬP BẢNG TAG ĐỂ GỬI QUA CLIENT (TRÌNH DUYỆT)/////////// 

function fn_tag() {
    io.sockets.emit("btt_Auto", tagArr[0]);
    io.sockets.emit("btt_Manu", tagArr[1]);
    io.sockets.emit("btt_Auto_Confirm';", tagArr[2]);
    io.sockets.emit("btt_V1_Open", tagArr[3]);
    io.sockets.emit("btt_V1_Close", tagArr[4]);
    io.sockets.emit("btt_V2_Open", tagArr[5]);
    io.sockets.emit("btt_V2_Close", tagArr[6]);
    io.sockets.emit("btt_V3_Open", tagArr[7]);
    io.sockets.emit("btt_V3_Close", tagArr[8]);
    io.sockets.emit("btt_DC_Tron_Run", tagArr[9]);
    io.sockets.emit("btt_DC_Tron_Stop", tagArr[10]);
    io.sockets.emit("sql_insert_Trigger", tagArr[11]);
    io.sockets.emit("Q_Lamp_Auto", tagArr[12]);
    io.sockets.emit("Q_Lamp_Manu", tagArr[13]);
    io.sockets.emit("status_Valve_1", tagArr[14]);
    io.sockets.emit("status_Valve_2", tagArr[15]);
    io.sockets.emit("status_Valve_3", tagArr[16]);
    io.sockets.emit("status_DC_Tron", tagArr[17]);
    io.sockets.emit("Setting_Time_Tron", tagArr[18]);
    io.sockets.emit("Act_Time_Tron", tagArr[19]);
    io.sockets.emit("Setting_Weight_1", tagArr[20]);
    io.sockets.emit("Setting_Weight_2", tagArr[21]);
    io.sockets.emit("Act_Weight_1", tagArr[22]);
    io.sockets.emit("Act_Weight_2", tagArr[23]);

    io.sockets.emit("status_DC_2", tagArr[24]);
    io.sockets.emit("status_DC_3", tagArr[25]);
    io.sockets.emit("status_DC_4", tagArr[26]);
    io.sockets.emit("status_DC_5", tagArr[27]);
    io.sockets.emit("status_DC_6", tagArr[28]);
    io.sockets.emit("status_DC_7", tagArr[29]);
    io.sockets.emit("status_DC_8", tagArr[30]);
    io.sockets.emit("status_DC_9", tagArr[31]);
    io.sockets.emit("status_DC_10", tagArr[32]);

    io.sockets.emit("Act_DC_1", tagArr[33]);
    io.sockets.emit("Act_DC_2", tagArr[34]);
    io.sockets.emit("Act_DC_3", tagArr[35]);
    io.sockets.emit("Act_DC_4", tagArr[36]);
    io.sockets.emit("Act_DC_5", tagArr[37]);
    io.sockets.emit("Act_DC_6", tagArr[38]);
    io.sockets.emit("Act_DC_7", tagArr[39]);
    io.sockets.emit("Act_DC_8", tagArr[40]);
    io.sockets.emit("Act_DC_9", tagArr[41]);
    io.sockets.emit("Act_DC_10", tagArr[42]);

    io.sockets.emit("Setting_DC_1", tagArr[43]);
    io.sockets.emit("Setting_DC_2", tagArr[44]);
    io.sockets.emit("Setting_DC_3", tagArr[45]);
    io.sockets.emit("Setting_DC_4", tagArr[46]);
    io.sockets.emit("Setting_DC_5", tagArr[47]);
    io.sockets.emit("Setting_DC_6", tagArr[48]);
    io.sockets.emit("Setting_DC_7", tagArr[49]);
    io.sockets.emit("Setting_DC_8", tagArr[50]);
    io.sockets.emit("Setting_DC_9", tagArr[51]);
    io.sockets.emit("Setting_DC_10", tagArr[52]);

    io.sockets.emit("btt_DC_Run", tagArr[53]);
    io.sockets.emit("btt_DC_Stop", tagArr[54]);
    io.sockets.emit("btt_DC2_Run", tagArr[55]);
    io.sockets.emit("btt_DC2_Stop", tagArr[56]);
    io.sockets.emit("btt_DC3_Run", tagArr[57]);
    io.sockets.emit("btt_DC3_Stop", tagArr[58]);
    io.sockets.emit("btt_DC4_Run", tagArr[59]);
    io.sockets.emit("btt_DC4_Stop", tagArr[60]);
    io.sockets.emit("btt_DC5_Run", tagArr[61]);
    io.sockets.emit("btt_DC5_Stop", tagArr[62]);
    io.sockets.emit("btt_DC6_Run", tagArr[63]);
    io.sockets.emit("btt_DC6_Stop", tagArr[64]);
    io.sockets.emit("btt_DC7_Run", tagArr[65]);
    io.sockets.emit("btt_DC7_Stop", tagArr[66]);
    io.sockets.emit("btt_DC8_Run", tagArr[67]);
    io.sockets.emit("btt_DC8_Stop", tagArr[68]);
    io.sockets.emit("btt_DC9_Run", tagArr[69]);
    io.sockets.emit("btt_DC9_Stop", tagArr[70]);
    io.sockets.emit("btt_DC10_Run", tagArr[71]);
    io.sockets.emit("btt_DC10_Stop", tagArr[72]);

    io.sockets.emit("status_CB_level", tagArr[73]);
    io.sockets.emit("status_CB_humidity", tagArr[74]);
    io.sockets.emit("status_CB_pressure", tagArr[75]);
    io.sockets.emit("Act_CB_level", tagArr[76]);
    io.sockets.emit("Act_CB_humidity", tagArr[77]);
    io.sockets.emit("Act_CB_pressure", tagArr[78]);

}

// ///////////GỬI DỮ LIỆU BẢNG TAG ĐẾN CLIENT (TRÌNH DUYỆT)/////////// 
io.on("connection", function (socket) {
    socket.on("Client-send-data", function (data) {
        fn_tag();
    });
});

// ///////////TRUYỀN NHẬN DỮ LIỆU VỚI TRÌNH DUYỆT WEB/////////////////// 
io.on("connection", function (socket) {
    // Chọn Chế Độ Tự Động 
    socket.on("cmd_Mode_Auto", function (data) {
        fn_Data_Write(btt_Auto, data);
    });
    // Chọn Chế Độ Bằng Tay
    socket.on("cmd_Mode_Manu", function (data) {
        fn_Data_Write(btt_Manu, data);
    });
    // Xác Nhận 
    socket.on("cmd_Confirm", function (data) {
        fn_Data_Write(btt_Auto_Confirm, data);
    });

    // Nút Nhấn  DC chạy
    socket.on("cmd_Manu_DC_Run", function (data) {
        fn_Data_Write(btt_DC_Run, data);
    });
    // Nút Nhấn DC Dừng
    socket.on("cmd_Manu_DC_Stop", function (data) {
        fn_Data_Write(btt_DC_Stop, data);
    });

    // Nút Nhấn  DC2 chạy
    socket.on("cmd_Manu_DC2_Run", function (data) {
        fn_Data_Write(btt_DC2_Run, data);
    });
    // Nút Nhấn DC2 Dừng
    socket.on("cmd_Manu_DC2_Stop", function (data) {
        fn_Data_Write(btt_DC2_Stop, data);
    });

    // Nút Nhấn  DC3 chạy
    socket.on("cmd_Manu_DC3_Run", function (data) {
        fn_Data_Write(btt_DC3_Run, data);
    });
    // Nút Nhấn DC3 Dừng
    socket.on("cmd_Manu_DC3_Stop", function (data) {
        fn_Data_Write(btt_DC3_Stop, data);
    });

    // Nút Nhấn  DC4 chạy
    socket.on("cmd_Manu_DC4_Run", function (data) {
        fn_Data_Write(btt_DC4_Run, data);
    });
    // Nút Nhấn DC4 Dừng
    socket.on("cmd_Manu_DC4_Stop", function (data) {
        fn_Data_Write(btt_DC4_Stop, data);
    });

    // Nút Nhấn  DC5 chạy
    socket.on("cmd_Manu_DC5_Run", function (data) {
        fn_Data_Write(btt_DC5_Run, data);
    });
    // Nút Nhấn DC5 Dừng
    socket.on("cmd_Manu_DC5_Stop", function (data) {
        fn_Data_Write(btt_DC5_Stop, data);
    });


    // Nút Nhấn  DC6 chạy
    socket.on("cmd_Manu_DC6_Run", function (data) {
        fn_Data_Write(btt_DC6_Run, data);
    });
    // Nút Nhấn DC6 Dừng
    socket.on("cmd_Manu_DC6_Stop", function (data) {
        fn_Data_Write(btt_DC6_Stop, data);
    });

    // Nút Nhấn  DC7 chạy
    socket.on("cmd_Manu_DC7_Run", function (data) {
        fn_Data_Write(btt_DC7_Run, data);
    });
    // Nút Nhấn DC7 Dừng
    socket.on("cmd_Manu_DC7_Stop", function (data) {
        fn_Data_Write(btt_DC7_Stop, data);
    });

    // Nút Nhấn  DC8 chạy
    socket.on("cmd_Manu_DC8_Run", function (data) {
        fn_Data_Write(btt_DC8_Run, data);
    });
    // Nút Nhấn DC8 Dừng
    socket.on("cmd_Manu_DC8_Stop", function (data) {
        fn_Data_Write(btt_DC8_Stop, data);
    });

    // Nút Nhấn  DC9 chạy
    socket.on("cmd_Manu_DC9_Run", function (data) {
        fn_Data_Write(btt_DC9_Run, data);
    });
    // Nút Nhấn DC9 Dừng
    socket.on("cmd_Manu_DC9_Stop", function (data) {
        fn_Data_Write(btt_DC9_Stop, data);
    });

    // Nút Nhấn  DC10 chạy
    socket.on("cmd_Manu_DC10_Run", function (data) {
        fn_Data_Write(btt_DC10_Run, data);
    });
    // Nút Nhấn DC10 Dừng
    socket.on("cmd_Manu_DC10_Stop", function (data) {
        fn_Data_Write(btt_DC10_Stop, data);
    });

    // Nút Nhấn Relay Cum1
    socket.on("cmd_Manu_Relay1", function (data) {
        fn_Data_Write(btt_V1_Close, data);
    });
    // Nút Nhấn Relay Cum2
    socket.on("cmd_Manu_Relay2", function (data) {
        fn_Data_Write(btt_V2_Close, data);
    });
});


// ++++++++++++++++++++++++++GHI DỮ LIỆU XUỐNG PLC+++++++++++++++++++++++++++ 
// MÀN Chế độ tự động
io.on("connection", function (socket) {
    socket.on("cmd_Auto_Edit_Data", function (data) {
        fn_Data_Write(Setting_DC_1, data[0]);
        fn_Data_Write(Setting_DC_2, data[1]);
        fn_Data_Write(Setting_DC_3, data[2]);
        fn_Data_Write(Setting_DC_4, data[3]);
        fn_Data_Write(Setting_DC_5, data[4]);
        fn_Data_Write(Setting_DC_6, data[5]);
        fn_Data_Write(Setting_DC_7, data[6]);
        fn_Data_Write(Setting_DC_8, data[7]);
        fn_Data_Write(Setting_DC_9, data[8]);
        fn_Data_Write(Setting_DC_10, data[9]);
    });
});

// Khai báo SQL 
var mysql = require('mysql');
var sqlcon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "sql_plc",
    dateStrings: true
});

// Ghi dữ liệu vào SQL 
var sqlins_done = false; // Biến báo đã ghi xong dữ liệu 
function fn_sql_insert() {
    var trigger = tagArr[11];  // Trigger đọc về từ PLC 
    var sqltable_Name = "plc_data";
    // Lấy thời gian hiện tại 
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //Vùng Việt Nam (GMT7+) 
    var temp_datenow = new Date();
    var timeNow = (new Date(temp_datenow - tzoffset)).toISOString().slice(0, -1).replace("T", " ");
    var timeNow_toSQL = "'" + timeNow + "',";
    // Dữ liệu đọc lên từ các tag 
    var Act_CB_level = "'" + tagArr[76] + "',";
    var Act_CB_humidity = "'" + tagArr[77] + "',";
    var Act_CB_pressure = "'" + tagArr[78] + "'";
    // Ghi dữ liệu vào SQL 
    if (trigger == true & trigger != sqlins_done) {
        var sqlins1 = "INSERT INTO "
            + sqltable_Name
            + " (date_time, Act_CB_level, Act_CB_humidity, Act_CB_pressure) VALUES (";
        var sqlins2 = timeNow_toSQL
            + Act_CB_level
            + Act_CB_humidity
            + Act_CB_pressure
            ;
        var sqlins = sqlins1 + sqlins2 + ");";
        // Thực hiện ghi dữ liệu vào SQL 
        sqlcon.query(sqlins, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("SQL - Ghi dữ liệu thành công");
            }
        });
    }
    sqlins_done = trigger;
}

// Đọc dữ liệu từ SQL 
io.on("connection", function (socket) {
    socket.on("msg_SQL_Show", function (data) {
        var sqltable_Name = "plc_data";
        var query = "SELECT * FROM " + sqltable_Name + ";"
        sqlcon.query(query, function (err, results, fields) {
            if (err) {
                console.log(err);
            } else {
                const objectifyRawPacket = row => ({ ...row });
                const convertedResponse = results.map(objectifyRawPacket);
                socket.emit('SQL_Show', convertedResponse);
            }
        });
    });
});
// Mảng xuất dữ liệu Excel 
var SQL_Excel = [];  // Dữ liệu Excel

// Tìm kiếm dữ liệu SQL theo khoảng thời gian 
io.on("connection", function (socket) {
    socket.on("msg_SQL_ByTime", function (data) {
        var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset time Việt Nam (GMT7+) 
        // Lấy thời gian tìm kiếm từ date time piker 
        var timeS = new Date(data[0]); // Thời gian bắt đầu 
        var timeE = new Date(data[1]); // Thời gian kết thúc 
        // Quy đổi thời gian ra định dạng cua MySQL 
        var timeS1 = "'" + (new Date(timeS - tzoffset)).toISOString().slice(0, -1).replace("T", " ") + "'";
        var timeE1 = "'" + (new Date(timeE - tzoffset)).toISOString().slice(0, -1).replace("T", " ") + "'";
        var timeR = timeS1 + "AND" + timeE1; // Khoảng thời gian tìm kiếm (Time Range) 
        var sqltable_Name = "plc_data"; // Tên bảng 
        var dt_col_Name = "date_time";  // Tên cột thời gian 
        var Query1 = "SELECT * FROM " + sqltable_Name + " WHERE " + dt_col_Name + " BETWEEN ";
        var Query = Query1 + timeR + ";";
        sqlcon.query(Query, function (err, results, fields) {
            if (err) {
                console.log(err);
            } else {
                const objectifyRawPacket = row => ({ ...row });
                const convertedResponse = results.map(objectifyRawPacket);
                SQL_Excel = convertedResponse; // Xuất báo cáo Excel
                socket.emit('SQL_ByTime', convertedResponse);
            }
        });
    });
});

// /////////////////////////////// BÁO CÁO EXCEL /////////////////////////////// 

const Excel = require('exceljs');
const { CONNREFUSED } = require('dns');
const { error } = require('console');
function fn_excelExport() {
    // =====================CÁC THUỘC TÍNH CHUNG===================== 
    // Lấy ngày tháng hiện tại 
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    let day = date_ob.getDay();
    var dayName = '';
    if (day == 0) { dayName = 'Chủ nhật,' }
    else if (day == 1) { dayName = 'Thứ hai,' }
    else if (day == 2) { dayName = 'Thứ ba,' }
    else if (day == 3) { dayName = 'Thứ tư,' }
    else if (day == 4) { dayName = 'Thứ năm,' }
    else if (day == 5) { dayName = 'Thứ sáu,' }
    else if (day == 6) { dayName = 'Thứ bảy,' }
    else { };
    // Tạo và khai báo Excel 
    let workbook = new Excel.Workbook()
    let worksheet = workbook.addWorksheet('Báo Cáo Hoạt Động', {
        pageSetup: { paperSize: 9, orientation: 'landscape' },
        properties: { tabColor: { argb: 'FFC0000' } },
    });
    // Page setup (cài đặt trang) 
    worksheet.properties.defaultRowHeight = 20;
    worksheet.pageSetup.margins = {
        left: 0.3, right: 0.25,
        top: 0.75, bottom: 0.75,
        header: 0.3, footer: 0.3
    };
    // =====================THẾT KẾ HEADER===================== 
    // Logo công ty 
    const imageId1 = workbook.addImage({
        filename: 'public/images/Logo.png',
        extension: 'png',
    });
    worksheet.addImage(imageId1, 'A1:A3');
    // Thông tin công ty 
    worksheet.getCell('B1').value = 'Công ty TNHH Kỹ thuật công nghệ DUT';
    worksheet.getCell('B1').style = { font: { bold: true, size: 14 }, alignment: { vertical: 'middle' } };
    worksheet.getCell('B2').value = 'Địa chỉ: Đường Nguyễn Lương Bằng, Phường Hòa Khánh, QUận Liên Chiểu, Đà Nẵng';
    worksheet.getCell('B3').value = 'Hotline: + 0904 701 605';
    // Tên báo cáo 
    worksheet.getCell('A5').value = 'BÁO CÁO Hoạt Động';
    worksheet.mergeCells('A5:F5');
    worksheet.getCell('A5').style = { font: { name: 'Times New Roman', bold: true, size: 16 }, alignment: { horizontal: 'center', vertical: 'middle' } };
    // Ngày in biểu 
    worksheet.getCell('F6').value = "Ngày in biểu: " + dayName + date + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
    worksheet.getCell('F6').style = { font: { bold: false, italic: true }, alignment: { horizontal: 'right', vertical: 'bottom', wrapText: false } };
    // Tên nhãn các cột 
    var rowpos = 7;
    var collumName = ["STT", "Thời gian", "Act_CB_level", "Act_CB_humidity", "Act_CB_pressure", "Ghi chú"]
    worksheet.spliceRows(rowpos, 1, collumName);
    // =====================XUẤT DỮ LIỆU EXCEL SQL===================== 
    // Dump all the data into Excel 
    var rowIndex = 0;
    SQL_Excel.forEach((e, index) => {
        // row 1 is the header. 
        rowIndex = index + rowpos;
        // worksheet1 collum 
        worksheet.columns = [
            { key: 'STT' },
            { key: 'date_time' },
            { key: 'Act_CB_level' },
            { key: 'Act_CB_humidity' },
            { key: 'Act_CB_pressure' },
        ]
        worksheet.addRow({
            STT: {
                formula: index + 1
            },
            ...e
        })
    })
    // Lấy tổng số hàng 
    const totalNumberOfRows = worksheet.rowCount;
    // Tính tổng 
    worksheet.addRow([

        'Tổng cộng:',
        
        '',
        { formula: `=sum(C${rowpos + 1}:C${totalNumberOfRows})` },
        { formula: `=sum(D${rowpos + 1}:D${totalNumberOfRows})` },
        { formula: `=sum(E${rowpos + 1}:E${totalNumberOfRows})` },
    ])
    // Style cho hàng total (Tổng cộng) 
    worksheet.getCell(`A${totalNumberOfRows + 1}`).style = { font: { bold: true, size: 12 }, alignment: { horizontal: 'center', } };
    // Tô màu cho hàng total (Tổng cộng) 
    const total_row = ['A', 'B', 'C', 'D', 'E', 'F']
    total_row.forEach((v) => {
        worksheet.getCell(`${v}${totalNumberOfRows + 1}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'f2ff00' } }
    })
    // ====================STYLE CHO CÁC CỘT/HÀNG===================== 
    // Style các cột nhãn 
    const HeaderStyle = ['A', 'B', 'C', 'D', 'E', 'F']
    HeaderStyle.forEach((v) => {
        worksheet.getCell(`${v}${rowpos}`).style = { font: { bold: true }, alignment: { horizontal: 'center', vertical: 'middle', wrapText: true } };
        worksheet.getCell(`${v}${rowpos}`).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
        }
    })
    // Cài đặt độ rộng cột 
    worksheet.columns.forEach((column, index) => {
        column.width = 15;
    })
    // Set width header 
    worksheet.getColumn(1).width = 12;
    worksheet.getColumn(2).width = 20;
    worksheet.getColumn(7).width = 30;
    worksheet.getColumn(8).width = 30;
    // ++++++++++++Style cho các hàng dữ liệu++++++++++++ 
    worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
        var datastartrow = rowpos;
        var rowindex = rowNumber + datastartrow;
        const rowlength = datastartrow + SQL_Excel.length
        if (rowindex >= rowlength + 1) { rowindex = rowlength + 1 }
        const insideColumns = ['A', 'B', 'C', 'D', 'E', 'F']
        // Tạo border 
        insideColumns.forEach((v) => {
            // Border 
            worksheet.getCell(`${v}${rowindex}`).border = {
                top: { style: 'thin' },
                bottom: { style: 'thin' },
                left: { style: 'thin' },
                right: { style: 'thin' }
            },
                // Alignment 
                worksheet.getCell(`${v}${rowindex}`).alignment = { horizontal: 'center', vertical: 'middle', wrapText: true }
        })
    })
    // =====================THẾT KẾ FOOTER===================== 
    worksheet.getCell(`F${totalNumberOfRows + 2}`).value = 'Ngày …………tháng ……………năm 20………';
    worksheet.getCell(`F${totalNumberOfRows + 2}`).style = { font: { bold: true, italic: false }, alignment: { horizontal: 'right', vertical: 'middle', wrapText: false } };
    worksheet.getCell(`B${totalNumberOfRows + 3}`).value = 'Giám đốc';
    worksheet.getCell(`B${totalNumberOfRows + 4}`).value = '(Ký, ghi rõ họ tên)';
    worksheet.getCell(`B${totalNumberOfRows + 3}`).style = { font: { bold: true, italic: false }, alignment: { horizontal: 'center', vertical: 'bottom', wrapText: false } };
    worksheet.getCell(`B${totalNumberOfRows + 4}`).style = { font: { bold: false, italic: true }, alignment: { horizontal: 'center', vertical: 'top', wrapText: false } };
    worksheet.getCell(`D${totalNumberOfRows + 3}`).value = 'Trưởng ca';
    worksheet.getCell(`D${totalNumberOfRows + 4}`).value = '(Ký, ghi rõ họ tên)';
    worksheet.getCell(`D${totalNumberOfRows + 3}`).style = { font: { bold: true, italic: false }, alignment: { horizontal: 'center', vertical: 'bottom', wrapText: false } };
    worksheet.getCell(`D${totalNumberOfRows + 4}`).style = { font: { bold: false, italic: true }, alignment: { horizontal: 'center', vertical: 'top', wrapText: false } };
    worksheet.getCell(`F${totalNumberOfRows + 3}`).value = 'Người in biểu';
    worksheet.getCell(`F${totalNumberOfRows + 4}`).value = '(Ký, ghi rõ họ tên)';
    worksheet.getCell(`F${totalNumberOfRows + 3}`).style = { font: { bold: true, italic: false }, alignment: { horizontal: 'center', vertical: 'bottom', wrapText: false } };
    worksheet.getCell(`F${totalNumberOfRows + 4}`).style = { font: { bold: false, italic: true }, alignment: { horizontal: 'center', vertical: 'top', wrapText: false } };
    // =====================THỰC HIỆN XUẤT DỮ LIỆU EXCEL===================== 
    // Export Link 
    var currentTime = year + "_" + month + "_" + date + "_" + hours + "h" + minutes + "m" + seconds + "s";
    var saveasDirect = "Report/Report_" + currentTime + ".xlsx";
    SaveAslink = saveasDirect; // Send to client 
    var booknameLink = "public/" + saveasDirect;
    var Bookname = "Report_" + currentTime + ".xlsx";
    // Write book name 
    workbook.xlsx.writeFile(booknameLink)
    // Return 
    return [SaveAslink, Bookname]
} // Đóng fn_excelExport  

// =====================TRUYỀN NHẬN DỮ LIỆU VỚI TRÌNH DUYỆT===================== 
// Truyền nhận dữ liệu với trình duyệt 
io.on("connection", function (socket) {
    socket.on("msg_Excel_Report", function (data) {
        const [SaveAslink1, Bookname] = fn_excelExport();
        var data = [SaveAslink1, Bookname];
        socket.emit('send_Excel_Report', data);
    });
});




// API Token và Chat ID của bạn
const API_TOKEN = '7263350126:AAHYRZeQbedJuCoA4A2Us9vKzRqavJVfsJo'; // Thay YOUR_API_TOKEN bằng token thực tế của bot Telegram
const CHAT_ID = '-1002353088088'; // Thay YOUR_CHAT_ID bằng chat ID thực tế

// Ngưỡng cảnh báo
const threshold = 20;
let lastMessageTime = 0; // Thời gian gửi tin nhắn cuối cùng
let wasStable = false; // Biến để theo dõi trạng thái ổn định trước đó

// Hàm gửi tin nhắn tới Telegram
async function sendTelegramMessage(message) {
    const TELEGRAM_URL = `https://api.telegram.org/bot${API_TOKEN}/sendMessage`;
    try {
        await axios.post(TELEGRAM_URL, {
            chat_id: CHAT_ID,
            text: message,
        });
        console.log("Tin nhắn đã được gửi tới Telegram.");
    } catch (error) {
        console.error("Lỗi gửi tin nhắn:", error);
    }
}

// Đọc dữ liệu
var tagArr = [];
function fn_tagRead() {
    iotGateway.read(TagList).then((data) => {
        var lodash = require('lodash');
        tagArr = lodash.map(data, (item) => item.v);
        console.log(tagArr);
        checkThresholds(); // Kiểm tra ngưỡng sau khi đọc dữ liệu
    });
}

// Kiểm tra ngưỡng và gửi cảnh báo nếu cần
function checkThresholds() {
    const Act_CB_level = tagArr[76];
    const Act_CB_humidity = tagArr[77];
    const Act_CB_pressure = tagArr[78];
    const btt_V1_Close = tagArr[4];
    const btt_V2_Close = tagArr[6];
    const currentTime = Date.now();

    // Kiểm tra các giá trị cảm biến chính
    if (Act_CB_level > threshold || Act_CB_humidity > threshold || Act_CB_pressure > threshold) {
        let message = 'Cảnh báo: '; // Bắt đầu thông điệp cảnh báo

        // Thêm thông tin vào thông điệp nếu có giá trị vượt ngưỡng
        if (Act_CB_level > threshold) {
            message += `Mức độ vượt ngưỡng: ${Act_CB_level}. `;
        }
        if (Act_CB_humidity > threshold) {
            message += `Độ ẩm vượt ngưỡng: ${Act_CB_humidity}. `;
        }
        if (Act_CB_pressure > threshold) {
            message += `Áp suất vượt ngưỡng: ${Act_CB_pressure}. `;
        }

        // Gửi tin nhắn nếu đã hơn 30 giây kể từ lần gửi trước
        if (currentTime - lastMessageTime > 30000) {
            sendTelegramMessage(message);
            lastMessageTime = currentTime; // Cập nhật thời gian gửi tin nhắn
            wasStable = false; // Đặt lại trạng thái ổn định
        }
    } else {
        // Nếu tất cả các giá trị đều dưới ngưỡng và hệ thống trước đó không ổn định
        if (!wasStable) {
            sendTelegramMessage("Hệ thống ổn định: Tất cả các giá trị đều dưới ngưỡng.");
            wasStable = true; // Đánh dấu hệ thống đã ổn định
        }
    }
 
if (btt_V1_Close) {
    sendTelegramMessage("Cảnh báo: Relay 1 đã tác động.");
    fn_Data_Write(btt_V1_Close, false);
}

if (btt_V2_Close) {
    sendTelegramMessage("Cảnh báo: Relay 2 đã tác động.");
    fn_Data_Write(btt_V2_Close, false);
}
}
// let lastBtt_V1_CloseState = false;
// let lastBtt_V2_CloseState = false;

// if (btt_V1_Close && !lastBtt_V1_CloseState) {
//     sendTelegramMessage("Cảnh báo: Relay 1 đã tác động.");
//     fn_Data_Write(btt_V1_Close, false);
//     lastBtt_V1_CloseState = true;
// } else if (!btt_V1_Close) {
//     lastBtt_V1_CloseState = false;
// }

// if (btt_V2_Close && !lastBtt_V2_CloseState) {
//     sendTelegramMessage("Cảnh báo: Relay 2 đã tác động.");
//     fn_Data_Write(btt_V2_Close, false);
//     lastBtt_V2_CloseState = true;
// } else if (!btt_V2_Close) {
//     lastBtt_V2_CloseState = false;
// }
// }
