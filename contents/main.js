function layout_to(horz, vert) {
  var area = workspace.clientArea(KWin.MaximizeArea, workspace.activeClient);
  var rc = workspace.activeClient.geometry;

  rc.x = area.x + area.width / 3 * horz;
  rc.width = area.width / 3;

  if (vert === undefined || vert === null) {
    rc.y = 0;
    rc.height = area.height;
  } else {
    rc.y = area.height / 2 * vert;
    rc.height = area.height / 2;
  }
  workspace.activeClient.setMaximize(true, true);
  workspace.activeClient.geometry = rc;
}

registerShortcut("Layout Left", "Layout current window to left", "Meta+Num+4", function() { layout_to(0); });
registerShortcut("Layout Center", "Layout current window to center", "Meta+Num+5", function() { layout_to(1); });
registerShortcut("Layout Right", "Layout current window to right", "Meta+Num+6", function() { layout_to(2); });

registerShortcut("Layout Top Left", "Layout current window to top left", "Meta+Num+7", function() { layout_to(0, 0); });
registerShortcut("Layout Top Center", "Layout current window to top center", "Meta+Num+8", function() { layout_to(1, 0); });
registerShortcut("Layout Top Right", "Layout current window to top right", "Meta+Num+9", function() { layout_to(2, 0); });

registerShortcut("Layout Bottom Left", "Layout current window to bottom left", "Meta+Num+1", function() { layout_to(0, 1); });
registerShortcut("Layout Bottom Center", "Layout current window to bottom center", "Meta+Num+2", function() { layout_to(1, 1); });
registerShortcut("Layout Bottom Right", "Layout current window to bottom right", "Meta+Num+3", function() { layout_to(2, 1); });
