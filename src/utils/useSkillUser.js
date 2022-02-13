export default function useSkill() {
    const allSkills = JSON.parse(localStorage.getItem("skillsUser")) || [];
    const skillsUser = [];
    const nameSkillsUsers = allSkills.map(element => element.name);

    nameSkillsUsers.forEach(nameSkillUser => {
        const skill = allSkills.find(element => element.name === nameSkillUser);
        skillsUser.push(skill);
    });

    return allSkills;
}