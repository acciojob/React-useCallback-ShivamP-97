import React, { useState, useCallback } from "react";
import SkillList from "./ski";

const Comp = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);

  // useCallback for adding skill
  const addSkill = useCallback(() => {
    const trimmedSkill = skill.trim();

    if (
      trimmedSkill !== "" &&
      !skills.includes(trimmedSkill)
    ) {
      setSkills((prev) => [...prev, trimmedSkill]);
    }
    setSkill("");
  }, [skill, skills]);

  // useCallback for deleting skill
  const deleteSkill = useCallback((skillToDelete) => {
    setSkills((prev) =>
      prev.filter((s) => s !== skillToDelete)
    );
  }, []);

  return (
    <div>
      <h1 id="heading">useCallback Hook</h1>

      <input
        id="skill-input"
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>

      <SkillList skills={skills} onDelete={deleteSkill} />
    </div>
  );
};

export default Comp;