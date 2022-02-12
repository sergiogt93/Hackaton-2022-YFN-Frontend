export default function useSkill() {
    const nameSkillsUsers = ["HTML5", "CSS3"];
    const allSkills = JSON.parse(localStorage.getItem("skillsUser")) || [];
    const skillsUser = [];

    nameSkillsUsers.forEach(nameSkillUser => {
        const skill = allSkills.find(element => element.name === nameSkillUser);
        skillsUser.push(skill);
    });

    return allSkills;
}