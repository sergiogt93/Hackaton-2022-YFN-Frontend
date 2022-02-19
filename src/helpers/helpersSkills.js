import allSkills from "../resources/skills.json";

//Return a new array with the skills not yet chosen
export function unassignedSkills(skillsUsers) {
    let unassignedSkills = allSkills;

    skillsUsers.forEach(nameSkillUser => {
        unassignedSkills = unassignedSkills.filter(e => e.name !== nameSkillUser.name);
    });

    return unassignedSkills;
}

//Return in a new array the skills that a user has
export function userSkills() {
    const allSkills = JSON.parse(localStorage.getItem("skillsUser")) || [];
    const skillsUser = [];
    const nameSkillsUsers = allSkills.map(element => element.name);

    nameSkillsUsers.forEach(nameSkillUser => {
        const skill = allSkills.find(element => element.name === nameSkillUser);
        skillsUser.push(skill);
    });

    return allSkills;
}