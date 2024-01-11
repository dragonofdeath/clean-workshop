function clearPage(page) {
  if (deletePage(page) == E_OK) {
    if (registry.deleteReference(page.name) == E_OK) {
      if (configKeys.deleteKey(page.name.makeKey()) == E_OK) {
        logger.log("page deleted");
      } else {
        logger.log("configKey not deleted");
      }
    } else {
      logger.log("deleteReference from registry failed");
    }
  } else {
    logger.log("delete failed");
    return E_ERROR;
  }
}

function clearPageRefactored(page) {
  try {
    deletePage(page);
    registry.deleteReference(page.name);
    configKeys.deleteKey(page.name.makeKey());
  } catch (e) {
    logger.log(e.getMessage());
  }
}
