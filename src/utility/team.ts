export const teamMemberPic = (name: string) => {
  switch (name) {
    case "Odysseus": {
      return require("../assets/team/ody.webp");
    }
    case "Tease": {
      return require("../assets/team/tease.webp");
    }
    case "Cuzzy": {
      return require("../assets/team/cuzzy.webp");
    }
    case "DarthWhite": {
      return require("../assets/team/darthwhite.webp");
    }
    case "$CYBR_mdking": {
      return require("../assets/team/mdking.webp");
    }
    case "Villspor": {
      return require("../assets/team/villspor.webp");
    }
    case "Plums": {
      return require("../assets/team/plums.webp");
    }
    case "Karim": {
      return require("../assets/team/karim.webp");
    }
    case "DanielD": {
      return require("../assets/team/danield.webp");
    }
    case "KingQuokka": {
      return require("../assets/team/quokka.webp");
    }
    case "WNX_PhatedOne": {
      return require("../assets/team/phate.webp");
    }
    case "FL I LG": {
      return require("../assets/team/gas.webp");
    }
    case "Marzopiens": {
      return require("../assets/team/marzo.webp");
    }
    case "Ts'ao": {
      return require("../assets/team/tseo.webp");
    }
    case "Stevenon": {
      return require("../assets/team/stevanon.webp");
    }
    case "Oni": {
      return require("../assets/team/oni.webp");
    }
    default: {
      return require("../assets/team/ody.webp");
    }
  }
};

export const roleBanner = (role: string): string => {
  switch (role) {
    case "Reason": {
      return "reason";
    }
    case "Cybr Developer": {
      return "cyber_dev";
    }
    case "Founder": {
      return "founder";
    }
    case "Admin": {
      return "admin";
    }
    case "Architect": {
      return "architect";
    }
    case "Coding Lead": {
      return "coding_lead";
    }
    case "Enforcer": {
      return "enforcer";
    }
    case "Pillar Lead": {
      return "pillar_lead";
    }
    case "Community Lead": {
      return "community_lead";
    }
    case "Super-Mod": {
      return "super_mod";
    }
    case "Cyberian Scout": {
      return "cyberian_scout";
    }
    case "Community Recruiter": {
      return "community_scout";
    }
    case "HR & Operations Lead": {
      return "hr_op_lead";
    }
    case "Information Auditor": {
      return "info_auditor";
    }
    case "Talent Scout": {
      return "talent_scout";
    }
    case "Public Relations": {
      return "public_relations";
    }
    case "Development & Infrastructure Lead": {
      return "dev_inf_lead";
    }
    case "IT Lead": {
      return "it_lead";
    }
    case "Run Developer": {
      return "run_dev";
    }
    case "Community Team": {
      return "com_team";
    }
    case "Community Lead Developer": {
      return "com_lead_dev";
    }
    case "Website Developer": {
      return "web_dev";
    }
    case "Development Team": {
      return "dev_team";
    }
    case "Website Lead Developer": {
      return "web_lead_dev";
    }
    case "Arabic Ambassador": {
      return "arabic_ambassador";
    }
    case "Run Lead Developer": {
      return "run_dev";
    }
    case "French Ambassador": {
      return "arabic_ambassador";
    }
    case "Marketing Team": {
      return "marketing_team";
    }
    case "Mod": {
      return "mod";
    }
    case "External Relations": {
      return "external_rel";
    }
    case "Chinese Ambassador": {
      return "chinese_ambassador";
    }
    // case "Ambassador Lead": {
    //   return require("../assets/team/oni.webp");
    // }
    // case "Dutch Ambassador": {
    //   return require("../assets/team/oni.webp");
    // }
    // case "Spanish Ambassador": {
    //   return require("../assets/team/oni.webp");
    // }
    // case "Spanish Team": {
    //   return require("../assets/team/oni.webp");
    // }
    // case "Chinese Team": {
    //   return require("../assets/team/oni.webp");
    // }
    // case "Italian Ambassador": {
    //   return require("../assets/team/oni.webp");
    // }
    // case "Italian Team": {
    //   return require("../assets/team/oni.webp");
    // }
    default: {
      return "chinese_ambassador";
    }
  }
};
