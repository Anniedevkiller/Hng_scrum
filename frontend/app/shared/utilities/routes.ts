export const AppRoutes = {
  Home: "/",
  Projects: "/projects",
  Philosophy: "/our_philosophy",
  Donate: "/donate",
  GetInvolved: "/get_involved",
  About: "/about",
  Transparency: "/transparency",
} as const;

export const AboutRoutes = {
  History: `${AppRoutes.About}/#history`,
  Goals: `${AppRoutes.About}/#goals`,
  Partners: `${AppRoutes.About}/#partners`,
  Organization: `${AppRoutes.About}/#the_board`,
} as const;

export const ProjectRoutes = {
  Accomplished: `${AppRoutes.Projects}/#accomplished`,
  Inprogress: `${AppRoutes.Projects}/#in-progress`,
  Building: `${AppRoutes.Projects}/#building-construction`,
  Continues: `${AppRoutes.Projects}/#continues-projects`,
} as const;

export const GetInvolvedRoutes = {
  BecomeMember: `${AppRoutes.GetInvolved}/#become-member`,
  Volunteer: `${AppRoutes.GetInvolved}/#volunteer`,
  SpreadWord: `${AppRoutes.GetInvolved}/#spread-the-word`,
} as const;
