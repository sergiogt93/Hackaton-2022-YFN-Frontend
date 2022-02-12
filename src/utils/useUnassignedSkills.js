import allSkills from "../resources/skills.json";

export default function unassignedSkills(skillsUsers) {
    let unassignedSkills = allSkills;

    skillsUsers.forEach(nameSkillUser => {
        unassignedSkills = unassignedSkills.filter(e => e.name !== nameSkillUser.name);
    });

    return unassignedSkills;
}
