export function updateIfNotExists<T extends Record<string, any>>(
  targetObj: T,
  srcObject: T
): T {
  if (targetObj === undefined || targetObj === null) {
    return srcObject;
  }

  if (Array.isArray(srcObject) && Array.isArray(targetObj)) {
    return srcObject.map((item, index) => {
      return updateIfNotExists(targetObj[index], item);
    }) as unknown as T;
  }

  if (
    typeof srcObject === "object" &&
    srcObject !== null &&
    typeof targetObj === "object" &&
    targetObj !== null
  ) {
    for (const key in srcObject) {
      if (srcObject.hasOwnProperty(key)) {
        if (targetObj[key] === undefined) {
          targetObj[key] = srcObject[key];
        } else {
          targetObj[key] = updateIfNotExists(targetObj[key], srcObject[key]);
        }
      }
    }
  }

  return targetObj;
}
