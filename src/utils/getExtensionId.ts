export function getExtensionId() {
  const extensionId =
    chrome.runtime.getURL('')?.match(/chrome-extension:\/\/([^/]+)\//)[1] ?? ''
  return extensionId
}
