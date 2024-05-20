export class VisualAdaptation {
  constructor(screenWidth, sideMenuWidth) {
    this.screenWidth = screenWidth;
    this.sideMenuWidth = sideMenuWidth;
  }
  whichDeviceView = () => {
    return this.screenWidth > 768 ? "deskView" : "mobileView";
  };
  isShowedConversation = () => {
    return this.screenWidth - this.sideMenuWidth > 768;
  };
  getConversationWidth = () => {
    return this.screenWidth - this.sideMenuWidth;
  };
}
