export const UPDATE_HEADER_TITLE = "UPDATE_HEADER_TITLE";
export const UPDATE_CURRENT_VIEW = "UPDATE_CURRENT_VIEW";

export function updateHeaderTitle(headerTitle) {
  return {
    type: UPDATE_HEADER_TITLE,
    headerTitle
  };
}

export function updateCurrentView(currentView) {
  return {
    type: UPDATE_CURRENT_VIEW,
    currentView
  };
}
