document.getElementById("full-name").innerHTML = "Mmeli Mbatha";
document.getElementById("position").innerHTML = "FullStack Software Developer";
document.getElementById("dev").innerHTML = "Mmeli Mbatha";


$(document).ready(function(){
    var image = '<div class="pic"><img src="./img/img-4.jpeg" alt="5 Terre" style="width:100%; height: 480px;"><div class="container" style="background-color:#95ab93; font-family:cursive;"><p align="center">Full Stack Developer</p></div></div>';
    //$("#title").html("Mmeli Mbatha - Software Developer ");
    $("#data").html(image);
    $(".ref").click(function () {
        var link = $(this).attr("data-id");
        console.log(link);
        
        //work experience
        var work = "<table id='cv'>";
        work +="<thead>";
        work += "<tr>";
        work += "<th>Organization";
        work += "<th>Date</th>";
        work += "<th>Position</th>";
        work += "</tr>";
        work += "</thead>";
        work += "<tbody>";
        work += "<tr>";
        work += "<td>Burbark Properties</td>";
        work += "<td>2014-01 - 2017-04</td>";
        work += "<td>Office Manager</td>";
        work += "</tr>";
        work += "<tr>";
        work += "<td>Geekulcha</td>";
        work += "<td>2018-10 - 2019-03</td>";
        work += "<td>Software Developer</td>";
        work += "</tr>";
        work += "</tbody>";
        work += "</table>";

        //Personal Details
        var personal_details = "<table id='cv'>";
        personal_details +="<thead>";
        personal_details += "<tr>";
        personal_details += "<th>Personal Details";
        personal_details += "<th></th>";
        personal_details += "</tr>";
        personal_details += "</thead>";
        personal_details += "<tbody>";
        personal_details += "<tr>";
        personal_details += "<td>Surname</td>";
        personal_details += "<td>Mbatha</td>";
        personal_details += "</tr>";
        personal_details += "<tr>";
        personal_details += "<td>Name</td>";
        personal_details += "<td>Mmeli</td>";
        personal_details += "</tr>";
        personal_details += "<tr>";
        personal_details += "<td>Date of Birth</td>";
        personal_details += "<td>15 April 1990</td>";
        personal_details += "</tr>";
        personal_details += "<tr>";
        personal_details += "<td>Nationality</td>";
        personal_details += "<td>South African</td>";
        personal_details += "</tr>";
        personal_details += "<tr>";
        personal_details += "<td>ID Number</td>";
        personal_details += "<td>9004155918082</td>";
        personal_details += "</tr>";
        personal_details += "<tr>";
        personal_details += "<td>Race</td>";
        personal_details += "<td>African</td>";
        personal_details += "</tr>";
        personal_details += "<tr>";
        personal_details += "<td>Gender</td>";
        personal_details += "<td>Male</td>";
        personal_details += "</tr>";
        personal_details += "<tr>";
        personal_details += "<td>Contact Number</td>";
        personal_details += "<td>0760837038</td>";
        personal_details += "</tr>";
        personal_details += "<tr>";
        personal_details += "<td>Contact E-mail</td>";
        personal_details += "<td>tunechimbatha@gmail.com</td>";
        personal_details += "</tr>";
        personal_details += "</tbody>";
        personal_details += "</table>";
        //Education
        var education = "<table id='cv'>";
        education +="<thead>";
        education += "<tr>";
        education += "<th>Institution";
        education += "<th>Programme</th>";
        education += "<th>Duration</th>";
        education += "</tr>";
        education += "</thead>";
        education += "<tbody>";
        education += "<tr>";
        education += "<td>Antioch Computer College</td>";
        education += "<td>End User Computing</td>";
        education += "<td>2009-01 - 2017-06</td>";
        education += "</tr>";
        education += "<tr>";
        education += "<td>University Of South Africa</td>";
        education += "<td>Diploma in Information Technology </td>";
        education += "<td>2012-01 - date</td>";
        education += "</tr>";
        education += "<tr>";
        education += "<td>CTU Training Solution</td>";
        education += "<td>Information Technology in System Development</td>";
        education += "<td>2018-04 - 2019-04</td>";
        education += "</tr>";
        education += "<tr>";
        education += "<td>ITTHYNK Bootcamp</td>";
        education += "<td>Microsoft Certificate</td>";
        education += "<td>2020-11 - date</td>";
        education += "</tr>";
        education += "</tbody>";
        education += "</table>";

        //Projects
        var projects = "<table id='cv'>";
        projects +="<thead>";
        projects += "<tr>";
        projects += "<th>Project Name";
        projects += "<th>Technology</th>";
        projects += "<th>Duration</th>";
        projects += "</tr>";
        projects += "</thead>";
        projects += "<tbody>";
        projects += "<tr>";
        projects += "<td>Doctor's Appointment System</td>";
        projects += "<td>PHP, JS, REST APIs</td>";
        projects += "<td>4 Weeks</td>";
        projects += "</tr>";
        projects += "<tr>";
        projects += "<td>Doctor's Supplement Ordering System</td>";
        projects += "<td>PHP, JS, REST APIs</td>";
        projects += "<td>4 Weeks</td>";
        projects += "</tr>";
        projects += "<tr>";
        projects += "<td>Kasi Room Finder App</td>";
        projects += "<td>Laravel</td>";
        projects += "<td>3 Weeks</td>";
        projects += "</tr>";
        projects += "<tr>";
        projects += "<td>Office Management App</td>";
        projects += "<td>IONIC, APIs </td>";
        projects += "<td>5 Weeks</td>";
        projects += "</tr>";
        projects += "<tr>";
        projects += "<td>Todo App</td>";
        projects += "<td>Angular 7</td>";
        projects += "<td>1 Week</td>";
        projects += "</tr>";
        projects += "</tbody>";
        projects += "</table>";

        //references
        var references = "<table id='cv'>";
        references +="<thead>";
        references += "<tr>";
        references += "<th>Name</th>";
        references += "<th>Organization</th>";
        references += "<th>Contact</th>";
        references += "<th>Designation</th>";
        references += "</tr>";
        references += "</thead>";
        references += "<tbody>";
        references += "<tr>";
        references += "<td>Brian Burns</td>";
        references += "<td>Burbark Properties</td>";
        references += "<td>082-782-9881</td>";
        references += "<td>Director</td>";
        references += "</tr>";
        references += "<tr>";
        references += "<td>Tiyane Nghonyama</td>";
        references += "<td>Geekulcha</td>";
        references += "<td>079-068-9022</td>";
        references += "<td>CEO</td>";
        references += "</tr>";
        references += "<tr>";
        references += "<td>Ray Ledwaba</td>";
        references += "<td>ITTHYNK Bootcamp</td>";
        references += "<td>083-376-9383</td>";
        references += "<td>CEO</td>";
        references += "</tr>";
        references += "</tbody>";
        references += "</table>";
        
        
        if(link == "education"){
            $("#title").html("Mmeli Mbatha - Educational Background ");
            $("#data").html(education);
        }else if(link == "work"){
            $("#title").html("Mmeli Mbatha - Work Experience");
            $("#data").html(work);
        }else if(link == "projects"){
            $("#title").html("Mmeli Mbatha - Projects");
            $("#data").html(projects);
        }else if(link == "references"){
            $("#title").html("Mmeli Mbatha - References");
            $("#data").html(references);
        }else if(link = "personal"){
            $("#title").html("Mmeli Mbatha - Software Developer ");
            $("#data").html(personal_details);
        }

    });
    // $.get('index.html', function(res){
    //     $('.container').html('<img src="./img/img-2.jpg" style="width:100%;">');
    // });
});