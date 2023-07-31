function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");

    member.style.display = "block";
    skills.style.display = "none";
    memberBtn.style.backgroundColor = "rgb(0, 0, 0)";
    memberBtn.style.color = "rgb(255, 255, 255)";
    skillsBtn.style.backgroundColor = "rgb(255, 255, 255)";
    skillsBtn.style.color = "rgb(0, 0, 0)";
}