//dummy to feed the front end
const preferences = {
  twoFA: true,
  sendEmailAlerts: true,
  allowAnyOneViewEmail: false,
  showLocalTime: false,
  //other extra preferences.
};
const Todo = {
  name: "Todo Plugin",
  description: "Shows todo items",
  plugin_id: "DGGF-DSDFFDDF-EDFDFDF",
  organisation_id: "Ffddffd",
  user_id: "232",
  group_name: "Todo",
  show_group: false,

  joined_rooms: [
    {
      title: "general",
      id: "DFGHH-EDDDDS-DFDDF",
      unread: 2,
      members: 23,
      icon: "shovel",
      action: true,
    },
    {
      title: "announcements",
      id: "DFGfH-EDDDDS-DFDDF",
      unread: 0,
      badge_type: "info",
      members: 132,
      parent_id: "DFGHH-EDDDDS-DFDDF",
      icon: "spear",
      action: true,
    },
  ],
  public_rooms: [
    {
      title: "jokes",
      id: "DFGfH-EDDDDS-DFDDF",
      unread: 342,
      members: 32,
      icon: "cdn.cloudflare.com/445345453345/hello.jpeg",
      action: true,
    },
  ],
};
const organization = {
  name: "HNG i8",
  creatorId: "ee269045-7aa5-4720-be65-da8aeff395e8",
  ID: "whateverString",
  CreatorEmail: "markessien@gmailcom",
  Plugins: [Todo],
  Admins: [],
  Settings: { allowUserCreateChannels: true },
  LogoURL: "zuri.chat.logo.png",
  WorkspaceURL: "zuri.chat/DGGEDII",
  CreatedAt: Date.now(),
  UpdatedAt: Date.now(),
};

module.exports.user = {
  displayName: "Mark",
  fullName: "Mark Essien",
  userID: "ee269045-7aa5-4720-be65-da8aeff395e7", //gotten from uuid4
  organizationID: { zuri434321: organization },
  profilePictureUrl: "zuri.chat.image.png",
  preference: preferences,
};
