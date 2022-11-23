//a class for setting up the data from dataloader
class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

//the getData function extracts the data from the dataLoader.js file
function getData(){
    var loadedData = loadData();
    return loadedData;
}

//function to setup data in the table
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function updateDisplay(){
    console.log("updateDisplay() started");
    //record and display time data
    theTime = new Date();

    //new if then statement style cond ? ifTrue : ifFalse
    console.log(theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
    //update the on screen time
    document.getElementById("clockTime").innerHTML = (theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));

    //update table
    var timeRead = data[index].time_seconds;

    if (timeRead >= 10){
        document.getElementById("dataTable").rows["seconds"].innerHTML =
            dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("dataTable").rows["latitude"].innerHTML =
            dataRow("Latitude", data[index].latitude, "&#176");
        document.getElementById("dataTable").rows["longitude"].innerHTML =
            dataRow("Longitude", data[index].longitude, "&#176");
        document.getElementById("dataTable").rows["gps_altitude"].innerHTML =
            dataRow("GPS Altitude", data[index].gps_altitude, "meters");
        document.getElementById("dataTable").rows["bmp_altitude"].innerHTML =
            dataRow("BMP Sensor Altitude", data[index].bmpSensor_altitude, "meters");
        document.getElementById("dataTable").rows["bmp_pressure"].innerHTML =
            dataRow("BMP Sensor Pressure", data[index].bmpSensor_pressure, "atm");
        document.getElementById("dataTable").rows["bmp_temperature"].innerHTML =
            dataRow("BMP Sensor Temperature", data[index].bmpSensor_temp, "&#176C");
        document.getElementById("dataTable").rows["dig_temperature"].innerHTML =
            dataRow("Digital Sensor Temperature", data[index].digSensor_temp, "&#176C");
        document.getElementById("dataTable").rows["css_temperature"].innerHTML =
            dataRow("CSS Sensor Temperature", data[index].cssSensor_temp, "&#176C");
        document.getElementById("dataTable").rows["css_eCO2"].innerHTML =
            dataRow("CSS Sensor eCO2", data[index].cssSensor_eCO2, "ppm");
        document.getElementById("dataTable").rows["css_TVOC"].innerHTML =
            dataRow("CSS Sensor TVOC", data[index].cssSensor_TVOC, "ppm");
        document.getElementById("dataTable").rows["UV"].innerHTML =
            dataRow("UV", data[index].UV, "");
        document.getElementById("dataTable").rows["accelX"].innerHTML =
            dataRow("Accel X", data[index].accelX, "m/sec^2");
        document.getElementById("dataTable").rows["accelY"].innerHTML =
            dataRow("Accel Y", data[index].accelY, "m/sec^2");
        document.getElementById("dataTable").rows["accelZ"].innerHTML =
            dataRow("Accel Z", data[index].accelZ, "m/sec^2");
        document.getElementById("dataTable").rows["magneticX"].innerHTML =
            dataRow("Magnetic X", data[index].magneticX, "T");
        document.getElementById("dataTable").rows["magneticY"].innerHTML =
            dataRow("Magnetic Y", data[index].magneticY, "T");
        document.getElementById("dataTable").rows["magneticZ"].innerHTML =
            dataRow("Magnetic Z", data[index].magneticZ, "T");
        document.getElementById("dataTable").rows["gyroX"].innerHTML =
            dataRow("Gyro X", data[index].gyroX, "&#176/sec");
        document.getElementById("dataTable").rows["gyroY"].innerHTML =
            dataRow("Gyro Y", data[index].gyroY, "&#176/sec");
        document.getElementById("dataTable").rows["gyroZ"].innerHTML =
            dataRow("Gyro Z", data[index].gyroZ, "&#176/sec");
    }

    if(index < 500){
        index++;
    } else{
        index = 0;
    }
}